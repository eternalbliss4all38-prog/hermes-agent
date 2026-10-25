import type { LucideIcon } from "lucide-react";

export interface FeatureCard {
  icon: LucideIcon;
  title: string;
  reason: string;
}

export function FeatureCardGrid({
  title,
  description,
  cards,
}: {
  title: string;
  description: string;
  cards: FeatureCard[];
}) {
  return (
    <div className="h-full overflow-y-auto p-4 sm:p-6">
      <h1 className="mb-1 text-lg font-semibold text-slate-100">{title}</h1>
      <p className="mb-5 max-w-xl text-xs text-muted">{description}</p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((c) => (
          <div key={c.title} className="rounded-lg border border-panel-border bg-panel p-4 shadow-lg transition-colors hover:border-accent-cyan/30">
            <div className="mb-3 flex items-center justify-between">
              <c.icon size={20} className="text-muted" strokeWidth={1.5} />
              <span className="rounded border border-zinc-700 px-1.5 py-0.5 text-[10px] uppercase text-zinc-500">not deployed</span>
            </div>
            <h3 className="mb-1 text-sm font-medium text-foreground">{c.title}</h3>
            <p className="text-[11px] leading-relaxed text-muted">{c.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
