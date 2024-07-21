import { create } from "zustand";
import { Cell } from "@/store/types";
import { initialCells } from "@/store/initialCells";

const redFireIndexes = [8, 10, 20, 30, 40, 50, 60, 70, 78];
const yellowFireIndexes = [1, 9, 19, 29, 39, 49, 59, 69, 71];

type GameState = {
  cells: Cell[];
  moveCell: ({}: { from: number; to: number }) => void;
  swapCells: ({}: { from: number; to: number }) => void;
};

export const useGameStore = create<GameState>((set, get) => ({
  cells: initialCells,
  moveCell: ({ from, to }) => {
    const cells = [...get().cells];
    cells[to] = cells[from];
    if (redFireIndexes.includes(from)) {
      cells[from] = { type: "fire", color: "red" };
    } else if (yellowFireIndexes.includes(from)) {
      cells[from] = { type: "fire", color: "yellow" };
    } else {
      cells[from] = { type: "empty" };
    }
    set({ cells });
  },
  swapCells: ({ from, to }) => {
    const cells = [...get().cells];
    [cells[from], cells[to]] = [cells[to], cells[from]];
    set({ cells });
  },
}));
