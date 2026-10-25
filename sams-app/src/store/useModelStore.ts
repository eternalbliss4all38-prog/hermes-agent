import { create } from "zustand";
import { DEFAULT_SELECTIONS, type Department } from "@/lib/models";

interface ModelState {
  selections: Record<Department, string>;
  fetchSelections: () => Promise<void>;
  setSelection: (department: Department, model: string) => Promise<void>;
}

export const useModelStore = create<ModelState>((set, get) => ({
  selections: DEFAULT_SELECTIONS,
  fetchSelections: async () => {
    const res = await fetch("/api/models/selection");
    if (res.ok) set({ selections: await res.json() });
  },
  setSelection: async (department, model) => {
    const prev = get().selections;
    set({ selections: { ...prev, [department]: model } }); // optimistic
    const res = await fetch("/api/models/selection", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ department, model }),
    });
    if (res.ok) set({ selections: await res.json() });
    else set({ selections: prev }); // revert on failure
  },
}));
