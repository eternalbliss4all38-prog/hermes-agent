// The missing link between the Mission Control model dropdowns (which store a
// human label like "Laguna S 2.1 (free)") and an actual provider model id.
//
// Without this map the dropdowns were cosmetic: the selection was persisted and
// never resolved to anything callable. Every route that dispatches to a model
// must resolve through MODEL_SLUG.
//
// 2026-10-17: the roster moved to ZERO-COST backings. Every slug below is a
// `:free` model verified against https://openrouter.ai/api/v1/models (471
// models, 16 free, checked 2026-10-17) and each advertises `tools`.

import { DEPARTMENTS, MODEL_OPTIONS } from "./models";

export const MODEL_SLUG: Record<string, string> = {
  // Hermes (orchestrator)
  "Nemotron 3 Ultra 550B (free)": "nvidia/nemotron-3-ultra-550b-a55b:free",
  "Inkling (free)": "thinkingmachines/inkling:free",
  "Gemma 4 31B (free)": "google/gemma-4-31b-it:free",
  "OpenRouter Auto": "openrouter/auto",
  // Engineer (Principal Full-Stack Engineer)
  "Laguna S 2.1 (free)": "poolside/laguna-s-2.1:free",
  "North Mini Code (free)": "cohere/north-mini-code:free",
  // Vision (Multimodal Analysis & Video DNA Extraction)
  "Nemotron 3.5 Super VL (free)": "nvidia/nemotron-3.5-super-vl:free",
  "Nemotron 3 Nano Omni (free)": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
  // Swarm (bulk processing / background tasks)
  "Nemotron 3.5 Lightning (free)": "nvidia/nemotron-3.5-lightning:free",
  "Xing4.0 29B (free)": "xingchen-agi/xing4.0-29b-a4b:free",
  "LFM2.5 2.6B (free)": "liquid/lfm-2.5-2.6b:free",
};

/** Resolve a dropdown label to a provider model id. Returns null if unknown. */
export function resolveModelSlug(label: string): string | null {
  return MODEL_SLUG[label] ?? null;
}

/** Dropdown options that have no provider mapping yet (should be empty). */
export function unmappedModels(): string[] {
  const missing: string[] = [];
  for (const d of DEPARTMENTS) {
    for (const o of MODEL_OPTIONS[d]) if (!MODEL_SLUG[o]) missing.push(`${d}:${o}`);
  }
  return missing;
}
