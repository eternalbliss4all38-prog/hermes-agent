import { create } from "zustand";

export interface LogLine {
  id: number;
  source: string;
  text: string;
  receivedAt: number;
}

interface LogState {
  lines: LogLine[];
  connected: boolean;
  filter: "all" | "hermes" | "openclaw-gateway" | "errors";
  setFilter: (f: LogState["filter"]) => void;
  append: (source: string, text: string) => void;
  setConnected: (c: boolean) => void;
  clear: () => void;
}

const MAX_LINES = 500;
let nextId = 1;

export const useLogStore = create<LogState>((set) => ({
  lines: [],
  connected: false,
  filter: "all",
  setFilter: (filter) => set({ filter }),
  append: (source, text) =>
    set((state) => {
      const line: LogLine = { id: nextId++, source, text, receivedAt: Date.now() };
      const lines = [...state.lines, line];
      return { lines: lines.length > MAX_LINES ? lines.slice(lines.length - MAX_LINES) : lines };
    }),
  setConnected: (connected) => set({ connected }),
  clear: () => set({ lines: [] }),
}));
