import Location from "@/actions/game_logic/models/Location";

declare class Movement {
  type: string;
  srcLocation: Location;
  destLocation: Location;

  constructor(type: string, srcLocation: Location, destLocation: Location);
}

export = Movement;
