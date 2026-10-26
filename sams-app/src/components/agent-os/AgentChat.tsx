"use client";

// src/components/agent-os/AgentChat.tsx
//
// The Agent OS chat — what the OS was always supposed to be.
//   Left rail: every real agent as a selectable character, with live status.
//   Tap one   -> that agent's OWN chat thread (persisted per agent).
//   Group tab -> tick several agents, send one prompt, all reply in one thread.
//
// Hermes keeps its native, session-persistent chat (the WS gateway) when
// selected; the other agents go through /api/agent/chat. Nothing is faked: an
// agent that fails shows its real error, never a made-up answer.

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Bot, Eye, Layers, Send, Sparkles, Users, Wrench, Zap } from "lucide-react";
import { ChatMessageList } from "@/components/agent-chat/ChatMessageList";
import { ChatComposer } from "@/components/agent-chat/ChatComposer";

interface AgentMeta {
  id: string;
  label: string;
  accent: string;
  glyph: React.ReactNode;
  blurb: string;
}

const AGENTS: AgentMeta[] = [
  { id: "hermes", label: "Hermes", accent: "#60a5fa", glyph: <Zap size={18} />, blurb: "Executive Orchestrator" },
  { id: "openclaw", label: "OpenClaw", accent: "#f472b6", glyph: <Sparkles size={18} />, blurb: "Production Manager — audio + video" },
  { id: "bi", label: "S.A.M.S. Business Intelligence", accent: "#34d399", glyph: <Eye size={18} />, blurb: "BI research & analysis · analytics · copy" },
  { id: "coding", label: "Coding Agent", accent: "#a78bfa", glyph: <Wrench size={18} />, blurb: "SaaS + free tools" },
];

const byId = (id: string) => AGENTS.find((a) => a.id === id) || AGENTS[0];
const storageKey = (id: string) => `sams-agent-chat:${id}`;

interface Turn {
  role: "user" | "agent";
  agent?: string;
  text: string;
  ts: number;
  error?: string;
  ms?: number;
}

type Mode = "single" | "group";

export function AgentChat() {
  const [mode, setMode] = useState<Mode>("single");
  const [active, setActive] = useState<string>("hermes");
  const [groupPicks, setGroupPicks] = useState<string[]>(["hermes", "openclaw"]);
  const [status, setStatus] = useState<Record<string, string>>({});
  const [turns, setTurns] = useState<Turn[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  // Load this agent's own thread whenever the active agent changes.
  useEffect(() => {
    setLoaded(false);
    try {
      const raw = localStorage.getItem(storageKey(active));
      setTurns(raw ? (JSON.parse(raw) as Turn[]) : []);
    } catch {
      setTurns([]);
    }
    queueMicrotask(() => setLoaded(true));
  }, [active]);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(storageKey(active), JSON.stringify(turns.slice(-60)));
    } catch {
      /* quota */
    }
  }, [turns, active, loaded]);

  useEffect(() => {
    boxRef.current?.scrollTo({ top: boxRef.current.scrollHeight, behavior: "smooth" });
  }, [turns, busy]);

  // Live agent status for the rail.
  useEffect(() => {
    const load = () =>
      fetch("/api/agents/list", { cache: "no-store" })
        .then((r) => r.json())
        .then((d: { id: string; status: string }[]) => {
          if (Array.isArray(d)) setStatus(Object.fromEntries(d.map((a) => [a.id, a.status])));
        })
        .catch(() => {});
    load();
    const iv = setInterval(load, 20000);
    return () => clearInterval(iv);
  }, []);

  const send = useCallback(async () => {
    const prompt = input.trim();
    if (!prompt || busy) return;
    setInput("");
    setBusy(true);
    const mine: Turn = { role: "user", text: prompt, ts: Date.now() };
    setTurns((t) => [...t, mine]);

    const targets = mode === "group" ? groupPicks : [active];
    // Send the thread so far WITH the request. Without this every agent was
    // amnesiac, and group members never saw each other's replies.
    const history = turns.map((t) => ({
      role: t.role,
      speaker: t.role === "user" ? "Shawn" : byId(t.agent || active).label,
      text: t.error ? `[error] ${t.text}` : t.text,
    }));
    try {
      const r = await fetch("/api/agent/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ agents: targets, prompt, history }),
      });
      const j = (await r.json()) as {
        replies?: { agent: string; text: string; ms: number; error?: string }[];
        error?: string;
      };
      if (j.error) throw new Error(j.error);
      const replies = (j.replies ?? []).map<Turn>((rep) => ({
        role: "agent",
        agent: rep.agent,
        text: rep.error ? rep.error : rep.text,
        error: rep.error,
        ms: rep.ms,
        ts: Date.now(),
      }));
      setTurns((t) => [...t, ...(replies.length ? replies : [{ role: "agent", agent: targets[0], text: "(no reply)", ts: Date.now() }])]);
    } catch (e) {
      setTurns((t) => [
        ...t,
        { role: "agent", agent: targets[0], text: e instanceof Error ? e.message : String(e), error: "request failed", ts: Date.now() },
      ]);
    } finally {
      setBusy(false);
    }
  }, [input, busy, mode, groupPicks, active]);

  const showNativeHermes = mode === "single" && active === "hermes";
  const activeMeta = useMemo(() => byId(active), [active]);

  const railBtn = (a: AgentMeta, selected: boolean, onClick: () => void, badge?: React.ReactNode) => (
    <button
      key={a.id}
      type="button"
      onClick={onClick}
      className={`flex min-w-[150px] shrink-0 items-center gap-2.5 rounded-lg border px-2.5 py-2 text-left transition md:min-w-0 md:w-full ${
        selected ? "bg-panel-hover" : "hover:bg-panel-hover/60"
      }`}
      style={{ borderColor: selected ? a.accent : "var(--panel-border, rgba(255,255,255,0.08))" }}
    >
      <span
        className="grid h-8 w-8 shrink-0 place-items-center rounded-full"
        style={{ background: `${a.accent}22`, color: a.accent, boxShadow: selected ? `0 0 0 2px ${a.accent}55` : "none" }}
      >
        {a.glyph}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[12px] font-medium text-foreground">{a.label}</span>
        <span className="block truncate text-[9.5px] text-muted">{a.blurb}</span>
      </span>
      <span
        className={`h-1.5 w-1.5 shrink-0 rounded-full ${status[a.id] === "running" ? "bg-accent-emerald" : "bg-accent-red"}`}
        title={status[a.id] || "unknown"}
      />
      {badge}
    </button>
  );

  return (
    <div className="flex h-full min-h-0 flex-col gap-2 overflow-hidden md:flex-row md:gap-3">
      {/* ── Left rail ─────────────────────────────────────────────── */}
      <aside className="flex shrink-0 gap-1.5 overflow-x-auto rounded-xl border border-panel-border bg-panel p-2 md:w-[190px] md:flex-col md:overflow-x-visible md:overflow-y-auto">
        <div className="mb-0.5 flex items-center gap-1.5 px-1 text-[10px] font-semibold uppercase tracking-wider text-muted">
          <Users size={11} /> Agents
        </div>
        {mode === "single"
          ? AGENTS.map((a) => railBtn(a, active === a.id, () => setActive(a.id)))
          : AGENTS.map((a) =>
              railBtn(
                a,
                groupPicks.includes(a.id),
                () =>
                  setGroupPicks((p) => (p.includes(a.id) ? p.filter((x) => x !== a.id) : [...p, a.id])),
                <input type="checkbox" readOnly checked={groupPicks.includes(a.id)} className="pointer-events-none" />,
              ),
            )}
        <button
          type="button"
          onClick={() => setMode((m) => (m === "single" ? "group" : "single"))}
          className={`mt-1 flex items-center justify-center gap-1.5 rounded-lg border px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition ${
            mode === "group" ? "border-accent-cyan/60 text-accent-cyan" : "border-panel-border text-muted hover:text-foreground"
          }`}
        >
          <Users size={11} /> {mode === "group" ? "Group mode ON" : "Group chat"}
        </button>
        <p className="px-1 text-[9px] leading-snug text-muted">
          {mode === "group"
            ? "Tick agents, send once — all reply in this thread."
            : "Tap an agent to open its own chat."}
        </p>
      </aside>

      {/* ── Thread ────────────────────────────────────────────────── */}
      <section className="flex min-h-0 min-w-0 flex-1 flex-col rounded-xl border border-panel-border bg-panel">
        <header className="flex items-center gap-2 border-b border-panel-border px-3 py-2">
          {mode === "group" ? (
            <>
              <Users size={14} className="text-accent-cyan" />
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground">Group chat</span>
              <span className="text-[10px] text-muted">{groupPicks.map((p) => byId(p).label).join(" · ") || "nobody selected"}</span>
            </>
          ) : (
            <>
              <span style={{ color: activeMeta.accent }}>{activeMeta.glyph}</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground">{activeMeta.label}</span>
              <span className="text-[10px] text-muted">{activeMeta.blurb}</span>
            </>
          )}
        </header>

        {showNativeHermes ? (
          // Hermes keeps the native, session-persistent WS chat.
          <>
            <div className="min-h-0 flex-1 overflow-y-auto">
              <ChatMessageList />
            </div>
            <div className="border-t border-panel-border">
              <ChatComposer />
            </div>
          </>
        ) : (
          <>
            <div ref={boxRef} className="min-h-0 flex-1 space-y-2 overflow-y-auto p-3">
              {turns.length === 0 && (
                <div className="grid h-full place-items-center text-center text-xs text-muted">
                  <div className="max-w-sm">
                    <div className="mx-auto mb-2" style={{ color: activeMeta.accent }}>{activeMeta.glyph}</div>
                    <p className="text-foreground">Chat with {mode === "group" ? "the group" : activeMeta.label}</p>
                    <p className="mt-1 text-[10px] opacity-80">
                      {mode === "group" ? "Every selected agent answers here." : `${activeMeta.blurb} — replies come from its real backend.`}
                    </p>
                  </div>
                </div>
              )}
              {turns.map((t, i) => {
                const m = t.agent ? byId(t.agent) : activeMeta;
                return (
                  <div key={i} className={`flex gap-2 ${t.role === "user" ? "flex-row-reverse" : ""}`}>
                    <span
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-[10px]"
                      style={
                        t.role === "user"
                          ? { background: "rgba(255,255,255,0.06)", color: "var(--fg-dim)" }
                          : { background: `${m.accent}22`, color: m.accent }
                      }
                      title={t.role === "user" ? "you" : m.label}
                    >
                      {t.role === "user" ? "you" : m.glyph}
                    </span>
                    <div
                      className={`max-w-[85%] min-w-0 break-words whitespace-pre-wrap rounded-2xl border px-3 py-2 text-[13px] leading-relaxed ${
                        t.role === "user" ? "border-panel-border bg-white/5 text-foreground" : ""
                      } ${t.error ? "text-accent-red" : "text-foreground"}`}
                      style={t.role === "agent" && t.agent ? { borderColor: `${m.accent}44`, background: `${m.accent}0f` } : undefined}
                    >
                      {t.role === "agent" && (
                        <span className="mb-1 block text-[9px] font-semibold uppercase tracking-wider" style={{ color: m.accent }}>
                          {m.label}
                          {t.ms ? ` · ${(t.ms / 1000).toFixed(1)}s` : ""}
                        </span>
                      )}
                      {t.text}
                    </div>
                  </div>
                );
              })}
              {busy && (
                <div className="flex items-center gap-2 text-[11px] text-muted">
                  <span className="animate-pulse" style={{ color: activeMeta.accent }}>
                    {(mode === "group" ? groupPicks : [active]).map((p) => byId(p).label).join(", ")} working…
                  </span>
                </div>
              )}
            </div>

            <form
              className="flex items-end gap-2 border-t border-panel-border p-2"
              onSubmit={(e) => {
                e.preventDefault();
                void send();
              }}
            >
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    void send();
                  }
                }}
                rows={1}
                placeholder={mode === "group" ? "Message the group…" : `Message ${activeMeta.label}…`}
                className="min-h-10 flex-1 resize-none rounded-xl border border-panel-border bg-panel-hover px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted"
              />
              <button
                type="submit"
                disabled={busy || !input.trim() || (mode === "group" && groupPicks.length === 0)}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-panel-border text-accent-cyan disabled:opacity-40"
                title="Send"
              >
                <Send size={15} />
              </button>
            </form>
          </>
        )}
      </section>
    </div>
  );
}
