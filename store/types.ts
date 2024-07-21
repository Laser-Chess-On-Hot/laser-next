export type PlayerColor = "red" | "yellow";
export type FourSides = "up" | "right" | "bottom" | "left";
export type AngleSide = "up-left" | "up-right" | "bottom-right" | "bottom-left";
export type SwitchAngle = "bottom-up" | "up-bottom";

export type IEmptyCell = {
  type: "empty";
};

export type IRedLaserCell = {
  type: "red-laser";
  position: "bottom" | "right";
};

export type IYellowLaserCell = {
  type: "yellow-laser";
  position: "up" | "left";
};

export type IRedFireCell = {
  type: "red-fire";
};

export type IYellowFireCell = {
  type: "yellow-fire";
};

export type IRedKingCell = {
  type: "red-king";
};

export type IYellowKingCell = {
  type: "yellow-king";
};

export type IRedDefenderCell = {
  type: "red-defender";
  position: FourSides;
};

export type IYellowDefenderCell = {
  type: "yellow-defender";
  position: FourSides;
};

export type IRedDeflectorCell = {
  type: "red-deflector";
  position: AngleSide;
};

export type IYellowDeflectorCell = {
  type: "yellow-deflector";
  position: AngleSide;
};

export type IRedSwitchCell = {
  type: "red-switch";
  position: SwitchAngle;
};

export type IYellowSwitchCell = {
  type: "yellow-switch";
  position: SwitchAngle;
};

export type Cell =
  | IEmptyCell
  | IRedLaserCell
  | IYellowLaserCell
  | IRedFireCell
  | IYellowFireCell
  | IRedKingCell
  | IYellowKingCell
  | IRedDefenderCell
  | IYellowDefenderCell
  | IRedDeflectorCell
  | IYellowDeflectorCell
  | IRedSwitchCell
  | IYellowSwitchCell;
