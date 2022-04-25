import { useContext, useEffect } from "react";
import AppStateContext from "../contexts/AppStateContext";
import useGlobalKeyPress from "./useGlobalKeyPress";

const useShortcuts = (): void => {
  const [keyPressed] = useGlobalKeyPress();
  const [, setMapState] = useContext(AppStateContext);

  useEffect(() => {
    if (keyPressed.toLocaleUpperCase() === "M") {
      setMapState((mapState) => ({
        ...mapState,
        isShowingDebugMenu: !mapState.isShowingDebugMenu,
      }));
    }
    if (keyPressed.toLocaleUpperCase() === "O") {
      setMapState((mapState) => ({
        ...mapState,
        isShowingModalRoomInfo: !mapState.isShowingModalRoomInfo,
      }));
    }

    if (keyPressed === "ArrowLeft") {
      setMapState((mapState) => ({
        ...mapState,
        offset: { ...mapState.offset, diffX: -20, diffY: 0 },
      }));
    }
    if (keyPressed === "ArrowRight") {
      setMapState((mapState) => ({
        ...mapState,
        offset: { ...mapState.offset, diffX: 20, diffY: 0 },
      }));
    }
    if (keyPressed === "ArrowDown") {
      setMapState((mapState) => ({
        ...mapState,
        offset: { ...mapState.offset, diffX: 0, diffY: 20 },
      }));
    }
    if (keyPressed === "ArrowUp") {
      setMapState((mapState) => ({
        ...mapState,
        offset: { ...mapState.offset, diffX: 0, diffY: -20 },
      }));
    }
  }, [keyPressed, setMapState]);
};

export default useShortcuts;
