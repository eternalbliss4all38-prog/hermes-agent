// OpenClaw executor bridge.
//
// OpenClaw's gateway exposes an OpenAI-compatible chat-completions HTTP
// endpoint that runs each request as a full OpenClaw agent turn (its tools,
// sandbox, and config apply). This client is the single place Mission Control
// uses to dispatch work to the OpenClaw executor. It is wired to the live
// gateway via OPENCLAW_GATEWAY_URL / OPENCLAW_GATEWAY_TOKEN from .env.local,
// converting the configured `ws://` URL to its `http://` counterpart.
//
// Verified against the running gateway (2026-09-15):
//   POST http://127.0.0.1:18789/v1/chat/completions
//     Authorization: Bearer <OPENCLAW_GATEWAY_TOKEN>
//     { "model": "openclaw", "messages": [{ "role": "user", "content": "..." }] }
//   -> standard chat.completion JSON; "openclaw" is the model id.

export interface OpenClawResult {
  ok: boolean;
  id?: string;
  model?: string;
  content?: string;
  finishReason?: string;
  usage?: {
    promptTokens?: number;
    completionTokens?: number;
    totalTokens?: number;
  };
  raw?: unknown;
  error?: string;
  httpStatus?: number;
  timedOut?: boolean;
}

export class OpenClawGatewayError extends Error {}

const DEFAULT_TIMEOUT_MS = 120_000; // generous: a dispatched agent turn can run long

function gatewayBaseUrl(): string {
  const raw = process.env.OPENCLAW_GATEWAY_URL?.trim() || "";
  if (!raw) throw new OpenClawGatewayError("OPENCLAW_GATEWAY_URL is not configured");
  return raw.replace(/^wss:/, "https:").replace(/^ws:/, "http:");
}

function gatewayToken(): string {
  const t = process.env.OPENCLAW_GATEWAY_TOKEN?.trim();
  if (!t) throw new OpenClawGatewayError("OPENCLAW_GATEWAY_TOKEN is not configured");
  return t;
}

export function gatewayEndpoint(): string {
  return `${gatewayBaseUrl().replace(/\/$/, "")}/v1/chat/completions`;
}

// Everything below logs to stderr via console.error so failures never pass
// silently (Execution Standard #2).
function fail(label: string, detail: Record<string, unknown>) {
  console.error(`[openclaw] ${label}:`, JSON.stringify(detail));
}

/**
 * Dispatch a prompt to OpenClaw as a full agent turn and wait for the reply.
 * @param prompt   the task/command to run
 * @param timeoutMs how long to hold for the turn (default 120s; 0 = no explicit cap)
 */
export async function chatCompletions(prompt: string, timeoutMs?: number): Promise<OpenClawResult> {
  const endpoint = gatewayEndpoint();
  const token = gatewayToken();
  const timeout =
    typeof timeoutMs === "number" && timeoutMs > 0
      ? Math.min(Math.max(timeoutMs, 1000), 10 * 60 * 1000)
      : DEFAULT_TIMEOUT_MS;

  console.log(`[openclaw] dispatch ${endpoint} len=${prompt.length} timeout=${timeout}`);

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        model: "openclaw",
        messages: [{ role: "user", content: prompt }],
      }),
      signal: AbortSignal.timeout(timeout),
    });

    const body: unknown = await res.json().catch(() => null);

    if (!res.ok) {
      const err =
        body && typeof body === "object" && (body as { error?: { message?: string } }).error
          ? (body as { error: { message: string } }).error.message
          : `OpenClaw gateway responded ${res.status}`;
      fail("error", { error: err, httpStatus: res.status, endpoint });
      return { ok: false, error: err, httpStatus: res.status, raw: body };
    }

    const parsed = normalizeCompletion(body);
    console.log(`[openclaw] ok id=${parsed.id} model=${parsed.model}`);
    return { ok: true, ...parsed, raw: body };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    const isTimeout = /timed?[- ]?out|abort/i.test(msg);
    fail(isTimeout ? "timeout" : "error", { error: msg, endpoint });
    return { ok: false, timedOut: isTimeout, error: msg };
  }
}

function normalizeCompletion(body: unknown): Partial<OpenClawResult> {
  if (!body || typeof body !== "object") return { error: "Malformed OpenClaw response" };
  const b = body as {
    id?: string;
    model?: string;
    choices?: Array<{ message?: { content?: string }; finish_reason?: string }>;
    usage?: { prompt_tokens?: number; completion_tokens?: number; total_tokens?: number };
  };
  const choice = b.choices?.[0];
  return {
    id: b.id,
    model: b.model,
    content: choice?.message?.content,
    finishReason: choice?.finish_reason,
    usage: {
      promptTokens: b.usage?.prompt_tokens,
      completionTokens: b.usage?.completion_tokens,
      totalTokens: b.usage?.total_tokens,
    },
  };
}