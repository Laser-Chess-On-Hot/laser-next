import Movement from "@/actions/game_logic/models/Movement";

declare class Game {
  constructor(
    userColor: number,
    opponentColor: number,
    currentPlayer: number,
    sn: string,
    numberOfMoves: number,
  );

  async applyMovement(movement: Movement);
  async finishMovement();
  getWinner(): number;
}
