import { NextResponse } from "next/server";
import { execFile } from "node:child_process";
import fs from "node:fs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

// Paperclip Org is rendered client-side from /api/agents/list (the live agent
// store). This route is a secondary server view: it reports the real container
// list and the roster file IF one exists, and says so plainly when it does not
// (no placeholder, no silent blank).
const ROSTER_PATHS = [
  "/opt/agent-os/memory/palace/models_and_routing/active_roster.json",
];

function containers(): Promise<string[]> {
  return new Promise((resolve) => {
    execFile("docker", ["ps", "--format", "{{.Names}} ({{.Status}})"], { timeout: 6000 }, (err, stdout) => {
      resolve(err ? [] : String(stdout).split("\n").map((s) => s.trim()).filter(Boolean));
    });
  });
}

export async function GET() {
  const c = await containers();
  let roster: unknown = {};
  let rosterSource: string | null = null;
  for (const p of ROSTER_PATHS) {
    try {
      roster = JSON.parse(fs.readFileSync(p, "utf8"));
      rosterSource = p;
      break;
    } catch {
      /* try next */
    }
  }
  return NextResponse.json(
    {
      containers: c,
      roster,
      rosterSource,
      generatedAt: Date.now(),
      error: c.length ? null : "docker unavailable to the app process",
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
