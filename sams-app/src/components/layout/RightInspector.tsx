"use client";

import { useState } from "react";
import clsx from "clsx";
import { AlertTriangle, Check, Cpu, MemoryStick, ShieldCheck, X } from "lucide-react";
import { useHermesChatStore } from "@/store/useHermesChatStore";
import { CampaignReview } from "@/components/dashboard/CampaignReview";
import { useSystemStore } from "@/store/useSystemStore";

/**
 * Real approval gate. Before this, the sidebar rendered a file-backed demo
 * queue (`.data/approvals.json`, seeded with a hardcoded card) whose buttons
 * were wired to nothing — the agent was never actually paused. It now renders
 * the live `approval.request` events off the gateway socket and answers them
 * with the `approval.respond` RPC, which is what actually unblocks the agent.
 */
const CHOICE: Record<string, { label: string; tone: "ok" | "strong" | "warn" | "bad" }> = {
  once: { label: "Approve once", tone: "ok" },
  session: { label: "Approve this chat", tone: "strong" },
  always: { label: "Always allow", tone: "warn" },
  deny: { label: "Reject", tone: "bad" },
};

const TONE: Record<string, string> = {
  ok: "bg-accent-emerald/15 text-accent-emerald hover:bg-accent-emerald/25",
  strong: "bg-accent-cyan/15 text-accent-cyan hover:bg-accent-cyan/25",
  warn: "bg-accent-amber/15 text-accent-amber hover:bg-accent-amber/25",
  bad: "bg-accent-red/15 text-accent-red hover:bg-accent-red/25",
};

function ApprovalGateway() {
  const approvals = useHermesChatStore((s) => s.approvals);
  const respond = useHermesChatStore((s) => s.respondToApproval);
  const status = useHermesChatStore((s) => s.status);
  const [tab, setTab] = useState<"human" | "technical">("human");
  const [all, setAll] = useState(false);
  const [busy, setBusy] = useState(false);

  // The gateway resolves approvals FIFO with no request_id, so only the OLDEST
  // request is answerable. Later cards are shown as queued behind it.
  const head = approvals[0] ?? null;
  const queued = approvals.slice(1);

  async function decide(choice: string) {
    if (!head) return;
    setBusy(true);
    try {
      await respond(head.id, choice, all);
    } finally {
      setBusy(false);
      setAll(false);
    }
  }

  return (
    <div className="flex flex-col gap-2 p-3">
      <h3 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
        Approval Gateway
        {approvals.length > 0 && (
          <span className="rounded-full bg-accent-amber/20 px-1.5 text-[10px] text-accent-amber">
            {approvals.length}
          </span>
        )}
      </h3>

      {!head && (
        <p className="text-xs text-muted">
          {status === "connected" ? "No pending approvals." : "Not connected to the agent yet."}
        </p>
      )}

      {head && (
        <div className="rounded-xl border border-accent-amber/40 bg-accent-amber/5 p-2.5 text-xs">
          <div className="mb-1.5 flex items-center gap-1.5 text-accent-amber">
            <AlertTriangle size={12} className="shrink-0" />
            <span className="text-[10px] font-semibold uppercase tracking-wide">
              Agent is blocked — waiting on you
            </span>
          </div>

          <p className="text-foreground">
            {head.description || "This action needs your permission before it can run."}
          </p>

          <div className="mt-2 rounded-md border border-panel-border">
            <div className="flex border-b border-panel-border text-[10px]">
              {(["human", "technical"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={clsx(
                    "flex-1 px-2 py-1 capitalize",
                    tab === t ? "bg-panel-hover text-foreground" : "text-muted hover:text-foreground",
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="p-2 text-[11px] leading-relaxed">
              {tab === "human" ? (
                <span className="text-muted">
                  Approving lets the agent run the action below. Rejecting blocks it — the agent is told
                  it was refused and must not retry.
                </span>
              ) : (
                <pre className="max-h-40 overflow-auto whitespace-pre-wrap break-all font-mono text-[10px] text-muted">
                  {head.command || "(no command text provided)"}
                </pre>
              )}
            </div>
          </div>

          <div className="mt-2 flex flex-wrap gap-1.5">
            {head.choices.map((c) => {
              const meta = CHOICE[c] ?? { label: c, tone: "strong" as const };
              return (
                <button
                  key={c}
                  disabled={busy}
                  onClick={() => decide(c)}
                  className={clsx(
                    "flex items-center gap-1 rounded px-2 py-1 text-[11px] disabled:opacity-40",
                    TONE[meta.tone],
                  )}
                >
                  {c === "deny" ? <X size={12} /> : <Check size={12} />}
                  {meta.label}
                </button>
              );
            })}
          </div>

          {approvals.length > 1 && (
            <label className="mt-2 flex items-center gap-1.5 text-[10px] text-muted">
              <input
                type="checkbox"
                checked={all}
                onChange={(e) => setAll(e.target.checked)}
                className="accent-accent-emerald"
              />
              Apply to all {approvals.length} pending requests
            </label>
          )}

          {queued.length > 0 && (
            <div className="mt-2 border-t border-panel-border pt-2">
              <p className="text-[10px] uppercase tracking-wide text-muted">
                Queued behind this one ({queued.length})
              </p>
              {queued.map((q) => (
                <p key={q.id} className="truncate font-mono text-[10px] text-muted">
                  {q.command || q.description || q.id}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function SystemTelemetry() {
  const status = useSystemStore((s) => s.status);
  return (
    <div className="border-t border-panel-border p-3">
      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">System Telemetry</h3>
      {!status ? (
        <p className="text-xs text-muted">connecting…</p>
      ) : (
        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between text-muted">
            <span className="flex items-center gap-1.5">
              <Cpu size={12} /> Host CPU
            </span>
            <span>{status.host.cpuPercent}%</span>
          </div>
          <div className="flex items-center justify-between text-muted">
            <span className="flex items-center gap-1.5">
              <MemoryStick size={12} /> Host RAM
            </span>
            <span>
              {Math.round(status.host.memUsedMB / 1024)}G / {Math.round(status.host.memTotalMB / 1024)}G
            </span>
          </div>
          <div className="pt-1">
            {status.containers.map((c) => (
              <div key={c.name} className="flex items-center justify-between py-0.5 text-muted">
                <span className="truncate">{c.name}</span>
                <span
                  className={clsx(
                    "flex items-center gap-1.5",
                    c.status === "running" && "text-accent-emerald",
                    c.status === "unhealthy" && "text-accent-amber",
                    c.status === "stopped" && "text-accent-red",
                    c.status === "not_deployed" && "text-zinc-600",
                  )}
                >
                  {c.status === "running" && <span className="status-glow-emerald h-1.5 w-1.5 rounded-full bg-accent-emerald" />}
                  {c.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
      <p className="mt-2 flex items-center gap-1 text-[10px] text-muted">
        <ShieldCheck size={10} /> approvals fail closed — silence is never consent
      </p>
    </div>
  );
}

export function RightInspector() {
  return (
    <aside className="flex h-full flex-col overflow-y-auto">
      <CampaignReview />
      <ApprovalGateway />
      <SystemTelemetry />
    </aside>
  );
}
