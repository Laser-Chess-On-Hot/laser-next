import { create } from "zustand";
import { LCNode } from "@/store/types";
import { initialNodes } from "@/store/initialNodes";

type GameState = {
  nodes: LCNode[];
};

export const useGameStore = create<GameState>((set, get) => ({
  nodes: initialNodes,
}));
