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
  }, [keyPressed, setMapState]);
};

export default useShortcuts;
