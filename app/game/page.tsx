"use client";

import { LaserRed } from "@/assets/LaserRed";
import { clsx } from "clsx";
import { useGameStore } from "@/store";
import { LCNode } from "@/store/types";

function EmptyCell() {
  return <div className="bg-lc-gray size-8 rounded"></div>;
}

function RedLaserCell({ position }: { position: "bottom" | "right" }) {
  return (
    <div
      className={clsx(
        "bg-lc-gray flex size-8 items-center justify-center rounded",
        position === "bottom" ? "rotate-180" : "rotate-90",
      )}
    >
      <LaserRed size={25} />
    </div>
  );
}

function GameField({ nodes }: { nodes: LCNode[] }) {
  return (
    <div className="grid w-fit grid-cols-10 gap-2">
      {nodes.map((node) => {
        switch (node.type) {
          case "empty":
            return <EmptyCell />;
          case "red-laser":
            return <RedLaserCell position={node.position} />;
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
      <GameField nodes={gameState.nodes} />
      <p className="self-end">kastet99.near</p>
    </div>
  );
}
