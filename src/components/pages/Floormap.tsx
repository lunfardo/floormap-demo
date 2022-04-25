import React, { useContext } from "react";
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

  const [rooms] = useRooms();
  // const [selectedRoomKey, setSelectedRoom] = useState<null | string>(null);
  // const [events] = useEvents(selectedRoomKey);
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
        <Layer
          x={offset.diffX}
          y={offset.diffY}
          offsetX={-30}
          offsetY={-30}
          scaleX={2}
          scaleY={2}
        >
          {rooms.map((room, indexRoom) => (
            <Room
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
