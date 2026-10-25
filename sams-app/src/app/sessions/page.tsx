"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { MessageSquare, Trash2, Bot } from "lucide-react";
import clsx from "clsx";
import { listSessions, deleteSession, type HermesSessionInfo } from "@/lib/hermes-rest";

function formatRelative(unixSeconds: number): string {
  const diffMs = Date.now() - unixSeconds * 1000;
  const mins = Math.round(diffMs / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  return `${days}d ago`;
}

function SessionCard({ session, onDelete }: { session: HermesSessionInfo; onDelete: (id: string) => void }) {
  const title = session.title || session.preview || "Untitled session";
  return (
    <div className="group flex items-center gap-3 rounded-xl border border-panel-border bg-panel p-3.5 transition-colors hover:border-accent-cyan/30">
      <div
        className={clsx(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
          session.is_active ? "status-glow-emerald bg-accent-emerald/15 text-accent-emerald" : "bg-panel-hover text-muted",
        )}
      >
        <MessageSquare size={16} />
      </div>

      <Link href={`/agent-chat?resume=${encodeURIComponent(session.id)}`} className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-foreground">{title}</p>
        <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-muted">
          {session.model && (
            <span className="flex items-center gap-1">
              <Bot size={11} />
              {session.model}
            </span>
          )}
          <span>{session.message_count} messages</span>
          <span>{formatRelative(session.last_active)}</span>
        </div>
      </Link>

      <button
        type="button"
        onClick={() => onDelete(session.id)}
        aria-label="Delete session"
        className="shrink-0 rounded-lg p-2 text-muted opacity-0 transition-opacity hover:bg-accent-red/10 hover:text-accent-red group-hover:opacity-100"
      >
        <Trash2 size={15} />
      </button>
    </div>
  );
}

export default function SessionsPage() {
  const [sessions, setSessions] = useState<HermesSessionInfo[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setStatus("loading");
    try {
      const res = await listSessions();
      setSessions(res.sessions);
      setStatus("ready");
    } catch (err) {
      setError((err as Error).message);
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function handleDelete(id: string) {
    const previous = sessions;
    setSessions((s) => s.filter((session) => session.id !== id));
    try {
      await deleteSession(id);
    } catch (err) {
      setSessions(previous);
      setError((err as Error).message);
    }
  }

  return (
    <div className="mx-auto flex h-full max-w-3xl flex-col gap-4 overflow-y-auto p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-foreground">Sessions</h1>
        <Link
          href="/agent-chat?new=1"
          onClick={() => {
            // A genuinely NEW chat must not resume the last session.
            if (typeof window !== "undefined") {
              localStorage.removeItem("sams_last_session");
              localStorage.removeItem("sams_pending_clarify");
            }
          }}
          className="rounded-lg bg-gradient-to-r from-accent-emerald to-accent-cyan px-3 py-1.5 text-xs font-medium text-slate-950"
        >
          New chat
        </Link>
      </div>

      {status === "loading" && <p className="text-sm text-muted">Loading sessions…</p>}
      {status === "error" && <p className="text-sm text-accent-red">{error ?? "Could not load sessions."}</p>}
      {status === "ready" && sessions.length === 0 && (
        <p className="text-sm text-muted">No sessions yet — start one from Agent Chat.</p>
      )}

      <div className="flex flex-col gap-2">
        {sessions.map((session) => (
          <SessionCard key={session.id} session={session} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
