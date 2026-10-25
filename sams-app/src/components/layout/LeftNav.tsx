"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NAV_GROUPS } from "@/lib/nav";

export function LeftNav() {
  const pathname = usePathname();
  let index = 0;

  return (
    <nav className="flex h-full flex-col gap-4 overflow-y-auto p-3">
      {NAV_GROUPS.map((group) => (
        <div key={group.category} className="flex flex-col gap-1">
          <span className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-widest text-muted/70">
            {group.category}
          </span>
          {group.items.map((item) => {
            const active = pathname?.startsWith(item.href);
            const Icon = item.icon;
            const i = index++;
            return (
              <Link
                key={item.href}
                href={item.href}
                target={item.newTab ? "_blank" : undefined}
                rel={item.newTab ? "noopener noreferrer" : undefined}
                className={clsx(
                  "flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm transition-colors",
                  active
                    ? "border border-accent-cyan/30 bg-panel-hover text-foreground shadow-[inset_2px_0_0_0_theme(colors.accent.cyan)]"
                    : "border border-transparent text-muted hover:bg-panel-hover hover:text-foreground",
                )}
              >
                <span className="text-[11px] tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
                <Icon size={16} strokeWidth={1.75} className={active ? "text-accent-cyan" : undefined} />
                <span className="truncate">{item.label}</span>
              </Link>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
