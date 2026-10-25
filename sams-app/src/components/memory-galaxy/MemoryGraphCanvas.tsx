"use client";

import { useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { ZoomIn, ZoomOut, Maximize } from "lucide-react";
import type { MemoryEdge, MemoryNode } from "@/lib/types";
import { computeForceLayout } from "./forceLayout";

const GROUP_COLOR: Record<MemoryNode["group"], string> = {
  identity: "#f59e0b",
  journal: "#22d3ee",
  skill: "#8b5cf6",
  failure: "#ef4444",
  project: "#60a5fa",
};

const WIDTH = 1000;
const HEIGHT = 700;

export function MemoryGraphCanvas({
  nodes,
  edges,
  selectedId,
  onSelect,
}: {
  nodes: MemoryNode[];
  edges: MemoryEdge[];
  selectedId: string | null;
  onSelect: (node: MemoryNode) => void;
}) {
  const laidOut = useMemo(() => computeForceLayout(nodes, edges, WIDTH, HEIGHT), [nodes, edges]);
  const byId = useMemo(() => new Map(laidOut.map((n) => [n.id, n])), [laidOut]);

  const [view, setView] = useState({ x: 0, y: 0, scale: 1 });
  const dragging = useRef<{ startX: number; startY: number; origX: number; origY: number } | null>(null);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = { startX: e.clientX, startY: e.clientY, origX: view.x, origY: view.y };
    (e.target as Element).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - dragging.current.startX;
    const dy = e.clientY - dragging.current.startY;
    setView((v) => ({ ...v, x: dragging.current!.origX + dx, y: dragging.current!.origY + dy }));
  };
  const onPointerUp = () => {
    dragging.current = null;
  };
  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setView((v) => ({ ...v, scale: Math.max(0.3, Math.min(2.5, v.scale - e.deltaY * 0.001)) }));
  };
  const zoom = (delta: number) => setView((v) => ({ ...v, scale: Math.max(0.3, Math.min(2.5, v.scale + delta)) }));
  const reset = () => setView({ x: 0, y: 0, scale: 1 });

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg border border-panel-border bg-black/30 backdrop-blur-md">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-full w-full cursor-grab touch-none active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onWheel={onWheel}
      >
        <g transform={`translate(${view.x} ${view.y}) scale(${view.scale})`}>
          {edges.map((e, i) => {
            const a = byId.get(e.source);
            const b = byId.get(e.target);
            if (!a || !b) return null;
            return <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#3f3f46" strokeWidth={1} />;
          })}
          {laidOut.map((n) => (
            <g key={n.id} transform={`translate(${n.x} ${n.y})`} className="cursor-pointer" onClick={() => onSelect(n)}>
              <circle
                r={selectedId === n.id ? 9 : 6}
                fill={GROUP_COLOR[n.group]}
                stroke={selectedId === n.id ? "#fff" : "none"}
                strokeWidth={1.5}
                opacity={0.9}
              />
              <text
                x={0}
                y={-12}
                textAnchor="middle"
                fontSize={10}
                fill="#a1a1aa"
                className={clsx(selectedId === n.id && "fill-white font-medium")}
              >
                {n.label.length > 18 ? n.label.slice(0, 18) + "…" : n.label}
              </text>
            </g>
          ))}
        </g>
      </svg>

      <div className="absolute bottom-2 right-2 flex flex-col gap-1">
        <button onClick={() => zoom(0.2)} className="rounded bg-panel p-1.5 text-muted hover:text-foreground" title="Zoom in">
          <ZoomIn size={14} />
        </button>
        <button onClick={() => zoom(-0.2)} className="rounded bg-panel p-1.5 text-muted hover:text-foreground" title="Zoom out">
          <ZoomOut size={14} />
        </button>
        <button onClick={reset} className="rounded bg-panel p-1.5 text-muted hover:text-foreground" title="Reset view">
          <Maximize size={14} />
        </button>
      </div>
    </div>
  );
}
