// src/app/api/agents/config/route.ts
//
// Agent Builder backend. Reads and writes each agent's PALACE ROOM — the
// persona, mission, skills, tools and active-project files created under
// wing_sams_os/room_agent_*/. This is what makes the Agent Builder page real:
// editing an agent here changes what that agent IS, on disk.
//
// GET  /api/agents/config            -> [{ id, room, label, files: {NAME: text} }]
// POST /api/agents/config            -> { id, file, content } -> writes one file
//
// Safety: agent id and file name are both validated against a fixed allowlist.
// No path is ever taken from the request.

import { NextResponse } from "next/server";
import { readFile, writeFile, readdir, access } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const PALACE = process.env.PALACE_DIR || "/opt/agent-os/memory/palace";
const WING = "wing_sams_os";

/** The rooms the builder manages. id -> display label. */
const AGENTS: Record<string, string> = {
  hermes: "Hermes — Executive Orchestrator",
  bi: "S.A.M.S. Business Intelligence — research & analysis",
  openclaw: "OpenClaw — Production Manager",
  coding: "Coding Agent",
};
const ROOMS: Record<string, string> = {
  hermes: "room_agent_hermes_orchestrator",
  bi: "room_agent_business_intelligence",
  openclaw: "room_agent_openclaw_production",
  coding: "room_agent_coding",
};
/** Writable files per room (allowlist). */
const FILES = ["PERSONA.md", "MISSION.md", "SKILLS.md", "TOOLS.md", "ACTIVE_PROJECT.md", "MODEL.md"];

function roomDir(id: string): string {
  return path.join(PALACE, WING, ROOMS[id]);
}

async function readIf(p: string): Promise<string | null> {
  try {
    await access(p);
    return await readFile(p, "utf8");
  } catch {
    return null;
  }
}

export async function GET() {
  const out = [];
  for (const [id, label] of Object.entries(AGENTS)) {
    const dir = roomDir(id);
    const files: Record<string, string> = {};
    for (const f of FILES) {
      const txt = await readIf(path.join(dir, f));
      if (txt !== null) files[f] = txt;
    }
    let exists = true;
    try {
      await readdir(dir);
    } catch {
      exists = false;
    }
    out.push({ id, room: ROOMS[id], label, exists, files });
  }
  return NextResponse.json({ agents: out, palace: PALACE }, { headers: { "Cache-Control": "no-store" } });
}

export async function POST(req: Request) {
  let body: { id?: unknown; file?: unknown; content?: unknown };
  try {
    body = (await req.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "bad json" }, { status: 400 });
  }
  const id = typeof body.id === "string" ? body.id : "";
  const file = typeof body.file === "string" ? body.file : "";
  const content = typeof body.content === "string" ? body.content : "";

  if (!AGENTS[id]) return NextResponse.json({ error: "unknown agent" }, { status: 400 });
  if (!FILES.includes(file)) {
    return NextResponse.json({ error: "file not writable", allowed: FILES }, { status: 400 });
  }

  const target = path.join(roomDir(id), file);
  // containment: must stay inside the room dir
  if (!path.resolve(target).startsWith(path.resolve(roomDir(id)) + path.sep)) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  try {
    await writeFile(target, content, "utf8");
    const back = await readFile(target, "utf8");
    return NextResponse.json({ ok: true, id, file, bytes: Buffer.byteLength(back, "utf8") });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: e instanceof Error ? e.message : String(e) },
      { status: 500 },
    );
  }
}
