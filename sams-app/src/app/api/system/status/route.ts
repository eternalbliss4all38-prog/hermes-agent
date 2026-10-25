import { NextResponse } from "next/server";
import { getContainerStats, getContainerState, getHostLoad, MONITORED_CONTAINERS } from "@/lib/docker";
import { probeOpenRouter } from "@/lib/agentHealth";
import type { SystemStatus } from "@/lib/types";

// Live system state (docker stats/ps + host load). MUST be dynamic or `next build`
// prerenders it once -- with no docker access in the build sandbox -- and production
// then serves a frozen "not_deployed" snapshot forever. (Regression found 2026-10-16.)
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const [stats, state, host, or] = await Promise.all([
    getContainerStats(),
    getContainerState(),
    getHostLoad(),
    probeOpenRouter(),
  ]);
  const statsByName = new Map(stats.map((s) => [s.name, s]));

  const containers: SystemStatus["containers"] = MONITORED_CONTAINERS.map((name) => {
    const s = statsByName.get(name);
    return {
      name,
      status: state[name] ?? "not_deployed",
      cpuPercent: s?.cpuPercent ?? 0,
      memMB: s?.memMB ?? 0,
      memLimitMB: s?.memLimitMB ?? 0,
    };
  });

  const body: SystemStatus = {
    host,
    containers,
    costMeter: {
      wired: or.valid,
      valid: or.valid,
      usageUsd: or.usageUsd,
      label: or.label,
      note: or.valid
        ? `Live OpenRouter usage${or.label ? ` (${or.label})` : ""}`
        : `OpenRouter spend unavailable — ${or.message}`,
    },
    generatedAt: new Date().toISOString(),
  };

  return NextResponse.json(body);
}
