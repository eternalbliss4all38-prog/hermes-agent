"use client";

import Link from "next/link";
import { ArrowUpRight, Bot } from "lucide-react";
import { liveState, type AgentSummary } from "./LiveStatusStrip";

const COPY: Record<string, string> = {
  hermes: "Nous Research agent. Tool calls, kanban, skills, plugins.",
  engineer: "Free OpenRouter coding model. Full tool use, MCPs, plugins.",
  openclaw: "Local agent gateway. Chat one-shot or open the control room.",
  vision: "Multimodal analysis & video DNA extraction (free OpenRouter VL).",
  swarm: "Bulk processing & background tasks (free OpenRouter models).",
};

const BADGE: Record<string, string> = {
  live: "bg-accent-emerald/15 text-accent-emerald border-accent-emerald/30",
  degraded: "bg-accent-amber/15 text-accent-amber border-accent-amber/30",
  unconfigured: "bg-accent-amber/15 text-accent-amber border-accent-amber/30",
  offline: "bg-accent-red/15 text-accent-red border-accent-red/30",
};

const STATE_LABEL: Record<string, string> = {
  live: "LIVE",
  degraded: "DEGRADED",
  unconfigured: "NO KEY",
  offline: "OFFLINE",
};

/** REF-A "AGENTS · CLICK TO OPEN CONTROL ROOM" card. */
export function AgentControlRoomCard({ agent }: { agent: AgentSummary }) {
  const state = liveState(agent.status);
  const label = STATE_LABEL[state] ?? state.toUpperCase();
  const href = agent.id === "hermes" ? "/agent-chat" : "/paperclip-org";

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-panel-border bg-gradient-to-br from-panel to-panel-hover p-4 transition-colors hover:border-accent-violet/40">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-violet/15 text-accent-violet">
            <Bot size={16} />
          </span>
          <span className="text-sm font-semibold text-foreground">{agent.name}</span>
        </div>
        <span
          className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-mono uppercase ${BADGE[state]}`}
        >
          {label}
        </span>
      </div>

      <p className="text-[11px] leading-relaxed text-muted">
        {COPY[agent.id] ?? agent.title}
      </p>

      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-panel-border bg-background/40 px-2 py-1.5">
          <p className="text-[9px] uppercase tracking-wider text-muted">Role</p>
          <p className="truncate text-[11px] text-foreground">{agent.level}</p>
        </div>
        <div className="rounded-lg border border-panel-border bg-background/40 px-2 py-1.5" title={agent.reason}>
          <p className="text-[9px] uppercase tracking-wider text-muted">State</p>
          <p className="truncate text-[11px] font-mono text-foreground">
            {agent.status}
          </p>
        </div>
      </div>

      {agent.reason && (
        <p className="line-clamp-2 text-[10px] leading-relaxed text-amber-300/80" title={agent.reason}>
          {agent.reason}
        </p>
      )}

      <Link
        href={href}
        className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-medium text-accent-violet hover:text-accent-violet/80"
      >
        OPEN CONTROL ROOM <ArrowUpRight size={12} />
      </Link>
    </div>
  );
}
