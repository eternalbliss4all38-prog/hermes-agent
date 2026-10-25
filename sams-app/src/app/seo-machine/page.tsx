"use client";

import { useState } from "react";
import { Search, TrendingUp, Video } from "lucide-react";
import { FeatureCardGrid } from "@/components/shared/FeatureCardGrid";

interface ScrapeOut {
  ok: boolean;
  url: string;
  markdown?: string | null;
  text?: string | null;
  links?: Array<{ url: string } | string>;
  metadata?: { title?: string | null; description?: string | null; statusCode?: number | null; scraper?: string };
  scrapedAt?: string;
  error?: string;
}

export default function SeoMachinePage() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<ScrapeOut | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);
    try {
      const res = await fetch("/api/seo/scrape", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const body: ScrapeOut = await res.json();
      setResult(body);
    } catch {
      setResult({ ok: false, url, error: "Network error" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex h-full min-h-0 flex-col">
      <form onSubmit={submit} className="flex flex-col gap-2 border-b border-panel-border p-3 sm:flex-row sm:p-6">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://competitor.com/target-page"
          className="flex-1 rounded bg-panel-hover px-2 py-1.5 text-xs outline-none placeholder:text-muted"
        />
        <button
          type="submit"
          disabled={submitting || !url}
          className="rounded bg-accent-cyan/15 px-3 py-1.5 text-xs text-accent-cyan hover:bg-accent-cyan/25 disabled:opacity-50"
        >
          {submitting ? "Scraping…" : "Scrape URL"}
        </button>
      </form>

      {result && (
        <div className="min-h-0 flex-1 overflow-y-auto p-3 sm:p-6">
          {result.ok ? (
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 rounded-lg border border-panel-border bg-panel/60 px-3 py-2 text-[11px]">
                <span className="font-mono uppercase text-accent-emerald">scraped · {result.metadata?.scraper ?? "scrapling"}</span>
                {result.metadata?.statusCode != null && <span className="text-muted">HTTP {result.metadata.statusCode}</span>}
                <span className="text-muted">{result.links?.length ?? 0} links</span>
                <span className="text-muted">{(result.markdown ?? "").length.toLocaleString()} chars markdown</span>
              </div>
              {result.metadata?.title && (
                <p className="text-sm font-semibold text-foreground">{result.metadata.title}</p>
              )}
              {result.metadata?.description && <p className="text-xs text-muted">{result.metadata.description}</p>}
              <pre className="max-h-[50vh] overflow-auto rounded-lg border border-panel-border bg-black/40 p-3 text-[11px] leading-relaxed text-muted whitespace-pre-wrap">
                {(result.markdown ?? result.text ?? "").slice(0, 4000)}
              </pre>
            </div>
          ) : (
            <div className="rounded-lg border border-accent-red/30 bg-accent-red/10 px-3 py-2 text-xs text-accent-red">
              {result.error ?? "Scrape failed"}
            </div>
          )}
        </div>
      )}

      {!result && (
        <div className="flex-1">
          <FeatureCardGrid
            title="SEO Machine & Web Intelligence"
            description="Live scraping runs through the self-hosted Scrapling service (no paid Firecrawl). Enter a URL above to pull its real content, title, and links."
            cards={[
              { icon: Search, title: "Scrapling Scrape Monitor", reason: "Self-hosted StealthyFetcher service — active." },
              { icon: Video, title: "Competitor Video DNA Analyzer", reason: "No analysis pipeline is deployed." },
              { icon: TrendingUp, title: "Keyword & Gravity Tracker", reason: "No tracked-keyword data source is configured." },
            ]}
          />
        </div>
      )}
    </div>
  );
}
