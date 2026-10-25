// Scrapling scrape client for the SEO Machine.
//
// Replaces the paid hosted Firecrawl API with the SELF-HOSTED `sams-scrapling`
// service (Scrapling StealthyFetcher / Chromium over a tiny HTTP API), which
// runs on the host network so this reaches it directly at SCRAPLING_URL
// (default http://127.0.0.1:8899) -- no API key, no external billing.
//
// The response shape deliberately mirrors Firecrawl's /v1/scrape so this stays
// a drop-in for anything that consumed the old client. Errors are returned
// honestly (ok:false + error), never faked.

export interface ScrapeResult {
  ok: boolean;
  /** True when the local scraper service is unreachable (not an input error). */
  notConfigured?: boolean;
  markdown?: string | null;
  text?: string | null;
  links?: Array<{ url: string } | string>;
  metadata?: {
    title?: string | null;
    description?: string | null;
    statusCode?: number | null;
    scraper?: string;
    [k: string]: unknown;
  };
  scrapedAt: string;
  error?: string;
  httpStatus?: number;
}

const ENDPOINT = (process.env.SCRAPLING_URL?.trim() || "http://127.0.0.1:8899").replace(/\/$/, "");

export async function scrapeUrl(url: string, formats: string[] = ["markdown"]): Promise<ScrapeResult> {
  const base: ScrapeResult = { ok: false, scrapedAt: new Date().toISOString() };

  try {
    const res = await fetch(`${ENDPOINT}/scrape`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, formats }),
      signal: AbortSignal.timeout(90_000),
    });

    const body: {
      success?: boolean;
      data?: {
        markdown?: string | null;
        text?: string | null;
        links?: Array<{ url: string } | string>;
        metadata?: ScrapeResult["metadata"];
      };
      error?: string;
    } = await res.json().catch(() => ({}));

    if (!res.ok || body.success === false) {
      base.error = body.error ?? `Scrapling service responded ${res.status}`;
      base.httpStatus = res.status;
      console.error(`[scrapling] scrape failed: ${base.error}`);
      return base;
    }

    base.ok = true;
    base.markdown = body.data?.markdown ?? null;
    base.text = body.data?.text ?? null;
    base.links = body.data?.links;
    base.metadata = body.data?.metadata;
    return base;
  } catch (err) {
    base.error = err instanceof Error ? err.message : String(err);
    // A refused connection / failed fetch means the local service is down.
    base.notConfigured = /ECONNREFUSED|fetch failed|ENOTFOUND/i.test(base.error);
    console.error(`[scrapling] scrape exception: ${base.error}`);
    return base;
  }
}
