import { create } from "zustand";

interface UIState {
  leftOpen: boolean;
  rightOpen: boolean;
  toggleLeft: () => void;
  toggleRight: () => void;
  closeDrawers: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  leftOpen: false,
  rightOpen: false,
  toggleLeft: () => set((s) => ({ leftOpen: !s.leftOpen, rightOpen: false })),
  toggleRight: () => set((s) => ({ rightOpen: !s.rightOpen, leftOpen: false })),
  closeDrawers: () => set({ leftOpen: false, rightOpen: false }),
}));
