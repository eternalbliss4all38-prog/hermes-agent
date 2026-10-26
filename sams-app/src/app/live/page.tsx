"use client";

// src/app/live/page.tsx
//
// Live Console — a real-time view of what the Agent OS is doing, read from real
// sources on disk (agent log, cron run reports, detached build ledger, artifact
// dir). Polls /api/live every 5s. When a source is unreadable it renders the
// REAL reason (never a silent blank, never mock rows).

import { useCallback, useEffect, useState } from "react";
import { Activity, ScrollText, Hammer, FileImage, RefreshCw, AlertTriangle } from "lucide-react";
import { kindIcon, useArtifactStream } from "@/components/mission-control/ArtifactStream";

interface ActivityLine {
  ts: string | null;
  line: string;
}
interface RunEntry {
  jobId: string;
  file: string;
  title: string;
  runAt: string | null;
  mtime: number | null;
  status: "ok" | "noop" | "warn" | "unknown";
}
interface BuildEntry {
  name: string;
  state: string;
  startedAt: string | null;
  exitCode: number | null;
  hasDone: boolean;
}
interface ArtifactEntry {
  name: string;
  mtime: number;
  size: number;
}
interface Source<T> {
  ok: boolean;
  data: T;
  error?: string;
  via?: string;
}
interface Feed {
  generatedAt: string;
  activity: Source<ActivityLine[]>;
  runs: Source<RunEntry[]>;
  builds: Source<BuildEntry[]>;
  artifacts: Source<ArtifactEntry[]>;
}

function fmtSize(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(1)} MB`;
}

function fmtTime(ms: number | null): string {
  if (!ms) return "—";
  try {
    return new Date(ms).toLocaleString();
  } catch {
    return "—";
  }
}

const STATUS_CLASS: Record<RunEntry["status"], string> = {
  ok: "border-accent-emerald/40 text-accent-emerald",
  noop: "border-panel-border text-muted",
  warn: "border-accent-amber/40 text-accent-amber",
  unknown: "border-accent-red/40 text-accent-red",
};

function Panel({
  title,
  icon,
  via,
  ok,
  error,
  empty,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  via?: string;
  ok: boolean;
  error?: string;
  empty: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-0 flex-col rounded-lg border border-panel-border bg-panel">
      <header className="flex items-center gap-2 border-b border-panel-border px-3 py-2">
        <span className="text-muted">{icon}</span>
        <h2 className="text-xs font-medium uppercase tracking-wide text-foreground">{title}</h2>
        {via && <span className="ml-auto text-[10px] text-muted">via {via}</span>}
      </header>
      <div className="min-h-0 flex-1 overflow-y-auto p-2">
        {!ok ? (
          <p className="flex items-start gap-1.5 text-[11px] text-accent-red">
            <AlertTriangle size={12} className="mt-0.5 shrink-0" />
            <span>{error || "unreadable"}</span>
          </p>
        ) : empty ? (
          <p className="text-[11px] text-muted">empty — source read OK, no rows present</p>
        ) : (
          children
        )}
      </div>
    </section>
  );
}

export default function LivePage() {
  const [feed, setFeed] = useState<Feed | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const r = await fetch("/api/live", { cache: "no-store" });
      if (!r.ok) {
        setFetchError(`/api/live -> HTTP ${r.status}`);
        return;
      }
      setFeed((await r.json()) as Feed);
      setFetchError(null);
    } catch (e) {
      setFetchError(e instanceof Error ? e.message : String(e));
    }
  }, []);

  useEffect(() => {
    load();
    const id = setInterval(load, 5000);
    return () => clearInterval(id);
  }, [load]);

  const a = feed?.activity;
  const ru = feed?.runs;
  const bu = feed?.builds;
  // Artifacts come from the live SSE stream (real-time), not the 5s poll,
  // so new output appears the instant it lands.
  const { artifacts, connected: artifactsLive } = useArtifactStream(40);

  return (
    <div className="flex h-full flex-col gap-3 p-3 sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <Activity size={16} className="text-accent-cyan" />
        <h1 className="text-sm font-semibold text-foreground">Live Console — what the Agent OS is doing</h1>
        <span className="ml-auto flex items-center gap-1 text-[10px] text-muted">
          <RefreshCw size={11} />
          {feed ? `updated ${new Date(feed.generatedAt).toLocaleTimeString()}` : "loading…"} · auto-refresh 5s
        </span>
      </div>

      {fetchError && (
        <p className="flex items-center gap-1.5 rounded border border-accent-red/40 bg-panel px-2 py-1 text-[11px] text-accent-red">
          <AlertTriangle size={12} /> feed error: {fetchError} (still polling)
        </p>
      )}

      <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 lg:grid-cols-2">
        <Panel
          title="Activity (agent.log tail)"
          icon={<Activity size={13} />}
          via={a?.via}
          ok={a?.ok ?? true}
          error={a?.error}
          empty={!!a && a.ok && a.data.length === 0}
        >
          <div className="space-y-0.5 font-mono text-[10px] leading-tight text-foreground/90">
            {(a?.data ?? []).map((l, i) => (
              <div key={i} className="flex gap-2 whitespace-pre-wrap break-all">
                <span className="shrink-0 text-muted">{l.ts ? l.ts.slice(11) : "  ·  "}</span>
                <span>{l.line}</span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel
          title="Recent Runs"
          icon={<ScrollText size={13} />}
          via={ru?.via}
          ok={ru?.ok ?? true}
          error={ru?.error}
          empty={!!ru && ru.ok && ru.data.length === 0}
        >
          <div className="space-y-1">
            {(ru?.data ?? []).map((r, i) => (
              <div key={i} className="flex items-center gap-2 rounded border border-panel-border px-2 py-1 text-[10px]">
                <span className={`shrink-0 rounded-full border px-1.5 py-0.5 uppercase ${STATUS_CLASS[r.status]}`}>
                  {r.status}
                </span>
                <span className="min-w-0 flex-1 truncate text-foreground" title={r.title}>
                  {r.title}
                </span>
                <span className="shrink-0 text-muted">{r.runAt || r.file}</span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel
          title="Build Ledger"
          icon={<Hammer size={13} />}
          via={bu?.via}
          ok={bu?.ok ?? true}
          error={bu?.error}
          empty={!!bu && bu.ok && bu.data.length === 0}
        >
          <div className="space-y-1">
            {(bu?.data ?? []).map((b, i) => (
              <div key={i} className="flex items-center gap-2 rounded border border-panel-border px-2 py-1 text-[10px]">
                <span className="min-w-0 flex-1 truncate text-foreground">{b.name}</span>
                <span className="shrink-0 text-muted">{b.state}</span>
                <span className="shrink-0 text-muted">exit {b.exitCode ?? "—"}</span>
                <span className={`shrink-0 ${b.hasDone ? "text-accent-emerald" : "text-muted"}`}>
                  {b.hasDone ? "DONE" : "—"}
                </span>
                <span className="shrink-0 text-muted">{b.startedAt ? new Date(b.startedAt).toLocaleString() : "—"}</span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel
          title="Artifacts — live output"
          icon={<FileImage size={13} />}
          via="stream"
          ok
          empty={artifacts.length === 0}
        >
          <div className="mb-1.5 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                artifactsLive ? "bg-accent-emerald status-glow-emerald animate-pulse" : "bg-accent-red status-glow-red"
              }`}
            />
            <span className={artifactsLive ? "text-accent-emerald" : "text-accent-red"}>
              {artifactsLive ? "LIVE" : "OFFLINE"}
            </span>
            <span className="text-muted">· {artifacts.length} artifacts</span>
          </div>
          <div className="space-y-1">
            {artifacts.map((f) => (
              <div key={f.id} className="flex items-center gap-2 rounded border border-panel-border px-2 py-1 text-[10px]">
                <span className="shrink-0 text-accent-cyan">{kindIcon(f.kind, 11)}</span>
                <span className="min-w-0 flex-1 truncate text-foreground" title={f.path}>
                  {f.name}
                </span>
                <span className="shrink-0 text-muted">{f.source}</span>
                <span className="shrink-0 text-muted">{fmtSize(f.size)}</span>
                <span className="shrink-0 text-muted">{fmtTime(f.mtime)}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
