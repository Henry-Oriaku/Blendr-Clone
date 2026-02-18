import { create } from "zustand";

interface IndexStore {
    theme: "light" | "dark"
}

export const useStore = create<IndexStore>((set) => ({
    theme: "dark"
}));
