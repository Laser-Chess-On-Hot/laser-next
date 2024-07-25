declare class Piece {
  color: string;
  type: string;
  orientation: number;
  imageName: string;

  constructor(type: string, orientation: number);
}

export = Piece;
