// src/app/api/agent/chat/route.ts
//
// Speaks to every real agent in the OS. Roles are fixed (no agent invents one),
// history is passed so nothing is amnesiac, and each agent's MODEL is read from
// its palace room (MODEL.md) — so changing the model in the Agent Builder
// actually changes what that agent runs on, with no code edit.
//
//   hermes    -> Hermes JSON-RPC gateway   (model = its own gateway config)
//   openclaw  -> OpenClaw HTTP gateway     (model = its own gateway config)
//   bi        -> OpenRouter  (default nvidia/nemotron-3.5-super-vl:free)
//   coding    -> OpenRouter  (default poolside/laguna-s-2.1:free)

import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { dispatchToHermes } from "@/lib/hermes-dispatch";
import { chatCompletions } from "@/lib/openclaw";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const PALACE = process.env.PALACE_DIR || "/opt/agent-os/memory/palace";

const LABEL: Record<string, string> = {
  hermes: "Hermes",
  openclaw: "OpenClaw",
  bi: "S.A.M.S. Business Intelligence",
  coding: "Coding Agent",
};

/** OpenRouter-backed agents + their default model. */
const MODEL: Record<string, string> = {
  bi: "nvidia/nemotron-3.5-super-vl:free",
  coding: "poolside/laguna-s-2.1:free",
};

/** Ground-truth roles. Agents must not infer these from vibes. */
const ROLE: Record<string, string> = {
  hermes: "Executive Orchestrator — runs research and agent orchestration, and holds the approval gates.",
  openclaw:
    "Production Manager — OWNS audio AND video production. Directs it through OpenMontage, ensures social channels are set up and compliant, and owns the scheduling/posting pipeline via Postiz. Do not call anyone else the production agent.",
  bi:
    "S.A.M.S. Business Intelligence Research & Analysis Agent — you research and analyse the market: business intelligence, competitor and campaign analysis in BOTH text and video, analytics, online business and entrepreneurship, expert copywriting, and building the business/brand assets behind an offer. For a given product you watch the TOP THREE affiliate marketers' video campaigns and extract exactly two things: (1) the single thing that made all three hit the top three, and (2) the single thing all three are MISSING — that pair becomes the campaign brief. You are NOT the video production agent; OpenClaw produces.",
  coding:
    "Coding Agent — you build the SaaS apps AND the free TOOL attached to each (a tool that saves time, saves money, or increases revenue), and a free lead-magnet tool for each affiliate product. The TOOL is free; the SaaS and the affiliate product are not. Giveaway gate: sign up -> like -> subscribe -> comment to the agent.",
};

export const AGENT_IDS = Object.keys(LABEL);

const ROOM: Record<string, string> = {
  hermes: "room_agent_hermes_orchestrator",
  openclaw: "room_agent_openclaw_production",
  bi: "room_agent_business_intelligence",
  coding: "room_agent_coding",
};

/** Read the model chosen in the Agent Builder (room MODEL.md). null = use default. */
async function modelOverride(agent: string): Promise<string | null> {
  const room = ROOM[agent];
  if (!room) return null;
  try {
    const txt = await readFile(path.join(PALACE, "wing_sams_os", room, "MODEL.md"), "utf8");
    for (const line of txt.split("\n")) {
      const t = line.trim();
      if (!t || t.startsWith("#") || t.startsWith("_")) continue;
      if (/^[a-z0-9][a-z0-9._-]*\/[a-z0-9][a-z0-9._:-]*$/i.test(t)) return t; // looks like a model id
    }
    return null;
  } catch {
    return null;
  }
}

interface HistoryTurn { role?: unknown; speaker?: unknown; text?: unknown }
interface Reply { agent: string; label: string; text: string; ms: number; model?: string; error?: string }

function normHistory(raw: unknown): { role: "user" | "agent"; speaker: string; text: string }[] {
  if (!Array.isArray(raw)) return [];
  const out: { role: "user" | "agent"; speaker: string; text: string }[] = [];
  for (const t of raw as HistoryTurn[]) {
    const text = typeof t?.text === "string" ? t.text.trim() : "";
    if (!text) continue;
    const role = t?.role === "agent" ? "agent" : "user";
    const speaker = typeof t?.speaker === "string" && t.speaker ? t.speaker : role === "user" ? "Shawn" : "Agent";
    out.push({ role, speaker, text });
  }
  return out.slice(-40);
}

function systemFor(agent: string): string {
  return `You are ${LABEL[agent]} in the S.A.M.S. Agent OS.\nYour role: ${ROLE[agent] ?? "team member"}\nBe direct and concise. You can see the conversation so far; use it.`;
}
function groupSystem(self: string, members: string[]): string {
  return [
    `You are ${LABEL[self]} in a GROUP conversation inside the S.A.M.S. Agent OS.`,
    `The room contains: ${members.map((m) => `${LABEL[m]} (${ROLE[m] ?? "team member"})`).join("; ")}, plus Shawn (the human).`,
    `You can see every message in this room, INCLUDING the other agents' replies (labelled with the speaker).`,
    `Address the room. When you agree or disagree with another agent, say so by name. Keep it concise.`,
  ].join(" ");
}
function transcript(self: string, history: { role: "user" | "agent"; speaker: string; text: string }[], prompt: string): string {
  const lines = history.map((h) => `${h.speaker}: ${h.text}`);
  return ["Conversation so far:", ...(lines.length ? lines : ["(no earlier messages)"]), "", `Shawn: ${prompt}`, "", `Reply as ${LABEL[self]}.`].join("\n");
}

async function askOpenRouter(
  agent: string, system: string,
  history: { role: "user" | "agent"; speaker: string; text: string }[],
  prompt: string, timeoutMs: number,
): Promise<{ text: string; model: string }> {
  const key = process.env.OPENROUTER_API_KEY?.trim();
  if (!key) throw new Error("OPENROUTER_API_KEY not configured");
  const override = await modelOverride(agent);
  const model = override || MODEL[agent];
  if (!model) throw new Error(`no model mapped for agent '${agent}'`);

  const messages: { role: string; content: string }[] = [{ role: "system", content: system }];
  for (const h of history) {
    messages.push(h.role === "user" ? { role: "user", content: h.text } : { role: "assistant", content: `${h.speaker}: ${h.text}` });
  }
  messages.push({ role: "user", content: prompt });

  let lastWhy = "unknown";
  for (let attempt = 0; attempt < 2; attempt++) {
    const res = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://sams.samsystem.org",
        "X-Title": "S.A.M.S. Agent OS",
      },
      body: JSON.stringify({ model, messages }),
      signal: AbortSignal.timeout(timeoutMs),
    });
    const text = await res.text();
    if (!res.ok) {
      lastWhy = `OpenRouter ${res.status}: ${text.slice(0, 160)}`;
      if (res.status === 429 || res.status >= 500) { await new Promise((r) => setTimeout(r, 1200)); continue; }
      throw new Error(lastWhy);
    }
    const j = JSON.parse(text) as { choices?: { message?: { content?: string }; finish_reason?: string }[] };
    const out = (j.choices?.[0]?.message?.content ?? "").trim();
    if (out) return { text: out, model };
    lastWhy = `empty completion (finish_reason=${j.choices?.[0]?.finish_reason ?? "?"})`;
    await new Promise((r) => setTimeout(r, 1200));
  }
  throw new Error(`model gave no usable reply after retry — ${lastWhy}`);
}

async function askOne(
  agent: string, history: { role: "user" | "agent"; speaker: string; text: string }[],
  prompt: string, timeoutMs: number, room: { members: string[]; isGroup: boolean },
): Promise<Reply> {
  const started = Date.now();
  const label = LABEL[agent] || agent;
  const system = room.isGroup ? groupSystem(agent, room.members) : systemFor(agent);
  try {
    if (agent === "hermes") {
      const r = await dispatchToHermes(transcript(agent, history, prompt), { timeoutMs });
      return { agent, label, text: r.reply.trim() || "(no output)", ms: Date.now() - started, model: "hermes-gateway" };
    }
    if (agent === "openclaw") {
      const r = await chatCompletions(`${system}\n\n${transcript(agent, history, prompt)}`, timeoutMs);
      if (!r.ok) throw new Error(r.error || `OpenClaw HTTP ${r.httpStatus}`);
      return { agent, label, text: (r.content ?? "").trim() || "(no output)", ms: Date.now() - started, model: "openclaw-gateway" };
    }
    const { text, model } = await askOpenRouter(agent, system, history, prompt, timeoutMs);
    return { agent, label, text, ms: Date.now() - started, model };
  } catch (e) {
    return { agent, label, text: "", ms: Date.now() - started, error: e instanceof Error ? e.message : String(e) };
  }
}

export async function POST(req: Request) {
  let body: { agent?: unknown; agents?: unknown; prompt?: unknown; timeoutMs?: unknown; history?: unknown };
  try { body = (await req.json()) as typeof body; } catch { return NextResponse.json({ error: "bad json" }, { status: 400 }); }

  const prompt = typeof body.prompt === "string" ? body.prompt.trim() : "";
  if (!prompt) return NextResponse.json({ error: "prompt required" }, { status: 400 });

  const requested = typeof body.timeoutMs === "number" ? body.timeoutMs : 120_000;
  const timeoutMs = Math.min(Math.max(requested, 5_000), 180_000);

  let agents: string[];
  if (Array.isArray(body.agents)) agents = body.agents.filter((a): a is string => typeof a === "string" && AGENT_IDS.includes(a));
  else if (typeof body.agent === "string" && AGENT_IDS.includes(body.agent)) agents = [body.agent];
  else return NextResponse.json({ error: "unknown agent", known: AGENT_IDS }, { status: 400 });
  if (agents.length === 0) return NextResponse.json({ error: "no valid agents" }, { status: 400 });

  const history = normHistory(body.history);
  const isGroup = agents.length > 1;
  const replies = await Promise.all(agents.map((a) => askOne(a, history, prompt, timeoutMs, { members: agents, isGroup })));
  return NextResponse.json({ prompt, group: isGroup, replies }, { headers: { "Cache-Control": "no-store" } });
}

export async function GET() {
  return NextResponse.json({ agents: AGENT_IDS.map((id) => ({ id, label: LABEL[id], role: ROLE[id], defaultModel: MODEL[id] || null })) });
}
