import { NextResponse } from "next/server";
import { getGitStatus } from "@/lib/workbench";

// Live git state -> must be dynamic or it freezes at build time.
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  return NextResponse.json(await getGitStatus());
}
