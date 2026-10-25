import { create } from "zustand";
import type { AgentSummary } from "@/lib/types";

interface AgentState {
  agents: AgentSummary[];
  loading: boolean;
  error: string | null;
  fetchAgents: () => Promise<void>;
}

export const useAgentStore = create<AgentState>((set) => ({
  agents: [],
  loading: false,
  error: null,
  fetchAgents: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("/api/agents/list");
      if (!res.ok) throw new Error(`status ${res.status}`);
      const agents = (await res.json()) as AgentSummary[];
      set({ agents, loading: false });
    } catch (err) {
      set({ error: err instanceof Error ? err.message : "unknown error", loading: false });
    }
  },
}));
