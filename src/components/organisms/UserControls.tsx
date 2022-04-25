import { useCallback, useContext } from "react";
import AppStateContext from "../../contexts/AppStateContext";
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
      <Button onClick={() => setNewOffset({ diffX: 0, diffY: -20 })}>🠕</Button>
      <Button onClick={() => setNewOffset({ diffX: 0, diffY: 20 })}>🠗</Button>
      <Button onClick={() => setNewOffset({ diffX: -20, diffY: 0 })}>🠔</Button>
      <Button onClick={() => setNewOffset({ diffX: 20, diffY: 0 })}>➜</Button>
      <Button onClick={() => document.documentElement.requestFullscreen()}>
        Fullscreen
      </Button>

      <Button onClick={() => zoomChange(1)}>Zoom In</Button>

      <Button onClick={() => zoomChange(-1)}>Zoom Out</Button>
    </FloatMenu>
  );
};

export default UserControls;
