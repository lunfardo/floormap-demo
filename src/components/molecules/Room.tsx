import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import React, { useEffect, useRef } from "react";
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
  room: { center, name, points, color, animations },
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

  useEffect(() => {
    if (animations.includes("eventAboutToHappen")) {
      const interval = setInterval(() => {
        lineRef.current?.to({
          fill: "white",
          onFinish: () => {
            lineRef.current?.to({
              fill: null,
            });
          },
        });
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [animations]);

  return (
    <>
      <Text
        ref={textRef}
        visible={annotate}
        x={center.x - annotationTextWidth / 2}
        y={center.y - annotationTextHight / 2}
        text={name}
        fontSize={2}
        fill="yellow"
      />
      <Line
        key={index}
        ref={lineRef}
        id={`${index}`}
        points={points}
        closed
        stroke={color ?? "red"}
        tension={0}
        onClick={onPressWrapper}
        onTap={onPressWrapper}
        strokeWidth={0.5}
      />
    </>
  );
};

export default Room;
