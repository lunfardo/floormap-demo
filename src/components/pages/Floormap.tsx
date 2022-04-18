import React from "react";
import { Layer, Stage, Text, Line, Circle } from "react-konva";
// import Walls from "../../entities/Walls";
import useRooms from "../../hooks/useRooms";
import Room from "../molecules/Room";

const Floormap = () => {
  const [rooms] = useRooms();
  const anotate = false;
  return (
    <Stage width={600} height={600}>
      <Layer>
        <Text text="Testing Map" fontSize={15} fill="white" />

        {rooms.map((room, indexRoom) => (
          <Room room={room} index={indexRoom} />
        ))}
      </Layer>
    </Stage>
  );
};

export default Floormap;
