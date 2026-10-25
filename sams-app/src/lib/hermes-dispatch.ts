// Server-side dispatcher for the Hermes JSON-RPC gateway.
//
// Mission Control already talks to the gateway from the BROWSER (lib/hermes-gateway.ts,
// over Traefik at /hermes/api/ws). This is the SERVER-side twin so an API route, a cron
// job, or n8n can dispatch a real prompt and get the real answer back -- which is what
// /api/command/dispatch was stubbed out of doing.
//
// Uses Node 22's built-in global WebSocket rather than the `ws` package. Reason: `ws`
// is a CJS module with optional native deps, and webpack mangles its internals when a
// Next.js route handler bundles it -- the failure is a runtime `TypeError: t.mask is not
// a function` from inside ws's buffer-util, only after a production build. Node's native
// WebSocket has no such problem and needs no dependency at all.
//
// Verified 2026-10-16: connect -> session.create -> prompt.submit -> stream
// message.delta -> message.complete, with usage returned.

const DASHBOARD_URL = process.env.HERMES_DASHBOARD_URL ?? "http://127.0.0.1:9119";
const TOKEN_RE = /window\.__HERMES_SESSION_TOKEN__\s*=\s*"([^"]+)"/;
const DEFAULT_TIMEOUT_MS = 90_000;

export class HermesDispatchError extends Error {}

export interface DispatchResult {
  sessionId: string;
  storedSessionId: string | null;
  reply: string;
  usage: Record<string, unknown> | null;
  elapsedMs: number;
}

interface RpcFrame {
  method?: string;
  params?: { type?: string; payload?: Record<string, unknown> };
  id?: number;
  result?: { session_id?: string; stored_session_id?: string };
  error?: { code: number; message: string };
}

async function fetchGatewayToken(): Promise<string> {
  let res: Response;
  try {
    res = await fetch(DASHBOARD_URL, { headers: { accept: "text/html" }, cache: "no-store" });
  } catch (err) {
    throw new HermesDispatchError(
      `Hermes dashboard unreachable at ${DASHBOARD_URL}: ${err instanceof Error ? err.message : String(err)}`,
    );
  }
  if (!res.ok) throw new HermesDispatchError(`Hermes dashboard returned HTTP ${res.status}`);
  const html = await res.text();
  const match = html.match(TOKEN_RE);
  if (!match) throw new HermesDispatchError("Hermes session token not found in dashboard HTML");
  return match[1];
}

/**
 * Send one prompt to Hermes and resolve with the complete reply.
 * Rejects on connect failure, RPC error, or timeout. Always tears the socket down.
 */
export async function dispatchToHermes(
  prompt: string,
  opts: { timeoutMs?: number } = {},
): Promise<DispatchResult> {
  const timeoutMs = opts.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const started = Date.now();

  const Ctor = (globalThis as unknown as { WebSocket?: new (url: string) => WebSocket }).WebSocket;
  if (!Ctor) throw new HermesDispatchError("global WebSocket unavailable (needs Node 22 runtime)");

  const token = await fetchGatewayToken();
  const wsUrl = `${DASHBOARD_URL.replace(/^http/, "ws")}/api/ws?token=${encodeURIComponent(token)}`;
  const ws = new Ctor(wsUrl);

  let nextId = 1;
  const pending = new Map<number, { resolve: (v: unknown) => void; reject: (e: Error) => void }>();
  let deltaBuffer = "";
  let finished = false;
  let resolveComplete: ((v: { text: string; usage: Record<string, unknown> | null }) => void) | null = null;
  const completePromise = new Promise<{ text: string; usage: Record<string, unknown> | null }>((res) => {
    resolveComplete = res;
  });

  const teardown = () => {
    try {
      ws.close();
    } catch {
      /* ignore */
    }
  };

  ws.addEventListener("message", (ev: MessageEvent) => {
    let frame: RpcFrame;
    try {
      frame = JSON.parse(String(ev.data)) as RpcFrame;
    } catch {
      return;
    }

    if (frame.method === "event" && frame.params) {
      const { type, payload } = frame.params;
      if (type === "message.delta") {
        deltaBuffer += String(payload?.text ?? "");
      } else if (type === "message.complete") {
        const text = String(payload?.text ?? "") || deltaBuffer;
        const usage = (payload?.usage as Record<string, unknown> | undefined) ?? null;
        if (!finished) {
          finished = true;
          resolveComplete?.({ text, usage });
        }
      }
      return;
    }

    if (typeof frame.id === "number" && pending.has(frame.id)) {
      const p = pending.get(frame.id)!;
      pending.delete(frame.id);
      if (frame.error) p.reject(new HermesDispatchError(frame.error.message || "Hermes RPC error"));
      else p.resolve(frame.result);
    }
  });

  const call = <T,>(method: string, params: Record<string, unknown>): Promise<T> => {
    const id = nextId++;
    return new Promise<T>((resolve, reject) => {
      pending.set(id, { resolve: resolve as (v: unknown) => void, reject });
      ws.send(JSON.stringify({ jsonrpc: "2.0", method, params, id }) + "\n");
    });
  };

  let timerHandle: ReturnType<typeof setTimeout> | null = null;
  const timer = new Promise<never>((_, reject) => {
    timerHandle = setTimeout(() => reject(new HermesDispatchError(`timed out after ${timeoutMs}ms`)), timeoutMs);
  });

  try {
    await Promise.race([
      new Promise<void>((resolve, reject) => {
        ws.addEventListener("open", () => resolve(), { once: true });
        ws.addEventListener(
          "error",
          () => reject(new HermesDispatchError("gateway socket error")),
          { once: true },
        );
      }),
      timer,
    ]);

    const session = await Promise.race([
      call<{ session_id: string; stored_session_id?: string }>("session.create", {
        cols: 96,
        source: "sams-dispatch-api",
      }),
      timer,
    ]);

    await Promise.race([call("prompt.submit", { session_id: session.session_id, text: prompt }), timer]);

    const { text, usage } = await Promise.race([completePromise, timer]);

    return {
      sessionId: session.session_id,
      storedSessionId: session.stored_session_id ?? null,
      reply: text.trim(),
      usage,
      elapsedMs: Date.now() - started,
    };
  } finally {
    if (timerHandle) clearTimeout(timerHandle);
    teardown();
  }
}
