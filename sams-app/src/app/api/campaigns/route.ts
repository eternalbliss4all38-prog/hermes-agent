import { NextResponse } from "next/server";
import { listCampaigns } from "@/lib/campaigns";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return NextResponse.json({ campaigns: await listCampaigns() });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "error" }, { status: 500 });
  }
}
