"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { ChevronDown, Check } from "lucide-react";
import { DEPARTMENTS, DEPARTMENT_LABEL, MODEL_OPTIONS, type Department } from "@/lib/models";
import { useModelStore } from "@/store/useModelStore";
import { useAgentStore } from "@/store/useAgentStore";

const DEPARTMENT_AGENT_ID: Record<Department, string> = {
  hermes: "hermes",
  engineer: "engineer",
  vision: "vision",
  swarm: "swarm",
};

const STATUS_COLOR: Record<string, string> = {
  running: "bg-accent-emerald",
  unhealthy: "bg-accent-amber",
  stopped: "bg-accent-red",
  not_configured: "bg-accent-amber",
  not_deployed: "bg-zinc-700",
};

function Picker({ department }: { department: Department }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selections = useModelStore((s) => s.selections);
  const setSelection = useModelStore((s) => s.setSelection);
  const agent = useAgentStore((s) => s.agents.find((a) => a.id === DEPARTMENT_AGENT_ID[department]));

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const status = agent?.status ?? "not_deployed";

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-panel-border bg-panel-hover/50 px-2.5 py-1 text-xs text-muted hover:border-accent-cyan/40 hover:text-foreground"
        title={agent?.title}
      >
        <span
          className={clsx(
            "status-dot h-2 w-2 rounded-full",
            STATUS_COLOR[status],
            status === "running" && "status-glow-emerald",
          )}
        />
        <span className="hidden xl:inline">{DEPARTMENT_LABEL[department]}</span>
        <span className="max-w-[9rem] truncate text-[11px] text-slate-400">{selections[department]}</span>
        <ChevronDown size={12} />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-1 w-56 rounded-md border border-panel-border bg-panel shadow-xl backdrop-blur-md">
          <div className="border-b border-panel-border px-3 py-1.5 text-[10px] uppercase tracking-wide text-muted">
            {DEPARTMENT_LABEL[department]} model
          </div>
          {MODEL_OPTIONS[department].map((model) => (
            <button
              key={model}
              onClick={() => {
                setSelection(department, model);
                setOpen(false);
              }}
              className="flex w-full items-center justify-between px-3 py-1.5 text-left text-xs text-muted hover:bg-panel-hover hover:text-foreground"
            >
              {model}
              {selections[department] === model && <Check size={12} className="text-accent-emerald" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function ModelSelector() {
  const fetchSelections = useModelStore((s) => s.fetchSelections);
  useEffect(() => {
    fetchSelections();
  }, [fetchSelections]);

  return (
    <div className="hidden items-center gap-1 md:flex">
      {DEPARTMENTS.map((d) => (
        <Picker key={d} department={d} />
      ))}
    </div>
  );
}
