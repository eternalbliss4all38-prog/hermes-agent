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
  async rewrites() {
    const r = (p) => ({ source: p, destination: `http://127.0.0.1:5678${p}` });
    return [
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
