const SIZE = 56;
const STROKE = 5;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function colorFor(score: number) {
  if (score >= 65) return "#10b981"; // emerald
  if (score >= 40) return "#f59e0b"; // amber
  return "#ef4444"; // red
}

export function RadialGauge({ score }: { score: number }) {
  const offset = CIRCUMFERENCE * (1 - score / 100);
  return (
    <div className="relative h-14 w-14 shrink-0">
      <svg width={SIZE} height={SIZE} className="-rotate-90">
        <circle cx={SIZE / 2} cy={SIZE / 2} r={RADIUS} fill="none" stroke="#1e293b" strokeWidth={STROKE} />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke={colorFor(score)}
          strokeWidth={STROKE}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold text-foreground">
        {score}
      </span>
    </div>
  );
}
