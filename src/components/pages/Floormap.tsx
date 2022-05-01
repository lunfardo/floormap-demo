import Konva from "konva";
import React, { useContext, useRef } from "react";
import { Layer, Stage, Text, Image } from "react-konva";
import AppStateContext from "../../contexts/AppStateContext";
import useImage from "../../hooks/useImage.";
import useRooms from "../../hooks/useRooms";
import useUserTouch from "../../hooks/useUserTouch";
import useWindowsDimensions from "../../hooks/useWindowsDimensions";
import useZoom from "../../hooks/useZoom";
import Room from "../molecules/Room";

const MAP_OFFSET = 30;
const MAP_TO_DATA_FACTOR = 2;

const Floormap: React.FC = () => {
  const [windowDimensions] = useWindowsDimensions();
  const [{ offset, isAnnotationOn }, setMapState] = useContext(AppStateContext);
  const [zoom] = useZoom();
  const layerRef = useRef<Konva.Layer>(null);
  const [rooms] = useRooms();
  const [image] = useImage("/floormap-demo/map_picture.png");

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
        scaleX={zoom}
        scaleY={zoom}
        width={windowDimensions.width}
        height={windowDimensions.height}
        onMouseMove={(evt) => {
          const n = zoom + MAP_TO_DATA_FACTOR;
          console.log((evt.evt.clientX - 30) / n, (evt.evt.clientY - 30) / n);
        }}
      >
        <Layer>
          <Text text="Demo Map" fontSize={15} fill="white" />
        </Layer>
        <Layer
          ref={layerRef}
          offsetX={-MAP_OFFSET}
          offsetY={-MAP_OFFSET}
          scaleX={MAP_TO_DATA_FACTOR}
          scaleY={MAP_TO_DATA_FACTOR}
        >
          <Image scaleX={0.2} scaleY={0.2} image={image} />
          {rooms.map((room, indexRoom) => (
            <Room
              offset={offset}
              annotate={isAnnotationOn}
              key={room.name}
              room={room}
              index={indexRoom}
              onClick={() => {
                setMapState((mapState) => ({
                  ...mapState,
                  isShowingRoomMenu: true,
                  selectedRoomName: room.name,
                }));
              }}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default Floormap;
