import { create } from "zustand";
import {
  angleSides,
  Cell,
  fourSides,
  nonRotatableCells,
  RotateDirection,
} from "@/store/types";
import { initialCells } from "@/store/initialCells";

const redFireIndexes = [8, 10, 20, 30, 40, 50, 60, 70, 78];
const yellowFireIndexes = [1, 9, 19, 29, 39, 49, 59, 69, 71];

type GameState = {
  cells: Cell[];
  moveCell: ({}: { from: number; to: number }) => void;
  swapCells: ({}: { from: number; to: number }) => void;
  rotateCell: ({}: { index: number; direction: RotateDirection }) => void;
};

export const useGameStore = create<GameState>((set, get) => ({
  cells: initialCells,
  moveCell: ({ from, to }) => {
    const cells = get().cells.map((cell) => ({ ...cell }));
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
    const cells = get().cells.map((cell) => ({ ...cell }));
    [cells[from], cells[to]] = [cells[to], cells[from]];
    set({ cells });
  },
  rotateCell: ({ index, direction }) => {
    const cells = get().cells.map((cell) => ({ ...cell }));

    if (nonRotatableCells.includes(cells[index].type)) return;
    if (cells[index].type == "switch") {
      cells[index].position =
        cells[index].position == "bottom-up" ? "up-bottom" : "bottom-up";
    } else if (cells[index].type == "deflector") {
      const angleIndex = angleSides.indexOf(cells[index].position);
      if (direction == "clockwise") {
        cells[index].position = angleSides[(angleIndex + 1) % 4];
      } else {
        cells[index].position = angleSides[(angleIndex + 3) % 4];
      }
    } else if (cells[index].type == "defender") {
      const sideIndex = fourSides.indexOf(cells[index].position);
      if (direction == "clockwise") {
        cells[index].position = fourSides[(sideIndex + 1) % 4];
      } else {
        cells[index].position = fourSides[(sideIndex + 3) % 4];
      }
    } else if (cells[index].type == "laser") {
      if (cells[index].color == "red") {
        cells[index].position =
          cells[index].position == "bottom" ? "right" : "bottom";
      } else {
        cells[index].position = cells[index].position == "up" ? "left" : "up";
      }
    }

    set({ cells });
  },
}));
