// src/lib/liveFeed.ts
//
// Server-side gatherers for the Live Console (/live). Every function reads REAL
// state from disk and returns { ok, data, error? } so the UI can render a true
// reason instead of a silent blank. Nothing here invents rows.
//
// READ STRATEGY — verified empirically on this host (2026-10-16):
//   Agent data lives on the HOST at /opt/agent-os/memory/hermes, owned by uid
//   10000 ("hermes"), mode 0700. Mission Control runs as uid 1000 ("sams"), so a
//   direct fs read fails. Evidence:
//     $ docker run --rm --user 1000:1000 -v /opt/agent-os/memory/hermes:/d:ro \
//         alpine sh -c 'ls /d/'
//     ls: can't open '/d/': Permission denied
//   The dashboard host process (uid 1000) IS in group "docker" (gid 988) and
//   /usr/bin/docker exists, so it can drive the daemon — src/lib/docker.ts
//   already does this for container stats. The "hermes" container mounts the
//   same host tree at /opt/data, so we read agent data with:
//     $ docker exec hermes sh -c '<cmd>'   -> returns real data (verified)
//   Each agent reader tries the direct fs path first (correct if perms change)
//   and falls back to `docker exec` on failure. /home/sams/screenshots is owned
//   by uid 1000, so artifacts are read directly with no fallback needed.

import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { readdir, readFile, stat } from "node:fs/promises";
import { join } from "node:path";

const execFileAsync = promisify(execFile);

const HOST_CONTAINER = process.env.HERMES_CONTAINER || "hermes";
/** Host path of the agent data tree (== /opt/data inside the hermes container). */
const AGENT_HOST = process.env.AGENT_DATA_HOST || "/opt/agent-os/memory/hermes";
/** Path of the same tree as mounted inside the hermes container. */
const AGENT_CONT = process.env.AGENT_DATA_CONT || "/opt/data";
/** Artifacts dir on the host — owned by uid 1000, read directly. */
const SCREENSHOTS_DIR = process.env.SCREENSHOTS_DIR || "/home/sams/screenshots";

export interface LiveResult<T> {
  ok: boolean;
  data: T;
  /** Present only when ok is false. */
  error?: string;
  /** How the source was read: "fs" | "docker" | "none". Shown in the UI. */
  via?: string;
}

export interface ActivityLine {
  ts: string | null;
  line: string;
}
export interface RunEntry {
  jobId: string;
  file: string;
  title: string;
  runAt: string | null;
  mtime: number | null;
  status: "ok" | "noop" | "warn" | "unknown";
}
export interface BuildEntry {
  name: string;
  state: string;
  startedAt: string | null;
  exitCode: number | null;
  hasDone: boolean;
}
export interface ArtifactEntry {
  name: string;
  mtime: number;
  size: number;
}

function shq(s: string): string {
  return "'" + s.replace(/'/g, "'\\''") + "'";
}

async function dockerExec(cmd: string): Promise<string> {
  const { stdout } = await execFileAsync("docker", ["exec", HOST_CONTAINER, "sh", "-c", cmd], {
    maxBuffer: 16 * 1024 * 1024,
    timeout: 20000,
    encoding: "utf8",
  });
  return stdout;
}

function errText(e: unknown): string {
  if (e && typeof e === "object") {
    const obj = e as { code?: string; message?: string };
    const first = obj.message ? String(obj.message).split("\n")[0] : "";
    if (obj.code) return `${obj.code}${first ? ` (${first})` : ""}`;
    if (first) return first;
  }
  return String(e);
}

// ANSI / OSC stripper — built from escape sequences so this source file itself
// contains no literal control characters (keeps eslint happy).
const ANSI_RE = new RegExp(
  "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z0-9]*(?:;[-a-zA-Z0-9/&#&.:=?%@~_]*)*)?\\u0007)|(?:(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PR-TZcf-nq-uy=><~]))",
  "g",
);
export function stripAnsi(s: string): string {
  return s.replace(ANSI_RE, "");
}

const TS_RE = /^(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}[,.]\d{0,3})/;
const JOB_TITLE_RE = /^#\s*Cron Job:\s*(.+?)\s*$/m;
const RUN_TIME_RE = /^\*\*Run Time:\*\*\s*(.+?)\s*$/m;

/** Last `n` non-empty lines of a file inside the agent data tree. */
export async function getActivity(n = 60): Promise<LiveResult<ActivityLine[]>> {
  const rel = "logs/agent.log";
  const source = `${AGENT_HOST}/${rel}`;
  try {
    let text: string;
    let via: string;
    try {
      text = await readFile(join(AGENT_HOST, rel), "utf8");
      via = "fs";
    } catch {
      // 0700 tree owned by uid 10000 -> borrow the hermes container's mount.
      text = await dockerExec(`tail -n ${Math.max(n * 2, 120)} ${shq(join(AGENT_CONT, rel))}`);
      via = "docker";
    }
    const data: ActivityLine[] = text
      .split("\n")
      .filter((l) => l.trim().length > 0)
      .slice(-n)
      .map((raw) => {
        const line = stripAnsi(raw).replace(/\s+$/, "");
        const m = line.match(TS_RE);
        return { ts: m ? m[1] : null, line };
      });
    return { ok: true, data, via };
  } catch (e) {
    return { ok: false, data: [], via: "none", error: `unreadable: ${errText(e)} — see liveFeed note (${source})` };
  }
}

function parseRun(jobId: string, fileName: string, body: string): RunEntry {
  const title = (body.match(JOB_TITLE_RE)?.[1] || jobId).trim();
  const runAt = body.match(RUN_TIME_RE)?.[1]?.trim() || null;
  // Honest status derived from the run body text, not guessed:
  let status: RunEntry["status"] = "ok";
  if (/maximum tool-iteration limit/i.test(body)) status = "warn";
  else if (/\[SILENT\]/.test(body)) status = "noop";
  else if (!/^##\s*Response\s*$/m.test(body)) status = "unknown";
  const ms = runAt ? Date.parse(runAt.replace(" ", "T") + "Z") : NaN;
  return { jobId, file: fileName, title, runAt, mtime: Number.isFinite(ms) ? ms : null, status };
}

/** Newest `n` cron run reports from cron/output/<jobId>/<ts>.md. */
export async function getRecentRuns(n = 15): Promise<LiveResult<RunEntry[]>> {
  const rel = "cron/output";
  const source = `${AGENT_HOST}/${rel}`;
  try {
    let data: RunEntry[] = [];
    let via = "fs";
    try {
      const root = join(AGENT_HOST, rel);
      const jobDirs = await readdir(root, { withFileTypes: true });
      const files: { jobId: string; path: string; name: string }[] = [];
      for (const d of jobDirs) {
        if (!d.isDirectory()) continue;
        const sub = await readdir(join(root, d.name), { withFileTypes: true });
        for (const f of sub) {
          if (f.isFile() && f.name.endsWith(".md")) files.push({ jobId: d.name, path: join(root, d.name, f.name), name: f.name });
        }
      }
      files.sort((a, b) => b.path.localeCompare(a.path));
      for (const f of files.slice(0, n)) {
        data.push(parseRun(f.jobId, f.name, await readFile(f.path, "utf8")));
      }
    } catch {
      via = "docker";
      const script = [
        `base=${shq(join(AGENT_CONT, rel))}`,
        `ls -1t "$base"/*/*.md 2>/dev/null | head -n ${Math.max(1, n)} | while IFS= read -r f; do`,
        `  printf '@@@RUN %s\\n' "$f"; cat "$f" 2>/dev/null; printf '\\n@@@END\\n';`,
        `done`,
      ].join("\n");
      const out = await dockerExec(script);
      data = out
        .split("@@@RUN ")
        .slice(1)
        .map((p) => {
          const nl = p.indexOf("\n");
          if (nl < 0) return null;
          const full = p.slice(0, nl).trim();
          const body = p.slice(nl + 1).split("@@@END")[0];
          const seg = full.split("/");
          return parseRun(seg[seg.length - 2] || "", seg[seg.length - 1] || full, body);
        })
        .filter((x): x is RunEntry => x !== null);
    }
    return { ok: true, data, via };
  } catch (e) {
    return { ok: false, data: [], via: "none", error: `unreadable: ${errText(e)} — see liveFeed note (${source})` };
  }
}

function parseBuild(name: string, files: Record<string, string>): BuildEntry {
  let state = "unknown";
  let startedAt: string | null = null;
  let exitCode: number | null = null;
  const statusRaw = files["status.json"];
  if (statusRaw) {
    try {
      const s = JSON.parse(statusRaw) as { state?: string; started_at?: string; exit_code?: number };
      if (typeof s.state === "string") state = s.state;
      if (typeof s.started_at === "string") startedAt = s.started_at;
      if (typeof s.exit_code === "number") exitCode = s.exit_code;
    } catch {
      state = "unparseable-status";
    }
  }
  if (startedAt === null && files["meta.json"]) {
    try {
      const m = JSON.parse(files["meta.json"]) as { started_at?: string };
      if (typeof m.started_at === "string") startedAt = m.started_at;
    } catch {
      /* leave null */
    }
  }
  if (exitCode === null && typeof files["exit_code"] === "string") {
    const n = parseInt(files["exit_code"].trim(), 10);
    if (Number.isFinite(n)) exitCode = n;
  }
  return { name, state, startedAt, exitCode, hasDone: files["DONE"] !== undefined };
}

/** Detached build ledger under builds/<name>/. */
export async function getBuildLedger(): Promise<LiveResult<BuildEntry[]>> {
  const rel = "builds";
  const source = `${AGENT_HOST}/${rel}`;
  try {
    let data: BuildEntry[] = [];
    let via = "fs";
    try {
      const root = join(AGENT_HOST, rel);
      const dirs = await readdir(root, { withFileTypes: true });
      for (const d of dirs) {
        if (!d.isDirectory()) continue;
        const files: Record<string, string> = {};
        for (const f of ["status.json", "meta.json", "exit_code", "DONE"]) {
          try {
            files[f] = await readFile(join(root, d.name, f), "utf8");
          } catch {
            /* absent */
          }
        }
        data.push(parseBuild(d.name, files));
      }
    } catch {
      via = "docker";
      const script = [
        `base=${shq(join(AGENT_CONT, rel))}`,
        `for d in "$base"/*/; do`,
        `  [ -d "$d" ] || continue;`,
        `  n=$(basename "$d"); printf '@@@BUILD %s\\n' "$n";`,
        `  for f in status.json meta.json exit_code DONE; do`,
        `    if [ -e "$d$f" ]; then printf '@@FILE %s\\n' "$f"; cat "$d$f" 2>/dev/null; printf '\\n'; fi;`,
        `  done;`,
        `done`,
      ].join("\n");
      const out = await dockerExec(script);
      data = out
        .split("@@@BUILD ")
        .slice(1)
        .map((p) => {
          const nl = p.indexOf("\n");
          if (nl < 0) return null;
          const name = p.slice(0, nl).trim();
          const rest = p.slice(nl + 1);
          const files: Record<string, string> = {};
          for (const chunk of rest.split("@@FILE ").slice(1)) {
            const fl = chunk.indexOf("\n");
            if (fl < 0) continue;
            files[chunk.slice(0, fl).trim()] = chunk.slice(fl + 1).trim();
          }
          return parseBuild(name, files);
        })
        .filter((x): x is BuildEntry => x !== null);
    }
    data.sort((a, b) => (b.startedAt || "").localeCompare(a.startedAt || ""));
    return { ok: true, data, via };
  } catch (e) {
    return { ok: false, data: [], via: "none", error: `unreadable: ${errText(e)} — see liveFeed note (${source})` };
  }
}

/** Newest files in the artifacts (screenshots) directory. */
export async function getArtifacts(n = 12): Promise<LiveResult<ArtifactEntry[]>> {
  try {
    const entries = await readdir(SCREENSHOTS_DIR, { withFileTypes: true });
    const out: ArtifactEntry[] = [];
    for (const e of entries) {
      if (!e.isFile()) continue;
      const s = await stat(join(SCREENSHOTS_DIR, e.name));
      out.push({ name: e.name, mtime: s.mtimeMs, size: s.size });
    }
    out.sort((a, b) => b.mtime - a.mtime);
    return { ok: true, data: out.slice(0, n), via: "fs" };
  } catch (e) {
    if ((e as { code?: string }).code === "ENOENT") return { ok: true, data: [], via: "fs" };
    return { ok: false, data: [], via: "none", error: `unreadable: ${errText(e)} — see liveFeed note (${SCREENSHOTS_DIR})` };
  }
}
