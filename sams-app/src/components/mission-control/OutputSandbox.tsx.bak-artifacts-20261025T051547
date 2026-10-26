"use client";

import { useEffect, useRef, useState } from "react";
import { Activity, ExternalLink, Pause, Play } from "lucide-react";

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

type Tab = "activity" | "preview";

export function OutputSandbox() {
  const [tab, setTab] = useState<Tab>("activity");

  return (
    <div className="flex h-full min-h-0 flex-col rounded-lg border border-panel-border bg-black/20 backdrop-blur-md">
      <div className="flex items-center gap-1 border-b border-panel-border px-1.5 py-1">
        <button
          type="button"
          onClick={() => setTab("activity")}
          className={`flex items-center gap-1.5 rounded px-2 py-1 text-[10px] font-semibold uppercase tracking-wider transition-colors ${
            tab === "activity" ? "bg-panel-hover text-accent-cyan" : "text-muted hover:text-foreground"
          }`}
        >
          <Activity size={11} /> Live Activity
        </button>
        <button
          type="button"
          onClick={() => setTab("preview")}
          className={`flex items-center gap-1.5 rounded px-2 py-1 text-[10px] font-semibold uppercase tracking-wider transition-colors ${
            tab === "preview" ? "bg-panel-hover text-accent-cyan" : "text-muted hover:text-foreground"
          }`}
        >
          <ExternalLink size={11} /> Preview URL
        </button>
      </div>
      <div className="flex-1 min-h-0">{tab === "activity" ? <LiveActivity /> : <UrlPreview />}</div>
    </div>
  );
}
