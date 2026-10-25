import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const execFileAsync = promisify(execFile);

// Scoped strictly to this project's own working tree -- never allow a
// request-supplied path to escape it.
const PROJECT_ROOT = process.cwd();
const IGNORED = new Set(["node_modules", ".git", ".next", ".data", "vendor"]);

export interface TreeNode {
  name: string;
  path: string;
  type: "file" | "dir";
  children?: TreeNode[];
}

function resolveSafe(relPath: string): string {
  const full = path.resolve(PROJECT_ROOT, relPath);
  if (full !== PROJECT_ROOT && !full.startsWith(PROJECT_ROOT + path.sep)) {
    throw new Error("path escapes project root");
  }
  return full;
}

export async function getTree(relDir = "."): Promise<TreeNode[]> {
  const dirFull = resolveSafe(relDir);
  const entries = await readdir(dirFull, { withFileTypes: true });
  const nodes: TreeNode[] = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    if (IGNORED.has(entry.name) || entry.name.startsWith(".")) continue;
    const relPath = path.join(relDir, entry.name);
    if (entry.isDirectory()) {
      nodes.push({ name: entry.name, path: relPath, type: "dir" });
    } else if (entry.isFile()) {
      nodes.push({ name: entry.name, path: relPath, type: "file" });
    }
  }
  return nodes;
}

const MAX_FILE_BYTES = 200_000;

export async function readProjectFile(relPath: string): Promise<{ content: string; truncated: boolean }> {
  const full = resolveSafe(relPath);
  const s = await stat(full);
  if (!s.isFile()) throw new Error("not a file");
  const buf = await readFile(full);
  const truncated = buf.byteLength > MAX_FILE_BYTES;
  return { content: buf.subarray(0, MAX_FILE_BYTES).toString("utf8"), truncated };
}

export async function getGitStatus() {
  try {
    const [status, log] = await Promise.all([
      execFileAsync("git", ["status", "--porcelain=v1", "-b"], { cwd: PROJECT_ROOT }),
      execFileAsync("git", ["log", "--oneline", "-20"], { cwd: PROJECT_ROOT }),
    ]);
    return {
      branch: status.stdout.split("\n")[0]?.replace("## ", "") ?? "unknown",
      changes: status.stdout
        .split("\n")
        .slice(1)
        .filter(Boolean),
      recentCommits: log.stdout.split("\n").filter(Boolean),
    };
  } catch (err) {
    return { branch: "unknown", changes: [], recentCommits: [], error: err instanceof Error ? err.message : "git unavailable" };
  }
}
