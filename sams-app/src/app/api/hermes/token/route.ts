import { NextResponse } from "next/server";

// hermes_cli/web_server.py mints one loopback session token per process
// lifetime (module-level constant, not per-request) and injects it into
// index.html as window.__HERMES_SESSION_TOKEN__ for the embedded dashboard.
// We scrape it the same way the dashboard's own dev-mode Vite plugin does
// (hermes-agent/web/vite.config.ts) so our chat UI can open its own
// /hermes/api/ws connection without going through that dashboard at all.
const HERMES_BACKEND = process.env.HERMES_DASHBOARD_URL ?? "http://127.0.0.1:9119";
const TOKEN_RE = /window\.__HERMES_SESSION_TOKEN__\s*=\s*"([^"]+)"/;

export async function GET() {
  try {
    const res = await fetch(HERMES_BACKEND, {
      headers: { accept: "text/html" },
      cache: "no-store",
    });
    const html = await res.text();
    const match = html.match(TOKEN_RE);
    if (!match) {
      return NextResponse.json({ error: "Hermes session token not found in dashboard response" }, { status: 502 });
    }
    return NextResponse.json({ token: match[1] });
  } catch (err) {
    return NextResponse.json(
      { error: `Hermes dashboard unreachable: ${(err as Error).message}` },
      { status: 502 },
    );
  }
}
