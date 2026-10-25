import type { LucideIcon } from "lucide-react";

export function TabPlaceholder({
  icon: Icon,
  title,
  description,
  items,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="flex h-full items-center justify-center p-6">
      <div className="max-w-md rounded-lg border border-panel-border bg-panel p-6 text-center">
        <Icon className="mx-auto mb-3 text-muted" size={28} strokeWidth={1.5} />
        <h2 className="mb-1.5 font-semibold">{title}</h2>
        <p className="mb-4 text-xs text-muted">{description}</p>
        <ul className="space-y-1 text-left text-[11px] text-muted">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-accent-cyan">·</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
