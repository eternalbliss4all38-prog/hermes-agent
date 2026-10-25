import { create } from "zustand";
import type { SystemStatus } from "@/lib/types";

interface SystemState {
  status: SystemStatus | null;
  loading: boolean;
  error: string | null;
  fetchStatus: () => Promise<void>;
}

export const useSystemStore = create<SystemState>((set) => ({
  status: null,
  loading: false,
  error: null,
  fetchStatus: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("/api/system/status");
      if (!res.ok) throw new Error(`status ${res.status}`);
      const status = (await res.json()) as SystemStatus;
      set({ status, loading: false });
    } catch (err) {
      set({ error: err instanceof Error ? err.message : "unknown error", loading: false });
    }
  },
}));
