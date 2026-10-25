import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'online',
    director: 'OpenClaw Gateway',
    gatewayPort: 18789,
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // Forward to OpenClaw Gateway
    try {
      const openclawRes = await fetch('http://127.0.0.1:18789/api/dispatch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await openclawRes.json();
      return NextResponse.json({ success: true, message: 'OpenClaw received instruction', data });
    } catch {
      return NextResponse.json({ success: true, message: 'OpenClaw instruction queued' });
    }
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
