import { NextResponse } from "next/server";
import { scrapeUrl } from "@/lib/scrapling";

// Real scrape via the self-hosted Scrapling service (replaces the paid hosted
// Firecrawl API). Reads live network state -> must be dynamic.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const url = typeof body?.url === "string" ? body.url.trim() : "";
  const formats = Array.isArray(body?.formats) ? (body.formats as string[]) : ["markdown"];

  try {
    const parsed = new URL(url);
    if (!/^https?:$/.test(parsed.protocol)) throw new Error("bad protocol");
  } catch {
    return NextResponse.json({ ok: false, error: "Enter a valid http(s) URL", url }, { status: 400 });
  }

  const result = await scrapeUrl(url, formats);

  if (!result.ok) {
    // 503 when our own scraper service is unreachable; 502 when the crawl
    // itself failed. Either way the reason is reported, never faked.
    const status = result.notConfigured ? 503 : 502;
    return NextResponse.json(
      {
        ok: false,
        url,
        error: result.notConfigured
          ? "The local Scrapling scrape service is not reachable (sams-scrapling:8899)."
          : result.error ?? "Scrape failed",
      },
      { status },
    );
  }

  return NextResponse.json({
    ok: true,
    url,
    markdown: result.markdown,
    text: result.text,
    links: result.links ?? [],
    metadata: result.metadata ?? {},
    scrapedAt: result.scrapedAt,
  });
}
