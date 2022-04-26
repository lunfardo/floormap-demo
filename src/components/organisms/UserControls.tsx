import { useCallback, useContext } from "react";
import AppStateContext from "../../contexts/AppStateContext";
import ArrowButton from "../atoms/ArrowButton/ArrowButton";
import Button from "../atoms/Button/Button";
import FloatMenu from "../atoms/FloatMenu/FloatMenu";

const UserControls = () => {
  const [{ isShowingModalRoomInfo }, setMapState] = useContext(AppStateContext);
  const setNewOffset = useCallback(
    (newOffset: DiffPoint) => {
      setMapState((mapState) => ({ ...mapState, offset: newOffset }));
    },
    [setMapState]
  );

  const zoomChange = useCallback(
    (zoomDiff: number) => {
      setMapState((mapState) => ({
        ...mapState,
        scale: mapState.scale + zoomDiff,
      }));
    },
    [setMapState]
  );

  if (isShowingModalRoomInfo) {
    return null;
  }

  return (
    <FloatMenu bottom={20} left={20}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "40px 40px 40px",
          gridAutoRows: "40px 40px",
        }}
      >
        <ArrowButton
          direction="up"
          style={{
            gridColumnStart: 2,
            gridRow: 1,
          }}
          onClick={() => setNewOffset({ diffX: 0, diffY: -20 })}
        />
        <ArrowButton
          direction="down"
          style={{
            gridColumnStart: 2,
            gridRow: 2,
          }}
          onClick={() => setNewOffset({ diffX: 0, diffY: 20 })}
        ></ArrowButton>
        <ArrowButton
          direction="left"
          style={{
            gridColumnStart: 1,
            gridRow: 2,
          }}
          onClick={() => setNewOffset({ diffX: -20, diffY: 0 })}
        ></ArrowButton>
        <ArrowButton
          direction="right"
          style={{
            gridColumnStart: 3,
            gridRow: 2,
          }}
          onClick={() => setNewOffset({ diffX: 20, diffY: 0 })}
        ></ArrowButton>
      </div>
      <Button onClick={() => document.documentElement.requestFullscreen()}>
        Fullscreen
      </Button>
      <Button onClick={() => zoomChange(1)}>Zoom In</Button>
      <Button onClick={() => zoomChange(-1)}>Zoom Out</Button>
    </FloatMenu>
  );
};

export default UserControls;
