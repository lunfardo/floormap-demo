import React from "react";
import { Line, Text } from "react-konva";

type RoomProps = {
  index: number;
  room: Room;
  annotate: boolean;
  onClick: () => void;
};

const Room: React.FC<RoomProps> = ({ index, room, annotate, onClick }) => {
  return (
    <>
      <Text
        visible={annotate}
        x={room.center.x}
        y={room.center.y}
        text={room.name}
        fill="yellow"
      />
      <Line
        key={index}
        id={`${index}`}
        points={room.points}
        closed
        stroke={room?.color ?? "red"}
        tension={1}
        onClick={onClick}
      />
    </>
  );
};

export default Room;
