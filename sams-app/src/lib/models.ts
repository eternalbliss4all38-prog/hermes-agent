export const DEPARTMENTS = ["hermes", "engineer", "vision", "swarm"] as const;
export type Department = (typeof DEPARTMENTS)[number];

// Vendor-free role names. The "Lead Engineer (Qwen 2.5 Coder)" and "Research Scout (Llama 3.3 70B)" departments were
// retired 2026-10-17: every backing model is now a FREE OpenRouter model
// (zero cost until cash flow). The JOBS are unchanged.
export const DEPARTMENT_LABEL: Record<Department, string> = {
  hermes: "Hermes",
  engineer: "Engineer",
  vision: "Vision",
  swarm: "Swarm",
};

// Layer 3 Dynamic Model Router -- Tier 1 free. EVERY option below is a verified
// `:free` model id on https://openrouter.ai/api/v1/models (checked 2026-10-17),
// each confirmed to advertise `tools` so it can actually drive an agent.
export const MODEL_OPTIONS: Record<Department, string[]> = {
  // Order matters: verified-serving models first. nemotron-3-ultra returned no
  // choices and gemma-4 429'd during the 2026-10-17 smoke test, so they are NOT
  // defaults -- and every model here is a reasoning model, so callers must allow
  // a generous max_tokens or the visible content comes back empty.
  hermes: ["Laguna S 2.1 (free)", "Nemotron 3.5 Lightning (free)", "Nemotron 3.5 Super VL (free)", "Nemotron 3 Ultra 550B (free)", "OpenRouter Auto"],
  engineer: ["Laguna S 2.1 (free)", "North Mini Code (free)", "Nemotron 3 Ultra 550B (free)"],
  vision: ["Nemotron 3.5 Super VL (free)", "Gemma 4 31B (free)", "Nemotron 3 Nano Omni (free)"],
  swarm: ["Nemotron 3.5 Lightning (free)", "Xing4.0 29B (free)", "LFM2.5 2.6B (free)"],
};

export const DEFAULT_SELECTIONS: Record<Department, string> = {
  hermes: MODEL_OPTIONS.hermes[0],
  engineer: MODEL_OPTIONS.engineer[0],
  vision: MODEL_OPTIONS.vision[0],
  swarm: MODEL_OPTIONS.swarm[0],
};
