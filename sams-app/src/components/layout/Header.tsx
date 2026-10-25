"use client";

import { Activity, Menu, PanelRight } from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";
import { useUIStore } from "@/store/useUIStore";
import { ModelSelector } from "@/components/header/ModelSelector";

export function Header() {
  const status = useSystemStore((s) => s.status);
  const { toggleLeft, toggleRight } = useUIStore();

  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-panel-border bg-panel px-3 sm:px-4">
      <div className="flex min-w-0 items-center gap-2 sm:gap-3">
        <button onClick={toggleLeft} className="rounded p-1.5 text-muted hover:bg-panel-hover hover:text-foreground lg:hidden" aria-label="Toggle navigation">
          <Menu size={18} />
        </button>
        <div className="status-glow-emerald flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-accent-emerald via-accent-cyan to-accent-violet text-xs font-bold text-slate-950">
          OS
        </div>
        <span className="truncate font-semibold tracking-tight text-slate-100">S.A.M.S. Agent OS</span>
      </div>

      <ModelSelector />

      <div className="flex shrink-0 items-center gap-2 text-xs text-muted sm:gap-3">
        <Activity size={14} className="hidden sm:block" />
        {status ? (
          <span className="hidden sm:inline">
            CPU {status.host.cpuPercent}% · RAM {Math.round((status.host.memUsedMB / status.host.memTotalMB) * 100)}%
          </span>
        ) : (
          <span className="hidden sm:inline">connecting…</span>
        )}
        <span
          className={`hidden rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wider md:inline ${
            status?.costMeter.valid
              ? "border-accent-emerald/30 text-accent-emerald"
              : "border-accent-amber/30 text-accent-amber"
          }`}
          title={status?.costMeter.note}
        >
          {status
            ? status.costMeter.valid
              ? `spend: $${(status.costMeter.usageUsd ?? 0).toFixed(2)}`
              : "spend: key invalid"
            : "spend: …"}
        </span>
        <button onClick={toggleRight} className="rounded p-1.5 text-muted hover:bg-panel-hover hover:text-foreground lg:hidden" aria-label="Toggle inspector">
          <PanelRight size={18} />
        </button>
      </div>
    </header>
  );
}
