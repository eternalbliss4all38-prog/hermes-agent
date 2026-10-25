import { NextResponse, type NextRequest } from "next/server";
import { verifySessionToken } from "@/lib/session-edge";

// Traefik forwardAuth target for reverse-proxied sub-apps (e.g. /hermes/*)
// that have no auth of their own on this loopback-bound deployment. Traefik
// calls this on every request to the proxied path with the original
// cookies attached; a 2xx lets the request through, anything else is
// returned to the browser verbatim -- so a redirect here sends the user to
// login instead of showing a bare 401.
export async function GET(req: NextRequest) {
  const secret = process.env.SESSION_SECRET;
  const token = req.cookies.get("sams_session")?.value;
  const valid = secret ? await verifySessionToken(token, secret) : false;

  if (valid) return new NextResponse(null, { status: 200 });

  const proto = req.headers.get("x-forwarded-proto") ?? req.nextUrl.protocol.replace(":", "");
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host") ?? req.nextUrl.host;
  const originalPath = req.headers.get("x-forwarded-uri") ?? "/hermes/";
  const loginUrl = new URL(`/login?next=${encodeURIComponent(originalPath)}`, `${proto}://${host}`);
  return NextResponse.redirect(loginUrl, { status: 302 });
}
