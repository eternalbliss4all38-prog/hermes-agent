import { NextResponse } from "next/server";
import { getTree } from "@/lib/workbench";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const dir = searchParams.get("dir") ?? ".";
  try {
    const nodes = await getTree(dir);
    return NextResponse.json(nodes);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "error" }, { status: 400 });
  }
}
