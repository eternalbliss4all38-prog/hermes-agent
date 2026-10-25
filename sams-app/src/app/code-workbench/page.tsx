"use client";

import { useEffect, useState } from "react";
import { GitBranch } from "lucide-react";
import { FileTree } from "@/components/code-workbench/FileTree";

interface GitStatus {
  branch: string;
  changes: string[];
  recentCommits: string[];
  error?: string;
}

export default function CodeWorkbenchPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [content, setContent] = useState<string>("");
  const [truncated, setTruncated] = useState(false);
  const [git, setGit] = useState<GitStatus | null>(null);

  useEffect(() => {
    fetch("/api/workbench/git").then((r) => r.json()).then(setGit);
  }, []);

  useEffect(() => {
    if (!selected) return;
    fetch(`/api/workbench/file?path=${encodeURIComponent(selected)}`)
      .then((r) => r.json())
      .then((d) => {
        setContent(d.content ?? d.error ?? "");
        setTruncated(Boolean(d.truncated));
      });
  }, [selected]);

  return (
    <div className="grid h-full grid-cols-1 gap-3 overflow-y-auto p-4 sm:p-6 lg:h-full lg:grid-cols-[220px_1fr_240px] lg:overflow-hidden">
      <div className="max-h-64 overflow-y-auto rounded-lg border border-panel-border bg-panel lg:max-h-none">
        <FileTree onSelect={setSelected} selected={selected} />
      </div>

      <div className="flex min-h-[16rem] flex-col overflow-hidden rounded-lg border border-panel-border bg-black/30 backdrop-blur-md lg:min-h-0">
        <div className="border-b border-panel-border px-3 py-1.5 text-xs text-muted">{selected ?? "select a file"}</div>
        <pre className="flex-1 overflow-auto p-3 font-mono text-[11px] leading-relaxed text-zinc-300">
          {content || "—"}
          {truncated && "\n\n[truncated]"}
        </pre>
      </div>

      <div className="max-h-96 overflow-y-auto rounded-lg border border-panel-border bg-panel p-3 text-xs lg:max-h-none">
        <h3 className="mb-2 flex items-center gap-1.5 font-semibold text-muted">
          <GitBranch size={13} /> Git
        </h3>
        {!git ? (
          <p className="text-muted">loading…</p>
        ) : git.error ? (
          <p className="text-muted">{git.error} — not a git repository yet.</p>
        ) : (
          <>
            <p className="mb-2 text-muted">branch: {git.branch}</p>
            <p className="mb-1 text-[10px] uppercase text-muted">Working tree</p>
            {git.changes.length === 0 ? (
              <p className="mb-3 text-muted">clean</p>
            ) : (
              <ul className="mb-3 space-y-0.5 font-mono">
                {git.changes.map((c, i) => (
                  <li key={i} className="truncate text-muted">{c}</li>
                ))}
              </ul>
            )}
            <p className="mb-1 text-[10px] uppercase text-muted">Recent commits</p>
            <ul className="space-y-0.5 font-mono">
              {git.recentCommits.map((c, i) => (
                <li key={i} className="truncate text-muted">{c}</li>
              ))}
            </ul>
          </>
        )}
        <p className="mt-4 border-t border-panel-border pt-2 text-[10px] text-muted">
          Interactive terminal is intentionally not built — a web-exposed shell is a real security decision, not a default.
        </p>
      </div>
    </div>
  );
}
