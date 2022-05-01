import Konva from "konva";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Layer, Stage, Text, Image } from "react-konva";
import AppStateContext from "../../contexts/AppStateContext";
import RoomsContext from "../../contexts/RoomsContext";
import useImage from "../../hooks/useImage.";
import useUserTouch from "../../hooks/useUserTouch";
import useWindowsDimensions from "../../hooks/useWindowsDimensions";
import useZoom from "../../hooks/useZoom";
import Room from "../molecules/Room";

const INITIAL_MAP_OFFSET = 30;
const MAP_TO_DATA_FACTOR = 2;

const Floormap: React.FC = () => {
  const [windowDimensions] = useWindowsDimensions();
  const [
    { offset, isAnnotationOn, isShowingCoordinates, isShowingWalls },
    setMapState,
  ] = useContext(AppStateContext);
  const [zoom] = useZoom();
  const layerRef = useRef<Konva.Layer>(null);
  const rooms = useContext(RoomsContext);
  const [image] = useImage("/floormap-demo/map_picture.png");
  const [positionLabel, setPositionLabel] = useState("");

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
        scaleX={zoom}
        scaleY={zoom}
        width={windowDimensions.width}
        height={windowDimensions.height}
        onMouseMove={(evt) => {
          const n = zoom + MAP_TO_DATA_FACTOR;
          setPositionLabel(
            `${(evt.evt.clientX - 30) / n} ${(evt.evt.clientY - 30) / n}`
          );
        }}
      >
        <Layer>
          <Text text="Demo Map" fontSize={15} fill="white" />
          {isShowingCoordinates && (
            <Text text={`${positionLabel}`} y={15} fontSize={15} fill="white" />
          )}
        </Layer>
        <Layer
          ref={layerRef}
          offsetX={-INITIAL_MAP_OFFSET}
          offsetY={-INITIAL_MAP_OFFSET}
          scaleX={MAP_TO_DATA_FACTOR}
          scaleY={MAP_TO_DATA_FACTOR}
        >
          <Image scaleX={0.1} scaleY={0.1} image={image} />
          {rooms.map((room, indexRoom) => (
            <Room
              annotate={isAnnotationOn}
              key={room.name}
              room={room}
              index={indexRoom}
              visibleWalls={isShowingWalls}
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
