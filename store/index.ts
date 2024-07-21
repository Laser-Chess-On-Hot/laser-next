import { create } from "zustand";
import { Cell } from "@/store/types";
import { initialCells } from "@/store/initialCells";

type GameState = {
  cells: Cell[];
};

export const useGameStore = create<GameState>((set, get) => ({
  cells: initialCells,
}));
