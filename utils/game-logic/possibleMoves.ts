import { Cell, PlayerColor } from "@/store/types";

const gridWidth = 10;

type MoveInfo = {
  position: number;
  type: "move" | "swap";
};

export const calculatePossibleMoves = (
  gameState: Cell[],
  position: number,
  playerColor: PlayerColor,
): MoveInfo[] => {
  const currentCell = gameState[position];
  if (
    currentCell.type === "empty" ||
    currentCell.type === "fire" ||
    currentCell.type === "laser" ||
    currentCell.color !== playerColor
  ) {
    return [];
  }

  const directions = [
    -gridWidth - 1,
    -gridWidth,
    -gridWidth + 1,
    -1,
    1,
    gridWidth - 1,
    gridWidth,
    gridWidth + 1,
  ];

  return directions
    .map((direction) => position + direction)
    .filter((newPosition) => {
      // Check if the new position is within the grid
      if (newPosition < 0 || newPosition >= gameState.length) return false;
      if (Math.abs((newPosition % gridWidth) - (position % gridWidth)) > 1)
        return false;

      const targetCell = gameState[newPosition];

      // Check if the target cell is empty or of the same color (for non-switches)
      return (
        targetCell.type === "empty" ||
        (currentCell.type == "switch" && targetCell.type === "deflector")
      );
    })
    .map((newPosition): MoveInfo => {
      const targetCell = gameState[newPosition];
      const moveType: MoveInfo["type"] =
        currentCell.type === "switch" &&
        (targetCell.type == "deflector" || targetCell.type == "defender")
          ? "swap"
          : "move";

      return {
        position: newPosition,
        type: moveType,
      };
    });
};
