"use client";

// src/app/ab-analytics/page.tsx
//
// A/B Variance Analytics — built for TWO audiences, side by side:
//   1. CLAIMS vs ACTUAL — what the agent says is happening, next to what is
//      actually measured, ruled on by the engine. Green = matches, red = the
//      claim is wrong, amber = unverifiable/thin.
//   2. THE TEST BOARD — both variants, every metric, winner green / loser red,
//      with the reason it is winning and what to change next.
// Every number comes from the variance engine; nothing is computed in the browser.

import { useCallback, useEffect, useState } from "react";
import {
  Activity, ArrowUpRight, Beaker, CheckCircle2, HelpCircle, Loader2, Plus, RefreshCw,
  ShieldAlert, TriangleAlert, XCircle,
} from "lucide-react";

interface Variant { key: string; label: string; impressions: number; conversions: number }
interface Stats {
  z: number; p: number; lift_pct: number;
  ci: { a: [number, number]; b: [number, number] };
  significant: boolean; reason?: string | null; why?: string; improve?: string;
}
interface Test {
  id: string; name: string; metric: string; source: string;
  variants: Variant[]; stats: Stats | Record<string, never>; winner: string | null; explanation: string[];
}
interface Claim {
  id: number; agent: string; test_id: string; variant?: string | null; metric: string;
  value: number; note?: string; ts: number;
  verdict: "matches" | "mismatch" | "thin" | "unverifiable";
  actual?: number | null; impressions?: number; conversions?: number; delta?: number; detail: string;
}

function rich(s: string) {
  return s.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={i} className="text-foreground">{part.slice(2, -2)}</strong>
      : <span key={i}>{part}</span>,
  );
}
const cvr = (v: Variant) => (v.impressions ? (v.conversions / v.impressions) * 100 : 0);

const VERDICT: Record<Claim["verdict"], { cls: string; icon: React.ReactNode; label: string }> = {
  matches: { cls: "border-emerald-500/60 bg-emerald-500/10", icon: <CheckCircle2 size={13} className="text-emerald-300" />, label: "VERIFIED" },
  mismatch: { cls: "border-red-500/60 bg-red-500/10", icon: <XCircle size={13} className="text-red-300" />, label: "CLAIM IS WRONG" },
  thin: { cls: "border-amber-500/60 bg-amber-500/10", icon: <ShieldAlert size={13} className="text-amber-300" />, label: "UNPROVEN — THIN DATA" },
  unverifiable: { cls: "border-amber-500/60 bg-amber-500/10", icon: <HelpCircle size={13} className="text-amber-300" />, label: "UNVERIFIABLE" },
};

export default function AbAnalyticsPage() {
  const [tests, setTests] = useState<Test[]>([]);
  const [claims, setClaims] = useState<Claim[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [aLabel, setALabel] = useState("");
  const [bLabel, setBLabel] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [t, c] = await Promise.all([
        fetch("/api/ab/tests", { cache: "no-store" }).then((r) => r.json()),
        fetch("/api/ab/tests?view=claims", { cache: "no-store" }).then((r) => r.json()),
      ]);
      if (t?.error) throw new Error(t.error);
      setTests((t?.tests as Test[]) ?? []);
      setClaims((c?.claims as Claim[]) ?? []);
      setErr(null);
    } catch (e) {
      setErr(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { void load(); }, [load]);

  async function createTest() {
    if (!name.trim()) return;
    setBusy("new");
    try {
      await fetch("/api/ab/tests", {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: name.trim(), source: "mission-control",
          variants: [
            { key: "a", label: aLabel.trim() || "Variant A (control)" },
            { key: "b", label: bLabel.trim() || "Variant B (challenger)" },
          ],
        }),
      });
      setName(""); setALabel(""); setBLabel("");
      await load();
    } finally { setBusy(null); }
  }

  const mismatches = claims.filter((c) => c.verdict === "mismatch").length;

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-3 sm:p-4">
      <header className="flex flex-wrap items-center gap-2">
        <Beaker size={16} className="text-accent-cyan" />
        <h1 className="text-lg font-semibold text-foreground">A/B Variance Analytics</h1>
        <p className="text-[11px] text-muted">
          What the agents say, next to what is actually measured — and the numbers behind both.
        </p>
        <button type="button" onClick={() => void load()}
          className="ml-auto flex items-center gap-1.5 rounded border border-panel-border px-2 py-1 text-[10px] uppercase tracking-wider text-muted hover:text-foreground">
          {loading ? <Loader2 size={11} className="animate-spin" /> : <RefreshCw size={11} />} Refresh
        </button>
      </header>

      {err && (
        <p className="flex items-center gap-1.5 rounded border border-red-500/40 bg-red-500/10 px-2 py-1.5 text-[11px] text-red-300">
          <TriangleAlert size={12} /> {err}
        </p>
      )}

      {/* ---- CLAIMS vs ACTUAL ---- */}
      <section className="rounded-xl border border-panel-border bg-panel">
        <div className="flex flex-wrap items-center gap-2 border-b border-panel-border px-3 py-2">
          <ShieldAlert size={13} className="text-accent-cyan" />
          <h2 className="text-[12px] font-semibold uppercase tracking-wider text-foreground">
            Claims vs Actual
          </h2>
          <span className="text-[10px] text-muted">what the agent says &nbsp;|&nbsp; what is really happening</span>
          {mismatches > 0 && (
            <span className="ml-auto rounded bg-red-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-300">
              {mismatches} false claim{mismatches > 1 ? "s" : ""}
            </span>
          )}
        </div>
        {claims.length === 0 ? (
          <p className="px-3 py-3 text-[11px] text-muted">
            No claims recorded. When an agent states a result, it lands here and is checked against the
            measurement — an agent that never posts a claim has never been verified.
          </p>
        ) : (
          <div className="divide-y divide-panel-border">
            {claims.map((c) => {
              const v = VERDICT[c.verdict];
              return (
                <div key={c.id} className={"p-2.5 " + v.cls}>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    {v.icon}
                    <span className="text-[10px] font-bold uppercase tracking-wider">{v.label}</span>
                    <span className="text-[10px] text-muted">agent: {c.agent}</span>
                    <span className="text-[10px] text-muted">test: {c.test_id?.slice(0, 44)}{c.variant ? " / " + c.variant : ""}</span>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="rounded-lg border border-panel-border bg-black/25 p-2.5">
                      <div className="text-[9.5px] uppercase tracking-wider text-muted">Agent says</div>
                      <div className={"text-xl font-bold tabular-nums " + (c.verdict === "matches" ? "text-emerald-300" : c.verdict === "mismatch" ? "text-red-300" : "text-foreground")}>
                        {(c.value * 100).toFixed(2)}%
                      </div>
                      {c.note && <div className="mt-0.5 text-[10px] italic text-muted">&ldquo;{c.note}&rdquo;</div>}
                    </div>
                    <div className="rounded-lg border border-panel-border bg-black/25 p-2.5">
                      <div className="text-[9.5px] uppercase tracking-wider text-muted">Actually measured</div>
                      {c.actual != null ? (
                        <>
                          <div className="text-xl font-bold tabular-nums text-foreground">{(c.actual * 100).toFixed(2)}%</div>
                          <div className="mt-0.5 text-[10px] text-muted tabular-nums">
                            {c.conversions ?? 0}/{c.impressions ?? 0} measured
                            {c.delta != null && (
                              <span className={Math.abs(c.delta) < 0.02 ? " text-emerald-300" : " text-red-300"}>
                                {" "}(delta {c.delta >= 0 ? "+" : ""}{(c.delta * 100).toFixed(2)}pp)
                              </span>
                            )}
                          </div>
                        </>
                      ) : (
                        <div className="text-[13px] font-semibold text-amber-300">no measurement exists</div>
                      )}
                    </div>
                  </div>
                  <p className="mt-1.5 text-[11px] text-muted">{c.detail}</p>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* register a test */}
      <section className="rounded-xl border border-panel-border bg-panel p-3">
        <div className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
          <Plus size={11} /> Register a test
        </div>
        <div className="flex flex-wrap gap-2">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="test name (e.g. bridge-page-headline)"
            className="min-w-[220px] flex-1 rounded bg-black/30 px-2 py-1.5 text-[12px] text-foreground outline-none" />
          <input value={aLabel} onChange={(e) => setALabel(e.target.value)} placeholder="A label (control)"
            className="min-w-[150px] flex-1 rounded bg-black/30 px-2 py-1.5 text-[12px] text-foreground outline-none" />
          <input value={bLabel} onChange={(e) => setBLabel(e.target.value)} placeholder="B label (challenger)"
            className="min-w-[150px] flex-1 rounded bg-black/30 px-2 py-1.5 text-[12px] text-foreground outline-none" />
          <button type="button" onClick={() => void createTest()} disabled={busy === "new" || !name.trim()}
            className="rounded border border-accent-cyan/50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-accent-cyan disabled:opacity-40">
            {busy === "new" ? <Loader2 size={11} className="animate-spin" /> : "Create"}
          </button>
        </div>
      </section>

      {!loading && tests.length === 0 && !err && (
        <section className="rounded-xl border border-dashed border-panel-border bg-panel p-6 text-center">
          <Activity size={18} className="mx-auto mb-2 text-muted" />
          <p className="text-[12px] text-foreground">No tests are running yet.</p>
          <p className="mx-auto mt-1 max-w-xl text-[11px] text-muted">
            This board stays empty until a real source pushes events — the comment bot, a video, an email
            send, an app, or a bridge page. Nothing here is simulated.
          </p>
        </section>
      )}

      {tests.map((t) => {
        const s = t.stats as Stats;
        const hasStats = typeof s?.p === "number";
        const winner = t.winner;
        return (
          <section key={t.id} className="rounded-xl border border-panel-border bg-panel">
            <div className="flex flex-wrap items-center gap-2 border-b border-panel-border px-3 py-2">
              <h2 className="text-[13px] font-semibold text-foreground">{t.name}</h2>
              <span className="rounded bg-panel-hover px-1.5 py-0.5 text-[9.5px] uppercase tracking-wider text-muted">{t.metric}</span>
              <span className="text-[9.5px] text-muted">source: {t.source}</span>
              <span className="ml-auto text-[9.5px] text-muted">{t.variants.length} variants</span>
            </div>

            <div className="grid gap-2 p-2 sm:grid-cols-2">
              {t.variants.map((v) => {
                const isWin = winner === v.key;
                const isLose = !!winner && winner !== v.key;
                const tone = isWin ? "border-emerald-500/60 bg-emerald-500/10"
                  : isLose ? "border-red-500/60 bg-red-500/10" : "border-panel-border bg-black/20";
                const badge = isWin
                  ? <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300">Winner</span>
                  : isLose
                    ? <span className="rounded bg-red-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-300">Loser</span>
                    : <span className="rounded bg-panel-hover px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">No call</span>;
                const ci = v.key === "a" ? s?.ci?.a : s?.ci?.b;
                return (
                  <div key={v.key} className={"rounded-lg border p-3 " + tone}>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="truncate text-[12px] font-medium text-foreground">{v.label}</span>
                      <span className="ml-auto">{badge}</span>
                    </div>
                    <div className="flex items-end gap-3">
                      <div>
                        <div className="text-[9.5px] uppercase tracking-wider text-muted">conv rate</div>
                        <div className={"text-2xl font-bold tabular-nums " + (isWin ? "text-emerald-300" : isLose ? "text-red-300" : "text-foreground")}>
                          {cvr(v).toFixed(2)}%
                        </div>
                      </div>
                      <div className="ml-auto grid grid-cols-2 gap-x-3 gap-y-0.5 text-right">
                        <span className="text-[9.5px] uppercase tracking-wider text-muted">impr</span>
                        <span className="text-[11px] tabular-nums text-foreground">{v.impressions.toLocaleString()}</span>
                        <span className="text-[9.5px] uppercase tracking-wider text-muted">conv</span>
                        <span className="text-[11px] tabular-nums text-foreground">{v.conversions.toLocaleString()}</span>
                        {ci && (
                          <>
                            <span className="text-[9.5px] uppercase tracking-wider text-muted">95% CI</span>
                            <span className="text-[10px] tabular-nums text-muted">
                              {(ci[0] * 100).toFixed(2)}–{(ci[1] * 100).toFixed(2)}%
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded bg-black/40">
                      <div className={"h-full " + (isWin ? "bg-emerald-400" : isLose ? "bg-red-400" : "bg-zinc-500")}
                        style={{ width: Math.min(100, cvr(v) * 5) + "%" }} />
                    </div>
                  </div>
                );
              })}
            </div>

            {hasStats && (
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-panel-border px-3 py-2 text-[10.5px] tabular-nums">
                <span className="text-muted">z <strong className="text-foreground">{s.z.toFixed(3)}</strong></span>
                <span className="text-muted">p-value <strong className="text-foreground">{s.p.toFixed(5)}</strong></span>
                <span className="text-muted">lift <strong className={s.lift_pct >= 0 ? "text-emerald-300" : "text-red-300"}>
                  {s.lift_pct >= 0 ? "+" : ""}{s.lift_pct.toFixed(1)}%</strong></span>
                <span className="text-muted">confidence <strong className="text-foreground">{((1 - s.p) * 100).toFixed(2)}%</strong></span>
                <span className={"rounded px-1.5 py-0.5 text-[9.5px] font-semibold uppercase tracking-wider " +
                  (s.significant ? "bg-emerald-500/20 text-emerald-300" : "bg-amber-500/20 text-amber-300")}>
                  {s.significant ? "significant" : "not significant"}
                </span>
              </div>
            )}

            <div className="border-t border-panel-border bg-black/20 px-3 py-2.5">
              <div className="mb-1 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
                <ArrowUpRight size={11} /> Why it is winning &amp; how to improve
              </div>
              <ul className="space-y-1">
                {t.explanation.map((line, i) => (
                  <li key={i} className="text-[11.5px] leading-relaxed text-muted">{rich(line)}</li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
    </div>
  );
}
