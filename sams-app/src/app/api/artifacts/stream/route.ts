// src/app/api/artifacts/stream/route.ts
//
// Server-Sent Events feed of REAL artifacts as they land.
//
// Polls the artifact registry every few seconds and pushes a fresh `snapshot`
// whenever the set changes (new render finishes, new screenshot written, ...).
// Powers the Live Console "Artifacts" panel and the sandbox viewer, so the
// operator watches output appear in real time instead of refreshing a page.

import { listArtifacts, signature, type Artifact } from "@/lib/artifacts";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const POLL_MS = 3000;

export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      let closed = false;
      let lastSig = "";

      const send = (event: string, data: unknown) => {
        if (closed) return;
        try {
          controller.enqueue(encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`));
        } catch {
          closed = true;
        }
      };

      const tick = async () => {
        if (closed) return;
        try {
          const list: Artifact[] = await listArtifacts(60);
          const sig = signature(list);
          if (sig !== lastSig) {
            lastSig = sig;
            send("snapshot", { artifacts: list, at: new Date().toISOString() });
          } else {
            send("heartbeat", { at: new Date().toISOString(), count: list.length });
          }
        } catch (e) {
          send("error", e instanceof Error ? e.message : String(e));
        }
      };

      send("connected", { pollMs: POLL_MS });
      await tick();

      const iv = setInterval(() => void tick(), POLL_MS);
      // Cleanup when the client goes away.
      (controller as unknown as { _cleanup?: () => void })._cleanup = () => {
        closed = true;
        clearInterval(iv);
      };
    },

    cancel() {
      const c = this as unknown as { _cleanup?: () => void };
      c._cleanup?.();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-store, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
