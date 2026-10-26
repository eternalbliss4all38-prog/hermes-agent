"use client";

// src/app/agents/build/page.tsx
//
// Agent Builder — construct and edit the agents themselves.
// Pick an agent, edit its persona / mission / skills / tools / active project,
// and SAVE. Every save writes to that agent's real palace room, so the change
// changes what the agent is — not a cosmetic label.

import { useCallback, useEffect, useState } from "react";
import { Bot, Check, Cpu, Loader2, Save, Users, Wrench, Target, ScrollText, FolderGit2 } from "lucide-react";

// Known-good text/reasoning models. Free-text below accepts ANY OpenRouter id,
// so a brand-new release can be wired in the day it drops.
const MODEL_CHOICES = [
  "nvidia/nemotron-3.5-super-vl:free",
  "poolside/laguna-s-2.1:free",
  "cohere/north-mini-code:free",
  "nvidia/nemotron-3.5-lightning:free",
  "nvidia/nemotron-3-ultra-550b-a55b:free",
  "google/gemma-4-31b-it:free",
  "openrouter/auto",
];

interface AgentCfg {
  id: string;
  room: string;
  label: string;
  exists: boolean;
  files: Record<string, string>;
}

const FILE_META: { key: string; label: string; icon: React.ReactNode; hint: string }[] = [
  { key: "PERSONA.md", label: "Persona", icon: <Bot size={13} />, hint: "Who the agent is and how it behaves." },
  { key: "MISSION.md", label: "Mission", icon: <Target size={13} />, hint: "Its standing job." },
  { key: "SKILLS.md", label: "Skills", icon: <ScrollText size={13} />, hint: "Role-scoped skills. Extras only under Hermes' direction." },
  { key: "TOOLS.md", label: "Tools", icon: <Wrench size={13} />, hint: "Tools this role may reach." },
  { key: "ACTIVE_PROJECT.md", label: "Active Project", icon: <FolderGit2 size={13} />, hint: "What it is working on right now." },
  { key: "MODEL.md", label: "Model", icon: <Cpu size={13} />, hint: "The REASONING model this agent runs on. Saving here routes the agent to it immediately." },
];

export default function AgentBuilderPage() {
  const [agents, setAgents] = useState<AgentCfg[]>([]);
  const [active, setActive] = useState<string>("");
  const [tab, setTab] = useState<string>("PERSONA.md");
  const [draft, setDraft] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [note, setNote] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const r = await fetch("/api/agents/config", { cache: "no-store" });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const j = (await r.json()) as { agents: AgentCfg[] };
      setAgents(j.agents);
      setActive((a) => a || j.agents[0]?.id || "");
    } catch (e) {
      setErr(e instanceof Error ? e.message : String(e));
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const current = agents.find((a) => a.id === active);
  const key = `${active}:${tab}`;
  const value = draft[key] ?? current?.files[tab] ?? "";

  async function save() {
    if (!current) return;
    setSaving(true);
    setNote(null);
    setErr(null);
    try {
      const r = await fetch("/api/agents/config", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id: current.id, file: tab, content: value }),
      });
      const j = (await r.json()) as { ok?: boolean; bytes?: number; error?: string };
      if (!j.ok) throw new Error(j.error || "save failed");
      setNote(`Saved ${tab} for ${current.label} (${j.bytes} bytes) → ${current.room}`);
      // reflect the saved value back
      setAgents((prev) =>
        prev.map((a) => (a.id === current.id ? { ...a, files: { ...a.files, [tab]: value } } : a)),
      );
      setDraft((d) => {
        const n = { ...d };
        delete n[key];
        return n;
      });
    } catch (e) {
      setErr(e instanceof Error ? e.message : String(e));
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="flex h-full min-h-0 flex-col gap-3 p-2 sm:p-4">
      <header className="flex flex-wrap items-baseline gap-2">
        <Users size={16} className="text-accent-cyan" />
        <h1 className="text-lg font-semibold text-foreground">Agent Builder</h1>
        <p className="text-[11px] text-muted">
          Build the agents: edit persona, mission, skills, tools and active project. Saves straight to the agent&apos;s
          palace room.
        </p>
      </header>

      {err && <p className="rounded border border-accent-red/40 px-2 py-1 text-[11px] text-accent-red">{err}</p>}
      {note && (
        <p className="flex items-center gap-1.5 rounded border border-accent-emerald/40 px-2 py-1 text-[11px] text-accent-emerald">
          <Check size={12} /> {note}
        </p>
      )}

      <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden md:flex-row md:gap-3">
        {/* agent list */}
        <aside className="flex shrink-0 gap-1.5 overflow-x-auto rounded-xl border border-panel-border bg-panel p-2 md:w-[260px] md:flex-col md:overflow-x-visible md:overflow-y-auto">
          <div className="mb-0.5 hidden px-1 text-[10px] font-semibold uppercase tracking-wider text-muted md:block">
            Agents
          </div>
          {agents.map((a) => (
            <button
              key={a.id}
              type="button"
              onClick={() => {
                setActive(a.id);
                setNote(null);
              }}
              className={`flex min-w-[190px] shrink-0 flex-col gap-0.5 rounded-lg border px-2.5 py-2 text-left transition md:min-w-0 md:w-full ${
                active === a.id ? "border-accent-cyan/60 bg-panel-hover" : "border-panel-border hover:bg-panel-hover/60"
              }`}
            >
              <span className="truncate text-[12px] font-medium text-foreground">{a.label}</span>
              <span className="truncate text-[9.5px] text-muted">{a.room}</span>
              {!a.exists && <span className="text-[9px] text-accent-amber">room missing</span>}
            </button>
          ))}
        </aside>

        {/* editor */}
        <section className="flex min-h-0 min-w-0 flex-1 flex-col rounded-xl border border-panel-border bg-panel">
          <div className="flex flex-wrap items-center gap-1 border-b border-panel-border px-1.5 py-1">
            {FILE_META.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => {
                  setTab(f.key);
                  setNote(null);
                }}
                className={`flex items-center gap-1.5 rounded px-2 py-1 text-[10px] font-semibold uppercase tracking-wider transition ${
                  tab === f.key ? "bg-panel-hover text-accent-cyan" : "text-muted hover:text-foreground"
                }`}
              >
                {f.icon} {f.label}
              </button>
            ))}
            <button
              type="button"
              onClick={save}
              disabled={saving || !current}
              className="ml-auto flex items-center gap-1.5 rounded border border-accent-cyan/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-cyan disabled:opacity-40"
            >
              {saving ? <Loader2 size={11} className="animate-spin" /> : <Save size={11} />} Save
            </button>
          </div>

          <p className="border-b border-panel-border px-3 py-1.5 text-[10px] text-muted">
            {FILE_META.find((f) => f.key === tab)?.hint}
          </p>

          {tab === "MODEL.md" && (
            <div className="flex flex-wrap items-center gap-2 border-b border-panel-border px-3 py-2">
              <span className="text-[10px] uppercase tracking-wider text-muted">pick</span>
              <select
                value=""
                onChange={(e) => {
                  if (e.target.value) setDraft((d) => ({ ...d, [key]: e.target.value }));
                }}
                className="rounded bg-panel-hover px-2 py-1 text-[11px] text-foreground outline-none"
              >
                <option value="">— choose a model to fill in —</option>
                {MODEL_CHOICES.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
              <span className="text-[9.5px] text-muted">…or type any OpenRouter id below and Save</span>
            </div>
          )}

          <textarea
            value={value}
            onChange={(e) => setDraft((d) => ({ ...d, [key]: e.target.value }))}
            spellCheck={false}
            className="min-h-0 flex-1 resize-none bg-black/30 p-3 font-mono text-[12px] leading-relaxed text-foreground outline-none"
            placeholder={`# ${current?.label ?? "agent"} — ${tab}\n\n(empty — type and Save)`}
          />
          <div className="flex items-center justify-between border-t border-panel-border px-3 py-1 text-[9.5px] text-muted">
            <span>{current ? `${current.room}/${tab}` : "—"}</span>
            <span>{value.length} chars</span>
          </div>
        </section>
      </div>
    </div>
  );
}
