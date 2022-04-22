export {};

declare global {
  type Point = {
    x: number;
    y: number;
  };

  type Wall = {
    start: Point;
    end: Point;
    color?: string;
  };

  type Room = {
    name: string;
    limitWalls: Array<Wall>;
    color?: string;
  };

  type RoomEvent = {
    atRoom: string;
    priority: string;
    description: string;
  };

  type MapState = {
    isAnnotationOn: boolean;
    isShowingEvents: boolean;
    isShowingDebugMenu: boolean;
    scale: number;
  };
}
