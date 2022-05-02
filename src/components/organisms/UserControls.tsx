import { useCallback, useContext, useEffect } from "react";
import AppStateContext from "../../contexts/AppStateContext";
import useGlobalKeyPress from "../../hooks/useGlobalKeyPress";
import ArrowButton from "../atoms/ArrowButton/ArrowButton";
import Button from "../atoms/Button/Button";
import FloatMenu from "../atoms/FloatMenu/FloatMenu";

let isLock = false;

const UserControls = () => {
  const [{ isShowingModalRoomInfo }, setMapState] = useContext(AppStateContext);
  const [keyPressed] = useGlobalKeyPress();

  // const [isLock, setIsLock] = useState(false);
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

  const setNewOffsetTimeout = useCallback(
    (newOffset: DiffPoint) => {
      if (isLock) return;
      isLock = true;
      setNewOffset(newOffset);
      setTimeout(() => {
        isLock = false;
      }, 150);
    },
    [setNewOffset]
  );

  useEffect(() => {
    if (keyPressed === "ArrowLeft") {
      setNewOffsetTimeout({ diffX: -20, diffY: 0 });
    }
    if (keyPressed === "ArrowRight") {
      setNewOffsetTimeout({ diffX: 20, diffY: 0 });
    }
    if (keyPressed === "ArrowDown") {
      setNewOffsetTimeout({ diffX: 0, diffY: 20 });
    }
    if (keyPressed === "ArrowUp") {
      setNewOffsetTimeout({ diffX: 0, diffY: -20 });
    }
  }, [keyPressed, setNewOffsetTimeout]);

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
          columnGap: "8px",
          rowGap: "8px",
        }}
      >
        <ArrowButton
          direction="up"
          style={{
            gridColumnStart: 2,
            gridRow: 1,
          }}
          onClick={() => {
            setNewOffsetTimeout({ diffX: 0, diffY: -20 });
          }}
        />
        <ArrowButton
          direction="down"
          style={{
            gridColumnStart: 2,
            gridRow: 2,
          }}
          onClick={() => setNewOffsetTimeout({ diffX: 0, diffY: 20 })}
        ></ArrowButton>
        <ArrowButton
          direction="left"
          style={{
            gridColumnStart: 1,
            gridRow: 2,
          }}
          onClick={() => setNewOffsetTimeout({ diffX: -20, diffY: 0 })}
        ></ArrowButton>
        <ArrowButton
          direction="right"
          style={{
            gridColumnStart: 3,
            gridRow: 2,
          }}
          onClick={() => setNewOffsetTimeout({ diffX: 20, diffY: 0 })}
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
