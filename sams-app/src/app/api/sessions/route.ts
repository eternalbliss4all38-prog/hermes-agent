import { NextResponse } from "next/server";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Lists resumable Mission Control chat sessions so the chat's "Switch Chat…"
// dropdown can populate. Reads the Hermes session DB (inside the hermes
// container, which owns the tree) via docker exec -- the server runs as uid
// 1000 and cannot read /opt/agent-os/memory/hermes directly (mode 0700).
const execFileAsync = promisify(execFile);
const CONTAINER = process.env.HERMES_CONTAINER || "hermes";
const STATE_DB = process.env.HERMES_STATE_DB || "/opt/data/state.db";
const PYTHON = process.env.HERMES_PYTHON || "/opt/hermes/.venv/bin/python";

const SCRIPT = `
import sqlite3, json
c = sqlite3.connect(${JSON.stringify(STATE_DB)})
rows = c.execute(
    "select id, title, message_count, started_at from sessions "
    "where source='sams-dashboard' order by rowid desc limit 30"
).fetchall()
print(json.dumps([
    {"id": r[0], "title": r[1], "messageCount": r[2], "startedAt": r[3]}
    for r in rows
]))
`;

export async function GET() {
  try {
    const { stdout } = await execFileAsync(
      "docker",
      ["exec", CONTAINER, PYTHON, "-c", SCRIPT],
      { maxBuffer: 4 * 1024 * 1024, timeout: 20000, encoding: "utf8" },
    );
    const sessions = JSON.parse(stdout.trim() || "[]");
    return NextResponse.json(sessions, { headers: { "Cache-Control": "no-store" } });
  } catch {
    const message = err instanceof Error ? err.message : String(err);
    console.error(`[api/sessions] read failed: ${message}`);
    return NextResponse.json([], { headers: { "Cache-Control": "no-store" } });
  }
}
