import { NextResponse } from "next/server";
import { dispatchToHermes } from "@/lib/hermes-dispatch";

// REAL dispatch to Hermes over its JSON-RPC gateway (server-side).
//
// Was a 501 stub whose comment reasoned about OpenClaw -- but OpenClaw was never
// the right target: Hermes is the orchestrator and its gateway is reachable from
// this host at HERMES_DASHBOARD_URL. Verified working 2026-10-16.
export const dynamic = "force-dynamic";
export const revalidate = 0;

const MAX_TIMEOUT_MS = 180_000;

export async function GET() {
  return NextResponse.json({
    wired: true,
    transport: "hermes-jsonrpc-ws",
    usage: 'POST { "prompt": "...", "timeoutMs": 90000 }',
  });
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as { prompt?: unknown; timeoutMs?: unknown } | null;
  const prompt = typeof body?.prompt === "string" ? body.prompt.trim() : "";
  if (!prompt) {
    return NextResponse.json({ accepted: false, error: "missing prompt" }, { status: 400 });
  }

  const requested = typeof body?.timeoutMs === "number" ? body.timeoutMs : 90_000;
  const timeoutMs = Math.min(Math.max(requested, 5_000), MAX_TIMEOUT_MS);

  try {
    const result = await dispatchToHermes(prompt, { timeoutMs });
    return NextResponse.json({ accepted: true, prompt, ...result });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    const status = /timed out/i.test(message) ? 504 : 502;
    console.error(`[command/dispatch] failed: ${message}`);
    return NextResponse.json({ accepted: false, reason: message, prompt }, { status });
  }
}
