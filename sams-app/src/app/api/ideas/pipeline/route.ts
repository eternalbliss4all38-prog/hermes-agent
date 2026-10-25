import { NextResponse } from "next/server";
import { createIdea, listIdeas } from "@/lib/ideasStore";

export async function GET() {
  const ideas = await listIdeas();
  return NextResponse.json(ideas);
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const title = typeof body?.title === "string" ? body.title.trim() : "";
  const niche = typeof body?.niche === "string" ? body.niche.trim() : "";
  if (!title) {
    return NextResponse.json({ error: "title required" }, { status: 400 });
  }
  const idea = await createIdea(title, niche);
  return NextResponse.json(idea, { status: 201 });
}
