// Deterministic heuristic scorer (v0) -- not a market-research pipeline.
// Rewards specificity and known high-signal business/pain-point language so
// two ideas with the same text always get the same score, and the score
// means *something* rather than being decorative.
const SIGNAL_KEYWORDS = [
  "recurring",
  "subscription",
  "compliance",
  "audit",
  "tracker",
  "automat",
  "workflow",
  "saas",
  "lead",
  "onboarding",
  "reporting",
  "invoice",
  "schedul",
  "deadline",
  "risk",
];

export function computeFeasibilityScore(title: string, niche: string): number {
  const text = `${title} ${niche}`.toLowerCase();

  let score = 20; // baseline

  // Niche specificity: word count beyond a single vague word.
  const nicheWords = niche.trim().split(/\s+/).filter(Boolean);
  score += Math.min(nicheWords.length * 6, 24);

  // Title carries enough detail to act on.
  const titleWords = title.trim().split(/\s+/).filter(Boolean);
  score += Math.min(titleWords.length * 2, 16);

  // High-signal keyword hits.
  const hits = SIGNAL_KEYWORDS.filter((kw) => text.includes(kw)).length;
  score += Math.min(hits * 8, 40);

  return Math.max(5, Math.min(95, Math.round(score)));
}
