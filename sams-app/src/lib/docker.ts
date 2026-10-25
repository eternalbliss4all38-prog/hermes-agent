import { execFile } from "node:child_process";
import { promisify } from "node:util";
import type { AgentStatus } from "./types";

const execFileAsync = promisify(execFile);

// Only these containers may ever be named in a docker command built from
// request input. Never interpolate arbitrary user input into container args.
export const MONITORED_CONTAINERS = ["hermes", "hermes-dashboard", "openclaw-gateway"] as const;
export type MonitoredContainer = (typeof MONITORED_CONTAINERS)[number];

export function isMonitoredContainer(name: string): name is MonitoredContainer {
  return (MONITORED_CONTAINERS as readonly string[]).includes(name);
}

interface DockerStatsRow {
  Name: string;
  CPUPerc: string;
  MemUsage: string;
  MemPerc: string;
}

interface DockerPsRow {
  Names: string;
  State: string;
  Status: string;
}

function parsePercent(v: string): number {
  const n = parseFloat(v.replace("%", ""));
  return Number.isFinite(n) ? n : 0;
}

// "12.3MiB / 1.9GiB" -> { usedMB, limitMB }
function parseMemUsage(v: string): { usedMB: number; limitMB: number } {
  const [usedRaw, limitRaw] = v.split("/").map((s) => s.trim());
  const toMB = (s?: string) => {
    if (!s) return 0;
    const m = s.match(/^([\d.]+)\s*([A-Za-z]+)$/);
    if (!m) return 0;
    const val = parseFloat(m[1]);
    const unit = m[2].toLowerCase();
    if (unit.startsWith("gi") || unit.startsWith("g")) return val * 1024;
    if (unit.startsWith("ki") || unit.startsWith("k")) return val / 1024;
    return val; // MiB/MB
  };
  return { usedMB: toMB(usedRaw), limitMB: toMB(limitRaw) };
}

export async function getContainerStats() {
  try {
    const { stdout } = await execFileAsync("docker", [
      "stats",
      "--no-stream",
      "--format",
      "{{json .}}",
      ...MONITORED_CONTAINERS,
    ]);
    return stdout
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((line) => JSON.parse(line) as DockerStatsRow)
      .map((row) => {
        const { usedMB, limitMB } = parseMemUsage(row.MemUsage);
        return {
          name: row.Name,
          cpuPercent: parsePercent(row.CPUPerc),
          memMB: Math.round(usedMB),
          memLimitMB: Math.round(limitMB),
        };
      });
  } catch {
    return [];
  }
}

export async function getContainerState(): Promise<Record<string, AgentStatus>> {
  try {
    const { stdout } = await execFileAsync("docker", [
      "ps",
      "-a",
      ...MONITORED_CONTAINERS.flatMap((c) => ["--filter", `name=^${c}$`]),
      "--format",
      "{{json .}}",
    ]);
    const result: Record<string, AgentStatus> = {};
    for (const line of stdout.trim().split("\n").filter(Boolean)) {
      const row = JSON.parse(line) as DockerPsRow;
      const state = row.State.toLowerCase();
      result[row.Names] = state === "running" ? (row.Status.includes("unhealthy") ? "unhealthy" : "running") : "stopped";
    }
    return result;
  } catch {
    return {};
  }
}

export function tailLogs(container: MonitoredContainer, onLine: (line: string) => void, onError: (err: Error) => void) {
  if (!isMonitoredContainer(container)) {
    throw new Error("container not in allowlist");
  }
  const child = execFile("docker", ["logs", "-f", "--tail", "100", container]);
  child.stdout?.on("data", (chunk: Buffer) => {
    for (const line of chunk.toString("utf8").split("\n")) {
      if (line.trim()) onLine(line);
    }
  });
  child.stderr?.on("data", (chunk: Buffer) => {
    for (const line of chunk.toString("utf8").split("\n")) {
      if (line.trim()) onLine(line);
    }
  });
  child.on("error", onError);
  return () => {
    child.kill();
  };
}

export async function getHostLoad() {
  const os = await import("node:os");
  const total = os.totalmem() / 1024 / 1024;
  const free = os.freemem() / 1024 / 1024;
  const load = os.loadavg()[0];
  const cpuCount = os.cpus().length || 1;
  return {
    cpuPercent: Math.min(100, Math.round((load / cpuCount) * 100)),
    memUsedMB: Math.round(total - free),
    memTotalMB: Math.round(total),
    uptimeSeconds: Math.round(os.uptime()),
  };
}
