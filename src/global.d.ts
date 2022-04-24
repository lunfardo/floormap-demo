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
    center: Point;
    name: string;
    points: Array<number>;
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
    isShowingModalRoomInfo: boolean;
    scale: number;
  };

  type WindowDimensions = {
    width: number;
    height: number;
  };

  type AppStateContext = [
    MapState,
    React.Dispatch<React.SetStateAction<MapState>>
  ];
}
