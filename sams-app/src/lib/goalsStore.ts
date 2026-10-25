import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export interface Goal {
  id: string;
  objective: string;
  createdAt: string;
}

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "goals.json");

async function load(): Promise<Goal[]> {
  try {
    return JSON.parse(await readFile(DATA_FILE, "utf8")) as Goal[];
  } catch {
    return [];
  }
}

async function save(goals: Goal[]) {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(DATA_FILE, JSON.stringify(goals, null, 2), "utf8");
}

export async function listGoals(): Promise<Goal[]> {
  return load();
}

export async function submitGoal(objective: string): Promise<Goal> {
  const goals = await load();
  const goal: Goal = { id: crypto.randomUUID(), objective, createdAt: new Date().toISOString() };
  goals.unshift(goal);
  await save(goals.slice(0, 50));
  return goal;
}
