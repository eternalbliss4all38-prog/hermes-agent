import { NextResponse, type NextRequest } from "next/server";
import { verifySessionToken } from "@/lib/session-edge";

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon|icons|manifest.json_).*)"],
};

const PUBLIC_PATHS = new Set([
   "/login",
   "/api/auth/login",
   "/api/auth/verify"
]);

const PUBLIC_MEDIA = /\.(mp4|webm|wav|mp3|m4a|ogg)$/i;

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (PUBLIC_PATHS.has(pathname) || PUBLIC_MEDIA.test(pathname)) {
    return NextResponse.next();
  }

  const secret = process.env.SESSION_SECRET;
	const token = req.cookies.get("sams_session")?.value;
  const valid = secret ? await verifySessionToken(token, secret) : false;

  if (valid) return NextResponse.next();

  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/behavior-api/") ||
    pathname.startsWith("/ab-api/")
  ) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const proto =
    req.headers.get("x-forwarded-proto") ??
    req.nextUrl.protocol.replace(":", "");
  const host =
    req.headers.get("x-forwarded-host") ??
    req.headers.get("host") ??
    req.nextUrl.host;
  const loginUrl = new URL(
    `/login?next=${encodeURIComponent(pathname)}`,
    `${proto}://${host}`
  );
  return NextResponse.redirect(loginUrl);
}
