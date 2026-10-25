// src/app/api/live/route.ts
//
// GET /api/live -> the Live Console's data feed. Reads real state from disk via
// src/lib/liveFeed.ts. Auth is enforced by src/middleware.ts (all /api/* routes
// require the sams_session cookie), so nothing extra is needed here.

import { NextResponse } from "next/server";
import { getActivity, getRecentRuns, getBuildLedger, getArtifacts } from "@/lib/liveFeed";

// Never cache: this is a live view and must reflect the current host state.
export const dynamic = "force-dynamic";

export async function GET() {
  const [activity, runs, builds, artifacts] = await Promise.all([
    getActivity(60),
    getRecentRuns(15),
    getBuildLedger(),
    getArtifacts(12),
  ]);

  return NextResponse.json(
    {
      generatedAt: new Date().toISOString(),
      activity,
      runs,
      builds,
      artifacts,
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
