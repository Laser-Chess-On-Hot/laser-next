export type PlayerColor = "red" | "yellow";
export type FourSides = "up" | "right" | "bottom" | "left";
export type AngleSide = "up-left" | "up-right" | "bottom-right" | "bottom-left";
export type SwitchAngle = "bottom-up" | "up-bottom";

export type IEmptyCell = {
  type: "empty";
};

export type ILaserCell =
  | {
      type: "laser";
      color: "red";
      position: "bottom" | "right";
    }
  | {
      type: "laser";
      color: "yellow";
      position: "up" | "left";
    };

export type IFireCell = {
  type: "fire";
  color: PlayerColor;
};

export type IKingCell = {
  type: "king";
  color: PlayerColor;
};

export type IDefenderCell = {
  type: "defender";
  color: PlayerColor;
  position: FourSides;
};

export type IDeflectorCell = {
  type: "deflector";
  color: PlayerColor;
  position: AngleSide;
};

export type ISwitchCell = {
  type: "switch";
  color: PlayerColor;
  position: SwitchAngle;
};

export type Cell =
  | IEmptyCell
  | ILaserCell
  | IFireCell
  | IKingCell
  | IDefenderCell
  | IDeflectorCell
  | ISwitchCell;
