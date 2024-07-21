import {
  IEmptyCell,
  ILaserCell,
  IFireCell,
  Cell,
  IKingCell,
  IDefenderCell,
  IDeflectorCell,
  AngleSide,
  SwitchAngle,
  ISwitchCell,
  PlayerColor,
} from "@/store/types";

const redLaserCell: ILaserCell = {
  type: "laser",
  color: "red",
  position: "bottom",
};
const yellowLaserCell: ILaserCell = {
  type: "laser",
  color: "yellow",
  position: "up",
};
const emptyCell: IEmptyCell = { type: "empty" };
const redFireCell: IFireCell = { type: "fire", color: "red" };
const yellowFireCell: IFireCell = { type: "fire", color: "yellow" };
const redKingCell: IKingCell = { type: "king", color: "red" };
const yellowKingCell: IKingCell = { type: "king", color: "yellow" };
const redDefenderCell: IDefenderCell = {
  type: "defender",
  color: "red",
  position: "bottom",
};
const yellowDefenderCell: IDefenderCell = {
  type: "defender",
  color: "yellow",
  position: "up",
};
const deflectorCell = (
  color: PlayerColor,
  position: AngleSide,
): IDeflectorCell => ({
  type: "deflector",
  color,
  position,
});
const switchCell = (
  color: PlayerColor,
  position: SwitchAngle,
): ISwitchCell => ({
  type: "switch",
  color,
  position,
});

export const initialCells: Cell[] = [
  // row 1
  redLaserCell,
  yellowFireCell,
  emptyCell,
  emptyCell,
  redDefenderCell,
  redKingCell,
  redDefenderCell,
  deflectorCell("red", "bottom-right"),
  redFireCell,
  yellowFireCell,
  // row 2
  redFireCell,
  emptyCell,
  deflectorCell("red", "bottom-left"),
  emptyCell,
  emptyCell,
  emptyCell,
  emptyCell,
  emptyCell,
  emptyCell,
  yellowFireCell,
  // row 3
  redFireCell,
  emptyCell,
  emptyCell,
  deflectorCell("yellow", "up-left"),
  emptyCell,
  emptyCell,
  emptyCell,
  emptyCell,
  emptyCell,
  yellowFireCell,
  // row 4
  deflectorCell("red", "up-right"),
  emptyCell,
  deflectorCell("yellow", "bottom-left"),
  emptyCell,
  switchCell("red", "up-bottom"),
  switchCell("red", "bottom-up"),
  emptyCell,
  deflectorCell("red", "bottom-right"),
  emptyCell,
  deflectorCell("yellow", "up-left"),
  // row 5
  deflectorCell("red", "bottom-right"),
  emptyCell,
  deflectorCell("yellow", "up-left"),
  emptyCell,
  switchCell("yellow", "bottom-up"),
  switchCell("yellow", "up-bottom"),
  emptyCell,
  deflectorCell("red", "up-right"),
  emptyCell,
  deflectorCell("yellow", "bottom-left"),
  // row 6
  redFireCell,
  emptyCell,
  emptyCell,
  emptyCell,
  emptyCell,
  emptyCell,
  deflectorCell("red", "bottom-right"),
  emptyCell,
  emptyCell,
  yellowFireCell,
  // row 7
  redFireCell,
  emptyCell,
  emptyCell,
  emptyCell,
  emptyCell,
  emptyCell,
  emptyCell,
  deflectorCell("yellow", "up-right"),
  emptyCell,
  yellowFireCell,
  // row 8
  redFireCell,
  yellowFireCell,
  deflectorCell("yellow", "up-left"),
  yellowDefenderCell,
  yellowKingCell,
  yellowDefenderCell,
  emptyCell,
  emptyCell,
  redFireCell,
  yellowLaserCell,
];
