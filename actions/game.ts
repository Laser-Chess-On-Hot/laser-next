"use server";

import { getUserByJWT } from "@/actions/login";
import { prisma } from "@/prisma/prisma";
import Movement from "@/actions/game_logic/models/Movement";
import { Game } from "@/actions/game_logic/main";

async function createGame(playerId1: number, playerId2: number) {
  return prisma.game.create({
    data: {
      playerId1: playerId1,
      playerId2: playerId2,
      currentPlayerId: playerId1,
      numberOfMoves: 0,
      sn: "l++3d++kd++b+++2/2b7/3B+6/b++1B1ss+1b+++1B+/b+++1B+1S+S1b++1B/6b+++3/7B++2/2B+DKD3L",
      winnerIndex: -1,
    },
  });
}

export async function getGame(gameId: number) {
  const user = await getUserByJWT();

  const games = await prisma.game.findMany({
    where: {
      winnerIndex: -1,
      OR: [{ playerId1: user.id }, { playerId2: user.id }],
    },
  });

  if (games.length < 1) {
    return null;
  }

  return games[0];
}

export async function makeMove(gameId: number, movement: Movement) {
  const gameData = await getGame(gameId);

  if (!gameData) {
    return;
  }

  const game = new Game(
    gameData.playerId1,
    gameData.playerId2,
    gameData.currentPlayerId,
    gameData.sn,
    gameData.numberOfMoves,
  );

  game.applyMovement(movement);
  game.finishMovement();

  const winnerIndex = game.getWinner();

  return await updateGameData(
    gameId,
    gameData.sn,
    gameData.numberOfMoves,
    winnerIndex,
  );
}

async function updateGameData(
  gameId: number,
  sn: string,
  numberOfMoves: number,
  winnerIndex: number,
) {
  return prisma.game.update({
    where: { id: gameId },
    data: {
      sn,
      numberOfMoves,
      winnerIndex,
    },
  });
}
