import { NextResponse } from "next/server";
import { getMemoryGraph } from "@/lib/memoryGraph";

// Reads the live markdown vault -> must be dynamic or it freezes as an empty graph.
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const graph = await getMemoryGraph();
  return NextResponse.json(graph);
}
