import React, { useContext } from "react";
import AppStateContext from "../../contexts/AppStateContext";
import useShortcuts from "../../hooks/useShortcuts";

const DebugMenu: React.FC = () => {
  const [mapState, setMapState] = useContext(AppStateContext);
  useShortcuts();

  if (!mapState.isShowingDebugMenu) {
    return null;
  }

  return (
    <div style={{ position: "absolute", top: 20, right: 20, zIndex: 4 }}>
      <button
        type="button"
        onClick={() => {
          setMapState((mapState) => ({
            ...mapState,
            isAnnotationOn: !mapState.isAnnotationOn,
          }));
        }}
      >
        Show room names
      </button>
      <button
        type="button"
        onClick={() =>
          setMapState((mapState) => ({
            ...mapState,
            isShowingEvents: !mapState.isShowingEvents,
          }))
        }
      >
        Show events
      </button>
      <button
        type="button"
        onClick={() =>
          setMapState((mapState) => ({
            ...mapState,
            scale: mapState.scale + 0.1,
          }))
        }
      >
        Zoom in
      </button>
      <button
        type="button"
        onClick={() =>
          setMapState((mapState) => ({
            ...mapState,
            scale: mapState.scale - 0.1,
          }))
        }
      >
        Zoom out
      </button>
    </div>
  );
};

export default DebugMenu;
