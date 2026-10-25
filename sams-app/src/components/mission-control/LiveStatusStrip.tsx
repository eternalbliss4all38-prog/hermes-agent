"use client";

import { useEffect, useState } from "react";

export interface AgentSummary {
  id: string;
  name: string;
  title: string;
  level: string;
  status: string;
  container?: string;
  cpuPercent?: number;
  memMB?: number;
  backing?: string;
  reason?: string;
}

export type LiveState = "live" | "degraded" | "unconfigured" | "offline";

export function liveState(status: string | undefined): LiveState {
  if (!status || status === "not_deployed" || status === "exited" || status === "created") {
    return "offline";
  }
  if (status === "running") return "live";
  if (status === "not_configured") return "unconfigured";
  return "degraded";
}

const DOT: Record<LiveState, string> = {
  live: "bg-accent-emerald status-glow-emerald",
  degraded: "bg-accent-amber status-glow-amber",
  unconfigured: "bg-accent-amber status-glow-amber",
  offline: "bg-accent-red status-glow-red",
};

const STATE_LABEL: Record<LiveState, string> = {
  live: "LIVE",
  degraded: "DEGRADED",
  unconfigured: "NO KEY",
  offline: "OFFLINE",
};

/** REF-A "Mission Control" live status strip — one tile per agent. */
export function LiveStatusStrip() {
  const [agents, setAgents] = useState<AgentSummary[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/agents/list")
      .then((r) => r.json())
      .then((d) => Array.isArray(d) && setAgents(d))
      .catch(() => setError("agent feed unavailable"));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
      {(agents ?? []).slice(0, 5).map((a) => {
        const state = liveState(a.status);
        return (
          <div
            key={a.id}
            className="rounded-xl border border-panel-border bg-panel/60 px-3 py-2 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="truncate text-[11px] font-semibold uppercase tracking-wider text-foreground">
                {a.name}
              </span>
              <span className="flex items-center gap-1.5 shrink-0">
                <span className={`h-1.5 w-1.5 rounded-full ${DOT[state]}`} />
                <span className="text-[10px] font-mono uppercase text-muted">
                  {STATE_LABEL[state]}
                </span>
              </span>
            </div>
            <p className="mt-1 truncate text-[10px] font-mono text-muted" title={a.reason ?? a.backing}>
              {state === "live"
                ? `${Math.round(a.cpuPercent ?? 0)}% cpu · ${Math.round(a.memMB ?? 0)}mb`
                : a.reason ?? a.status}
            </p>
          </div>
        );
      })}
      {!agents && (
        <div className="col-span-full rounded-xl border border-panel-border bg-panel/60 px-3 py-2 text-[11px] text-muted">
          {error ?? "loading agent signals…"}
        </div>
      )}
    </div>
  );
}
