import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import React, { useRef } from "react";
import { Line, Text } from "react-konva";

type RoomProps = {
  offset: DiffPoint;
  index: number;
  room: Room;
  annotate: boolean;
  onClick: () => void;
};

const Room: React.FC<RoomProps> = ({
  index,
  room,
  annotate,
  onClick,
  offset,
}) => {
  const lineRef = React.useRef<Konva.Line>(null);
  const textRef: React.RefObject<Konva.Text> = useRef<Konva.Text>(null);
  const annotationTextWidth = textRef.current?.textWidth ?? 0;
  const annotationTextHight = textRef.current?.textHeight ?? 0;
  const onPressWrapper = (event: KonvaEventObject<MouseEvent>) => {
    const shape = event.target;

    shape.to({
      fill: "yellow",
      strokeWidth: 1.5,
      stroke: "white",
      zIndex: 100,
      opacity: 0.5,
      onFinish: () => {
        shape.to({
          opacity: 1,
          strokeWidth: 0.5,
          fill: null,
          zIndex: 2,
          stroke: "red",
        });
      },
    });
    // similar to stopPropagation
    event.cancelBubble = true;
    onClick();
  };

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
        ref={lineRef}
        id={`${index}`}
        points={room.points}
        closed
        stroke={room?.color ?? "red"}
        tension={0}
        onClick={onPressWrapper}
        onTap={onPressWrapper}
        strokeWidth={0.5}
      />
    </>
  );
};

export default Room;
