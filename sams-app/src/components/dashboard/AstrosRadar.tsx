"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Eye, Flame, KeyRound, MonitorPlay, Radar, Telescope } from "lucide-react";

type StarNode = { id: string; x: number; y: number; r: number };

const GLOW = "#38bdf8";

const INITIAL_STARS: StarNode[] = [
  { id: "STAR 01", x: 400, y: 160, r: 6 },
  { id: "STAR 02", x: 268, y: 236, r: 4.5 },
  { id: "STAR 03", x: 520, y: 258, r: 5 },
  { id: "STAR 04", x: 330, y: 330, r: 4 },
  { id: "STAR 05", x: 476, y: 138, r: 3.5 },
  { id: "STAR 06", x: 560, y: 190, r: 4 },
  { id: "STAR 07", x: 296, y: 152, r: 3.5 },
];

const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 4],
  [1, 3],
  [2, 3],
  [2, 5],
  [4, 5],
  [1, 6],
  [6, 0],
];

const TITLE_POOL = [
  "I Tracked the Sky's #1 Breakout Topic for 24 Hours (STAR 01)",
  "This Constellation Node Is About to Blow Up — Here's the Data",
  "The Deep-Field Scan That Found a Breakout Topic Before Anyone",
  "Keyless Sky Radar Ranked Every Trend — One Hit 96/100",
  "Why STAR 01 Is the Hottest Signal on the Watchlist Right Now",
];

const HUD_BADGES = [
  { label: "WATCHLIST", icon: Eye, className: "border-accent-violet/40 text-accent-violet" },
  { label: "DEEP-FIELD SCAN", icon: Telescope, className: "border-accent-cyan/40 text-accent-cyan" },
  { label: "KEYLESS", icon: KeyRound, className: "border-accent-amber/40 text-accent-amber" },
];

const HEAT_INDEX = 96;

export function AstrosRadar() {
  const [scanning, setScanning] = useState(false);
  const [stars, setStars] = useState<StarNode[]>(INITIAL_STARS);
  const [focusedStar, setFocusedStar] = useState<string | null>(null);
  const [titleIndex, setTitleIndex] = useState(0);
  const scanTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(scanTimer.current), []);

  const runScan = () => {
    if (scanning) return;
    setScanning(true);
    scanTimer.current = setTimeout(() => {
      setStars((prev) =>
        prev.map((star) => ({
          ...star,
          x: Math.max(120, Math.min(680, star.x + (Math.random() - 0.5) * 140)),
          y: Math.max(90, Math.min(370, star.y + (Math.random() - 0.5) * 110)),
        })),
      );
      setTitleIndex((i) => (i + 1) % TITLE_POOL.length);
      setScanning(false);
    }, 2000);
  };

  return (
    <div className="flex aspect-video w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-panel-border bg-panel">
      <header className="flex flex-wrap items-center gap-2 border-b border-panel-border px-4 py-3">
        <span className="mr-2 font-mono text-sm font-semibold tracking-widest text-foreground">
          ASTROS
        </span>

        {HUD_BADGES.map(({ label, icon: Icon, className }) => (
          <span
            key={label}
            className={clsx(
              "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-wider",
              className,
            )}
          >
            <Icon className="h-3 w-3" />
            {label}
          </span>
        ))}

        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-emerald/40 px-2.5 py-1 font-mono text-[10px] tracking-wider text-accent-emerald">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-emerald" />
          LIVE
        </span>

        <button
          onClick={runScan}
          disabled={scanning}
          className={clsx(
            "ml-auto inline-flex items-center gap-2 rounded-md border border-[#38bdf8]/60 px-3 py-1.5 font-mono text-xs tracking-wider text-[#38bdf8] transition-all",
            scanning ? "cursor-wait opacity-80" : "hover:bg-panel-hover",
          )}
          style={{ boxShadow: `0 0 12px ${GLOW}66, inset 0 0 8px ${GLOW}22` }}
        >
          <Radar className={clsx("h-3.5 w-3.5", scanning && "animate-spin")} />
          {scanning ? "SCANNING…" : "SCAN THE SKIES"}
        </button>
      </header>

      <div className="relative min-h-0 flex-1 bg-background">
        <svg viewBox="0 0 800 450" className="h-full w-full" role="img" aria-label="ASTROS celestial radar">
          <defs>
            <radialGradient id="astros-star-glow">
              <stop offset="0%" stopColor={GLOW} stopOpacity="0.9" />
              <stop offset="100%" stopColor={GLOW} stopOpacity="0" />
            </radialGradient>
            <linearGradient id="astros-sweep" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={GLOW} stopOpacity="0.45" />
              <stop offset="100%" stopColor={GLOW} stopOpacity="0" />
            </linearGradient>
            <filter id="astros-blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" />
            </filter>
          </defs>

          {[210, 150, 90].map((radius) => (
            <circle key={radius} cx="400" cy="225" r={radius} fill="none" stroke="#1e1a29" strokeWidth="1" />
          ))}
          <line x1="120" y1="225" x2="680" y2="225" stroke="#1e1a29" strokeWidth="1" />
          <line x1="400" y1="15" x2="400" y2="435" stroke="#1e1a29" strokeWidth="1" />

          <g style={{ transformOrigin: "400px 225px" }} className={scanning ? "animate-[spin_1s_linear_infinite]" : "animate-[spin_5s_linear_infinite]"}>
            <path d="M 400 225 L 610 225 A 210 210 0 0 0 581.5 120 Z" fill="url(#astros-sweep)" opacity="0.5" />
            <line x1="400" y1="225" x2="610" y2="225" stroke={GLOW} strokeWidth="1.5" opacity="0.8" />
          </g>

          {EDGES.map(([a, b]) => (
            <line
              key={`${a}-${b}`}
              x1={stars[a].x}
              y1={stars[a].y}
              x2={stars[b].x}
              y2={stars[b].y}
              stroke={GLOW}
              strokeOpacity="0.35"
              strokeWidth="1"
              className="transition-all duration-700"
            />
          ))}

          {stars.map((star) => (
            <g
              key={star.id}
              className="cursor-pointer transition-all duration-700"
              onMouseEnter={() => setFocusedStar(star.id)}
              onMouseLeave={() => setFocusedStar(null)}
            >
              <circle cx={star.x} cy={star.y} r={star.r * 3.5} fill="url(#astros-star-glow)" opacity={focusedStar === star.id ? 0.9 : 0.5} />
              <circle cx={star.x} cy={star.y} r={star.r} fill={GLOW} filter="url(#astros-blur)" className="animate-pulse" />
              <circle cx={star.x} cy={star.y} r={star.r * 0.55} fill="#e0f2fe" />
              {focusedStar === star.id && (
                <text x={star.x + 12} y={star.y - 10} fill={GLOW} fontSize="11" fontFamily="monospace" letterSpacing="0.1em">
                  {star.id}
                </text>
              )}
            </g>
          ))}
        </svg>

        <div className="absolute left-4 top-3 font-mono text-[10px] tracking-wider text-muted">
          CELESTIAL NODE GRAPH · {stars.length} POINTS LINKED
        </div>
      </div>

      <footer className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-panel-border px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-amber" />
          <span className="font-mono text-xs tracking-wider text-foreground">STAR 01: Breakout Topic</span>
        </div>

        <div className="flex items-center gap-2">
          <Flame className="h-3.5 w-3.5 text-accent-red" />
          <span className="font-mono text-[10px] tracking-wider text-muted">HEAT INDEX</span>
          <div className="h-1.5 w-28 overflow-hidden rounded-full bg-panel-hover">
            <div className="h-full rounded-full bg-gradient-to-r from-accent-amber to-accent-red" style={{ width: `${HEAT_INDEX}%` }} />
          </div>
          <span className="font-mono text-xs text-foreground">{HEAT_INDEX}/100</span>
        </div>

        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-panel-border bg-background px-3 py-1.5">
          <MonitorPlay className="h-3.5 w-3.5 shrink-0 text-accent-red" />
          <span className="truncate font-mono text-xs text-foreground">{TITLE_POOL[titleIndex]}</span>
        </div>
      </footer>
    </div>
  );
}
