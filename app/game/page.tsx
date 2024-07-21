"use client";

import { Laser } from "@/assets/Laser";
import { clsx } from "clsx";
import { useGameStore } from "@/store";
import {
  Cell,
  IRedLaserCell,
  IYellowLaserCell,
  PlayerColor,
} from "@/store/types";
import { Fire } from "@/assets/Fire";

function EmptyCell() {
  return <div className="bg-lc-gray size-8 rounded"></div>;
}

function RedLaserCell({ position }: { position: IRedLaserCell["position"] }) {
  return (
    <div
      className={clsx(
        "bg-lc-gray flex size-8 items-center justify-center rounded",
        position === "bottom" ? "rotate-180" : "rotate-90",
      )}
    >
      <Laser color="red" size={25} />
    </div>
  );
}

function YellowLaserCell({
  position,
}: {
  position: IYellowLaserCell["position"];
}) {
  return (
    <div
      className={clsx(
        "bg-lc-gray flex size-8 items-center justify-center rounded",
        position === "up" ? "" : "-rotate-90",
      )}
    >
      <Laser color="yellow" size={25} />
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

function GameField({ cells }: { cells: Cell[] }) {
  return (
    <div className="grid w-fit grid-cols-10 gap-1.5">
      {cells.map((cell) => {
        switch (cell.type) {
          case "empty":
            return <EmptyCell />;
          case "red-laser":
            return <RedLaserCell position={cell.position} />;
          case "red-fire":
            return <FireCell color="red" />;
          case "yellow-fire":
            return <FireCell color="yellow" />;
          case "yellow-laser":
            return <YellowLaserCell position={cell.position} />;
        }
      })}
    </div>
  );
}

export default function Game() {
  const gameState = useGameStore();
  return (
    <div className="flex w-fit flex-col">
      <h1>Opponent turn 14:17</h1>
      <p>let45fc.tg</p>
      <GameField cells={gameState.cells} />
      <p className="self-end">kastet99.near</p>
    </div>
  );
}
