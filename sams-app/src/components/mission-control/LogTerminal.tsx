"use client";

import { useEffect, useRef } from "react";
import clsx from "clsx";
import { Maximize2, Minimize2 } from "lucide-react";
import { useLogStore } from "@/store/useLogStore";

const SOURCES = ["hermes", "openclaw-gateway"] as const;

const SOURCE_COLOR: Record<string, string> = {
  hermes: "text-accent-violet",
  "openclaw-gateway": "text-accent-cyan",
  nextjs: "text-accent-emerald",
};

export function LogTerminal({
  fullscreen = false,
  onToggleFullscreen,
}: {
  fullscreen?: boolean;
  onToggleFullscreen?: () => void;
}) {
  const { lines, filter, setFilter, append, clear } = useLogStore();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    clear();
    const sources = SOURCES.map((source) => {
      const es = new EventSource(`/api/logs/stream?container=${source}`);
      es.addEventListener("log", (e) => {
        const text = JSON.parse((e as MessageEvent).data);
        append(source, text);
      });
      es.addEventListener("error", () => {
        append(source, "[stream error — reconnecting]");
      });
      return es;
    });
    return () => sources.forEach((s) => s.close());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  const visible = lines.filter((l) => {
    if (filter === "all") return true;
    if (filter === "errors") return /error|fail|exception/i.test(l.text);
    return l.source === filter;
  });

  return (
    <div className="flex h-full flex-col rounded-lg border border-panel-border bg-panel">
      <div className="flex items-center gap-1.5 border-b border-panel-border px-3 py-2">
        {(["all", "hermes", "openclaw-gateway", "errors"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={clsx(
              "rounded px-2 py-1 text-[11px]",
              filter === f ? "bg-panel-hover text-foreground" : "text-muted hover:text-foreground",
            )}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto text-[10px] text-muted">{visible.length} lines</span>
        {onToggleFullscreen && (
          <button
            onClick={onToggleFullscreen}
            className="rounded p-1 text-muted hover:bg-panel-hover hover:text-foreground"
            title={fullscreen ? "Exit fullscreen" : "Fullscreen"}
          >
            {fullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
          </button>
        )}
      </div>
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-2 font-mono text-[11px] leading-relaxed">
        {visible.length === 0 && <p className="text-muted">waiting for log output…</p>}
        {visible.map((l) => (
          <div key={l.id} className="whitespace-pre-wrap break-all">
            <span className={SOURCE_COLOR[l.source] ?? "text-accent-violet"}>[{l.source}]</span>{" "}
            <span className="text-foreground">{l.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
