// src/app/api/ab/tests/route.ts
//
// Thin proxy to the S.A.M.S. A/B variance + claim-verification engine (:4599).
// The engine owns all statistics and all verdicts — nothing is computed here, so
// the UI can never drift from the engine that produced the numbers.
//
//   GET  /api/ab/tests                -> tests + variance + winner
//   GET  /api/ab/tests?view=claims    -> agent claims vs measured reality + verdict
//   GET  /api/ab/tests?view=agent     -> compact markdown an agent can consume
//   POST /api/ab/tests         {test} -> register a test
//   POST /api/ab/tests?op=event{...}  -> record impressions/conversions
//   POST /api/ab/tests?op=claim{...}  -> record an agent's claim

import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const ENGINE = process.env.AB_ENGINE_URL || "http://127.0.0.1:4599";

async function proxy(path: string, init?: RequestInit, ctype = "application/json") {
  try {
    const r = await fetch(ENGINE + path, { ...init, cache: "no-store", signal: AbortSignal.timeout(20000) });
    const text = await r.text();
    return new NextResponse(text, {
      status: r.status,
      headers: { "content-type": ctype, "cache-control": "no-store" },
    });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : String(e), engine: ENGINE, hint: "ab engine unreachable" },
      { status: 502 },
    );
  }
}

export async function GET(req: Request) {
  const view = new URL(req.url).searchParams.get("view");
  if (view === "claims") return proxy("/claims");
  if (view === "agent") return proxy("/agent-summary", undefined, "text/markdown; charset=utf-8");
  return proxy("/tests");
}

export async function POST(req: Request) {
  const body = await req.text();
  const op = new URL(req.url).searchParams.get("op");
  const path = op === "event" ? "/event" : op === "claim" ? "/claim" : "/test";
  return proxy(path, { method: "POST", headers: { "content-type": "application/json" }, body });
}
