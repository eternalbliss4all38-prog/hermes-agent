import { execFile } from "node:child_process";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

// Live Preview target — "what is Hermes building right now".
//
// Hermes writes /opt/data/preview/current.json (in the hermes container) when it
// starts building an app; the Mission Control Live Preview panel polls this route
// and renders that URL in an interactive iframe. The MC process runs as a
// different uid and cannot read /opt/data directly, so we borrow the hermes
// container's view via `docker exec` (same pattern as /api/activity/stream).
const CONTAINER = process.env.HERMES_CONTAINER || "hermes";
const TARGET_PATH = process.env.PREVIEW_TARGET_PATH || "/opt/data/preview/current.json";

type PreviewTarget = { url: string | null; label?: string; updatedAt?: number; error?: string };

function readTarget(): Promise<PreviewTarget> {
  return new Promise((resolve) => {
    execFile("docker", ["exec", CONTAINER, "cat", TARGET_PATH], { timeout: 5000 }, (err, stdout) => {
      if (err) {
        resolve({ url: null, error: String(err.message || err).split("\n")[0] });
        return;
      }
      try {
        const j = JSON.parse(String(stdout));
        resolve({ url: j.url ?? null, label: j.label, updatedAt: j.updatedAt });
      } catch {
        resolve({ url: null, error: "preview target is not valid JSON" });
      }
    });
  });
}

export async function GET() {
  const target = await readTarget();
  return NextResponse.json(target, { headers: { "Cache-Control": "no-store" } });
}
