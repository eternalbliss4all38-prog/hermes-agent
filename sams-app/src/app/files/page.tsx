"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Folder, File as FileIcon, Trash2, ChevronRight, ArrowUp, X } from "lucide-react";
import { listFiles, readFile, deleteFile, type HermesFileEntry, type HermesFileReadResponse } from "@/lib/hermes-rest";

function formatSize(bytes: number | null): string {
  if (bytes === null) return "—";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatMtime(unixSeconds: number): string {
  return new Date(unixSeconds * 1000).toLocaleString();
}

function decodeBase64Text(dataUrl: string): string {
  const base64 = dataUrl.split(",")[1] ?? "";
  const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function breadcrumbs(path: string): { label: string; path: string }[] {
  const parts = path.split("/").filter(Boolean);
  const crumbs = [{ label: "root", path: "" }];
  let acc = "";
  for (const part of parts) {
    acc = acc ? `${acc}/${part}` : part;
    crumbs.push({ label: part, path: acc });
  }
  return crumbs;
}

function FilePreview({ file, onClose }: { file: HermesFileReadResponse; onClose: () => void }) {
  const isImage = file.mime_type.startsWith("image/");
  const isText = file.mime_type.startsWith("text/") || file.mime_type === "application/json";
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6" onClick={onClose}>
      <div
        className="flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-panel-border bg-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-panel-border px-4 py-3">
          <span className="truncate text-sm font-medium text-foreground">{file.name}</span>
          <button onClick={onClose} aria-label="Close preview" className="rounded p-1 text-muted hover:bg-panel-hover hover:text-foreground">
            <X size={16} />
          </button>
        </div>
        <div className="overflow-auto p-4">
          {isImage && <img src={file.data_url} alt={file.name} className="mx-auto max-h-[65vh] rounded-lg" />}
          {isText && (
            <pre className="whitespace-pre-wrap break-words font-mono text-xs text-muted">
              {decodeBase64Text(file.data_url)}
            </pre>
          )}
          {!isImage && !isText && (
            <p className="text-sm text-muted">
              No inline preview for {file.mime_type} ({formatSize(file.size)}).
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function FilesBrowserInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = searchParams.get("path") ?? "";

  const [data, setData] = useState<{ entries: HermesFileEntry[]; parent: string | null } | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<HermesFileReadResponse | null>(null);

  const load = useCallback(async (targetPath: string) => {
    setStatus("loading");
    try {
      const res = await listFiles(targetPath || undefined);
      setData({ entries: res.entries, parent: res.parent });
      setStatus("ready");
    } catch (err) {
      setError((err as Error).message);
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    load(path);
  }, [path, load]);

  function navigate(nextPath: string) {
    router.push(nextPath ? `/files?path=${encodeURIComponent(nextPath)}` : "/files");
  }

  async function handleEntryClick(entry: HermesFileEntry) {
    if (entry.is_directory) {
      navigate(entry.path);
      return;
    }
    try {
      const file = await readFile(entry.path);
      setPreview(file);
    } catch (err) {
      setError((err as Error).message);
    }
  }

  async function handleDelete(entry: HermesFileEntry) {
    if (!data) return;
    const previous = data;
    setData({ ...data, entries: data.entries.filter((e) => e.path !== entry.path) });
    try {
      await deleteFile(entry.path, entry.is_directory);
    } catch (err) {
      setData(previous);
      setError((err as Error).message);
    }
  }

  const crumbs = breadcrumbs(path);
  const sortedEntries = data
    ? [...data.entries].sort((a, b) => (a.is_directory === b.is_directory ? a.name.localeCompare(b.name) : a.is_directory ? -1 : 1))
    : [];

  return (
    <div className="mx-auto flex h-full max-w-3xl flex-col gap-4 overflow-y-auto p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-foreground">Files</h1>
        {data?.parent !== null && data?.parent !== undefined && (
          <button
            onClick={() => navigate(data.parent ?? "")}
            className="flex items-center gap-1.5 rounded-lg border border-panel-border px-2.5 py-1.5 text-xs text-muted hover:bg-panel-hover hover:text-foreground"
          >
            <ArrowUp size={13} /> Up
          </button>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-1 text-xs text-muted">
        {crumbs.map((crumb, i) => (
          <span key={crumb.path} className="flex items-center gap-1">
            <button onClick={() => navigate(crumb.path)} className="hover:text-foreground">
              {crumb.label}
            </button>
            {i < crumbs.length - 1 && <ChevronRight size={12} className="text-muted/40" />}
          </span>
        ))}
      </div>

      {status === "loading" && <p className="text-sm text-muted">Loading…</p>}
      {status === "error" && <p className="text-sm text-accent-red">{error ?? "Could not load files."}</p>}
      {status === "ready" && sortedEntries.length === 0 && <p className="text-sm text-muted">Empty directory.</p>}

      <div className="flex flex-col gap-1.5">
        {sortedEntries.map((entry) => (
          <div
            key={entry.path}
            className="group flex cursor-pointer items-center gap-3 rounded-xl border border-panel-border bg-panel p-3 transition-colors hover:border-accent-cyan/30"
            onClick={() => handleEntryClick(entry)}
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-panel-hover text-muted">
              {entry.is_directory ? <Folder size={15} /> : <FileIcon size={15} />}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm text-foreground">{entry.name}</p>
              <p className="text-xs text-muted">
                {entry.is_directory ? "folder" : formatSize(entry.size)} · {formatMtime(entry.mtime)}
              </p>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(entry);
              }}
              aria-label={`Delete ${entry.name}`}
              className="shrink-0 rounded-lg p-2 text-muted opacity-0 transition-opacity hover:bg-accent-red/10 hover:text-accent-red group-hover:opacity-100"
            >
              <Trash2 size={15} />
            </button>
          </div>
        ))}
      </div>

      {preview && <FilePreview file={preview} onClose={() => setPreview(null)} />}
    </div>
  );
}

export default function FilesPage() {
  return (
    <Suspense fallback={<div className="flex h-full flex-col" />}>
      <FilesBrowserInner />
    </Suspense>
  );
}
