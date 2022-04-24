import Konva from "konva";
import React, { useEffect, useRef } from "react";
import { Line, Text } from "react-konva";

type RoomProps = {
  index: number;
  room: Room;
  annotate: boolean;
  onClick: () => void;
};

const Room: React.FC<RoomProps> = ({ index, room, annotate, onClick }) => {
  const textRef: React.RefObject<Konva.Text> = useRef<Konva.Text>(null);
  const annotationTextWidth = textRef.current?.textWidth ?? 0;
  const annotationTextHight = textRef.current?.textHeight ?? 0;

  return (
    <>
      <Text
        ref={textRef}
        visible={annotate}
        x={room.center.x - annotationTextWidth / 2}
        y={room.center.y - annotationTextHight / 2}
        text={room.name}
        fontSize={2}
        fill="yellow"
      />
      <Line
        key={index}
        id={`${index}`}
        points={room.points}
        closed
        stroke={room?.color ?? "red"}
        tension={0}
        onClick={onClick}
        strokeWidth={0.5}
      />
    </>
  );
};

export default Room;
