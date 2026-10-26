export const DEPARTMENTS = ["hermes", "bi", "coding"] as const;
export type Department = (typeof DEPARTMENTS)[number];

// Roster synced 2026-10-25 to the approved S.A.M.S. Agent OS roles:
//   hermes   -> Executive Orchestrator (all skills; holds approval gates)
//   bi       -> S.A.M.S. Business Intelligence (research, analysis, analytics, copy)
//   coding   -> Coding Agent (SaaS apps + their free value tools)
// OpenClaw is deliberately NOT here: it runs on its OWN gateway model, not an
// OpenRouter slug. "Swarm" is a SKILL (Hermes-callable), not an agent.
export const DEPARTMENT_LABEL: Record<Department, string> = {
  hermes: "Hermes",
  bi: "S.A.M.S. Business Intelligence",
  coding: "Coding Agent",
};

// Layer 3 Dynamic Model Router -- Tier 1 free. Every option is a verified `:free`
// model id that advertises `tools`. Labels are resolved to real ids by MODEL_SLUG.
export const MODEL_OPTIONS: Record<Department, string[]> = {
  hermes: ["Laguna S 2.1 (free)", "Nemotron 3.5 Lightning (free)", "Nemotron 3.5 Super VL (free)", "Nemotron 3 Ultra 550B (free)", "OpenRouter Auto"],
  bi: ["Nemotron 3.5 Super VL (free)", "Gemma 4 31B (free)", "Nemotron 3 Nano Omni (free)"],
  coding: ["Laguna S 2.1 (free)", "North Mini Code (free)", "Nemotron 3 Ultra 550B (free)"],
};

export const DEFAULT_SELECTIONS: Record<Department, string> = {
  hermes: MODEL_OPTIONS.hermes[0],
  bi: MODEL_OPTIONS.bi[0],
  coding: MODEL_OPTIONS.coding[0],
};
