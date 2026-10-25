// Minimal structured logger for Mission Control backend modules and API
// routes. Satisfies Execution Standard #2 ("never allow silent failures —
// every API endpoint and module must log detailed errors to system log").
//
// Writes JSON lines to .data/system.log (gitignored runtime data, same dir as
// approvals.json / goals.json) and mirrors to the process stderr. Never logs
// secret values — callers pass only safe fields.

import { appendFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const LOG_DIR = join(process.cwd(), ".data");
const LOG_FILE = join(LOG_DIR, "system.log");

function redact<T extends Record<string, unknown>>(obj: T): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  const SENSITIVE = /token|secret|password|key|authorization|bearer|cookie|session/i;
  for (const [k, v] of Object.entries(obj)) {
    if (typeof v === "string" && SENSITIVE.test(k)) out[k] = "***";
    else out[k] = v;
  }
  return out;
}

export async function writeSystemLog(level: "info" | "warn" | "error", source: string, data?: Record<string, unknown>): Promise<void> {
  const entry = {
    ts: new Date().toISOString(),
    level,
    source,
    ...(data ? redact(data) : {}),
  };
  // stderr mirror (survives even if the file write fails)
  const line = `[${level.toUpperCase()}] ${source}: ${JSON.stringify(redact(data ?? {}))}`;
  if (level === "error") console.error(line);
  else console.log(line);
  try {
    await mkdir(LOG_DIR, { recursive: true });
    await appendFile(LOG_FILE, JSON.stringify(entry) + "\n", "utf8");
  } catch (err) {
    console.error(`[systemLog] failed to write ${LOG_FILE}: ${err instanceof Error ? err.message : String(err)}`);
  }
}

export async function logInfo(source: string, data?: Record<string, unknown>): Promise<void> {
  await writeSystemLog("info", source, data);
}

export async function logWarn(source: string, data?: Record<string, unknown>): Promise<void> {
  await writeSystemLog("warn", source, data);
}

export async function logError(source: string, data?: Record<string, unknown>): Promise<void> {
  await writeSystemLog("error", source, data);
}