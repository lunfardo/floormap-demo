export {};

declare global {
  interface Point {
    x: number;
    y: number;
  }

  interface Wall {
    start: Point;
    end: Point;
    color?: string;
  }

  interface Room {
    name: string;
    limitWalls: Array<Wall>;
    color?: string;
  }
}
