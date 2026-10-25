// Real liveness probes for every agent on the Mission Control board.
//
// Principle: a status must be EARNED by an actual check against the thing that
// backs the agent -- never a static string. When an agent cannot run we return
// the precise reason (missing key, rejected key, broken CLI, no container) so the
// dashboard tells the operator what to fix instead of showing a mute grey pill.
//
// PERFORMANCE: both probes are network/process calls, and the dashboard polls
// /api/agents/list every 5s. Without caching that is an OpenRouter HTTP request
// and a process spawn every 5 seconds per open tab -- slow enough that the UI
// visibly sat on "loading agent signals…", and needless API traffic. Results are
// therefore memoised with a short TTL. A failed probe is cached too (shorter TTL
// is unnecessary; the reason is stable), but the cache is per-process and dies
// with the app, so a fixed key is picked up on the next deploy/reload.

import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { access, constants } from "node:fs/promises";

const execFileAsync = promisify(execFile);

const OR_TTL_MS = 30_000;
const CLI_TTL_MS = 60_000;
const CLI_TIMEOUT_MS = 8_000;

export interface OpenRouterProbe {
  configured: boolean;
  valid: boolean;
  httpStatus: number | null;
  message: string;
  label: string | null;
  usageUsd: number | null;
}

export interface CliProbe {
  available: boolean;
  version: string | null;
  message: string;
}

let orCache: { at: number; value: OpenRouterProbe } | null = null;
let cliCache: { at: number; value: CliProbe } | null = null;

/** Probe the OpenRouter key with a real authenticated request (memoised ~30s). */
export async function probeOpenRouter(): Promise<OpenRouterProbe> {
  if (orCache && Date.now() - orCache.at < OR_TTL_MS) return orCache.value;

  const value = await probeOpenRouterUncached();
  orCache = { at: Date.now(), value };
  return value;
}

async function probeOpenRouterUncached(): Promise<OpenRouterProbe> {
  const apiKey = process.env.OPENROUTER_API_KEY?.trim() || "";
  if (!apiKey) {
    return {
      configured: false, valid: false, httpStatus: null,
      message: "OPENROUTER_API_KEY not set in .env.local",
      label: null, usageUsd: null,
    };
  }
  try {
    const res = await fetch("https://openrouter.ai/api/v1/auth/key", {
      headers: { Authorization: `Bearer ${apiKey}` },
      signal: AbortSignal.timeout(12_000),
      cache: "no-store",
    });
    const body = (await res.json().catch(() => ({}))) as {
      data?: { label?: string; usage?: number };
      error?: { message?: string };
    };
    if (!res.ok) {
      return {
        configured: true, valid: false, httpStatus: res.status,
        message: `key rejected (HTTP ${res.status}): ${body?.error?.message ?? "unknown"}`,
        label: null, usageUsd: null,
      };
    }
    return {
      configured: true, valid: true, httpStatus: 200, message: "key valid",
      label: body?.data?.label ?? null,
      usageUsd: typeof body?.data?.usage === "number" ? body.data.usage : null,
    };
  } catch (err) {
    return {
      configured: true, valid: false, httpStatus: null,
      message: `probe failed: ${err instanceof Error ? err.message : String(err)}`,
      label: null, usageUsd: null,
    };
  }
}

/** Probe the Lead Engineer (Qwen 2.5 Coder) CLI installed on this host (memoised ~60s). */
export async function probeClaudeCli(): Promise<CliProbe> {
  if (cliCache && Date.now() - cliCache.at < CLI_TTL_MS) return cliCache.value;

  const value = await probeClaudeCliUncached();
  cliCache = { at: Date.now(), value };
  return value;
}

async function probeClaudeCliUncached(): Promise<CliProbe> {
  const bin = "/usr/bin/claude";
  try {
    await access(bin, constants.X_OK);
  } catch {
    return { available: false, version: null, message: "claude CLI not installed on host" };
  }
  try {
    const { stdout } = await execFileAsync(bin, ["--version"], { timeout: CLI_TIMEOUT_MS });
    return { available: true, version: stdout.trim().split("\n")[0] || null, message: "CLI runnable" };
  } catch (err) {
    const first = (err instanceof Error ? err.message : String(err)).split("\n")[0];
    return { available: false, version: null, message: `claude CLI present but not runnable (${first})` };
  }
}
