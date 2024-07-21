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

function EmptyCell() {
  return <div className="bg-lc-gray size-8 rounded"></div>;
}

function LaserCell({
  color,
  position,
}: {
  color: PlayerColor;
  position: ILaserCell["position"];
}) {
  return (
    <div
      className={clsx(
        "bg-lc-gray flex size-8 items-center justify-center rounded",
        position === "bottom" ? "rotate-180" : "rotate-90",
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
function KingCell({ color }: { color: PlayerColor }) {
  return (
    <div
      className={clsx(
        "bg-lc-gray flex size-8 items-center justify-center rounded",
      )}
    >
      <King color={color} />
    </div>
  );
}

function DefenderCell({
  color,
  position,
}: {
  color: PlayerColor;
  position: FourSides;
}) {
  return (
    <div
      className={clsx(
        "bg-lc-gray flex size-8 items-center justify-center rounded",
        position === "left" && "-rotate-90",
        position === "right" && "rotate-90",
        position === "bottom" && "rotate-180",
      )}
    >
      <Defender color={color} />
    </div>
  );
}

function DeflectorCell({
  color,
  position,
}: {
  color: PlayerColor;
  position: AngleSide;
}) {
  return (
    <div
      className={clsx(
        "bg-lc-gray flex size-8 items-center justify-center rounded",
        position === "up-right" && "rotate-90",
        position === "bottom-left" && "-rotate-90",
        position === "bottom-right" && "rotate-180",
      )}
    >
      <Deflector color={color} />
    </div>
  );
}

function SwitchCell({
  color,
  position,
}: {
  color: PlayerColor;
  position: SwitchAngle;
}) {
  return (
    <div
      className={clsx(
        "bg-lc-gray flex size-8 items-center justify-center rounded",
        position === "bottom-up" && "rotate-90",
      )}
    >
      <Switch color={color} />
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
          case "laser":
            return <LaserCell color={cell.color} position={cell.position} />;
          case "fire":
            return <FireCell color={cell.color} />;
          case "king":
            return <KingCell color={cell.color} />;
          case "defender":
            return <DefenderCell color={cell.color} position={cell.position} />;
          case "deflector":
            return (
              <DeflectorCell color={cell.color} position={cell.position} />
            );
          case "switch":
            return <SwitchCell color={cell.color} position={cell.position} />;
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
