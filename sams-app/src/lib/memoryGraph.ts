import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import type { MemoryEdge, MemoryNode } from "./types";

// Real, read-only view over the OpenClaw agent's markdown memory vault.
// Root is intentionally fixed (not derived from request input).
const MEMORY_ROOT = "/opt/agent-os/memory/openclaw/workspace";

function classify(relPath: string): MemoryNode["group"] {
  if (relPath.startsWith("memory/dreaming")) return "journal";
  if (relPath.includes("failure") || relPath.includes("error-log")) return "failure";
  if (relPath.startsWith("memory/")) return "project";
  return "identity";
}

async function walk(dir: string, root: string, depthLimit: number, out: MemoryNode[]) {
  if (depthLimit < 0) return;
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full, root, depthLimit - 1, out);
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      try {
        const s = await stat(full);
        const relPath = path.relative(root, full);
        out.push({
          id: relPath,
          label: entry.name.replace(/\.md$/, ""),
          group: classify(relPath),
          path: relPath,
          sizeBytes: s.size,
          modifiedAt: s.mtime.toISOString(),
        });
      } catch {
        // unreadable file, skip
      }
    }
  }
}

export async function getMemoryGraph(): Promise<{ nodes: MemoryNode[]; edges: MemoryEdge[] }> {
  const nodes: MemoryNode[] = [];
  await walk(MEMORY_ROOT, MEMORY_ROOT, 6, nodes);

  // Edge = shares an immediate parent directory (keeps the graph a real
  // reflection of the vault's folder structure rather than invented links).
  const byDir = new Map<string, string[]>();
  for (const n of nodes) {
    const dir = path.dirname(n.path);
    byDir.set(dir, [...(byDir.get(dir) ?? []), n.id]);
  }
  const edges: MemoryEdge[] = [];
  for (const ids of Array.from(byDir.values())) {
    for (let i = 1; i < ids.length; i++) {
      edges.push({ source: ids[0], target: ids[i] });
    }
  }
  return { nodes, edges };
}
