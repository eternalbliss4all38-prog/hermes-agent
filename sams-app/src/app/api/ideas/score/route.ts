import { NextResponse } from "next/server";
import { scoreIdea } from "@/lib/ideasStore";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const id = typeof body?.id === "string" ? body.id : null;
  if (!id) return NextResponse.json({ error: "missing id" }, { status: 400 });
  const updated = await scoreIdea(id);
  if (!updated) return NextResponse.json({ error: "not found" }, { status: 404 });
  return NextResponse.json(updated);
}
