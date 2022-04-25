import { useCallback, useContext } from "react";
import Button from "../../atoms/Button/Button";
import AppStateContext from "../../contexts/AppStateContext";

const UserControls = () => {
  const [, setMapState] = useContext(AppStateContext);
  const setNewOffset = useCallback(
    (newOffset: DiffPoint) => {
      setMapState((mapState) => ({ ...mapState, offset: newOffset }));
    },
    [setMapState]
  );
  return (
    <div style={{ position: "absolute", bottom: 20, left: 20, zIndex: 4 }}>
      <Button onClick={() => setNewOffset({ diffX: 0, diffY: -20 })}>🠕</Button>
      <Button onClick={() => setNewOffset({ diffX: 0, diffY: 20 })}>🠗</Button>
      <Button onClick={() => setNewOffset({ diffX: -20, diffY: 0 })}>🠔</Button>
      <Button onClick={() => setNewOffset({ diffX: 20, diffY: 0 })}>➜</Button>
      <Button onClick={() => document.documentElement.requestFullscreen()}>
        Fullscreen
      </Button>
    </div>
  );
};

export default UserControls;
