// src/app/agents/page.tsx
//
// The Agent OS chat screen: a left rail of every real agent, per-agent chat
// threads, and a group chat that connects any combination of agents.

import { AgentChat } from "@/components/agent-os/AgentChat";

export const dynamic = "force-dynamic";

export default function AgentsPage() {
  return (
    <div className="flex h-full min-h-0 flex-col gap-3 p-2 sm:p-4">
      <header className="flex flex-wrap items-baseline gap-2">
        <h1 className="text-lg font-semibold text-foreground">Agent OS · Chat</h1>
        <p className="text-[11px] text-muted">
          Every agent on one screen — tap one for its own thread, or group several into a single conversation.
        </p>
      </header>
      <div className="min-h-0 flex-1">
        <AgentChat />
      </div>
    </div>
  );
}
