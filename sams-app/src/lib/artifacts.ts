// src/lib/artifacts.ts
//
// The artifact registry — "what is the Agent OS actually producing right now".
//
// Every other visibility panel answers "what is the agent DOING" (log tail) or
// "what did it record" (cron/build ledgers). This one answers the question the
// operator actually cares about: WHAT DID IT MAKE, and can I look at it.
//
// Sources are REAL output directories, never a mock list:
//   campaigns/*   -> Mission Control's own public/campaigns tree      (fs)
//   screenshots/  -> /home/sams/screenshots                          (fs)
//   openmontage/  -> rendered video/images under the OM projects dir  (docker)
//   builds/       -> detached-build outputs (media only)              (docker)
//
// openmontage/ and builds/ live under a mode-700 tree the uid-1000 server
// cannot traverse, so they are listed/served through `docker exec hermes`
// (the same mechanism the live activity feed already relies on).

import { execFile } from "node:child_process";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

export type ArtifactKind = "video" | "image" | "audio" | "text" | "file";

export interface Artifact {
  /** Opaque, URL-safe id (also encodes how to serve it). */
  id: string;
  name: string;
  kind: ArtifactKind;
  size: number;
  mtime: number;
  /** Ready-to-use URL for <img>/<video>/<iframe> in the sandbox. */
  url: string;
  /** Human label for the source root ("render", "screenshot", ...). */
  source: string;
  /** Absolute path on the owning filesystem (display only). */
  path: string;
}

interface Root {
  key: string;
  label: string;
  mode: "fs" | "docker";
  base: string;
  maxDepth: number;
}

const CONTAINER = process.env.HERMES_CONTAINER || "hermes";

const MEDIA_EXT = new Set([
  "mp4", "webm", "mov", "mkv", "m4v",
  "png", "jpg", "jpeg", "webp", "gif", "avif", "svg",
  "wav", "mp3", "m4a", "aac", "ogg",
  "html", "txt", "md", "json",
]);

const ROOTS: Root[] = [
  { key: "campaigns", label: "campaign", mode: "fs", base: path.join(process.cwd(), "public", "campaigns"), maxDepth: 3 },
  { key: "screenshots", label: "screenshot", mode: "fs", base: "/home/sams/screenshots", maxDepth: 1 },
  { key: "openmontage", label: "render", mode: "docker", base: "/opt/data/sams/openmontage/projects", maxDepth: 6 },
  { key: "builds", label: "build", mode: "docker", base: "/opt/data/builds", maxDepth: 3 },
];

export function kindOf(name: string): ArtifactKind {
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  if (["mp4", "webm", "mov", "mkv", "m4v"].includes(ext)) return "video";
  if (["png", "jpg", "jpeg", "webp", "gif", "avif", "svg"].includes(ext)) return "image";
  if (["wav", "mp3", "m4a", "aac", "ogg"].includes(ext)) return "audio";
  if (["html", "txt", "md", "json"].includes(ext)) return "text";
  return "file";
}

function encId(rootKey: string, rel: string): string {
  return Buffer.from(`${rootKey}:${rel}`, "utf8").toString("base64url");
}

export function decId(id: string): { rootKey: string; rel: string } | null {
  try {
    const raw = Buffer.from(id, "base64url").toString("utf8");
    const i = raw.indexOf(":");
    if (i < 1) return null;
    const rootKey = raw.slice(0, i);
    const rel = raw.slice(i + 1);
    // Hard guard: no traversal, no absolute paths.
    if (!rel || rel.startsWith("/") || rel.includes("..")) return null;
    return { rootKey, rel };
  } catch {
    return null;
  }
}

export function rootFor(key: string): Root | undefined {
  return ROOTS.find((r) => r.key === key);
}

export function artifactPath(root: Root, rel: string): string {
  return path.join(root.base, rel);
}

function mk(root: Root, rel: string, size: number, mtime: number): Artifact {
  const name = rel.split("/").pop() || rel;
  return {
    id: encId(root.key, rel),
    name,
    kind: kindOf(name),
    size,
    mtime,
    url: `/api/artifacts/file?id=${encId(root.key, rel)}`,
    source: root.label,
    path: artifactPath(root, rel),
  };
}

/* ── fs root scan ─────────────────────────────────────────────────────────── */

async function scanFs(root: Root): Promise<Artifact[]> {
  const out: Artifact[] = [];
  async function walk(dir: string, rel: string, depth: number) {
    if (depth > root.maxDepth) return;
    let entries;
    try {
      entries = await readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      const r = rel ? `${rel}/${e.name}` : e.name;
      if (e.isDirectory()) {
        await walk(path.join(dir, e.name), r, depth + 1);
      } else if (e.isFile() && MEDIA_EXT.has((e.name.split(".").pop() || "").toLowerCase())) {
        try {
          const s = await stat(path.join(dir, e.name));
          out.push(mk(root, r, s.size, s.mtimeMs));
        } catch {
          /* skip unreadable */
        }
      }
    }
  }
  await walk(root.base, "", 0);
  return out;
}

/* ── docker root scan (mode-700 trees the server can't read) ──────────────── */

function dockerFind(root: Root): Promise<Artifact[]> {
  return new Promise((resolve) => {
    const status = ["mp4", "webm", "mov", "m4v", "png", "jpg", "jpeg", "webp", "gif", "wav", "mp3", "m4a"]
      .map((e) => `-name "*.${e}"`)
      .join(" -o ");
    const script = `find ${JSON.stringify(root.base)} -maxdepth ${root.maxDepth} -type f \\( ${status} \\) -printf '%T@|%s|%P\\n' 2>/dev/null | sort -rn | head -n 80`;
    execFile("docker", ["exec", CONTAINER, "sh", "-lc", script], { timeout: 20000, maxBuffer: 4 * 1024 * 1024 }, (err, stdout) => {
      if (err) return resolve([]);
      const out: Artifact[] = [];
      for (const line of (stdout || "").split("\n")) {
        const [mt, sz, rel] = line.split("|");
        if (!rel) continue;
        const mtime = Number.parseFloat(mt) * 1000;
        const size = Number.parseInt(sz, 10);
        if (!Number.isFinite(mtime) || !Number.isFinite(size)) continue;
        out.push(mk(root, rel, size, mtime));
      }
      resolve(out);
    });
  });
}

/* ── public API ───────────────────────────────────────────────────────────── */

export async function listArtifacts(limit = 60): Promise<Artifact[]> {
  const per = await Promise.all(
    ROOTS.map((r) => (r.mode === "fs" ? scanFs(r).catch(() => []) : dockerFind(r))),
  );
  const all = per.flat();
  all.sort((a, b) => b.mtime - a.mtime);
  return all.slice(0, limit);
}

/** Cheap signature to detect a change between polls. */
export function signature(list: Artifact[]): string {
  return list.map((a) => `${a.id}:${a.mtime}:${a.size}`).join(";");
}
