'use client';
import React, { useEffect, useState, useRef, useMemo } from 'react';

const CATS: Record<string, { label: string; color: string; glow: string }> = {
  all: { label: 'All Categories', color: '#38bdf8', glow: 'rgba(56,189,248,0.18)' },
  identity: { label: '🟡 Identity, Agents & P.A.P.P.', color: '#facc15', glow: 'rgba(250,204,21,0.18)' },
  journal: { label: '🩵 Journal / Dreaming Logs', color: '#22d3ee', glow: 'rgba(34,211,238,0.18)' },
  skills: { label: '🟣 Skills, SOPs & Media Assets', color: '#c084fc', glow: 'rgba(192,132,252,0.18)' },
  failures: { label: '🔴 Failures & 4-Season Blacklist', color: '#f87171', glow: 'rgba(248,113,113,0.18)' },
  projects: { label: '🔵 Funnels, A/B & Business Memory', color: '#60a5fa', glow: 'rgba(96,165,250,0.18)' },
  audit: { label: '⚪ Audit Archive', color: '#e2e8f0', glow: 'rgba(226,232,240,0.18)' },
};

const WINGS = [
  ['all', '🌌 All 6 Palace Wings'],
  ['wing_sams_os', '🏛️ Wing 1: S.A.M.S. OS, Agents & Full-Funnel A/B'],
  ['wing_saas_pipeline', '🚀 Wing 2: Micro-SaaS & Top 10 Gaps'],
  ['wing_affiliate_engine', '💎 Wing 3: Affiliate 3+1 DNA & Social'],
  ['wing_pet_portraits', '🐾 Wing 4: Pet Portrait AI + Shopify/Printify'],
  ['wing_viral_forge', '🔥 Wing 5: Viral Forge ($1K/Day + 10%)'],
  ['wing_papp_clones', '🤝 Wing 6: P.A.P.P. (90/10 Clones)'],
];

export default function MemoryGalaxyPage() {
  const [nodes, setNodes] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('all');
  const [wing, setWing] = useState('all');
  const [selId, setSelId] = useState<string | null>(null);
  const [stats, setStats] = useState({ rawBytes: 0, compactBytes: 0, tokenReductionPct: 74 });
  const [busy, setBusy] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const yawRef = useRef(0.25);
  const posRef = useRef<any[]>([]);

  const load = async () => {
    try {
      const r = await fetch('/api/memory', { cache: 'no-store' });
      const d = await r.json();
      const raw = (Array.isArray(d?.nodes) ? d.nodes : []).filter((n:any)=>!String(n?.name||'').startsWith('request_dump'));
      const wKeys = WINGS.slice(1).map((x) => x[0]);
      const list = raw.map((n: any, i: number) => {
        const wi = Math.max(0, wKeys.indexOf(n.wing || 'wing_sams_os'));
        const ca = i * 2.39996 + wi * 1.047;
        const la = Math.acos(1 - 2 * (((i * 0.618034) % 1 + 1) % 1));
        const sp = 45 + ((i * 37) % 165);
        return {
          ...n,
          wing: n.wing || 'wing_sams_os',
          room: n.room || 'room_agents_and_system',
          drawer: n.drawer || 'drawer_general',
          season: n.season || 'FALL',
          keywords: Array.isArray(n.keywords) ? n.keywords : [],
          links: Array.isArray(n.links) ? n.links : [],
          x: Math.sin(la) * Math.cos(ca) * sp,
          y: Math.sin(la) * Math.sin(ca) * (sp * 0.82),
          z: Math.cos(la) * sp * 1.25,
        };
      });
      setNodes(list);
      setStats({ rawBytes: Number(d?.rawBytes || 0), compactBytes: Number(d?.compactBytes || 0), tokenReductionPct: Number(d?.tokenReductionPct || 74) });
      if (list.length && !selId) setSelId(list[0].id);
    } catch (e) { console.error(e); }
  };

  useEffect(() => { load(); }, []);

  const runJanitor = async () => {
    setBusy(true);
    try {
      await fetch('/api/memory', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'run_janitor' }) });
      await load();
    } finally { setBusy(false); }
  };

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return nodes.filter((n) => {
      if (cat !== 'all' && n.category !== cat) return false;
      if (wing !== 'all' && n.wing !== wing) return false;
      if (!q) return true;
      return `${n.name} ${n.title} ${n.date} ${n.wing} ${n.room} ${n.drawer} ${n.season} ${(n.keywords || []).join(' ')} ${n.summary || ''}`.toLowerCase().includes(q);
    });
  }, [nodes, search, cat, wing]);

  const sel = useMemo(() => nodes.find((n) => n.id === selId) || filtered[0] || null, [nodes, filtered, selId]);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;
    let id = 0, t = 0;
    const bg = Array.from({ length: 160 }, (_, i) => ({ x: ((i * 97) % 1000) / 1000, y: ((i * 57) % 1000) / 1000, s: (i % 3) * 0.7 + 0.5, p: i * 0.4 }));
    const draw = () => {
      t += 0.015;
      const dpr = window.devicePixelRatio || 1;
      const rc = cv.getBoundingClientRect();
      if (cv.width !== Math.floor(rc.width * dpr) || cv.height !== Math.floor(rc.height * dpr)) {
        cv.width = Math.floor(rc.width * dpr); cv.height = Math.floor(rc.height * dpr);
      }
      ctx.save(); ctx.scale(dpr, dpr);
      const W = rc.width, H = rc.height;
      const g = ctx.createRadialGradient(W * 0.5, H * 0.5, 10, W * 0.5, H * 0.5, Math.max(W, H) * 0.78);
      g.addColorStop(0, '#091428'); g.addColorStop(0.55, '#040917'); g.addColorStop(1, '#02040a');
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      for (const s of bg) {
        ctx.fillStyle = `rgba(186,230,253,${(0.25 + 0.45 * Math.sin(t * 1.8 + s.p)).toFixed(2)})`;
        ctx.beginPath(); ctx.arc(s.x * W, s.y * H, s.s, 0, Math.PI * 2); ctx.fill();
      }
      yawRef.current += 0.0022;
      const cy = Math.cos(yawRef.current), sy = Math.sin(yawRef.current);
      const relSet = new Set<string>(Array.isArray(sel?.links) ? sel.links : []);
      const proj = filtered.map((n) => {
        const isSel = sel?.id === n.id, isRel = relSet.has(n.id);
        let rx = (n.x || 0) * cy - (n.z || 0) * sy;
        let rz = (n.x || 0) * sy + (n.z || 0) * cy;
        let ry = n.y || 0;
        if (isSel) { rx = 0; ry = 0; rz = -270; } else if (isRel) { rz -= 85; }
        const sc = 540 / Math.max(120, 860 + rz);
        return { n, sx: W * 0.5 + rx * sc, sy: H * 0.5 + ry * sc, z: rz, r: isSel ? 8.5 : isRel ? 5.2 : 2.8, isSel, isRel };
      }).sort((a, b) => b.z - a.z);
      const map = new Map(proj.map((p) => [p.n.id, p]));
      for (const p of proj) {
        for (const tid of p.n.links || []) {
          const tg = map.get(tid);
          if (!tg) continue;
          const act = p.isSel || tg.isSel;
          ctx.beginPath(); ctx.moveTo(p.sx, p.sy); ctx.lineTo(tg.sx, tg.sy);
          if (act) {
            const lg = ctx.createLinearGradient(p.sx, p.sy, tg.sx, tg.sy);
            lg.addColorStop(0, '#facc15'); lg.addColorStop(0.5, '#38bdf8'); lg.addColorStop(1, '#c084fc');
            ctx.strokeStyle = lg; ctx.lineWidth = 2.4 + 0.8 * Math.sin(t * 4); ctx.shadowColor = '#38bdf8'; ctx.shadowBlur = 14;
          } else { ctx.strokeStyle = 'rgba(56,189,248,0.11)'; ctx.lineWidth = 0.8; ctx.shadowBlur = 0; }
          ctx.stroke();
        }
      }
      ctx.shadowBlur = 0;
      for (const p of proj) {
        const cm = CATS[p.n.category] || CATS.projects;
        const rad = p.r * (p.isSel ? 1 + 0.18 * Math.sin(t * 5) : 1);
        const hl = ctx.createRadialGradient(p.sx, p.sy, 1, p.sx, p.sy, rad * 2.2);
        hl.addColorStop(0, cm.glow); hl.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = hl; ctx.beginPath(); ctx.arc(p.sx, p.sy, rad * 2.2, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = cm.color; ctx.beginPath(); ctx.arc(p.sx, p.sy, rad, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(p.sx, p.sy, Math.max(1.1, rad * 0.48), 0, Math.PI * 2); ctx.fill();
        if (p.isSel || p.isRel || filtered.length <= 32) {
          ctx.font = p.isSel ? 'bold 12px sans-serif' : '10px sans-serif';
          ctx.fillStyle = p.isSel ? '#facc15' : '#e2e8f0';
          ctx.fillText(p.n.name.slice(0, 30), p.sx + rad + 6, p.sy + 4);
        }
      }
      posRef.current = proj.map((p) => ({ id: p.n.id, sx: p.sx, sy: p.sy, r: Math.max(18, p.r * 2.2) }));
      ctx.restore();
      id = requestAnimationFrame(draw);
    };
    id = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(id);
  }, [filtered, sel]);

  const onClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rc = canvasRef.current?.getBoundingClientRect();
    if (!rc) return;
    const cx = e.clientX - rc.left, cy = e.clientY - rc.top;
    let best: string | null = null, bd = 999999;
    for (const pt of posRef.current) {
      const d = Math.hypot(cx - pt.sx, cy - pt.sy);
      if (d <= pt.r && d < bd) { bd = d; best = pt.id; }
    }
    if (best) setSelId(best);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-3 bg-slate-900/90 border border-cyan-500/30 rounded-xl p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-bold text-cyan-300">🌌 S.A.M.S. 6-Wing Memory Palace & 3D Star Cluster Galaxy</h1>
            <p className="text-xs text-slate-300">Wing 1: Agent OS & A/B Invariance • Wing 2: SaaS Gaps • Wing 3: Affiliate 3+1 DNA • Wing 4: Pet Portraits • Wing 5: Viral Forge • Wing 6: P.A.P.P. (90/10 Clones)</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-xs font-semibold">
              ⚡ Context Janitor: -{stats.tokenReductionPct}% Tokens ({stats.rawBytes.toLocaleString()}B → {stats.compactBytes.toLocaleString()}B)
            </span>
            <button onClick={runJanitor} disabled={busy} className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs">
              {busy ? 'Compacting...' : '🧹 Run Context Janitor'}
            </button>
          </div>
        </div>
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="🔍 Search by Wing, Room, Drawer, Agent, Season (SPRING/SUMMER/FALL/WINTER), Keyword, or Date..." className="w-full bg-slate-950 border border-cyan-500/40 rounded-lg px-3 py-2 text-xs text-white" />
        <div className="flex flex-wrap gap-1.5">
          {WINGS.map(([id, label]) => (
            <button key={id} onClick={() => setWing(id)} className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border ${wing === id ? 'bg-amber-500/25 border-amber-400 text-amber-200' : 'bg-slate-950/80 border-slate-800 text-slate-300'}`}>
              {label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1 border-t border-slate-800/80">
          {Object.entries(CATS).map(([k, m]) => (
            <button key={k} onClick={() => setCat(k)} className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border ${cat === k ? 'bg-cyan-500/25 border-cyan-400 text-white' : 'bg-slate-900 border-slate-800 text-slate-300'}`}>
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1">
        <div className="lg:col-span-2 relative min-h-[460px] rounded-xl overflow-hidden border border-cyan-500/30 bg-[#030712]">
          <canvas ref={canvasRef} onClick={onClick} className="w-full h-[480px] cursor-pointer block" />
        </div>
        <div className="bg-slate-900/90 border border-cyan-500/30 rounded-xl p-4 flex flex-col gap-3 max-h-[480px] overflow-y-auto">
          {sel ? (
            <>
              <div className="border-b border-slate-800 pb-2">
                <span className="text-[11px] uppercase text-cyan-400 font-bold">{CATS[sel.category]?.label || sel.category}</span>
                <h2 className="text-sm font-bold text-white break-all mt-0.5">{sel.title || sel.name}</h2>
                <p className="text-[11px] text-slate-400">📅 {sel.date} • 🅂 Season: {sel.season || 'FALL'} • ⚡ -{sel.tokenSavingsPct}% Tokens</p>
              </div>
              <div className="bg-slate-950/90 border border-amber-500/30 rounded-lg p-2.5 text-[11px] space-y-1">
                <div className="text-amber-300 font-semibold">🏛️ MemPalace Coordinates:</div>
                <div>• <b>Wing:</b> <code className="text-cyan-300">{sel.wing}</code></div>
                <div>• <b>Room:</b> <code className="text-cyan-300">{sel.room}</code></div>
                <div>• <b>Drawer:</b> <code className="text-cyan-300">{sel.drawer}</code></div>
                <div className="break-all">• <b>File:</b> <code>{sel.name}</code></div>
              </div>
              <pre className="text-xs text-slate-200 bg-slate-950/90 border border-slate-800 rounded-lg p-2.5 whitespace-pre-wrap break-words font-mono max-h-44 overflow-y-auto">{sel.summary}</pre>
              <div className="flex flex-wrap gap-1.5">
                {(sel.links || []).map((lid: string) => {
                  const tg = nodes.find((x) => x.id === lid);
                  return tg ? (
                    <button key={lid} onClick={() => setSelId(tg.id)} className="px-2 py-1 rounded bg-cyan-500/15 hover:bg-cyan-500/30 border border-cyan-500/30 text-[11px] text-cyan-200">
                      ★ {tg.name}
                    </button>
                  ) : null;
                })}
              </div>
              <div className="mt-auto pt-2 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                <div><b>Active:</b> {sel.path}</div>
                <div><b>Audit:</b> {sel.auditPath}</div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
