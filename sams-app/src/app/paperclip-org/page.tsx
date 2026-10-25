"use client";

import { useEffect } from "react";
import clsx from "clsx";
import { useAgentStore } from "@/store/useAgentStore";
import { useModelStore } from "@/store/useModelStore";
import { MODEL_OPTIONS, type Department } from "@/lib/models";
import type { AgentSummary } from "@/lib/types";

const LEVEL_ORDER: AgentSummary["level"][] = ["Executive", "Engineering", "Intelligence", "Execution", "Parallel Swarm"];

const STATUS_STYLE: Record<AgentSummary["status"], string> = {
  running: "border-accent-emerald/40 text-accent-emerald",
  unhealthy: "border-accent-amber/40 text-accent-amber",
  stopped: "border-accent-red/40 text-accent-red",
  not_deployed: "border-zinc-700 text-zinc-500",
  not_configured: "border-accent-amber/40 text-accent-amber",
};

const AGENT_DEPARTMENT: Record<string, Department> = {
  hermes: "hermes",
  engineer: "engineer",
  vision: "vision",
  swarm: "swarm",
};

export default function PaperclipOrgPage() {
  const agents = useAgentStore((s) => s.agents);
  const { selections, fetchSelections, setSelection } = useModelStore();

  useEffect(() => {
    fetchSelections();
  }, [fetchSelections]);

  return (
    <div className="flex h-full flex-col items-center gap-0 overflow-y-auto p-4 sm:p-6">
      {LEVEL_ORDER.map((level, levelIndex) => {
        const levelAgents = agents.filter((a) => a.level === level);
        if (levelAgents.length === 0) return null;
        const isExecutive = level === "Executive";
        return (
          <div key={level} className="flex flex-col items-center gap-2">
            {levelIndex > 0 && <div className="h-6 w-px bg-gradient-to-b from-accent-cyan/60 to-panel-border" />}
            <span className="text-[10px] uppercase tracking-widest text-muted">{level} Level</span>
            <div className="flex flex-wrap justify-center gap-3 pb-6">
              {levelAgents.map((a) => {
                const department = AGENT_DEPARTMENT[a.id];
                return (
                  <div
                    key={a.id}
                    className={clsx(
                      "rounded-xl border bg-panel p-3",
                      isExecutive ? "w-64 border-2 shadow-lg" : "w-56",
                      STATUS_STYLE[a.status],
                      a.status === "running" && "status-glow-emerald",
                    )}
                  >
                    <div className="mb-1 flex items-center justify-between">
                      <span className="font-medium text-foreground">{a.name}</span>
                      <span className="text-[10px] uppercase">{a.status.replace("_", " ")}</span>
                    </div>
                    <p className="mb-2 text-[11px] text-muted">{a.title}</p>
                    {a.source === "docker" && (a.cpuPercent !== undefined || a.memMB !== undefined) && (
                      <div className="mb-2 flex gap-3 text-[10px] text-muted">
                        {a.cpuPercent !== undefined && <span>CPU {a.cpuPercent.toFixed(1)}%</span>}
                        {a.memMB !== undefined && <span>{a.memMB} MB</span>}
                      </div>
                    )}
                    {department && (
                      <select
                        value={selections[department]}
                        onChange={(e) => setSelection(department, e.target.value)}
                        className="w-full rounded border border-panel-border bg-panel-hover px-1.5 py-1 text-[11px] text-foreground"
                      >
                        {MODEL_OPTIONS[department].map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>
                    )}
                    <p className="mt-1.5 text-[10px] text-zinc-600">{a.source === "docker" ? "live · docker" : "static · not deployed"}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
