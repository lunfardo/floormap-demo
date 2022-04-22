import React, { useState } from "react";
import { Layer, Stage, Text } from "react-konva";
import useEvents from "../../hooks/useEvents";
import useRooms from "../../hooks/useRooms";
import Room from "../molecules/Room";
import EventList from "../organisms/EventList";

type FloormapProps = {
  isAnnotationOn: boolean;
  isShowingEvents: boolean;
  scale: number;
};

const Floormap: React.FC<FloormapProps> = ({
  isAnnotationOn,
  isShowingEvents,
  scale,
}) => {
  const [rooms] = useRooms();
  const [selectedRoomKey, setSelectedRoom] = useState<null | string>(null);
  const [events] = useEvents(selectedRoomKey);
  return (
    <>
      <Stage
        scaleX={scale}
        scaleY={scale}
        width={window.innerWidth}
        height={window.innerHeight}
      >
        <Layer>
          <Text text="Testing Map" fontSize={15} fill="white" />

          {rooms.map((room, indexRoom) => (
            <Room
              key={room.name}
              room={room}
              index={indexRoom}
              annotate={isAnnotationOn}
              onClick={() => {
                setSelectedRoom(room.name);
              }}
            />
          ))}
        </Layer>
      </Stage>
      {isShowingEvents && selectedRoomKey !== null && (
        <EventList selectedRoomKey={selectedRoomKey} events={events} />
      )}
    </>
  );
};

export default Floormap;
