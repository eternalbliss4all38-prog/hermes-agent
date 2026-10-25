import { NextResponse } from "next/server";
import { readVaultFile } from "@/lib/memoryFile";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const file = searchParams.get("path");
  if (!file) return NextResponse.json({ error: "missing path" }, { status: 400 });
  try {
    const result = await readVaultFile(file);
    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "error" }, { status: 400 });
  }
}
