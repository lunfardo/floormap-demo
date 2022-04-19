import React from "react";
import { Line, Text } from "react-konva";

type RoomProps = {
  index: number;
  room: Room;
  annotate: boolean;
  onClick: () => void;
};

const Room: React.FC<RoomProps> = ({ index, room, annotate, onClick }) => {
  //TODO: only works for square rooms for now
  const middlePoint: Point = {
    x: (room.limitWalls[0].start.x + room.limitWalls[2].start.x) / 2,
    y: (room.limitWalls[0].start.y + room.limitWalls[2].start.y) / 2,
  };

  return (
    <>
      <Text
        visible={annotate}
        x={middlePoint.x - 15}
        y={middlePoint.y - 10}
        text={room.name}
        fill="yellow"
      />
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
        onClick={onClick}
      />
    </>
  );
};

export default Room;
