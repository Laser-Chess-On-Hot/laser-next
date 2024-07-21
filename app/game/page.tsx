"use client";

import { Laser } from "@/assets/Laser";
import { clsx } from "clsx";
import { useGameStore } from "@/store";
import {
  AngleSide,
  Cell,
  FourSides,
  IRedLaserCell,
  IYellowLaserCell,
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
function RedKingCell() {
  return (
    <div
      className={clsx(
        "bg-lc-gray flex size-8 items-center justify-center rounded",
      )}
    >
      <King color="red" />
    </div>
  );
}

function YellowKingCell() {
  return (
    <div
      className={clsx(
        "bg-lc-gray flex size-8 items-center justify-center rounded",
      )}
    >
      <King color="yellow" />
    </div>
  );
}
function RedDefenderCell({ position }: { position: FourSides }) {
  return (
    <div
      className={clsx(
        "bg-lc-gray flex size-8 items-center justify-center rounded",
        position === "left" && "-rotate-90",
        position === "right" && "rotate-90",
        position === "bottom" && "rotate-180",
      )}
    >
      <Defender color="red" />
    </div>
  );
}

function YellowDefenderCell({ position }: { position: FourSides }) {
  return (
    <div
      className={clsx(
        "bg-lc-gray flex size-8 items-center justify-center rounded",
        position === "left" && "-rotate-90",
        position === "right" && "rotate-90",
        position === "bottom" && "rotate-180",
      )}
    >
      <Defender color="yellow" />
    </div>
  );
}

function RedDeflectorCell({ position }: { position: AngleSide }) {
  return (
    <div
      className={clsx(
        "bg-lc-gray flex size-8 items-center justify-center rounded",
        position === "up-right" && "rotate-90",
        position === "bottom-left" && "-rotate-90",
        position === "bottom-right" && "rotate-180",
      )}
    >
      <Deflector color="red" />
    </div>
  );
}

function YellowDeflectorCell({ position }: { position: AngleSide }) {
  return (
    <div
      className={clsx(
        "bg-lc-gray flex size-8 items-center justify-center rounded",
        position === "up-right" && "rotate-90",
        position === "bottom-left" && "-rotate-90",
        position === "bottom-right" && "rotate-180",
      )}
    >
      <Deflector color="yellow" />
    </div>
  );
}

function RedSwitchCell({ position }: { position: SwitchAngle }) {
  return (
    <div
      className={clsx(
        "bg-lc-gray flex size-8 items-center justify-center rounded",
        position === "bottom-up" && "rotate-90",
      )}
    >
      <Switch color="red" />
    </div>
  );
}

function YellowSwitchCell({ position }: { position: SwitchAngle }) {
  return (
    <div
      className={clsx(
        "bg-lc-gray flex size-8 items-center justify-center rounded",
        position === "bottom-up" && "rotate-90",
      )}
    >
      <Switch color="yellow" />
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
          case "red-king":
            return <RedKingCell />;
          case "yellow-king":
            return <YellowKingCell />;
          case "red-defender":
            return <RedDefenderCell position={cell.position} />;
          case "yellow-defender":
            return <YellowDefenderCell position={cell.position} />;
          case "red-deflector":
            return <RedDeflectorCell position={cell.position} />;
          case "yellow-deflector":
            return <YellowDeflectorCell position={cell.position} />;
          case "red-switch":
            return <RedSwitchCell position={cell.position} />;
          case "yellow-switch":
            return <YellowSwitchCell position={cell.position} />;
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
