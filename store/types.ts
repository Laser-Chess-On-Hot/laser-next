export type PlayerColor = "red" | "yellow";

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

export type Cell =
  | IEmptyCell
  | IRedLaserCell
  | IYellowLaserCell
  | IRedFireCell
  | IYellowFireCell;
