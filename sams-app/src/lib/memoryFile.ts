import { readFile } from "node:fs/promises";
import path from "node:path";

const VAULT_ROOT = "/opt/agent-os/memory/openclaw/workspace";
const MAX_BYTES = 200_000;

export async function readVaultFile(relPath: string): Promise<{ content: string; truncated: boolean }> {
  const full = path.resolve(VAULT_ROOT, relPath);
  if (full !== VAULT_ROOT && !full.startsWith(VAULT_ROOT + path.sep)) {
    throw new Error("path escapes vault root");
  }
  if (!full.endsWith(".md")) {
    throw new Error("only markdown files are readable here");
  }
  const buf = await readFile(full);
  const truncated = buf.byteLength > MAX_BYTES;
  return { content: buf.subarray(0, MAX_BYTES).toString("utf8"), truncated };
}
