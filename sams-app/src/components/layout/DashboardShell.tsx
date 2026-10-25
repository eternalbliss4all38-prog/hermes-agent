"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Header } from "./Header";
import { LeftNav } from "./LeftNav";
import { RightInspector } from "./RightInspector";
import { useAgentStore } from "@/store/useAgentStore";
import { useSystemStore } from "@/store/useSystemStore";
import { useUIStore } from "@/store/useUIStore";

const POLL_MS = 5000;

export function DashboardShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isLogin = pathname === "/login";

  const fetchAgents = useAgentStore((s) => s.fetchAgents);
  const fetchStatus = useSystemStore((s) => s.fetchStatus);
  const { leftOpen, rightOpen, closeDrawers } = useUIStore();

  useEffect(() => {
    if (isLogin) return;
    fetchAgents();
    fetchStatus();
    const id = setInterval(() => {
      fetchAgents();
      fetchStatus();
    }, POLL_MS);
    return () => clearInterval(id);
  }, [isLogin, fetchAgents, fetchStatus]);

  // Close drawers on navigation so tapping a nav link doesn't leave the
  // drawer covering the new page on mobile.
  useEffect(() => {
    closeDrawers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (isLogin) return <>{children}</>;

  const drawerOpen = leftOpen || rightOpen;

  return (
    <div className="flex h-dvh flex-col bg-background text-foreground">
      <Header />
      <div className="relative flex min-h-0 flex-1 overflow-hidden">
        {/* Mobile backdrop */}
        {drawerOpen && (
          <button
            aria-label="Close panel"
            onClick={closeDrawers}
            className="fixed inset-0 top-16 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
          />
        )}

        <div
          className={clsx(
            "fixed inset-y-0 top-16 z-40 w-64 shrink-0 border-r border-panel-border bg-panel transition-transform duration-200 lg:static lg:top-0 lg:z-auto lg:w-[260px] lg:translate-x-0",
            leftOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <LeftNav />
        </div>

        <main className="relative min-h-0 w-full flex-1 overflow-y-auto">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(50rem_20rem_at_50%_-10%,rgba(16,185,129,0.06),transparent_70%)]"
          />
          <div className="relative h-full">{children}</div>
        </main>

        <div
          className={clsx(
            "fixed inset-y-0 right-0 top-16 z-40 w-80 max-w-[85vw] shrink-0 border-l border-panel-border bg-panel transition-transform duration-200 lg:static lg:top-0 lg:z-auto lg:w-[320px] lg:translate-x-0",
            rightOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <RightInspector />
        </div>
      </div>
    </div>
  );
}
