import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { computeFeasibilityScore } from "./feasibilityScore";

export type IdeaStage = 1 | 2 | 3 | 4 | 5;

export interface Idea {
  id: string;
  title: string;
  niche: string;
  stage: IdeaStage;
  feasibilityScore: number | null;
  createdAt: string;
  updatedAt: string;
}

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "ideas.json");

async function load(): Promise<Idea[]> {
  try {
    return JSON.parse(await readFile(DATA_FILE, "utf8")) as Idea[];
  } catch {
    return [];
  }
}

async function save(ideas: Idea[]) {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(DATA_FILE, JSON.stringify(ideas, null, 2), "utf8");
}

export async function listIdeas(): Promise<Idea[]> {
  return load();
}

export async function createIdea(title: string, niche: string): Promise<Idea> {
  const ideas = await load();
  const now = new Date().toISOString();
  const idea: Idea = {
    id: crypto.randomUUID(),
    title,
    niche,
    stage: 1,
    feasibilityScore: null,
    createdAt: now,
    updatedAt: now,
  };
  ideas.push(idea);
  await save(ideas);
  return idea;
}

export async function scoreIdea(id: string): Promise<Idea | null> {
  const ideas = await load();
  const idx = ideas.findIndex((i) => i.id === id);
  if (idx === -1) return null;
  const idea = ideas[idx];
  const feasibilityScore = computeFeasibilityScore(idea.title, idea.niche);
  const updated: Idea = {
    ...idea,
    feasibilityScore,
    stage: idea.stage < 2 ? 2 : idea.stage,
    updatedAt: new Date().toISOString(),
  };
  ideas[idx] = updated;
  await save(ideas);
  return updated;
}
