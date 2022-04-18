import React from "react";
import { Line } from "react-konva";

type RoomProps = { index: number; room: Room };

const Room: React.FC<RoomProps> = ({ index, room }) => {
  return (
    <Line
      key={index}
      id={`${index}`}
      points={room.limitWalls.flatMap((wall) => [
        wall.start.x,
        wall.start.y,
        wall.end.x,
        wall.end.y,
      ])}
      closed
      stroke={room?.color ?? "red"}
      tension={1}
      onClick={(e) => alert(`${room.name}`)}
    />
  );
};

export default Room;
