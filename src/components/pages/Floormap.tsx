import React, { useContext, useState } from "react";
import { Layer, Stage, Text } from "react-konva";
import AppStateContext from "../../contexts/AppStateContext";
import useEvents from "../../hooks/useEvents";
import useRooms from "../../hooks/useRooms";
import useWheelScroll from "../../hooks/useWheelScroll";
import useWindowsDimensions from "../../hooks/useWindowsDimensions";
import Room from "../molecules/Room";
import EventList from "../organisms/EventList";

const Floormap: React.FC = () => {
  const [windowDimensions] = useWindowsDimensions();
  const [mapState] = useContext(AppStateContext);
  const [wheelpos] = useWheelScroll();

  const [rooms] = useRooms();
  const [selectedRoomKey, setSelectedRoom] = useState<null | string>(null);
  const [events] = useEvents(selectedRoomKey);
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
        scaleX={mapState.scale + wheelpos / 1000}
        scaleY={mapState.scale + wheelpos / 1000}
        width={windowDimensions.width}
        height={windowDimensions.height}
      >
        <Layer>
          <Text text="Testing Map" fontSize={15} fill="white" />

          {rooms.map((room, indexRoom) => (
            <Room
              key={room.name}
              room={room}
              index={indexRoom}
              annotate={mapState.isAnnotationOn}
              onClick={() => {
                setSelectedRoom(room.name);
              }}
            />
          ))}
        </Layer>
      </Stage>
      {mapState.isShowingEvents && selectedRoomKey !== null && (
        <EventList selectedRoomKey={selectedRoomKey} events={events} />
      )}
    </div>
  );
};

export default Floormap;
