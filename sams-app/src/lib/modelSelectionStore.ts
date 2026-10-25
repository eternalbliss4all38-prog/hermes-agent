import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { DEFAULT_SELECTIONS, DEPARTMENTS, MODEL_OPTIONS, type Department } from "./models";

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "model-selection.json");

export async function getSelections(): Promise<Record<Department, string>> {
  try {
    const raw = JSON.parse(await readFile(DATA_FILE, "utf8"));
    return { ...DEFAULT_SELECTIONS, ...raw };
  } catch {
    return { ...DEFAULT_SELECTIONS };
  }
}

export async function setSelection(department: Department, model: string): Promise<Record<Department, string>> {
  if (!DEPARTMENTS.includes(department) || !MODEL_OPTIONS[department].includes(model)) {
    throw new Error("invalid department or model");
  }
  const current = await getSelections();
  const updated = { ...current, [department]: model };
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(DATA_FILE, JSON.stringify(updated, null, 2), "utf8");
  return updated;
}
