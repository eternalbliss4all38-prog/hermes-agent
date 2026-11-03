/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  experimental: {
    proxyTimeout: 3600000,
  },
  httpAgentOptions: {
    keepAlive: true,
  },
  async redirects() {
    return [
      { source: '/n8n', destination: '/home/workflows', permanent: false },
      { source: '/n8n/', destination: '/home/workflows', permanent: false },
    ];
  },
  async headers() {
    // App-shell HTML must NEVER be served from a long-lived cache. Next emits
    // `Cache-Control: s-maxage=31536000` for prerendered pages, so a shipped
    // update stays invisible on the operator's device until the cache expires
    // (observed 2026-10-25: an old Mission Control page kept showing after a
    // deploy). Only HTML documents are affected; static assets keep their
    // normal immutable caching.
    return [
      {
        source: "/:path*",
        has: [{ type: "header", key: "accept", value: "(.*)text/html(.*)" }],
        headers: [{ key: "Cache-Control", value: "no-store, no-cache, must-revalidate" }],
      },
    ];
  },
  async rewrites() {
    const r = (p) => ({ source: p, destination: `http://127.0.0.1:5678${p}` });
    return [
      { source: '/behavior-api/:path*', destination: 'http://127.0.0.1:4600/:path*' },
      { source: '/ab-api/:path*', destination: 'http://127.0.0.1:4599/:path*' },
      r('/home/:path*'),
      r('/workflow/:path*'),
      r('/workflows/:path*'),
      r('/executions/:path*'),
      r('/credentials/:path*'),
      r('/settings/:path*'),
      r('/projects/:path*'),
      r('/chat'),
      r('/chat/:path*'),
      r('/templates'),
      r('/templates/:path*'),
      r('/insights'),
      r('/insights/:path*'),
      r('/variables'),
      r('/variables/:path*'),
      r('/signin'),
      r('/signup'),
      r('/setup'),
      r('/forgot-password'),
      r('/rest/:path*'),
      r('/assets/:path*'),
      r('/static/:path*'),
      r('/types/:path*'),
      r('/healthz'),
      r('/webhook/:path*'),
      r('/webhook-test/:path*'),
      r('/favicon.ico'),
    ];
  },
};
export default nextConfig;
