import { NextResponse } from "next/server";
import { getContainerStats, getContainerState } from "@/lib/docker";
import { probeOpenRouter } from "@/lib/agentHealth";
import type { AgentSummary } from "@/lib/types";

// Live probes -> must be dynamic (see system/status for why). Prerendered once,
// this froze every agent card at "not_deployed".
export const dynamic = "force-dynamic";
export const revalidate = 0;

// Every agent's status below is EARNED by a real probe of what actually backs it.
//
// 2026-10-17 ZERO-COST ROSTER: the Engineer and Vision departments are no longer
// Lead Engineer (Qwen 2.5 Coder) / Research Scout (Llama 3.3 70B). Their backings are FREE OpenRouter models, and the host
// `claude` CLI is no longer consulted at all -- nothing paid is required to
// bring the fleet up.
//   Hermes / OpenClaw -> docker container state
//   Engineer          -> OpenRouter (poolside/laguna-s-2.1:free)
//   Vision            -> OpenRouter (nvidia/nemotron-3.5-super-vl:free)
//   Swarm             -> OpenRouter (nvidia/nemotron-3.5-lightning:free)
// Nothing here is a hardcoded string. If an agent cannot run, `reason` says why.
export async function GET() {
  const [stats, state, or] = await Promise.all([
    getContainerStats(),
    getContainerState(),
    probeOpenRouter(),
  ]);
  const statsByName = new Map(stats.map((s) => [s.name, s]));

  const withDocker = (container: string, extra: Partial<AgentSummary> = {}): Partial<AgentSummary> => {
    const s = statsByName.get(container);
    const st = state[container] ?? "not_deployed";
    return {
      container,
      status: st,
      cpuPercent: s?.cpuPercent,
      memMB: s?.memMB,
      source: "docker",
      backing: `container:${container}`,
      reason: st === "running" ? "container running" : `container ${st}`,
      ...extra,
    };
  };

  // OpenRouter-backed agents are reachable only if the key actually authenticates.
  const orBacking = (slug: string): Partial<AgentSummary> =>
    or.valid
      ? {
          status: "running",
          source: "static",
          backing: `openrouter:${slug}`,
          reason: `OpenRouter key valid -- free tier ${slug}`,
        }
      : {
          status: "not_configured",
          source: "static",
          backing: `openrouter:${slug}`,
          reason: or.configured ? or.message : "OPENROUTER_API_KEY not set",
        };

  const agents: AgentSummary[] = [
    { id: "hermes", name: "Hermes", title: "Executive Orchestrator", level: "Executive", ...withDocker("hermes") } as AgentSummary,
    { id: "engineer", name: "Open Engineer", title: "Principal Full-Stack Engineer", level: "Engineering", ...orBacking("poolside/laguna-s-2.1:free") } as AgentSummary,
    { id: "vision", name: "Vision Analyst", title: "Multimodal Analysis & Video DNA Extraction", level: "Intelligence", ...orBacking("nvidia/nemotron-3.5-super-vl:free") } as AgentSummary,
    { id: "openclaw", name: "OpenClaw", title: "Browser & Desktop Computer Use Agent", level: "Execution", ...withDocker("openclaw-gateway") } as AgentSummary,
    { id: "swarm", name: "Swarm", title: "Bulk Processing & Background Tasks", level: "Parallel Swarm", ...orBacking("nvidia/nemotron-3.5-lightning:free") } as AgentSummary,
  ];

  return NextResponse.json(agents);
}
