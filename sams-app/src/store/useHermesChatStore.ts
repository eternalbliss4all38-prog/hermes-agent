import { create } from "zustand";
import { HermesGateway, type GatewayEvent } from "@/lib/hermes-gateway";
import { getSessionMessages } from "@/lib/hermes-rest";

export interface ToolCall {
  id: string;
  name: string;
  status: "running" | "complete";
  args?: Record<string, unknown>;
  result?: string;
  error?: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  tools: ToolCall[];
  streaming: boolean;
  error?: string;
  /** Set on a user message that is waiting for the socket to come back. */
  queued?: boolean;
}

export interface PendingImage {
  name: string;
  path: string;
}

/**
 * A question the agent is BLOCKING on (the `clarify` tool). The gateway emits
 * `clarify.request` with a request_id and waits; the only valid way to answer
 * is the `clarify.respond` RPC with that request_id. Sending a normal prompt
 * while this is open does NOT answer it (it gets queued as a next turn), which
 * is why a typed reply used to vanish. Kept in the store -- and persisted to
 * localStorage -- so a socket drop mid-question cannot lose the card.
 */
export interface PendingClarify {
  requestId: string;
  question: string;
  choices: string[] | null;
  multiSelect: boolean;
  expired: boolean;
}

/**
 * A live permission request from the agent (a dangerous command or guarded
 * action). Unlike clarify, the gateway does NOT send a request_id — the answer
 * is resolved FIFO per session by session_key, so the card the user acts on must
 * be the OLDEST pending one. Emitted as `approval.request`; answered via the
 * `approval.respond` RPC with {session_id, choice, all}.
 */
export interface PendingApproval {
  id: string;
  command: string;
  description: string;
  /** Subset of ["once","session","always","deny"] the server offered. */
  choices: string[];
  receivedAt: number;
}

interface HermesChatState {
  status: "idle" | "connecting" | "connected" | "error";
  error: string | null;
  /** Live runtime id (8-hex) from the gateway. Used ONLY for RPC calls such as
   * prompt.submit / image.attach_bytes. NOT resumable and NOT a DB key. */
  sessionId: string | null;
  /** Persisted session key (e.g. 20261016_101710_90e6f5) — the DB row id that
   * session.resume actually accepts. This is what must be saved to localStorage
   * and restored on reload; storing sessionId here is why chats were lost. */
  storedSessionId: string | null;
  /** Identifies which chat this store is currently connected to: the stored
   * session id being resumed, or a unique token per fresh "new chat" so two
   * separate "start a new chat" navigations don't get treated as the same
   * target. Used by connect() to tell "already on this chat" apart from
   * "need to tear down and switch to a different one". */
  activeKey: string | null;
  messages: ChatMessage[];
  pendingImages: PendingImage[];
  /** Open question the agent is blocked on, if any. */
  clarify: PendingClarify | null;
  /** Permission requests the agent is blocked on, oldest first (FIFO). */
  approvals: PendingApproval[];
  connect: (resumeStoredSessionId?: string, opts?: { forceNew?: boolean }) => Promise<void>;
  /** iOS/Android silently kill a backgrounded tab's socket (usually half-open,
   *  readyState still OPEN). Call on visibility/online/focus/pageshow to probe
   *  and, if dead, resume the same chat immediately instead of waiting out the
   *  reconnect backoff. */
  wake: () => Promise<void>;
  sendMessage: (text: string) => Promise<void>;
  respondToClarify: (answer: string | string[]) => Promise<void>;
  dismissClarify: () => void;
  respondToApproval: (id: string, choice: string, all?: boolean) => Promise<void>;
  attachImage: (file: File) => Promise<void>;
}

let gateway: HermesGateway | null = null;
// Bumped on every connect() call; an in-flight call whose epoch no longer
// matches lost a race to a newer one (rapid session switching) and must not
// clobber the newer connection's state or event listeners.
let connectEpoch = 0;
let msgCounter = 0;
const nextMsgId = () => `m${++msgCounter}-${Date.now()}`;

// ── reconnect bookkeeping ─────────────────────────────────────────────
let reconnectTimer: ReturnType<typeof setTimeout> | null = null;
let reconnectAttempt = 0;
let heartbeatTimer: ReturnType<typeof setInterval> | null = null;
// A message the user typed while the socket was down, waiting to be flushed.
let outbox: string[] = [];
// An answer to a clarify question that could not be sent yet.
let pendingClarifyAnswer: string | null = null;

const LAST_SESSION_KEY = "sams_last_session";
const PENDING_CLARIFY_KEY = "sams_pending_clarify";
const PENDING_APPROVALS_KEY = "sams_pending_approvals";
// Approval decisions that could not be sent because the socket was down.
let approvalOutbox: Array<{ choice: string; all: boolean }> = [];

// A fresh-chat navigation must get a UNIQUE key every time, otherwise the
// "already on this chat" guard below swallows every "New chat" after the
// first one (the store sat on activeKey="__new__" and refused to move).
let newChatSeq = 0;
const NEW_CHAT_PREFIX = "__new__#";

function persistClarify(c: PendingClarify | null) {
  if (typeof window === "undefined") return;
  try {
    if (c) localStorage.setItem(PENDING_CLARIFY_KEY, JSON.stringify(c));
    else localStorage.removeItem(PENDING_CLARIFY_KEY);
  } catch {
    /* storage disabled — non-fatal */
  }
}

function readPersistedClarify(): PendingClarify | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(PENDING_CLARIFY_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PendingClarify;
    if (!parsed?.requestId) return null;
    return parsed;
  } catch {
    return null;
  }
}

function persistApprovals(list: PendingApproval[]) {
  if (typeof window === "undefined") return;
  try {
    if (list.length) localStorage.setItem(PENDING_APPROVALS_KEY, JSON.stringify(list));
    else localStorage.removeItem(PENDING_APPROVALS_KEY);
  } catch {
    /* storage disabled — non-fatal */
  }
}

function readPersistedApprovals(): PendingApproval[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(PENDING_APPROVALS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as PendingApproval[];
    return Array.isArray(parsed) ? parsed.filter((a) => a?.id) : [];
  } catch {
    return [];
  }
}

function stopHeartbeat() {
  if (heartbeatTimer) {
    clearInterval(heartbeatTimer);
    heartbeatTimer = null;
  }
}

/**
 * Keep the socket demonstrably alive. Idle WebSockets get silently suspended
 * (iOS Safari backgrounds/locks the tab; NAT and proxies drop quiet flows) and
 * a half-open link still reports readyState=OPEN — so a naive client sits there
 * looking "connected" while every send goes into a black hole. A probe every
 * 20s both prevents the idle drop and DETECTS the corpse within ~28s.
 */
function startHeartbeat(gw: HermesGateway, myEpoch: number) {
  stopHeartbeat();
  heartbeatTimer = setInterval(async () => {
    if (connectEpoch !== myEpoch) {
      stopHeartbeat();
      return;
    }
    if (!gw.isOpen()) return; // the close handler owns the reconnect path
    const alive = await gw.probe(8000);
    if (connectEpoch !== myEpoch) return;
    if (!alive) {
      gw.kill(); // fires close listeners -> scheduleReconnect
    }
  }, 20000);
}

function appendAssistantDelta(messages: ChatMessage[], text: string): ChatMessage[] {
  const next = [...messages];
  const last = next[next.length - 1];
  if (last && last.role === "assistant" && last.streaming) {
    next[next.length - 1] = { ...last, text: last.text + text };
  } else {
    next.push({ id: nextMsgId(), role: "assistant", text, tools: [], streaming: true });
  }
  return next;
}

export const useHermesChatStore = create<HermesChatState>((set, get) => {
  /** Reconnect to the SAME chat after a drop, with capped backoff. */
  function scheduleReconnect(storedId: string | null) {
    const myEpoch = connectEpoch;
    stopHeartbeat();
    if (reconnectTimer) return;
    reconnectAttempt += 1;
    const delay = Math.min(1500 * reconnectAttempt, 8000);
    set({
      status: "error",
      error: `Connection to Hermes lost — reconnecting (attempt ${reconnectAttempt})…`,
    });
    reconnectTimer = setTimeout(() => {
      reconnectTimer = null;
      if (connectEpoch !== myEpoch) return;
      void get().connect(storedId ?? undefined);
    }, delay);
  }

  function flushOutbox(gw: HermesGateway, liveId: string) {
    if (outbox.length === 0) return;
    const queued = outbox;
    outbox = [];
    for (const text of queued) {
      gw.call("prompt.submit", { session_id: liveId, text }).catch(() => {
        // Still couldn't get through — put it back for the next reconnect.
        outbox.push(text);
      });
    }
    set((s) => ({
      messages: s.messages.map((m) => (m.queued ? { ...m, queued: false } : m)),
    }));
  }

  function flushApprovalOutbox(gw: HermesGateway, liveId: string) {
    if (approvalOutbox.length === 0) return;
    const queued = approvalOutbox;
    approvalOutbox = [];
    for (const d of queued) {
      gw.call("approval.respond", { session_id: liveId, choice: d.choice, all: d.all }).catch(() => {
        approvalOutbox.push(d);
      });
    }
  }

  async function flushClarifyAnswer(gw: HermesGateway) {
    if (!pendingClarifyAnswer) return;
    const open = get().clarify;
    if (!open) {
      pendingClarifyAnswer = null;
      return;
    }
    try {
      await gw.call("clarify.respond", {
        request_id: open.requestId,
        answer: pendingClarifyAnswer,
      });
      pendingClarifyAnswer = null;
      set({ clarify: null, error: null });
      persistClarify(null);
    } catch {
      // keep it queued for the next reconnect
    }
  }

  /**
   * iOS/Android suspend a backgrounded tab: its timers freeze and the socket is
   * killed silently — usually HALF-OPEN, so readyState still reads OPEN. The
   * heartbeat would eventually notice, but only once the tab is alive again and
   * ~20-28s have passed. On wake we act NOW: probe the link once; if it is dead,
   * tear it down and resume the SAME stored chat immediately rather than waiting
   * out the backoff. This is what stops "I come back and the chat is dead /
   * nothing sends" after a phone lock or app switch.
   */
  async function wake() {
    const myEpoch = connectEpoch;
    const gw = gateway;
    if (gw && gw.isOpen()) {
      const alive = await gw.probe(4000);
      if (connectEpoch !== myEpoch) return;
      if (alive) {
        // Link is fine — just make sure we are not stuck showing a stale error.
        if (get().status !== "connected") {
          set({ status: "connected", error: null });
          startHeartbeat(gw, myEpoch);
        }
        return;
      }
    }
    // No socket, or it is dead / half-open: reconnect to the same chat right now.
    if (reconnectTimer) {
      clearTimeout(reconnectTimer);
      reconnectTimer = null;
    }
    stopHeartbeat();
    gateway?.close();
    gateway = null;
    reconnectAttempt = 0;
    if (connectEpoch !== myEpoch) return;
    // connect() is a NO-OP when it believes we are already on this chat, so
    // clear the key/status to force a genuine tear-down + re-resume.
    set({ activeKey: null, status: "idle", sessionId: null });
    await get().connect(get().storedSessionId ?? undefined);
  }

  return {
    status: "idle",
    error: null,
    sessionId: null,
    storedSessionId: null,
    activeKey: null,
    messages: [],
    pendingImages: [],
    clarify: null,
    approvals: [],

    wake,

    connect: async (resumeStoredSessionId, opts) => {
      const forceNew = opts?.forceNew === true;
      const targetKey = forceNew
        ? `${NEW_CHAT_PREFIX}${++newChatSeq}`
        : resumeStoredSessionId ?? NEW_CHAT_PREFIX + "current";
      const current = get();
      // Already on (or actively connecting to) this exact chat -- a no-op,
      // not "any chat at all is already connected". Anything else (including
      // switching from one resumed session to another, or from a resumed
      // session back to a fresh "new chat") tears down the old socket first
      // so its events can't bleed into the chat we're switching to.
      if (current.activeKey === targetKey && (current.status === "connected" || current.status === "connecting")) {
        return;
      }
      if (reconnectTimer) {
        clearTimeout(reconnectTimer);
        reconnectTimer = null;
      }
      stopHeartbeat();
      gateway?.close();
      gateway = null;
      const myEpoch = ++connectEpoch;
      set({
        status: "connecting",
        error: null,
        activeKey: targetKey,
        messages: current.messages,
        pendingImages: [],
        sessionId: null,
        storedSessionId: forceNew ? null : resumeStoredSessionId ?? null,
        // Approvals are per-session: keep them across a reconnect to the SAME
        // chat, drop them when actually switching to a different one.
        approvals: current.activeKey === targetKey ? current.approvals : [],
      });
      try {
        const tokenRes = await fetch("/api/hermes/token");
        const tokenBody = await tokenRes.json();
        if (!tokenRes.ok) throw new Error(tokenBody.error || "Could not get a Hermes session token");
        if (connectEpoch !== myEpoch) return; // superseded by a newer connect() while awaiting the token

        const gw = new HermesGateway();
        await gw.connect(tokenBody.token);
        if (connectEpoch !== myEpoch) {
          gw.close();
          return;
        }
        gw.onEvent((event) => {
          if (connectEpoch === myEpoch) handleGatewayEvent(set, get, event);
        });
        gateway = gw;

        let history: ChatMessage[] = [];
        let result: { session_id: string; stored_session_id?: string };
        if (resumeStoredSessionId && !forceNew) {
          // Desktop's pattern: skip the WS-side transcript replay and hydrate
          // history from the authenticated REST route instead, in parallel
          // with the resume RPC that binds a live runtime to the stored session.
          const [resumed, messagesRes] = await Promise.all([
            gw.call<{ session_id: string; stored_session_id?: string }>("session.resume", {
              session_id: resumeStoredSessionId,
              cols: 96,
              omit_messages: true,
            }),
            getSessionMessages(resumeStoredSessionId).catch(() => ({ messages: [] })),
          ]);
          result = resumed;
          history = messagesRes.messages
            .filter((m) => (m.role === "user" || m.role === "assistant") && m.content)
            .map((m) => ({
              id: nextMsgId(),
              role: m.role as "user" | "assistant",
              text: m.content ?? "",
              tools: [],
              streaming: false,
            }));
        } else {
          result = await gw.call<{ session_id: string; stored_session_id?: string }>("session.create", {
            cols: 96,
            source: "sams-dashboard",
          });
        }
        if (connectEpoch !== myEpoch) {
          gw.close();
          return;
        }

        const storedId = result.stored_session_id ?? resumeStoredSessionId ?? null;

        // If the socket drops out from under an established chat (iOS
        // suspension, proxy idle timeout, Hermes restart), resume the SAME
        // stored session instead of leaving a "connected" UI whose next send
        // would fail, or silently spawning a brand-new chat.
        gw.onClose(() => {
          if (connectEpoch !== myEpoch) return;
          scheduleReconnect(storedId);
        });

        // Re-surface any question / approval the agent is still blocked on. The
        // server does NOT replay pending clarify/approval requests after a
        // reconnect, so these must come from local storage.
        const restoredClarify = readPersistedClarify();
        const restoredApprovals = readPersistedApprovals();
        set({
          status: "connected",
          error: null,
          sessionId: result.session_id,
          storedSessionId: storedId,
          messages: history.length > 0 ? history : get().messages,
          clarify: restoredClarify ?? get().clarify,
          approvals:
            current.activeKey === targetKey && get().approvals.length > 0
              ? get().approvals
              : restoredApprovals,
        });

        reconnectAttempt = 0;
        startHeartbeat(gw, myEpoch);
        flushOutbox(gw, result.session_id);
        flushApprovalOutbox(gw, result.session_id);
        void flushClarifyAnswer(gw);
      } catch (err) {
        if (connectEpoch !== myEpoch) return;
        if (resumeStoredSessionId && !forceNew) {
          // The stored id was stale or not a valid DB key (e.g. an old ephemeral
          // live id), or the socket died mid-resume. Do NOT hang on
          // "connecting…" forever, and do NOT silently fork the user's thread:
          // note it, then open a fresh session so they are never stuck.
          try {
            localStorage.removeItem(LAST_SESSION_KEY);
          } catch {
            /* ignore */
          }
          set({ storedSessionId: null });
          void get().connect(undefined, { forceNew: true });
          set({
            error: "Couldn't restore the previous chat — started a new one. Your old thread is under Sessions.",
          });
          return;
        }
        set({ status: "error", error: (err as Error).message });
      }
    },

    attachImage: async (file: File) => {
      const { sessionId, status } = get();
      if (!gateway || status !== "connected" || !sessionId) {
        throw new Error("Not connected to Hermes yet");
      }
      const dataUrl: string = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result));
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
      });
      const base64 = dataUrl.split(",")[1] ?? "";
      const result = await gateway.call<{ path: string }>("image.attach_bytes", {
        session_id: sessionId,
        content_base64: base64,
        filename: file.name,
      });
      set((s) => ({ pendingImages: [...s.pendingImages, { name: file.name, path: result.path }] }));
    },

    respondToClarify: async (answer) => {
      const open = get().clarify;
      if (!open) return;
      const shown = Array.isArray(answer) ? answer.join(", ") : answer;
      const payloadAnswer = Array.isArray(answer) ? JSON.stringify(answer) : answer;

      // Show the answer in the transcript immediately and close the card, so
      // the UI reflects intent even if the wire is briefly down.
      set((s) => ({
        messages: [
          ...s.messages,
          { id: nextMsgId(), role: "user", text: shown, tools: [], streaming: false },
        ],
        clarify: null,
        error: null,
      }));
      persistClarify(null);

      if (!gateway || !gateway.isOpen()) {
        pendingClarifyAnswer = payloadAnswer; // flushed on reconnect
        set({ error: "Reconnecting — your answer will be sent automatically." });
        return;
      }
      try {
        await gateway.call("clarify.respond", { request_id: open.requestId, answer: payloadAnswer });
      } catch (err) {
        const msg = (err as Error).message || "";
        const expired = msg.includes("4009") || msg.includes("no pending");
        if (expired) {
          set({ error: "That question had already timed out. Your message was sent as a new turn instead." });
          outbox.push(shown);
        } else {
          pendingClarifyAnswer = payloadAnswer;
          set({ error: `Could not send your answer (${msg}). It will retry automatically.` });
        }
      }
    },

    dismissClarify: () => {
      set({ clarify: null });
      persistClarify(null);
      pendingClarifyAnswer = null;
    },

    respondToApproval: async (id, choice, all = false) => {
      const { sessionId, approvals } = get();
      const card = approvals.find((a) => a.id === id);
      if (!card) return;

      // The server resolves approvals FIFO per session and has NO request_id,
      // so the decision only makes sense for the oldest pending request. If the
      // user acted on a later card, send the head's decision instead — but say so.
      const isHead = approvals[0]?.id === id;
      const dropped = !isHead;
      const rest = approvals.filter((a) => a.id !== id);
      set({ approvals: rest, error: dropped ? "Answered the oldest request first — the agent only allows one at a time." : null });
      persistApprovals(rest);

      if (!gateway || !gateway.isOpen() || !sessionId) {
        approvalOutbox.push({ choice, all });
        set({ error: "Reconnecting — your decision will be sent automatically." });
        return;
      }
      try {
        await gateway.call("approval.respond", { session_id: sessionId, choice, all });
      } catch (err) {
        // No pending request left (already timed out / resolved elsewhere) is a
        // real outcome, not a failure worth retrying forever.
        const msg = (err as Error).message || "";
        if (msg.includes("resolved\":0") || msg.includes("5004")) {
          set({ error: null });
        } else {
          approvalOutbox.push({ choice, all });
          set({ error: "Could not send your decision — it will retry automatically." });
        }
        void err;
      }
    },

    sendMessage: async (text: string) => {
      const { sessionId, pendingImages, status, clarify } = get();
      const trimmed = text.trim();

      // A question is open: this text IS the answer. Route it to clarify.respond
      // instead of prompt.submit (which would only queue a next turn and leave
      // the agent blocked — the original "I answer and it never arrives" bug).
      if (clarify && !clarify.expired) {
        if (pendingImages.length > 0) {
          set({ error: "Answering the question first — images can be sent on the next turn." });
        }
        await get().respondToClarify(trimmed);
        return;
      }

      if (!trimmed && pendingImages.length === 0) return;

      const imageSuffix = pendingImages.length
        ? `\n[${pendingImages.length} image${pendingImages.length > 1 ? "s" : ""} attached: ${pendingImages
            .map((i) => i.name)
            .join(", ")}]`
        : "";

      // Socket down? Queue the message and show it as pending rather than
      // throwing it away. It flushes the moment we're reconnected.
      const canSend = gateway !== null && status === "connected" && sessionId !== null;
      set((s) => ({
        messages: [
          ...s.messages,
          {
            id: nextMsgId(),
            role: "user",
            text: trimmed + imageSuffix,
            tools: [],
            streaming: false,
            queued: !canSend,
          },
        ],
        pendingImages: [],
      }));

      if (!canSend) {
        outbox.push(trimmed);
        if (!reconnectTimer && status !== "connecting") {
          scheduleReconnect(get().storedSessionId);
        }
        return;
      }

      try {
        await gateway!.call("prompt.submit", { session_id: sessionId, text: trimmed });
      } catch (err) {
        // Mid-flight drop: keep the message in the outbox instead of rendering
        // a dead error bubble and losing what he typed.
        outbox.push(trimmed);
        set((s) => ({
          messages: s.messages.map((m) =>
            m.text === trimmed + imageSuffix ? { ...m, queued: true } : m,
          ),
          error: "Connection dropped while sending — will deliver automatically.",
        }));
        scheduleReconnect(get().storedSessionId);
        void err;
      }
    },
  };
});

/**
 * Browser-level wake triggers. A suspended mobile tab gets its timers frozen
 * and its socket killed, so the heartbeat/backoff cannot run while hidden. The
 * moment the tab is visible again — or the device regains network — probe and
 * reconnect at once. `pageshow` covers an iOS bfcache restore (which does not
 * fire `visibilitychange`). Installed once; SSR-guarded.
 */
let wakeHandlersInstalled = false;
function installWakeHandlers() {
  if (typeof window === "undefined" || wakeHandlersInstalled) return;
  wakeHandlersInstalled = true;
  const fire = () => {
    void useHermesChatStore.getState().wake();
  };
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") fire();
  });
  window.addEventListener("online", fire);
  window.addEventListener("focus", fire);
  window.addEventListener("pageshow", fire);
}

installWakeHandlers();

function handleGatewayEvent(
  set: (
    partial:
      | Partial<HermesChatState>
      | ((s: HermesChatState) => Partial<HermesChatState>),
  ) => void,
  get: () => HermesChatState,
  event: GatewayEvent,
) {
  const payload = (event.payload ?? {}) as Record<string, unknown>;

  switch (event.type) {
    case "message.start": {
      set((s) => ({
        messages: [...s.messages, { id: nextMsgId(), role: "assistant", text: "", tools: [], streaming: true }],
      }));
      break;
    }
    case "message.delta": {
      set((s) => ({ messages: appendAssistantDelta(s.messages, String(payload.text ?? "")) }));
      break;
    }
    case "message.interim": {
      set((s) => ({ messages: appendAssistantDelta(s.messages, "") }));
      break;
    }
    case "message.complete": {
      set((s) => {
        const messages = [...s.messages];
        const last = messages[messages.length - 1];
        if (last?.role === "assistant") {
          const isError = payload.status === "error";
          messages[messages.length - 1] = {
            ...last,
            text: isError ? last.text : String(payload.text ?? payload.rendered ?? last.text),
            streaming: false,
            error: isError ? String(payload.error ?? "The agent hit an error.") : undefined,
          };
        }
        return { messages };
      });
      break;
    }
    case "clarify.request": {
      // The agent is now BLOCKED waiting for an answer. Render the question and
      // hold the request_id so the reply goes to clarify.respond.
      const requestId = String(payload.request_id ?? "");
      if (!requestId) break;
      const choices = Array.isArray(payload.choices)
        ? (payload.choices as unknown[]).map((c) => String(c))
        : null;
      const next: PendingClarify = {
        requestId,
        question: String(payload.question ?? ""),
        choices: choices && choices.length > 0 ? choices : null,
        multiSelect: payload.multi_select === true,
        expired: false,
      };
      set({ clarify: next });
      persistClarify(next);
      break;
    }
    case "clarify.expire": {
      const cur = get().clarify;
      if (cur && cur.requestId === String(payload.request_id ?? "")) {
        const next = { ...cur, expired: true };
        set({ clarify: next });
        persistClarify(next);
      }
      break;
    }
    case "approval.request": {
      // The agent is blocked on a permission decision. The payload carries the
      // command, its description, and which choices the server will accept.
      const choices = Array.isArray(payload.choices)
        ? (payload.choices as unknown[]).map((c) => String(c))
        : payload.allow_permanent === false
          ? ["once", "session", "deny"]
          : ["once", "session", "always", "deny"];
      const next: PendingApproval = {
        id: `ap-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        command: String(payload.command ?? ""),
        description: String(payload.description ?? ""),
        choices,
        receivedAt: Date.now(),
      };
      const merged = [...get().approvals, next];
      set({ approvals: merged });
      persistApprovals(merged);
      break;
    }
    case "tool.start": {
      set((s) => {
        const messages = [...s.messages];
        const last = messages[messages.length - 1];
        if (last?.role === "assistant") {
          const tool: ToolCall = {
            id: String(payload.id ?? ""),
            name: String(payload.name ?? "tool"),
            status: "running",
            args: payload.args as Record<string, unknown> | undefined,
          };
          messages[messages.length - 1] = { ...last, tools: [...last.tools, tool] };
        }
        return { messages };
      });
      break;
    }
    case "tool.complete": {
      set((s) => {
        const messages = [...s.messages];
        const last = messages[messages.length - 1];
        if (last?.role === "assistant") {
          const tools = last.tools.map((t) =>
            t.id === String(payload.id ?? "")
              ? { ...t, status: "complete" as const, result: payload.result as string | undefined, error: payload.error as string | undefined }
              : t,
          );
          messages[messages.length - 1] = { ...last, tools };
        }
        return { messages };
      });
      break;
    }
    default:
      break;
  }
}
