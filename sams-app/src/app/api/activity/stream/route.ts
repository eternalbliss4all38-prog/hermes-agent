import { execFile } from "node:child_process";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Live "what is Hermes doing right now" feed.
//
// Tails the agent log -- which records every tool call, command and message --
// inside the hermes container and streams new lines as Server-Sent Events.
// Powers the Mission Control Live Activity panel so an operator who cannot see
// a terminal can still watch the work happen in real time.
const CONTAINER = process.env.HERMES_CONTAINER || "hermes";
const LOG_PATH = process.env.AGENT_LOG_PATH || "/opt/data/logs/agent.log";

export async function GET() {
  const encoder = new TextEncoder();
  const child = execFile("docker", ["exec", CONTAINER, "tail", "-n", "150", "-F", LOG_PATH]);

  const stream = new ReadableStream({
    start(controller) {
      const send = (event: string, data: string) => {
        try {
          controller.enqueue(encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`));
        } catch {
          /* controller already closed */
        }
      };
      send("connected", LOG_PATH);

      const push = (chunk: Buffer) => {
        for (const line of chunk.toString("utf8").split("\n")) {
          if (line.trim()) send("log", line);
        }
      };
      child.stdout?.on("data", push);
      child.stderr?.on("data", push);
      child.on("error", (e) => send("error", e.message));
      child.on("close", () => {
        try {
          controller.close();
        } catch {
          /* already closed */
        }
      });
    },
    cancel() {
      child.kill("SIGTERM");
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
