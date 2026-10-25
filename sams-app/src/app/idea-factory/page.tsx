"use client";

import { useEffect, useState } from "react";
import type { Idea } from "@/lib/ideasStore";
import { RadialGauge } from "@/components/shared/RadialGauge";

const STAGES = [
  { label: "Ingestion", detail: "Idea capture" },
  { label: "Scoring", detail: "Feasibility & market gap" },
  { label: "PRD Spec", detail: "Auto-PRD & architecture" },
  { label: "Code Build", detail: "Code & asset scaffolding" },
  { label: "Sandbox & Deploy", detail: "Live preview & approval" },
] as const;

export default function IdeaFactoryPage() {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [title, setTitle] = useState("");
  const [niche, setNiche] = useState("");
  const [scoring, setScoring] = useState<string | null>(null);

  const load = () => fetch("/api/ideas/pipeline").then((r) => r.json()).then(setIdeas);
  useEffect(() => {
    load();
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    await fetch("/api/ideas/pipeline", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, niche }),
    });
    setTitle("");
    setNiche("");
    load();
  };

  const score = async (id: string) => {
    setScoring(id);
    await fetch("/api/ideas/score", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    await load();
    setScoring(null);
  };

  return (
    <div className="flex h-full flex-col gap-4 p-4 sm:p-6">
      <form onSubmit={submit} className="flex flex-col gap-2 rounded-lg border border-panel-border bg-panel p-3 sm:flex-row">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Raw business idea or market niche…"
          className="flex-1 rounded bg-panel-hover px-2 py-1.5 text-xs outline-none placeholder:text-muted"
        />
        <input
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
          placeholder="Target niche (optional)"
          className="rounded bg-panel-hover px-2 py-1.5 text-xs outline-none placeholder:text-muted sm:w-48"
        />
        <button type="submit" className="rounded bg-accent-emerald/15 px-3 py-1.5 text-xs text-accent-emerald hover:bg-accent-emerald/25">
          Ingest
        </button>
      </form>

      <div className="flex flex-1 snap-x gap-3 overflow-x-auto pb-2">
        {STAGES.map((stage, i) => {
          const stageNum = i + 1;
          const stageIdeas = ideas.filter((idea) => idea.stage === stageNum);
          return (
            <div
              key={stage.label}
              className="flex w-[85vw] shrink-0 snap-start flex-col rounded-lg border border-panel-border bg-panel sm:w-72"
            >
              <div className="border-b border-panel-border p-2.5">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-100">
                  {String(stageNum).padStart(2, "0")} {stage.label}
                </div>
                <div className="mt-0.5 text-[10px] text-muted">{stage.detail}</div>
              </div>
              <div className="flex flex-1 flex-col gap-1.5 overflow-y-auto p-2">
                {stageIdeas.map((idea) => (
                  <div key={idea.id} className="rounded border border-panel-border bg-panel-hover/50 p-2 text-[11px]">
                    <div className="flex items-start gap-2">
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-foreground">{idea.title}</p>
                        {idea.niche && <p className="text-muted">{idea.niche}</p>}
                        {idea.stage === 1 && (
                          <button
                            onClick={() => score(idea.id)}
                            disabled={scoring === idea.id}
                            className="mt-1.5 rounded bg-panel px-2 py-1 text-[10px] text-accent-cyan hover:bg-panel-hover disabled:opacity-50"
                          >
                            {scoring === idea.id ? "Scoring…" : "Score feasibility"}
                          </button>
                        )}
                      </div>
                      {idea.feasibilityScore !== null && <RadialGauge score={idea.feasibilityScore} />}
                    </div>
                  </div>
                ))}
                {stageIdeas.length === 0 && <p className="text-[10px] text-muted">empty</p>}
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-[10px] text-muted">
        Feasibility score is a deterministic text heuristic (v0), not real market research. Stages 3–5 (PRD generation, scaffolding, sandbox preview) are not yet automated.
      </p>
    </div>
  );
}
