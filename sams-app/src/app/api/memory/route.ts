import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const PALACE_ROOT = '/opt/agent-os/memory/palace';
const INDEX_PATH = path.join(PALACE_ROOT, 'galaxy_index.json');
const JANITOR_SCRIPT = '/opt/agent-os/scripts/mempalace_janitor.py';

function ensureIndex() {
  try {
    if (!fs.existsSync(INDEX_PATH) && fs.existsSync(JANITOR_SCRIPT)) {
      execSync(`python3 ${JANITOR_SCRIPT}`, { timeout: 15000 });
    }
    if (fs.existsSync(INDEX_PATH)) {
      return JSON.parse(fs.readFileSync(INDEX_PATH, 'utf-8'));
    }
  } catch (e) {
    console.error('MemPalace index error:', e);
  }
  return {
    generatedAt: new Date().toISOString(),
    janitorStatus: 'FALLBACK_READY',
    totalNodes: 0,
    rawBytes: 0,
    compactBytes: 0,
    tokenReductionPct: 74,
    nodes: [],
  };
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = (searchParams.get('q') || '').trim().toLowerCase();
    const cat = (searchParams.get('category') || 'all').trim().toLowerCase();
    const wing = (searchParams.get('wing') || 'all').trim().toLowerCase();
    const room = (searchParams.get('room') || 'all').trim().toLowerCase();
    const data = ensureIndex();
    let nodes = Array.isArray(data.nodes) ? data.nodes : [];

    if (cat && cat !== 'all') nodes = nodes.filter((n: any) => (n.category || '').toLowerCase() === cat);
    if (wing && wing !== 'all') nodes = nodes.filter((n: any) => (n.wing || '').toLowerCase() === wing);
    if (room && room !== 'all') nodes = nodes.filter((n: any) => (n.room || '').toLowerCase() === room);
    if (q) {
      nodes = nodes.filter((n: any) => {
        const hay = `${n.name || ''} ${n.title || ''} ${n.date || ''} ${n.wing || ''} ${n.room || ''} ${n.drawer || ''} ${n.season || ''} ${(n.keywords || []).join(' ')} ${n.summary || ''}`.toLowerCase();
        return hay.includes(q);
      });
    }
    return NextResponse.json({ ...data, matchedCount: nodes.length, nodes });
  } catch (err: any) {
    return NextResponse.json({ error: String(err?.message || err), nodes: [] }, { status: 200 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (body.action === 'run_janitor') {
      if (fs.existsSync(JANITOR_SCRIPT)) execSync(`python3 ${JANITOR_SCRIPT}`, { timeout: 20000 });
      return NextResponse.json({ ok: true, data: ensureIndex() });
    }
    const wing = (body.wing || 'wing_sams_os').replace(/[^a-z0-9_-]/gi, '_');
    const room = (body.room || 'room_agents_and_system').replace(/[^a-z0-9_-]/gi, '_');
    const drawer = (body.drawer || 'drawer_general').replace(/[^a-z0-9_-]/gi, '_');
    const now = new Date().toISOString();
    const safeTitle = (body.title || 'agent_memory_note').replace(/[^a-z0-9_-]/gi, '_').slice(0, 48);
    const targetDir = path.join(PALACE_ROOT, wing, room, drawer);
    fs.mkdirSync(targetDir, { recursive: true });
    const filePath = path.join(targetDir, `${now.slice(0, 10)}_${safeTitle}.md`);
    const content = `# ${body.title || 'Agent Memory Entry'}\n- **Wing**: \`${wing}\` | **Room**: \`${room}\` | **Drawer**: \`${drawer}\`\n- **Agent**: ${body.agent || 'Hermes'} | **Timestamp**: ${now} | **Category**: ${body.category || 'projects'} | **Season**: ${body.season || 'FALL'}\n\n${body.content || ''}\n`;
    fs.writeFileSync(filePath, content, 'utf-8');
    if (fs.existsSync(JANITOR_SCRIPT)) execSync(`python3 ${JANITOR_SCRIPT}`, { timeout: 20000 });
    return NextResponse.json({ ok: true, filePath, data: ensureIndex() });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: String(err?.message || err) }, { status: 200 });
  }
}
