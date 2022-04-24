import { useEffect, useState } from "react";
import ROOMS from "../resources/rooms.json";

type RoomSource =
  | {
      name: string;
      type: "rectangle";
      origin: Point;
      height: number;
      width: number;
      color?: string;
    }
  | {
      name: string;
      type: "multipoint";
      limitWalls: Array<Wall>;
      color?: string;
    };

const calculateCenterRectangle = (
  topLeft: Point,
  bottomRight: Point
): Point => ({
  x: (topLeft.x + bottomRight.x) / 2,
  y: (topLeft.y + bottomRight.y) / 2,
});

const useRooms = (): [Array<Room>] => {
  const [rooms, setRooms] = useState<Array<Room>>([]);
  useEffect(() => {
    // @ts-ignore
    const rawRooms: Array<RoomSource> = ROOMS;
    const rooms: Array<Room> = [];
    rawRooms.forEach((rawRoom) => {
      if (rawRoom.type === "multipoint") {
        rooms.push({
          name: rawRoom.name,
          color: rawRoom.color,
          center: calculateCenterRectangle(
            rawRoom.limitWalls[0].start,
            rawRoom.limitWalls[2].start
          ),
          points: rawRoom.limitWalls.flatMap((wall) => [
            wall.start.x,
            wall.start.y,
            wall.end.x,
            wall.end.y,
          ]),
        });
      }
    });

    setRooms(rooms);
  }, [ROOMS]);
  return [rooms];
};

export default useRooms;
