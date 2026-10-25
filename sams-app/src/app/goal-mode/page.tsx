"use client";

import { useEffect, useState } from "react";
import { Target, Clock } from "lucide-react";
import type { Goal } from "@/lib/goalsStore";

export default function GoalModePage() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [objective, setObjective] = useState("");

  const load = () => fetch("/api/goals").then((r) => r.json()).then(setGoals);
  useEffect(() => {
    load();
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!objective.trim()) return;
    await fetch("/api/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ objective }),
    });
    setObjective("");
    load();
  };

  return (
    <div className="flex h-full flex-col gap-4 p-3 sm:p-6">
      <form onSubmit={submit} className="flex flex-col gap-2 rounded-lg border border-panel-border bg-panel p-3 sm:flex-row">
        <Target size={16} className="hidden shrink-0 text-muted sm:block sm:mt-2" />
        <input
          value={objective}
          onChange={(e) => setObjective(e.target.value)}
          placeholder='Enter a high-level goal (e.g. "Build and deploy the SME Compliance Tracker bridge page")…'
          className="flex-1 rounded bg-panel-hover px-2 py-1.5 text-xs outline-none placeholder:text-muted"
        />
        <button type="submit" className="rounded bg-accent-emerald/15 px-3 py-1.5 text-xs text-accent-emerald hover:bg-accent-emerald/25">
          Submit objective
        </button>
      </form>

      <div className="relative flex-1 overflow-y-auto">
        {goals.length === 0 && <p className="text-xs text-muted">No objectives submitted yet.</p>}
        <div className="relative space-y-3">
          {goals.length > 1 && <div className="absolute bottom-4 left-[15px] top-4 w-px bg-panel-border" />}
          {goals.map((g) => (
            <div key={g.id} className="relative flex items-start gap-3">
              <span className="status-glow-amber z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent-amber/40 bg-panel">
                <Clock size={14} className="text-accent-amber" />
              </span>
              <div className="flex min-w-0 flex-1 items-start gap-3 rounded-xl border border-panel-border bg-panel p-3">
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-foreground">{g.objective}</p>
                  <p className="mt-1 text-[10px] text-muted">{new Date(g.createdAt).toLocaleString()}</p>
                </div>
                <span className="shrink-0 rounded-full border border-accent-amber/40 px-2 py-0.5 text-[10px] uppercase tracking-wide text-accent-amber">
                  queued
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[10px] text-muted">
        Objectives are captured and persisted, but there&apos;s no autonomous execution backend wired yet -- nothing runs against Hermes/OpenClaw from here. This queue is ready for that once it exists.
      </p>
    </div>
  );
}
