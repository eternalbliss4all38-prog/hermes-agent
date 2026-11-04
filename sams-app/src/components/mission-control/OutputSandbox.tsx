"use client";

import { useEffect, useRef, useState } from "react";
import { Activity, Boxes, ExternalLink, ListChecks, Pause, Play, RefreshCw } from "lucide-react";
import {
  ArtifactViewer,
  fmtSize,
  fmtTime,
  kindIcon,
  useArtifactStream,
  type Artifact,
} from "@/components/mission-control/ArtifactStream";

/* ── Live activity: streams what Hermes is actually doing right now ───────── */
function LiveActivity() {
  const [lines, setLines] = useState<string[]>([]);
  const [connected, setConnected] = useState(false);
  const [follow, setFollow] = useState(true);
  const boxRef = useRef<HTMLDivElement>(null);
  const followRef = useRef(true);

  useEffect(() => {
    followRef.current = follow;
  }, [follow]);

  useEffect(() => {
    const es = new EventSource("/api/activity/stream");
    es.addEventListener("connected", () => setConnected(true));
    es.addEventListener("log", (e) => {
      let text = "";
      try {
        text = JSON.parse((e as MessageEvent).data);
      } catch {
        text = String((e as MessageEvent).data ?? "");
      }
      setLines((prev) => {
        const next = [...prev, text];
        return next.length > 600 ? next.slice(next.length - 600) : next;
      });
    });
    es.addEventListener("error", () => setConnected(false));
    es.onerror = () => setConnected(false);
    return () => es.close();
  }, []);

  useEffect(() => {
    const el = boxRef.current;
    if (el && followRef.current) el.scrollTop = el.scrollHeight;
  }, [lines]);

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex items-center justify-between gap-2 border-b border-panel-border bg-black/30 px-2.5 py-1.5">
        <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              connected ? "bg-accent-emerald status-glow-emerald animate-pulse" : "bg-accent-red status-glow-red"
            }`}
          />
          <span className={connected ? "text-accent-emerald" : "text-accent-red"}>
            {connected ? "LIVE" : "DISCONNECTED"}
          </span>
          <span className="text-muted">· hermes activity</span>
        </span>
        <div className="flex items-center gap-2">
          <span className="hidden text-[10px] font-mono text-muted sm:inline">{lines.length} lines</span>
          <button
            type="button"
            onClick={() => setFollow((f) => !f)}
            className="flex items-center gap-1 rounded border border-panel-border px-1.5 py-0.5 text-[10px] text-muted hover:text-foreground"
            title={follow ? "Following" : "Paused"}
          >
            {follow ? <Pause size={10} /> : <Play size={10} />}
            {follow ? "Following" : "Paused"}
          </button>
        </div>
      </div>
      <div
        ref={boxRef}
        onScroll={(e) => {
          const el = e.currentTarget;
          followRef.current = el.scrollHeight - el.scrollTop - el.clientHeight < 24;
        }}
        className="flex-1 min-h-0 overflow-y-auto bg-black/40 px-2.5 py-2 font-mono text-[10.5px] leading-relaxed"
      >
        {lines.length === 0 && (
          <p className="text-muted">
            {connected ? "Connected — waiting for agent activity…" : "Connecting to the agent activity feed…"}
          </p>
        )}
        {lines.map((l, i) => {
          const low = l.toLowerCase();
          const isErr = /\b(error|failed|traceback|exception)\b/.test(low);
          const isWarn = /\b(warn)\b/.test(low);
          const isTool = /tool .+(completed|running|started)/.test(low);
          const isMsg = /(delivered|steer|assistant|response)/.test(low);
          const color = isErr
            ? "text-accent-red"
            : isWarn
              ? "text-accent-amber"
              : isTool
                ? "text-accent-cyan"
                : isMsg
                  ? "text-accent-emerald"
                  : "text-muted";
          return (
            <div key={i} className="whitespace-pre-wrap break-words select-text">
              <span className={color}>{l}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Work: EVERY item Hermes is doing, selectable, each with raw evidence ──── */
type WorkItem = {
  id: string;
  title: string;
  status: string;
  source: string;
  updatedAt?: number;
  evidence?: string;
};

function tone(status: string): string {
  const t = (status || "").toLowerCase();
  if (/(fail|error|dead|denied)/.test(t)) return "text-accent-red";
  if (/(done|ok|success|complete|online|scheduled|pass)/.test(t)) return "text-accent-emerald";
  if (/(run|pending|progress|queue|wait)/.test(t)) return "text-accent-amber";
  return "text-muted";
}

function WorkView() {
  const [items, setItems] = useState<WorkItem[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [sel, setSel] = useState<string | null>(null);
  const [updatedAt, setUpdatedAt] = useState<number | null>(null);

  useEffect(() => {
    let alive = true;
    const tick = async () => {
      try {
        const r = await fetch("/api/workitems", { cache: "no-store" });
        const j = await r.json();
        if (!alive) return;
        setItems(Array.isArray(j.items) ? j.items : []);
        setErrors(Array.isArray(j.errors) ? j.errors : []);
        setUpdatedAt(j.generatedAt || Date.now());
      } catch {
        if (alive) setErrors(["work-items service unreachable"]);
      }
    };
    tick();
    const iv = setInterval(tick, 5000);
    return () => {
      alive = false;
      clearInterval(iv);
    };
  }, []);

  const selected = items.find((i) => i.id === sel) || items[0] || null;
  const failed = items.filter((i) => /(fail|error|dead)/.test(i.status.toLowerCase())).length;
  const active = items.filter((i) => /(run|pending|progress|queue)/.test(i.status.toLowerCase())).length;

  return (
    <div className="flex h-full min-h-0 flex-col md:flex-row">
      <div className="flex h-1/2 min-h-0 flex-col border-b border-panel-border md:h-full md:w-72 md:border-b-0 md:border-r">
        <div className="flex items-center justify-between gap-1 border-b border-panel-border bg-black/30 px-2.5 py-1.5 text-[10px] font-mono uppercase tracking-wider">
          <span className="flex items-center gap-1.5 text-foreground">
            <ListChecks size={11} /> Work · {items.length}
          </span>
          <span className="flex items-center gap-2">
            <span className="text-accent-amber">{active} active</span>
            <span className={failed ? "text-accent-red" : "text-muted"}>{failed} failed</span>
          </span>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto">
          {items.length === 0 && <p className="p-2 text-[10px] text-muted">Loading work items…</p>}
          {items.map((it) => (
            <button
              key={it.id}
              type="button"
              onClick={() => setSel(it.id)}
              className={`flex w-full items-start gap-2 border-b border-panel-border/60 px-2 py-1.5 text-left text-[10px] hover:bg-panel-hover ${
                selected?.id === it.id ? "bg-panel-hover" : ""
              }`}
              title={it.title}
            >
              <span className={`mt-0.5 shrink-0 ${tone(it.status)}`}>●</span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-foreground">{it.title}</span>
                <span className="block truncate text-muted">
                  <span className={tone(it.status)}>{it.status}</span> · {it.source}
                  {it.updatedAt ? ` · ${new Date(it.updatedAt).toLocaleTimeString()}` : ""}
                </span>
              </span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1 border-t border-panel-border px-2 py-1 text-[9px] text-muted">
          <RefreshCw size={9} /> {updatedAt ? new Date(updatedAt).toLocaleTimeString() : "…"}
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-3">
        {selected ? (
          <div className="space-y-3">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-muted">Item</div>
              <div className="text-sm font-semibold text-foreground">{selected.title}</div>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px]">
              <span className="text-muted">
                Status: <span className={tone(selected.status)}>{selected.status}</span>
              </span>
              <span className="text-muted">
                Source: <span className="text-foreground">{selected.source}</span>
              </span>
              {selected.updatedAt ? (
                <span className="text-muted">
                  Updated: <span className="text-foreground">{new Date(selected.updatedAt).toLocaleString()}</span>
                </span>
              ) : null}
            </div>
            <div>
              <div className="mb-1 text-[10px] font-mono uppercase tracking-wider text-muted">Evidence (raw)</div>
              <pre className="max-h-[60vh] overflow-auto whitespace-pre-wrap break-words rounded border border-panel-border bg-black/40 p-2 text-[10.5px] text-muted">
                {selected.evidence || "(no evidence recorded — treat as unverified)"}
              </pre>
            </div>
            {errors.length > 0 && (
              <div className="text-[10px] text-accent-amber">sources with problems: {errors.join("; ")}</div>
            )}
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-muted">
            Select an item to see where it is at.
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Live Preview: the app being built, rendered live and interactive ─────── */
type PreviewTarget = { url: string | null; label?: string; updatedAt?: number; error?: string };

function LivePreview() {
  const [target, setTarget] = useState<PreviewTarget | null>(null);
  const [manual, setManual] = useState("");
  const [override, setOverride] = useState<string | null>(null);
  const [nonce, setNonce] = useState(0);

  useEffect(() => {
    let alive = true;
    const tick = async () => {
      try {
        const r = await fetch("/api/preview/target", { cache: "no-store" });
        const j = (await r.json()) as PreviewTarget;
        if (alive) setTarget(j);
      } catch {
        if (alive) setTarget({ url: null, error: "preview target service unreachable" });
      }
    };
    tick();
    const iv = setInterval(tick, 4000);
    return () => {
      alive = false;
      clearInterval(iv);
    };
  }, []);

  const url = override ?? target?.url ?? null;
  const label = override ? "manual" : target?.label || "current build";

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex items-center justify-between gap-2 border-b border-panel-border bg-black/30 px-2.5 py-1.5">
        <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              url ? "bg-accent-emerald status-glow-emerald animate-pulse" : "bg-accent-red status-glow-red"
            }`}
          />
          <span className={url ? "text-accent-emerald" : "text-accent-red"}>{url ? "LIVE" : "NO TARGET"}</span>
          <span className="text-muted">· {label}</span>
        </span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setNonce((n) => n + 1)}
            title="Reload the preview"
            className="flex items-center gap-1 rounded border border-panel-border px-1.5 py-0.5 text-[10px] text-muted hover:text-foreground"
          >
            <RefreshCw size={10} /> Reload
          </button>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 rounded border border-panel-border px-1.5 py-0.5 text-[10px] text-muted hover:text-foreground"
            >
              <ExternalLink size={10} /> Open
            </a>
          )}
        </div>
      </div>
      <form
        className="flex gap-1.5 border-b border-panel-border p-2"
        onSubmit={(e) => {
          e.preventDefault();
          setOverride(manual.trim() || null);
          setNonce((n) => n + 1);
        }}
      >
        <input
          value={manual}
          onChange={(e) => setManual(e.target.value)}
          placeholder="Override URL (blank = follow the live build target)…"
          className="flex-1 rounded bg-panel px-2 py-1 text-[11px] text-foreground outline-none placeholder:text-muted"
        />
        <button type="submit" className="rounded bg-panel-hover px-2 py-1 text-[11px] text-muted hover:text-foreground">
          Load
        </button>
        {override && (
          <button
            type="button"
            onClick={() => {
              setOverride(null);
              setManual("");
              setNonce((n) => n + 1);
            }}
            className="rounded bg-panel-hover px-2 py-1 text-[11px] text-muted hover:text-foreground"
          >
            Live
          </button>
        )}
      </form>
      <div className="flex-1 min-h-0">
        {url ? (
          <iframe
            key={nonce}
            src={url}
            title="Live preview"
            className="h-full w-full bg-white"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-1 px-4 text-center text-xs text-muted">
            <p>No live build target yet.</p>
            <p className="text-[10px]">
              {target?.error
                ? `target service: ${target.error}`
                : "It appears here automatically the moment Hermes starts building an app."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Artifacts: live output, rendered ─────────────────────────────────────── */
function ArtifactsView() {
  const { artifacts, connected, updatedAt } = useArtifactStream(60);
  const [picked, setPicked] = useState<string | null>(null);

  const selected: Artifact | null =
    (picked && artifacts.find((a) => a.id === picked)) || artifacts[0] || null;

  return (
    <div className="flex h-full min-h-0 flex-col md:flex-row">
      <div className="flex h-1/2 min-h-0 flex-col border-b border-panel-border md:h-full md:w-56 md:border-b-0 md:border-r">
        <div className="flex items-center justify-between gap-1 border-b border-panel-border bg-black/30 px-2.5 py-1.5 text-[10px] font-mono uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                connected ? "bg-accent-emerald status-glow-emerald animate-pulse" : "bg-accent-red status-glow-red"
              }`}
            />
            <span className={connected ? "text-accent-emerald" : "text-accent-red"}>
              {connected ? "LIVE" : "OFFLINE"}
            </span>
          </span>
          <span className="text-muted">{artifacts.length} artifacts</span>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto">
          {artifacts.length === 0 && (
            <p className="p-2 text-[10px] text-muted">
              {connected ? "No artifacts yet — they appear here as work lands." : "Connecting…"}
            </p>
          )}
          {artifacts.map((a) => (
            <button
              key={a.id}
              type="button"
              onClick={() => setPicked(a.id)}
              className={`flex w-full items-center gap-1.5 border-b border-panel-border/60 px-2 py-1.5 text-left text-[10px] hover:bg-panel-hover ${
                selected?.id === a.id ? "bg-panel-hover" : ""
              }`}
              title={a.path}
            >
              <span className="shrink-0 text-accent-cyan">{kindIcon(a.kind, 11)}</span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-foreground">{a.name}</span>
                <span className="block truncate text-muted">
                  {a.source} · {fmtSize(a.size)} · {fmtTime(a.mtime)}
                </span>
              </span>
            </button>
          ))}
        </div>
        {updatedAt && (
          <div className="flex items-center gap-1 border-t border-panel-border px-2 py-1 text-[9px] text-muted">
            <RefreshCw size={9} /> {new Date(updatedAt).toLocaleTimeString()}
          </div>
        )}
      </div>
      <div className="min-h-0 flex-1">
        <ArtifactViewer artifact={selected} />
      </div>
    </div>
  );
}

type Tab = "work" | "activity" | "artifacts" | "preview";

export function OutputSandbox({ initialTab = "work" }: { initialTab?: Tab } = {}) {
  const [tab, setTab] = useState<Tab>(initialTab);
  useEffect(() => {
    setTab(initialTab);
  }, [initialTab]);

  const tabBtn = (id: Tab, label: string, icon: React.ReactNode) => (
    <button
      type="button"
      onClick={() => setTab(id)}
      className={`flex items-center gap-1.5 rounded px-2 py-1 text-[10px] font-semibold uppercase tracking-wider transition-colors ${
        tab === id ? "bg-panel-hover text-accent-cyan" : "text-muted hover:text-foreground"
      }`}
    >
      {icon} {label}
    </button>
  );

  return (
    <div className="flex h-full min-h-0 flex-col rounded-lg border border-panel-border bg-black/20 backdrop-blur-md">
      <div className="flex items-center gap-1 border-b border-panel-border px-1.5 py-1">
        {tabBtn("work", "Work", <ListChecks size={11} />)}
        {tabBtn("preview", "Live Preview", <ExternalLink size={11} />)}
        {tabBtn("artifacts", "Artifacts", <Boxes size={11} />)}
        {tabBtn("activity", "Live Activity", <Activity size={11} />)}
      </div>
      <div className="flex-1 min-h-0">
        {tab === "activity" ? (
          <LiveActivity />
        ) : tab === "artifacts" ? (
          <ArtifactsView />
        ) : tab === "preview" ? (
          <LivePreview />
        ) : (
          <WorkView />
        )}
      </div>
    </div>
  );
}
