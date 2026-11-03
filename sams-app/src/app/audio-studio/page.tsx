"use client";

/**
 * Audio Studio — a REAL page (not an iframe, not a stub).
 *
 * `nav.ts` advertised /audio-studio with no page behind it, so the tab was dead.
 * This talks to the sams-studio service through the `/sapi/*` rewrite.
 *
 * The voice here is piper: a CPU test voice, not production. Production voice
 * cloning (Fish Speech / F5-TTS) belongs in the GPU worker and is not wired.
 */

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Mic, Loader2, RefreshCw, AlertTriangle, CheckCircle2 } from "lucide-react";

type Capability = {
  id: string;
  label: string;
  kind: string;
  runtime: string;
  available: boolean;
  detail?: string;
  note?: string;
};

type Artifact = { path?: string; name: string; size: number; url: string };
type Job = { id: string; kind: string; status: string; created?: number; artifacts?: Artifact[] };

const fixUrl = (u?: string) => (u ? u.replace("/studio/api/", "/sapi/") : u);
const fmtSize = (n?: number) =>
  !n ? "—" : n > 1 << 20 ? `${(n / (1 << 20)).toFixed(1)} MB` : `${Math.round(n / 1024)} KB`;

export default function AudioStudioPage() {
  const [text, setText] = useState("");
  const [caps, setCaps] = useState<Capability[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ kind: "ok" | "err" | "info"; text: string } | null>(null);
  const [reachable, setReachable] = useState<boolean | null>(null);
  const [latest, setLatest] = useState<Artifact | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const load = useCallback(async () => {
    try {
      const [c, j] = await Promise.all([
        fetch("/sapi/capabilities", { cache: "no-store" }),
        fetch("/sapi/jobs", { cache: "no-store" }),
      ]);
      if (!c.ok) throw new Error(`capabilities ${c.status}`);
      const cd = await c.json();
      setCaps((cd.capabilities ?? []).filter((x: Capability) => x.kind === "audio"));
      setReachable(true);
      const jd = await j.json().catch(() => ({ jobs: [] }));
      const all: Job[] = jd.jobs ?? [];
      setJobs(all.filter((x) => x.kind === "tts" || (x.artifacts ?? []).some((a) => /\.(wav|mp3|m4a)$/i.test(a.name))));
    } catch (e) {
      setReachable(false);
      setMsg({ kind: "err", text: `Studio service unreachable: ${(e as Error).message}` });
    }
  }, []);

  useEffect(() => {
    void load();
    timer.current = setInterval(() => void load(), 5000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [load]);

  const ttsCap = caps.find((c) => c.id === "tts");

  async function speak() {
    if (!text.trim()) return;
    setBusy(true);
    setMsg({ kind: "info", text: "Generating narration…" });
    try {
      const r = await fetch("/sapi/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.error || `HTTP ${r.status}`);
      const a: Artifact | undefined = d.artifact ?? (d.artifacts ?? [])[0];
      if (a?.url) setLatest({ ...a, url: fixUrl(a.url) as string });
      setMsg({ kind: "ok", text: "Narration ready." });
      await load();
    } catch (e) {
      setMsg({ kind: "err", text: `Narration failed: ${(e as Error).message}` });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex flex-col h-full w-full min-h-screen bg-slate-950 text-slate-100 p-4 space-y-4">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center space-x-2">
            <Mic className="w-4 h-4 text-cyan-400" />
            <h1 className="text-sm font-bold tracking-wide uppercase text-slate-200">
              Audio Studio · narration
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <span
              className={`text-xs font-mono px-2 py-0.5 rounded border ${
                reachable
                  ? "bg-emerald-950 text-emerald-400 border-emerald-800"
                  : reachable === false
                    ? "bg-red-950 text-red-400 border-red-800"
                    : "bg-slate-800 text-slate-400 border-slate-700"
              }`}
            >
              {reachable ? "service up" : reachable === false ? "service unreachable" : "checking…"}
            </span>
            <button onClick={() => void load()} className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white">
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <p className="text-[11px] text-amber-300/80 border border-amber-900/50 bg-amber-950/20 rounded-lg px-3 py-2">
          {ttsCap?.note ??
            "Voice engines report from the studio service. Piper is CPU-only test audio — production voice cloning needs the GPU worker."}
        </p>

        {msg && (
          <div
            className={`text-xs rounded-lg px-3 py-2 border flex items-start gap-2 ${
              msg.kind === "err"
                ? "bg-red-950/60 border-red-800 text-red-200"
                : msg.kind === "ok"
                  ? "bg-emerald-950/60 border-emerald-800 text-emerald-200"
                  : "bg-slate-950 border-slate-800 text-slate-300"
            }`}
          >
            {msg.kind === "err" ? <AlertTriangle className="w-3.5 h-3.5 mt-0.5" /> : <CheckCircle2 className="w-3.5 h-3.5 mt-0.5" />}
            <span>{msg.text}</span>
          </div>
        )}

        <label className="text-xs text-slate-400 block">
          Narration text
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={6}
            placeholder="Type what you want spoken…"
            className="mt-1 w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500"
          />
        </label>

        <button
          onClick={() => void speak()}
          disabled={busy || !text.trim()}
          className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-40 text-white text-xs font-semibold px-4 py-2 rounded-lg"
        >
          {busy ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Mic className="w-3.5 h-3.5" />}
          Generate narration
        </button>
      </div>

      {latest?.url && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
          <h2 className="text-xs font-bold tracking-wide uppercase text-slate-300">Latest</h2>
          <div className="text-[11px] text-slate-400">
            {latest.name} · {fmtSize(latest.size)}
          </div>
          <audio src={latest.url} controls className="w-full" />
        </div>
      )}

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
        <h2 className="text-xs font-bold tracking-wide uppercase text-slate-300">Recent audio</h2>
        {!jobs.length && <p className="text-xs text-slate-500">Nothing recorded yet.</p>}
        <div className="space-y-3">
          {jobs.slice(0, 10).map((j) => (
            <div key={j.id} className="border border-slate-800 rounded-lg p-3 bg-slate-950/60 space-y-2">
              <div className="text-xs font-mono text-slate-300">
                {j.id} · {j.status}
              </div>
              {(j.artifacts ?? []).map((a) => (
                <div key={a.url} className="space-y-1">
                  <div className="text-[11px] text-slate-400">
                    {a.name} · {fmtSize(a.size)}
                  </div>
                  <audio src={fixUrl(a.url)} controls className="w-full" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
