import Konva from "konva";
import React, { useContext, useEffect, useRef } from "react";
import { Layer, Stage, Text } from "react-konva";
import AppStateContext from "../../contexts/AppStateContext";
import useRooms from "../../hooks/useRooms";
import useUserTouch from "../../hooks/useUserTouch";
import useWheelScroll from "../../hooks/useWheelScroll";
import useWindowsDimensions from "../../hooks/useWindowsDimensions";
import Room from "../molecules/Room";

const Floormap: React.FC = () => {
  const [windowDimensions] = useWindowsDimensions();
  const [{ offset, scale, isAnnotationOn }] = useContext(AppStateContext);
  const [wheelpos] = useWheelScroll();
  const layerRef = useRef<Konva.Layer>(null);

  const [rooms] = useRooms();
  // const [selectedRoomKey, setSelectedRoom] = useState<null | string>(null);
  // const [events] = useEvents(selectedRoomKey);
  useEffect(() => {
    layerRef.current?.to({
      x: layerRef.current.x() + offset.diffX,
      y: layerRef.current.y() + offset.diffY,
    });
  }, [offset]);

  useUserTouch();
  return (
    <div
      className="App"
      style={{
        height: windowDimensions.height,
        width: windowDimensions.width,
        background: "black",
      }}
    >
      <Stage
        scaleX={scale + wheelpos / 1000}
        scaleY={scale + wheelpos / 1000}
        width={windowDimensions.width}
        height={windowDimensions.height}
      >
        <Layer>
          <Text text="Demo Map" fontSize={15} fill="white" />
        </Layer>
        <Layer ref={layerRef} offsetX={-30} offsetY={-30} scaleX={2} scaleY={2}>
          {rooms.map((room, indexRoom) => (
            <Room
              offset={offset}
              annotate={isAnnotationOn}
              key={room.name}
              room={room}
              index={indexRoom}
              onClick={() => {
                // setSelectedRoom(room.name);
              }}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default Floormap;
