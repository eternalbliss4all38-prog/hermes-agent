// OpenRouter usage/credit client for the Mission Control cost meter.
//
// OpenRouter exposes a per-key usage+credit endpoint that returns the current
// billing limit, how much has been used, and how much remains for the current
// reset window. We read OPENROUTER_API_KEY from .env.local and surface the
// numbers the Header "spend" meter shows — no invented figures.

export interface OpenRouterUsage {
  wired: boolean;
  provider: "openrouter";
  label: string | null;
  limit: number | null; // limit (USD) for current window
  limitReset: string | null; // "weekly" | "monthly" | ...
  limitRemaining: number | null;
  usageTotal: number | null; // total spend
  usageDaily: number | null;
  usageWeekly: number | null;
  usageMonthly: number | null;
  byokUsage: number | null;
  note: string;
  checkedAt: string;
  error?: string;
}

function key(): string {
  return process.env.OPENROUTER_API_KEY?.trim() || "";
}

export async function getOpenRouterUsage(): Promise<OpenRouterUsage> {
  const apiKey = key();
  const base: OpenRouterUsage = {
    wired: false,
    provider: "openrouter",
    label: null,
    limit: null,
    limitReset: null,
    limitRemaining: null,
    usageTotal: null,
    usageDaily: null,
    usageWeekly: null,
    usageMonthly: null,
    byokUsage: null,
    note: "OPENROUTER_API_KEY is not configured — cannot read live usage.",
    checkedAt: new Date().toISOString(),
  };

  if (!apiKey) {
    console.warn?.("[openrouter] costMeter: no OPENROUTER_API_KEY configured");
    return base;
  }

  try {
    const res = await fetch("https://openrouter.ai/api/v1/auth/key", {
      method: "GET",
      headers: { Authorization: `Bearer ${apiKey}` },
      signal: AbortSignal.timeout(15_000),
    });
    const body: { data?: Record<string, unknown> } = await res.json().catch(() => ({}));
    if (!res.ok) {
      base.note = `OpenRouter usage request failed (${res.status}) — meter populated on next successful poll.`;
      base.error = `http ${res.status}`;
      console.error(`[openrouter] costMeter failed: ${res.status}`);
      return base;
    }
    const d = body.data ?? {};
    return {
      wired: true,
      provider: "openrouter",
      label: typeof d.label === "string" ? d.label : null,
      limit: num(d.limit),
      limitReset: typeof d.limit_reset === "string" ? d.limit_reset : null,
      limitRemaining: num(d.limit_remaining),
      usageTotal: num(d.usage),
      usageDaily: num(d.usage_daily),
      usageWeekly: num(d.usage_weekly),
      usageMonthly: num(d.usage_monthly),
      byokUsage: num(d.byok_usage),
      note: "Live OpenRouter usage",
      checkedAt: new Date().toISOString(),
    };
  } catch (err) {
    base.note = "OpenRouter usage request failed — meter will retry on next poll.";
    base.error = err instanceof Error ? err.message : String(err);
    console.error(`[openrouter] costMeter exception: ${base.error}`);
    return base;
  }
}

function num(v: unknown): number | null {
  return typeof v === "number" && Number.isFinite(v) ? v : null;
}