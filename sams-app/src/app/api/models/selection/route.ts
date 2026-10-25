import { NextResponse } from "next/server";
import { getSelections, setSelection } from "@/lib/modelSelectionStore";
import { DEPARTMENTS, type Department } from "@/lib/models";

export async function GET() {
  return NextResponse.json(await getSelections());
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const department = body?.department as Department;
  const model = body?.model;
  if (!DEPARTMENTS.includes(department) || typeof model !== "string") {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }
  try {
    const updated = await setSelection(department, model);
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "error" }, { status: 400 });
  }
}
