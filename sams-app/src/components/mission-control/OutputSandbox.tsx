"use client";

import { useEffect, useRef, useState } from "react";
import { Activity, Boxes, ExternalLink, Pause, Play, RefreshCw } from "lucide-react";
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

/* ── Manual iframe preview (secondary) ────────────────────────────────────── */
function UrlPreview() {
  const [input, setInput] = useState("");
  const [url, setUrl] = useState<string | null>(null);

  return (
    <div className="flex h-full min-h-0 flex-col">
      <form
        className="flex gap-1.5 border-b border-panel-border p-2"
        onSubmit={(e) => {
          e.preventDefault();
          setUrl(input.trim() || null);
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Preview URL (e.g. a locally running dev server)…"
          className="flex-1 rounded bg-panel px-2 py-1 text-[11px] text-foreground outline-none placeholder:text-muted"
        />
        <button type="submit" className="rounded bg-panel-hover px-2 py-1 text-[11px] text-muted hover:text-foreground">
          Load
        </button>
      </form>
      <div className="flex-1 min-h-0">
        {url ? (
          <iframe
            src={url}
            className="h-full w-full bg-white"
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-muted">
            No URL loaded — paste one above to render a page.
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Artifacts: live output, rendered ─────────────────────────────────────── */
//  Left: the live list of what the agent has produced (text, newest first).
//  Right: the selected/newest artifact rendered — video plays, image shows,
//  page renders. Newest auto-selects unless the user picks one.
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

type Tab = "activity" | "artifacts" | "preview";

export function OutputSandbox({ initialTab = "artifacts" }: { initialTab?: Tab } = {}) {
  const [tab, setTab] = useState<Tab>(initialTab);
  // The mobile Preview/Logs buttons drive the tab; follow them when they change.
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
        {tabBtn("artifacts", "Artifacts", <Boxes size={11} />)}
        {tabBtn("activity", "Live Activity", <Activity size={11} />)}
        {tabBtn("preview", "Preview URL", <ExternalLink size={11} />)}
      </div>
      <div className="flex-1 min-h-0">
        {tab === "activity" ? <LiveActivity /> : tab === "preview" ? <UrlPreview /> : <ArtifactsView />}
      </div>
    </div>
  );
}
