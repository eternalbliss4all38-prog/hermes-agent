"use client";

import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import { AppWindow, Check, Clapperboard, Rocket } from "lucide-react";
import type { CampaignManifest } from "@/lib/campaigns";

const asset = (c: CampaignManifest, file: string) => `/campaigns/${c.id}/${file}`;

export function CampaignReview() {
  const [campaigns, setCampaigns] = useState<CampaignManifest[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [showSandbox, setShowSandbox] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const load = useCallback(async () => {
    const res = await fetch("/api/campaigns");
    if (!res.ok) return;
    const data = await res.json();
    setCampaigns(data.campaigns);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const active = campaigns.find((c) => c.id === activeId) ?? campaigns[0] ?? null;

  async function act(action: "approve" | "publish") {
    if (!active) return;
    setBusy(true);
    setMessage(null);
    try {
      const res = await fetch(`/api/campaigns/${active.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          action === "approve" ? { action, thumbnail: thumbnail ?? undefined } : { action },
        ),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? `HTTP ${res.status}`);
      setMessage(action === "approve" ? "Approved — ready for Payhip & publish." : "Sent to YouTube scheduler.");
      await load();
    } catch (err) {
      setMessage((err as Error).message);
    } finally {
      setBusy(false);
    }
  }

  if (!active) return null;

  return (
    <div className="border-b border-panel-border p-3">
      <h3 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
        <Clapperboard size={12} /> Campaign Review
      </h3>

      {campaigns.length > 1 && (
        <select
          value={active.id}
          onChange={(e) => {
            setActiveId(e.target.value);
            setThumbnail(null);
            setShowSandbox(false);
          }}
          className="mb-2 w-full rounded-lg border border-panel-border bg-panel-hover p-1.5 text-xs text-foreground"
        >
          {campaigns.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      )}

      <div className="mb-1 flex items-center justify-between text-xs">
        <span className="font-medium text-foreground">{active.name}</span>
        <span
          className={clsx(
            "rounded border px-1.5 py-0.5 text-[10px] uppercase",
            active.status === "review" && "border-accent-amber/40 text-accent-amber",
            active.status === "approved" && "border-accent-emerald/40 text-accent-emerald",
            active.status === "published" && "border-accent-cyan/40 text-accent-cyan",
          )}
        >
          {active.status}
        </span>
      </div>

      {active.video && (
        <video
          key={active.id}
          src={asset(active, active.video)}
          controls
          preload="metadata"
          className="mb-2 w-full rounded-lg border border-panel-border"
        />
      )}

      {active.thumbnails && active.thumbnails.length > 0 && (
        <>
          <p className="mb-1 text-[10px] uppercase tracking-wide text-muted">Thumbnail</p>
          <div className="mb-2 grid grid-cols-3 gap-1.5">
            {active.thumbnails.map((t) => {
              const selected = (thumbnail ?? active.selectedThumbnail) === t;
              return (
                <button key={t} onClick={() => setThumbnail(t)} className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(active, t)}
                    alt={t}
                    className={clsx(
                      "aspect-video w-full rounded-md border object-cover",
                      selected ? "border-accent-cyan" : "border-panel-border opacity-70 hover:opacity-100",
                    )}
                  />
                  {selected && (
                    <span className="absolute right-1 top-1 rounded-full bg-accent-cyan p-0.5 text-slate-950">
                      <Check size={10} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}

      {active.emails && active.emails.length > 0 && (
        <div className="mb-2">
          <p className="mb-1 text-[10px] uppercase tracking-wide text-muted">Email sequence</p>
          <div className="flex flex-wrap gap-1.5">
            {active.emails.map((e, i) => (
              <a
                key={e}
                href={asset(active, e)}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-panel-border bg-panel-hover px-2 py-1 text-[11px] text-accent-cyan hover:border-accent-cyan/40"
              >
                Email {i + 1}
              </a>
            ))}
            <a
              href={asset(active, "emails/index.html")}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-panel-border bg-panel-hover px-2 py-1 text-[11px] text-muted hover:text-foreground"
            >
              All
            </a>
          </div>
        </div>
      )}

      {active.appUrl && (
        <div className="mb-2">
          <button
            onClick={() => setShowSandbox((v) => !v)}
            className="mb-1.5 flex items-center gap-1.5 text-xs text-accent-violet hover:underline"
          >
            <AppWindow size={12} /> {showSandbox ? "Hide" : "Open"} app sandbox
          </button>
          {showSandbox && (
            <iframe
              src={active.appUrl}
              title={`${active.name} sandbox`}
              sandbox="allow-scripts allow-forms allow-same-origin"
              className="h-64 w-full rounded-lg border border-panel-border bg-white"
            />
          )}
        </div>
      )}

      <div className="flex gap-1.5">
        <button
          disabled={busy || active.status !== "review"}
          onClick={() => act("approve")}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-accent-emerald/15 px-2 py-1.5 text-xs text-accent-emerald hover:bg-accent-emerald/25 disabled:opacity-40"
        >
          <Check size={12} /> Approve & Push to Payhip
        </button>
        <button
          disabled={busy || active.status !== "approved"}
          onClick={() => act("publish")}
          className="flex items-center justify-center gap-1.5 rounded-lg bg-accent-cyan/15 px-2 py-1.5 text-xs text-accent-cyan hover:bg-accent-cyan/25 disabled:opacity-40"
        >
          <Rocket size={12} /> YouTube
        </button>
      </div>
      {message && <p className="mt-1.5 text-[11px] text-muted">{message}</p>}
    </div>
  );
}
