import { NextResponse } from "next/server";
import { listGoals, submitGoal } from "@/lib/goalsStore";

export async function GET() {
  return NextResponse.json(await listGoals());
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const objective = typeof body?.objective === "string" ? body.objective.trim() : "";
  if (!objective) return NextResponse.json({ error: "objective required" }, { status: 400 });
  const goal = await submitGoal(objective);
  return NextResponse.json(goal, { status: 201 });
}
