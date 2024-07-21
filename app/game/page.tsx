"use client";

import { Laser } from "@/assets/Laser";
import { clsx } from "clsx";
import { useGameStore } from "@/store";
import {
  AngleSide,
  Cell,
  FourSides,
  ILaserCell,
  PlayerColor,
  SwitchAngle,
} from "@/store/types";
import { Fire } from "@/assets/Fire";
import { King } from "@/assets/King";
import { Defender } from "@/assets/Defender";
import { Deflector } from "@/assets/Deflector";
import { Switch } from "@/assets/Switch";
import { useMemo, useState } from "react";
import { calculatePossibleMoves } from "@/utils/game-logic/possibleMoves";

const playerColor: PlayerColor = "red";

function EmptyCell() {
  return <div className="bg-lc-gray size-8 rounded"></div>;
}

function LaserCell({
  color,
  position,
  highlighted,
}: {
  color: PlayerColor;
  position: ILaserCell["position"];
  highlighted?: boolean;
}) {
  return (
    <div
      className={clsx(
        "bg-lc-gray flex size-8 items-center justify-center rounded",
        position === "bottom" && "rotate-180",
        position == "right" && "rotate-90",
        position == "left" && "-rotate-90",
        highlighted && "border-2 border-green-300 bg-green-200",
      )}
    >
      <Laser color={color} size={25} />
    </div>
  );
}

function FireCell({ color }: { color: PlayerColor }) {
  return (
    <div
      className={clsx(
        "bg-lc-gray flex size-8 items-center justify-center rounded",
      )}
    >
      <Fire color={color} />
    </div>
  );
}
function KingCell({
  color,
  highlighted,
}: {
  color: PlayerColor;
  highlighted?: boolean;
}) {
  return (
    <div
      className={clsx(
        "bg-lc-gray flex size-8 items-center justify-center rounded",
        highlighted && "border-2 border-green-300 bg-green-200",
      )}
    >
      <King color={color} />
    </div>
  );
}

function DefenderCell({
  color,
  position,
  highlighted,
}: {
  color: PlayerColor;
  position: FourSides;
  highlighted?: boolean;
}) {
  return (
    <div
      className={clsx(
        "bg-lc-gray flex size-8 items-center justify-center rounded",
        position === "left" && "-rotate-90",
        position === "right" && "rotate-90",
        position === "bottom" && "rotate-180",
        highlighted && "border-2 border-green-300 bg-green-200",
      )}
    >
      <Defender color={color} />
    </div>
  );
}

function DeflectorCell({
  color,
  position,
  highlighted,
}: {
  color: PlayerColor;
  position: AngleSide;
  highlighted?: boolean;
}) {
  return (
    <div
      className={clsx(
        "bg-lc-gray flex size-8 items-center justify-center rounded",
        position === "up-right" && "rotate-90",
        position === "bottom-left" && "-rotate-90",
        position === "bottom-right" && "rotate-180",
        highlighted && "border-2 border-green-300 bg-green-200",
      )}
    >
      <Deflector color={color} />
    </div>
  );
}

function SwitchCell({
  color,
  position,
  highlighted,
}: {
  color: PlayerColor;
  position: SwitchAngle;
  highlighted?: boolean;
}) {
  return (
    <div
      className={clsx(
        "bg-lc-gray flex size-8 items-center justify-center rounded",
        position === "bottom-up" && "rotate-90",
        highlighted && "border-2 border-green-300 bg-green-200",
      )}
    >
      <Switch color={color} />
    </div>
  );
}

function MoveCell() {
  return (
    <div
      className={clsx(
        "flex size-8 items-center justify-center rounded bg-green-200",
      )}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          opacity="0.6"
          cx="14"
          cy="14"
          r="12"
          stroke="#02A402"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
}

function SwapCell() {
  return (
    <div
      className={clsx(
        "flex size-8 items-center justify-center rounded bg-green-200",
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#02A402"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 3m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
        <path d="M15 15m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
        <path d="M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3" />
        <path d="M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3" />
      </svg>
    </div>
  );
}

const CellRenderer = ({
  cell,
  index,
  selectedCell,
}: {
  cell: Cell;
  index: number;
  selectedCell: number | null;
}) => {
  switch (cell.type) {
    case "empty":
      return <EmptyCell />;
    case "laser":
      return (
        <LaserCell
          color={cell.color}
          position={cell.position}
          highlighted={selectedCell === index}
        />
      );
    case "fire":
      return <FireCell color={cell.color} />;
    case "king":
      return (
        <KingCell color={cell.color} highlighted={selectedCell === index} />
      );
    case "defender":
      return (
        <DefenderCell
          color={cell.color}
          position={cell.position}
          highlighted={selectedCell === index}
        />
      );
    case "deflector":
      return (
        <DeflectorCell
          color={cell.color}
          position={cell.position}
          highlighted={selectedCell === index}
        />
      );
    case "switch":
      return (
        <SwitchCell
          color={cell.color}
          position={cell.position}
          highlighted={selectedCell === index}
        />
      );
    default:
      return null;
  }
};

function GameField() {
  const gameState = useGameStore();
  const [selectedCell, setSelectedCell] = useState<number | null>(null);

  const availableMoves = useMemo(() => {
    if (selectedCell === null) return [];
    return calculatePossibleMoves(gameState.cells, selectedCell, playerColor);
  }, [selectedCell]);

  function handleCellClick({ cell, index }: { cell: Cell; index: number }) {
    //TODO: handle moves
    if (cell.type === "empty" || (!!cell.color && cell.color != playerColor))
      return;
    if (selectedCell == index) {
      setSelectedCell(null);
    } else {
      setSelectedCell(index);
    }
  }

  return (
    <div className="relative grid w-fit grid-cols-10 gap-1.5">
      {gameState.cells.map((cell, index) => {
        const move = availableMoves.find((move) => move.position === index);
        const isMoveAvailable = move !== undefined;

        return (
          <div
            key={index}
            className="relative"
            onClick={() => handleCellClick({ cell, index })}
          >
            <CellRenderer
              cell={cell}
              index={index}
              selectedCell={selectedCell}
            />
            {isMoveAvailable && (
              <div className="absolute inset-0 z-10 opacity-80">
                {move.type === "move" ? <MoveCell /> : <SwapCell />}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Game() {
  return (
    <div className="flex w-fit flex-col">
      <h1>Opponent turn 14:17</h1>
      <p>let45fc.tg</p>
      <GameField />
      <p className="self-end">kastet99.near</p>
    </div>
  );
}
