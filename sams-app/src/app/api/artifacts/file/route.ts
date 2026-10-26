// src/app/api/artifacts/file/route.ts
//
// Serves one artifact by its opaque id so the sandbox can render it
// (<img>, <video>, <iframe>). STRICTLY path-restricted: the id decodes to a
// (rootKey, relative path) pair, the root is looked up from a fixed allowlist,
// and the resolved path must stay inside that root. No arbitrary file reads.
//
// BOTH backings support HTTP byte ranges + Content-Length. This matters beyond
// nicety: iOS Safari REFUSES to play a <video> that does not advertise
// `Accept-Ranges: bytes` and answer Range requests with 206 — it shows a
// crossed-out play icon. fs roots read straight off disk; docker roots sit
// under a mode-700 tree this uid cannot traverse, so a byte window is extracted
// inside the container with `tail -c +N | head -c LEN`.

import { execFile } from "node:child_process";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { Readable } from "node:stream";
import path from "node:path";
import { decId, rootFor, artifactPath } from "@/lib/artifacts";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const CONTAINER = process.env.HERMES_CONTAINER || "hermes";

const MIME: Record<string, string> = {
  mp4: "video/mp4", webm: "video/webm", mov: "video/quicktime", m4v: "video/x-m4v", mkv: "video/x-matroska",
  png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", webp: "image/webp", gif: "image/gif", avif: "image/avif", svg: "image/svg+xml",
  wav: "audio/wav", mp3: "audio/mpeg", m4a: "audio/mp4", aac: "audio/aac", ogg: "audio/ogg",
  html: "text/html; charset=utf-8", txt: "text/plain; charset=utf-8", md: "text/plain; charset=utf-8", json: "application/json",
};

function mimeOf(name: string): string {
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  return MIME[ext] || "application/octet-stream";
}

/** Single-quote a path for the container shell. */
function shq(s: string): string {
  return `'${s.replace(/'/g, `'\\''`)}'`;
}

/** Resolve a Range header against a known size. */
function resolveRange(header: string | null, size: number): { start: number; end: number; status: 200 | 206 } | null {
  if (!header) return { start: 0, end: size - 1, status: 200 };
  const m = /^bytes=(\d*)-(\d*)$/.exec(header.trim());
  if (!m) return null; // unsatisfiable / unparseable -> 416
  let start = m[1] ? Number.parseInt(m[1], 10) : 0;
  let end = m[2] ? Number.parseInt(m[2], 10) : size - 1;
  if (!Number.isFinite(start) || start < 0) start = 0;
  if (!Number.isFinite(end) || end >= size) end = size - 1;
  if (start > end || start >= size) return null;
  return { start, end, status: 206 };
}

function dockerSize(abs: string): Promise<number> {
  return new Promise((resolve) => {
    execFile("docker", ["exec", CONTAINER, "stat", "-c", "%s", abs], { timeout: 20000 }, (err, stdout) => {
      if (err) return resolve(-1);
      const n = Number.parseInt(String(stdout).trim(), 10);
      resolve(Number.isFinite(n) ? n : -1);
    });
  });
}

/** Exact byte window [start, start+len) of a file inside the container. */
function dockerSlice(abs: string, start: number, len: number): Readable {
  const cmd = `tail -c +${start + 1} ${shq(abs)} | head -c ${len}`;
  // encoding:"buffer" is REQUIRED. execFile defaults to utf8, which decodes the
  // binary stream and replaces every byte >=0x80 with U+FFFD (EF BF BD) —
  // e.g. a PNG's leading 0x89 byte, rendering every image corrupt.
  const child = execFile("docker", ["exec", CONTAINER, "sh", "-c", cmd], {
    maxBuffer: 1024 * 1024 * 512,
    encoding: "buffer",
  });
  child.on("error", () => { /* surfaces as a truncated body */ });
  return child.stdout as unknown as Readable;
}

const asWeb = (r: Readable) => Readable.toWeb(r) as unknown as ReadableStream;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return new Response("missing id", { status: 400 });

  const dec = decId(id);
  if (!dec) return new Response("bad id", { status: 400 });
  const root = rootFor(dec.rootKey);
  if (!root) return new Response("unknown root", { status: 400 });

  const abs = artifactPath(root, dec.rel);
  if (!path.resolve(abs).startsWith(path.resolve(root.base) + path.sep)) {
    return new Response("forbidden", { status: 403 });
  }

  const name = dec.rel.split("/").pop() || "artifact";
  const type = mimeOf(name);
  const disp = `inline; filename="${name.replace(/"/g, "")}"`;
  const rangeHeader = req.headers.get("range");

  if (root.mode === "docker") {
    const size = await dockerSize(abs);
    if (size < 0) return new Response("not found", { status: 404 });
    const r = resolveRange(rangeHeader, size);
    if (!r) return new Response("range not satisfiable", { status: 416, headers: { "Content-Range": `bytes */${size}` } });
    const len = r.end - r.start + 1;
    const headers: Record<string, string> = {
      "Content-Type": type,
      "Content-Disposition": disp,
      "Accept-Ranges": "bytes",
      "Content-Length": String(len),
      "Cache-Control": "no-store",
    };
    if (r.status === 206) headers["Content-Range"] = `bytes ${r.start}-${r.end}/${size}`;
    return new Response(asWeb(dockerSlice(abs, r.start, len)), { status: r.status, headers });
  }

  // fs root — read straight off disk.
  let size: number;
  try {
    size = (await stat(abs)).size;
  } catch {
    return new Response("not found", { status: 404 });
  }
  const r = resolveRange(rangeHeader, size);
  if (!r) return new Response("range not satisfiable", { status: 416, headers: { "Content-Range": `bytes */${size}` } });
  const len = r.end - r.start + 1;
  const headers: Record<string, string> = {
    "Content-Type": type,
    "Content-Disposition": disp,
    "Accept-Ranges": "bytes",
    "Content-Length": String(len),
    "Cache-Control": "no-store",
  };
  if (r.status === 206) headers["Content-Range"] = `bytes ${r.start}-${r.end}/${size}`;
  const nodeStream = createReadStream(abs, { start: r.start, end: r.end });
  return new Response(asWeb(nodeStream), { status: r.status, headers });
}
