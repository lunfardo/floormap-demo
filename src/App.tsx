import { useState } from "react";
import "./App.css";
import Floormap from "./components/pages/Floormap";
import useWheelScroll from "./hooks/useWheelScroll";

function App() {
  const [isAnnotationOn, setIsAnnotationOn] = useState(false);
  const [isShowingEvents, setIsShowingEvents] = useState(false);
  const [scale, setScale] = useState(1);
  const [wheelpos] = useWheelScroll();

  return (
    <>
      <button onClick={() => setIsAnnotationOn(!isAnnotationOn)}>
        Show room names
      </button>
      <button onClick={() => setIsShowingEvents(!isShowingEvents)}>
        Show events
      </button>
      <button onClick={() => setScale(scale + 0.1)}>Zoom in</button>
      <button onClick={() => setScale(scale - 0.1)}>Zoom out</button>
      <div
        className="App"
        style={{ height: "600px", width: "600px", background: "black" }}
      >
        <Floormap
          scale={scale + wheelpos / 1000}
          isAnnotationOn={isAnnotationOn}
          isShowingEvents={isShowingEvents}
        />
      </div>
    </>
  );
}

export default App;
