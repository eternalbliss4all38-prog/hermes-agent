import type { MemoryEdge, MemoryNode } from "@/lib/types";

export interface LaidOutNode extends MemoryNode {
  x: number;
  y: number;
}

const GROUP_ORDER: MemoryNode["group"][] = ["identity", "journal", "skill", "failure", "project"];

// Small iterative force relaxation (repulsion + spring edges + group
// clustering) -- deterministic enough in practice for a one-shot layout,
// no continuous animation loop needed. Not a physics-accurate simulation,
// just enough to avoid an overlapping pile of nodes.
export function computeForceLayout(nodes: MemoryNode[], edges: MemoryEdge[], width: number, height: number): LaidOutNode[] {
  const cx = width / 2;
  const cy = height / 2;
  const groupCount = GROUP_ORDER.length;
  const clusterRadius = Math.min(width, height) * 0.32;

  const laidOut: LaidOutNode[] = nodes.map((n) => {
    const groupIndex = GROUP_ORDER.indexOf(n.group);
    const angle = (groupIndex / groupCount) * Math.PI * 2;
    const gx = cx + Math.cos(angle) * clusterRadius;
    const gy = cy + Math.sin(angle) * clusterRadius;
    const jitter = 40;
    return {
      ...n,
      x: gx + (Math.random() - 0.5) * jitter,
      y: gy + (Math.random() - 0.5) * jitter,
    };
  });

  const byId = new Map(laidOut.map((n) => [n.id, n]));
  const vel = new Map(laidOut.map((n) => [n.id, { vx: 0, vy: 0 }]));
  const groupCenter = new Map<string, { x: number; y: number }>();
  GROUP_ORDER.forEach((g, i) => {
    const angle = (i / groupCount) * Math.PI * 2;
    groupCenter.set(g, { x: cx + Math.cos(angle) * clusterRadius, y: cy + Math.sin(angle) * clusterRadius });
  });

  const REPULSION = 900;
  const SPRING = 0.02;
  const SPRING_LEN = 60;
  const GROUP_PULL = 0.01;
  const DAMPING = 0.82;

  for (let iter = 0; iter < 120; iter++) {
    for (let i = 0; i < laidOut.length; i++) {
      const a = laidOut[i];
      const va = vel.get(a.id)!;
      for (let j = i + 1; j < laidOut.length; j++) {
        const b = laidOut[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distSq = Math.max(dx * dx + dy * dy, 1);
        const force = REPULSION / distSq;
        const dist = Math.sqrt(distSq);
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;
        va.vx += fx;
        va.vy += fy;
        const vb = vel.get(b.id)!;
        vb.vx -= fx;
        vb.vy -= fy;
      }
      const gc = groupCenter.get(a.group)!;
      va.vx += (gc.x - a.x) * GROUP_PULL;
      va.vy += (gc.y - a.y) * GROUP_PULL;
    }

    for (const e of edges) {
      const a = byId.get(e.source);
      const b = byId.get(e.target);
      if (!a || !b) continue;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.max(Math.sqrt(dx * dx + dy * dy), 1);
      const diff = dist - SPRING_LEN;
      const fx = (dx / dist) * diff * SPRING;
      const fy = (dy / dist) * diff * SPRING;
      vel.get(a.id)!.vx += fx;
      vel.get(a.id)!.vy += fy;
      vel.get(b.id)!.vx -= fx;
      vel.get(b.id)!.vy -= fy;
    }

    for (const n of laidOut) {
      const v = vel.get(n.id)!;
      v.vx *= DAMPING;
      v.vy *= DAMPING;
      n.x += v.vx;
      n.y += v.vy;
      n.x = Math.max(20, Math.min(width - 20, n.x));
      n.y = Math.max(20, Math.min(height - 20, n.y));
    }
  }

  return laidOut;
}
