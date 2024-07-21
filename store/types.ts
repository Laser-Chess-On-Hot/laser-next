export type EmptyNode = {
  type: "empty";
};

export type RedLaserNode = {
  type: "red-laser";
  position: "bottom" | "right";
};

export type LCNode = EmptyNode | RedLaserNode;
