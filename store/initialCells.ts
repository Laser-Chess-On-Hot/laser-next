import {
  IEmptyCell,
  IRedLaserCell,
  IYellowLaserCell,
  IRedFireCell,
  IYellowFireCell,
  Cell,
  IRedKingCell,
  IYellowKingCell,
  IRedDefenderCell,
  IYellowDefenderCell,
  IRedDeflectorCell,
  AngleSide,
  IYellowDeflectorCell,
  SwitchAngle,
  IRedSwitchCell,
  IYellowSwitchCell,
} from "@/store/types";

const redLaserCell: IRedLaserCell = { type: "red-laser", position: "bottom" };
const yellowLaserCell: IYellowLaserCell = {
  type: "yellow-laser",
  position: "up",
};
const emptyCell: IEmptyCell = { type: "empty" };
const redFireCell: IRedFireCell = { type: "red-fire" };
const yellowFireCell: IYellowFireCell = { type: "yellow-fire" };
const redKingCell: IRedKingCell = { type: "red-king" };
const yellowKingCell: IYellowKingCell = { type: "yellow-king" };
const redDefenderCell: IRedDefenderCell = {
  type: "red-defender",
  position: "bottom",
};
const yellowDefenderCell: IYellowDefenderCell = {
  type: "yellow-defender",
  position: "up",
};
const redDeflectorCell = (position: AngleSide): IRedDeflectorCell => ({
  type: "red-deflector",
  position,
});
const yellowDeflectorCell = (position: AngleSide): IYellowDeflectorCell => ({
  type: "yellow-deflector",
  position,
});
const redSwitchCell = (position: SwitchAngle): IRedSwitchCell => ({
  type: "red-switch",
  position,
});
const yellowSwitchCell = (position: SwitchAngle): IYellowSwitchCell => ({
  type: "yellow-switch",
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
  redDeflectorCell("bottom-right"),
  redFireCell,
  yellowFireCell,
  // row 2
  redFireCell,
  emptyCell,
  redDeflectorCell("bottom-left"),
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
  yellowDeflectorCell("up-left"),
  emptyCell,
  emptyCell,
  emptyCell,
  emptyCell,
  emptyCell,
  yellowFireCell,
  // row 4
  redDeflectorCell("up-right"),
  emptyCell,
  yellowDeflectorCell("bottom-left"),
  emptyCell,
  redSwitchCell("up-bottom"),
  redSwitchCell("bottom-up"),
  emptyCell,
  redDeflectorCell("bottom-right"),
  emptyCell,
  yellowDeflectorCell("up-left"),
  // row 5
  redDeflectorCell("bottom-right"),
  emptyCell,
  yellowDeflectorCell("up-left"),
  emptyCell,
  yellowSwitchCell("bottom-up"),
  yellowSwitchCell("up-bottom"),
  emptyCell,
  redDeflectorCell("up-right"),
  emptyCell,
  yellowDeflectorCell("bottom-left"),
  // row 6
  redFireCell,
  emptyCell,
  emptyCell,
  emptyCell,
  emptyCell,
  emptyCell,
  redDeflectorCell("bottom-right"),
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
  yellowDeflectorCell("up-right"),
  emptyCell,
  yellowFireCell,
  // row 8
  redFireCell,
  yellowFireCell,
  yellowDeflectorCell("up-left"),
  yellowDefenderCell,
  yellowKingCell,
  yellowDefenderCell,
  emptyCell,
  emptyCell,
  redFireCell,
  yellowLaserCell,
];
