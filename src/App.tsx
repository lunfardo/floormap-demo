import { useEffect, useState } from "react";
import "./App.css";
import Modal from "./atoms/Modal/Modal";
import DebugMenu from "./components/organisms/DebugMenu";
import Floormap from "./components/pages/Floormap";
import useGlobalKeyPress from "./hooks/useGlobalKeyPress";
import useWheelScroll from "./hooks/useWheelScroll";
import useWindowsDimensions from "./hooks/useWindowsDimensions";

function App() {
  const [mapState, setMapState] = useState<MapState>({
    isAnnotationOn: false,
    isShowingEvents: false,
    scale: 1,
    isShowingDebugMenu: false,
  });
  const [wheelpos] = useWheelScroll();
  const [keyPressed, resetKey] = useGlobalKeyPress();
  const [windowDimensions] = useWindowsDimensions();

  useEffect(() => {
    if (keyPressed.toLocaleUpperCase() === "M") {
      setMapState((mapState) => ({
        ...mapState,
        isShowingDebugMenu: !mapState.isShowingDebugMenu,
      }));
      resetKey();
    }
  }, [keyPressed, resetKey]);

  return (
    <>
      <div style={{ position: "absolute", top: 20, right: 20, zIndex: 4 }}>
        {mapState.isShowingDebugMenu && <DebugMenu setMapState={setMapState} />}
      </div>
      <Modal>
        <div>
          <h3>nachito</h3>
        </div>
      </Modal>
      <div
        className="App"
        style={{
          height: windowDimensions.height,
          width: windowDimensions.width,
          background: "black",
        }}
      >
        <Floormap
          windowDimensions={windowDimensions}
          scale={mapState.scale + wheelpos / 1000}
          isAnnotationOn={mapState.isAnnotationOn}
          isShowingEvents={mapState.isShowingEvents}
        />
      </div>
    </>
  );
}

export default App;
