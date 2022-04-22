import React from "react";

type DebugMenuProps = {
  setMapState: React.Dispatch<React.SetStateAction<MapState>>;
};
const DebugMenu: React.FC<DebugMenuProps> = ({ setMapState }) => {
  return (
    <div>
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
