import React, { useContext } from "react";
import AppStateContext from "../../contexts/AppStateContext";
import useShortcuts from "../../hooks/useShortcuts";
import Button from "../atoms/Button/Button";
import FloatMenu from "../atoms/FloatMenu/FloatMenu";

const DebugMenu: React.FC = () => {
  const [mapState, setMapState] = useContext(AppStateContext);
  useShortcuts();

  if (!mapState.isShowingDebugMenu) {
    return null;
  }

  return (
    <FloatMenu top={20} right={20}>
      <Button
        type="button"
        onClick={() => {
          setMapState((mapState) => ({
            ...mapState,
            isAnnotationOn: !mapState.isAnnotationOn,
          }));
        }}
      >
        Show room names
      </Button>
      <Button
        type="button"
        onClick={() =>
          setMapState((mapState) => ({
            ...mapState,
            isShowingEvents: !mapState.isShowingEvents,
          }))
        }
      >
        Show events
      </Button>
    </FloatMenu>
  );
};

export default DebugMenu;
