"use client";

// src/components/mission-control/ArtifactStream.tsx
//
// Shared live-artifact plumbing for the visibility layer.
//   useArtifactStream()  -> subscribes to /api/artifacts/stream (SSE)
//   ArtifactViewer       -> renders an artifact in the sandbox (video/image/audio/page/text)
//
// The point: output the agent actually produces appears HERE, live, as it lands.

import { useEffect, useMemo, useState } from "react";
import { FileAudio, FileImage, FileText, Film, Globe, Loader2 } from "lucide-react";

export type ArtifactKind = "video" | "image" | "audio" | "text" | "file";

export interface Artifact {
  id: string;
  name: string;
  kind: ArtifactKind;
  size: number;
  mtime: number;
  url: string;
  source: string;
  path: string;
}

export function fmtSize(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(1)} MB`;
}

export function fmtTime(ms: number): string {
  try {
    return new Date(ms).toLocaleString();
  } catch {
    return "—";
  }
}

export function kindIcon(kind: ArtifactKind, size = 12) {
  if (kind === "video") return <Film size={size} />;
  if (kind === "image") return <FileImage size={size} />;
  if (kind === "audio") return <FileAudio size={size} />;
  if (kind === "text") return <FileText size={size} />;
  return <Globe size={size} />;
}

/** Subscribe to the live artifact feed. */
export function useArtifactStream(limit = 60) {
  const [artifacts, setArtifacts] = useState<Artifact[]>([]);
  const [connected, setConnected] = useState(false);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);

  useEffect(() => {
    const es = new EventSource("/api/artifacts/stream");
    es.addEventListener("connected", () => setConnected(true));
    es.addEventListener("snapshot", (e) => {
      try {
        const d = JSON.parse((e as MessageEvent).data) as { artifacts: Artifact[]; at: string };
        setArtifacts(d.artifacts.slice(0, limit));
        setUpdatedAt(d.at);
      } catch {
        /* ignore malformed frame */
      }
    });
    es.addEventListener("heartbeat", () => setUpdatedAt(new Date().toISOString()));
    es.addEventListener("error", () => setConnected(false));
    es.onerror = () => setConnected(false);
    return () => es.close();
  }, [limit]);

  return { artifacts, connected, updatedAt };
}

/**
 * Render one artifact. Video plays inline (so a finishing render is watched,
 * not described), images show directly, HTML renders in a sandboxed iframe,
 * text shows as text.
 */
export function ArtifactViewer({ artifact }: { artifact: Artifact | null }) {
  const [frames, setFrames] = useState(0);

  // Reset the loading counter whenever we switch artifacts.
  useEffect(() => {
    setFrames(0);
  }, [artifact?.id]);

  useEffect(() => {
    if (!artifact || artifact.kind !== "video") return;
    const iv = setInterval(() => setFrames((f) => f + 1), 1000);
    return () => clearInterval(iv);
  }, [artifact]);

  const src = useMemo(() => (artifact ? `${artifact.url}&v=${Math.round(artifact.mtime)}` : ""), [artifact]);

  if (!artifact) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 text-center text-xs text-muted">
        <Loader2 size={16} className="animate-spin opacity-40" />
        <p>Sandbox armed — waiting for the next artifact…</p>
        <p className="max-w-xs text-[10px] opacity-70">
          Renders, screenshots and built pages appear here the moment they land.
        </p>
      </div>
    );
  }

  const header = (
    <div className="flex items-center gap-2 border-b border-panel-border bg-black/30 px-2.5 py-1.5 text-[10px]">
      <span className="text-accent-cyan">{kindIcon(artifact.kind, 11)}</span>
      <span className="min-w-0 flex-1 truncate font-mono text-foreground" title={artifact.path}>
        {artifact.name}
      </span>
      <span className="shrink-0 text-muted">{fmtSize(artifact.size)}</span>
    </div>
  );

  let body: React.ReactNode;
  if (artifact.kind === "video") {
    body = (
      <video
        key={artifact.id}
        src={src}
        controls
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full bg-black object-contain"
        onLoadedData={() => setFrames(-1)}
      />
    );
  } else if (artifact.kind === "image") {
    body = <img src={src} alt={artifact.name} className="h-full w-full bg-black object-contain" />;
  } else if (artifact.kind === "audio") {
    body = (
      <div className="flex h-full items-center justify-center p-4">
        <audio src={src} controls className="w-full" />
      </div>
    );
  } else if (artifact.kind === "text") {
    body = (
      <iframe
        src={src}
        title={artifact.name}
        className="h-full w-full bg-white"
        sandbox="allow-scripts allow-same-origin allow-forms"
      />
    );
  } else {
    body = (
      <div className="flex h-full items-center justify-center text-xs text-muted">
        <a href={src} target="_blank" rel="noreferrer" className="underline">
          open {artifact.name}
        </a>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-0 flex-col">
      {header}
      <div className="min-h-0 flex-1">{body}</div>
    </div>
  );
}
