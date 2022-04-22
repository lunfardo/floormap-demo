import { useState } from "react";
import "./App.css";
import DebugMenu from "./components/organisms/DebugMenu";
import Floormap from "./components/pages/Floormap";
import useWheelScroll from "./hooks/useWheelScroll";

function App() {
  const [mapState, setMapState] = useState<MapState>({
    isAnnotationOn: false,
    isShowingEvents: false,
    scale: 1,
  });
  const [wheelpos] = useWheelScroll();

  return (
    <>
      <div style={{ position: "absolute", top: 20, right: 20, zIndex: 4 }}>
        <DebugMenu setMapState={setMapState} />
      </div>
      <div
        className="App"
        style={{
          height: window.innerHeight,
          width: window.innerWidth,
          background: "black",
        }}
      >
        <Floormap
          scale={mapState.scale + wheelpos / 1000}
          isAnnotationOn={mapState.isAnnotationOn}
          isShowingEvents={mapState.isShowingEvents}
        />
      </div>
    </>
  );
}

export default App;
