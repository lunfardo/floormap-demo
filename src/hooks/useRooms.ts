import { useEffect, useState } from "react";
import ROOMS from "../resources/rooms.json";

type RoomSource =
  | {
      name: string;
      type: "rectangle";
      origin: Point;
      height: number;
      width: number;
      animations?: Array<"eventAboutToHappen" | "somethingElse">;
      color?: string;
    }
  | {
      name: string;
      type: "multipoint";
      center: Point;
      origin: Point;
      diffPoints: Array<DiffPoint>;
      animations?: Array<"eventAboutToHappen" | "somethingElse">;
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
        let lastPoint: Point = rawRoom.origin;
        const points = [lastPoint.x, lastPoint.y];
        rawRoom.diffPoints.forEach((point) => {
          points.push(
            lastPoint.x,
            lastPoint.y,
            point.diffX + lastPoint.x,
            point.diffY + lastPoint.y
          );
          lastPoint = {
            x: point.diffX + lastPoint.x,
            y: point.diffY + lastPoint.y,
          };
        });

        rooms.push({
          name: rawRoom.name,
          color: rawRoom.color,
          animations: rawRoom?.animations ?? [],
          center: {
            x: rawRoom.center.x,
            y: rawRoom.center.y,
          },
          points,
        });
      }
      if (rawRoom.type === "rectangle") {
        rooms.push({
          name: rawRoom.name,
          color: rawRoom.color,
          animations: rawRoom?.animations ?? [],
          center: calculateCenterRectangle(
            {
              x: rawRoom.origin.x,
              y: rawRoom.origin.y,
            },
            {
              x: rawRoom.origin.x + rawRoom.width,
              y: rawRoom.origin.y + rawRoom.height,
            }
          ),
          points: [
            rawRoom.origin.x,
            rawRoom.origin.y,
            rawRoom.origin.x + rawRoom.width,
            rawRoom.origin.y,
            rawRoom.origin.x + rawRoom.width,
            rawRoom.origin.y,
            rawRoom.origin.x + rawRoom.width,
            rawRoom.origin.y + rawRoom.height,
            rawRoom.origin.x + rawRoom.width,
            rawRoom.origin.y + rawRoom.height,
            rawRoom.origin.x,
            rawRoom.origin.y + rawRoom.height,
            rawRoom.origin.x,
            rawRoom.origin.y + rawRoom.height,
            rawRoom.origin.x,
            rawRoom.origin.y,
          ],
        });
      }
    });

    setRooms(rooms);
  }, []);
  return [rooms];
};

export default useRooms;
