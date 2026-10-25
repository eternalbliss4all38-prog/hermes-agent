import { NextResponse, type NextRequest } from "next/server";
import { verifySessionToken } from "@/lib/session-edge";

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon|icons|manifest.json).*)"],
};

const PUBLIC_PATHS = new Set(["/login", "/api/auth/login", "/api/auth/verify"]);

// Media files in /public stream without auth (e.g. test renders opened on a
// phone). Anything matching this is world-readable -- don't park private
// recordings here.
const PUBLIC_MEDIA = /\.(mp4|webm|wav|mp3|m4a|ogg)$/i;

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (PUBLIC_PATHS.has(pathname) || PUBLIC_MEDIA.test(pathname)) return NextResponse.next();

  const secret = process.env.SESSION_SECRET;
  const token = req.cookies.get("sams_session")?.value;
  const valid = secret ? await verifySessionToken(token, secret) : false;

  if (valid) return NextResponse.next();

  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  // Next's edge middleware rejects a truly relative Location header (throws
  // ERR_INVALID_URL internally), so an absolute URL is required here -- but
  // build it from the proxy-forwarded host/proto rather than req.url, which
  // only reflects the app's own internal port/host when hit directly.
  const proto = req.headers.get("x-forwarded-proto") ?? req.nextUrl.protocol.replace(":", "");
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host") ?? req.nextUrl.host;
  const loginUrl = new URL(`/login?next=${encodeURIComponent(pathname)}`, `${proto}://${host}`);
  return NextResponse.redirect(loginUrl);
}
