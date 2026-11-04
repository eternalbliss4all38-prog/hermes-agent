import { execFile } from "node:child_process";
import { readFile } from "node:fs/promises";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

// "What is Hermes doing" — a SINGLE list of every work item, each carrying its
// RAW EVIDENCE. Status is derived from real files/logs on disk, never prose.
const CONTAINER = process.env.HERMES_CONTAINER || "hermes";

type WorkItem = {
  id: string;
  title: string;
  status: string;
  source: string;
  updatedAt?: number;
  evidence?: string;
};

function exec(args: string[]): Promise<string | null> {
  return new Promise((resolve) => {
    execFile("docker", ["exec", CONTAINER, ...args], { timeout: 8000, maxBuffer: 4_000_000 }, (err, stdout) => {
      resolve(err ? null : String(stdout));
    });
  });
}
const read = (p: string) => exec(["cat", p]);

// The MC runs on the host, so it can read world-readable host paths directly;
// fall back to borrowing the hermes container's view for /opt/data paths.
async function readHost(hostPath: string, containerPath?: string): Promise<string | null> {
  try {
    return await readFile(hostPath, "utf8");
  } catch {
    return containerPath ? read(containerPath) : null;
  }
}

async function collect(): Promise<{ items: WorkItem[]; errors: string[] }> {
  const items: WorkItem[] = [];
  const errors: string[] = [];

  // 1. Orchestrator ledger — Hermes' running list of what it is doing.
  const led = await read("/opt/data/preview/items.json");
  if (led) {
    try {
      const j = JSON.parse(led);
      const arr: any[] = Array.isArray(j) ? j : j.items || [];
      for (const it of arr) {
        items.push({
          id: `hermes:${it.id ?? it.title}`,
          title: it.title ?? it.id ?? "untitled",
          status: String(it.status ?? "unknown"),
          source: "hermes",
          updatedAt: it.updatedAt ?? j.updatedAt,
          evidence: it.evidence,
        });
      }
    } catch {
      errors.push("preview/items.json is not valid JSON");
    }
  } else {
    errors.push("preview/items.json unreadable");
  }

  // 2. Cron jobs.
  const cron = await read("/opt/data/cron/jobs.json");
  if (cron) {
    try {
      const j = JSON.parse(cron);
      for (const job of j.jobs || []) {
        items.push({
          id: `cron:${job.id}`,
          title: job.name,
          status: job.enabled === false ? "paused" : job.last_status || job.state || "scheduled",
          source: "cron",
          updatedAt: job.last_run_at ? Date.parse(job.last_run_at) : undefined,
          evidence: job.last_error
            ? String(job.last_error).slice(0, 400)
            : `schedule ${job.schedule?.display || job.schedule_display || ""}${
                job.repeat?.completed != null ? " · runs " + job.repeat.completed : ""
              }`,
        });
      }
    } catch {
      errors.push("cron/jobs.json is not valid JSON");
    }
  } else errors.push("cron/jobs.json unreadable");

  // 3. Studio jobs.
  const studio = await read("/opt/data/sams/studio/jobs.json");
  if (studio) {
    try {
      const j = JSON.parse(studio);
      for (const job of (Array.isArray(j) ? j : []).slice(-25)) {
        items.push({
          id: `studio:${job.id}`,
          title: `${job.kind} · ${job.id}`,
          status: String(job.status || "unknown"),
          source: "studio",
          updatedAt: job.finished ? job.finished * 1000 : job.created ? job.created * 1000 : undefined,
          evidence: `exit ${job.exit_code ?? "?"} · log ${job.log || ""}`,
        });
      }
    } catch {
      errors.push("studio/jobs.json is not valid JSON");
    }
  }

  // 4. Detached builds ledger (one batched shell read).
  const builds = await exec([
    "sh",
    "-c",
    'for f in /opt/data/builds/*/status.json; do echo "---$f"; cat "$f" 2>/dev/null; done',
  ]);
  if (builds) {
    const blocks = builds.split("---").map((b) => b.trim()).filter(Boolean);
    for (const b of blocks) {
      const nl = b.indexOf("\n");
      const path = nl >= 0 ? b.slice(0, nl) : b;
      const body = nl >= 0 ? b.slice(nl + 1).trim() : "";
      const name = path.split("/").slice(-2, -1)[0] || path;
      let status = "unknown";
      let evidence = body.slice(0, 500) || "no status.json";
      try {
        const s = JSON.parse(body);
        status = String(s.status || s.state || "unknown");
        evidence = JSON.stringify(s).slice(0, 500);
      } catch {
        /* keep raw */
      }
      items.push({ id: `build:${name}`, title: `build · ${name}`, status, source: "builds", evidence });
    }
  }

  // 5. Mem Palace — memory galaxy index + session auto-ingest watermark.
  const galaxy = await readHost("/opt/agent-os/memory/palace/galaxy_index.json");
  if (galaxy) {
    try {
      const g = JSON.parse(galaxy);
      items.push({
        id: "palace:galaxy",
        title: "Mem Palace · memory galaxy",
        status: "ok",
        source: "palace",
        evidence: `totalNodes=${g.totalNodes} · generatedAt=${g.generatedAt} · tokenReduction=${g.tokenReductionPct}%`,
      });
    } catch {
      items.push({ id: "palace:galaxy", title: "Mem Palace · memory galaxy", status: "error", source: "palace", evidence: "galaxy_index.json is not valid JSON" });
    }
  } else errors.push("palace/galaxy_index.json unreadable");

  const wm = await readHost(
    "/opt/agent-os/memory/hermes/cache/palace_ingest_watermark.json",
    "/opt/data/cache/palace_ingest_watermark.json",
  );
  if (wm) {
    try {
      const w = JSON.parse(wm);
      const ts = Date.parse(w.updated_at);
      const ageH = isFinite(ts) ? (Date.now() - ts) / 3600000 : Infinity;
      items.push({
        id: "palace:ingest",
        title: "Mem Palace · auto-ingest (sessions → palace)",
        status: ageH < 12 ? "ok" : ageH < 36 ? "stale" : "stalled",
        source: "palace",
        updatedAt: isFinite(ts) ? ts : undefined,
        evidence: `last_message_id=${w.last_message_id} · updated_at=${w.updated_at} · age=${ageH.toFixed(1)}h`,
      });
    } catch {
      errors.push("palace ingest watermark is not valid JSON");
    }
  } else errors.push("palace ingest watermark unreadable");

  // 6. OpenClaw gateway health (the SPA serves HTML at /tasks, so health is the
  //    honest wire signal; per-task detail is not exposed as JSON by OpenClaw).
  try {
    const r = await fetch("http://127.0.0.1:18789/healthz", { signal: AbortSignal.timeout(4000) });
    const t = (await r.text()).slice(0, 200);
    items.push({
      id: "openclaw:health",
      title: "OpenClaw gateway",
      status: r.ok ? "online" : "error",
      source: "openclaw",
      updatedAt: Date.now(),
      evidence: `GET /healthz → ${r.status} ${t}`,
    });
  } catch (e) {
    items.push({
      id: "openclaw:health",
      title: "OpenClaw gateway",
      status: "error",
      source: "openclaw",
      updatedAt: Date.now(),
      evidence: `healthz unreachable: ${String(e).slice(0, 200)}`,
    });
  }

  return { items, errors };
}

export async function GET() {
  const { items, errors } = await collect();
  return NextResponse.json(
    { generatedAt: Date.now(), count: items.length, errors, items },
    { headers: { "Cache-Control": "no-store" } },
  );
}
