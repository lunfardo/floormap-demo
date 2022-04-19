import React, { useState } from "react";
import "./App.css";
import Floormap from "./components/pages/Floormap";

function App() {
  const [isAnnotationOn, setIsAnnotationOn] = useState(false);
  const [isShowingEvents, setIsShowingEvents] = useState(false);

  return (
    <>
      <button onClick={() => setIsAnnotationOn(!isAnnotationOn)}>
        Show room names
      </button>
      <button onClick={() => setIsShowingEvents(!isShowingEvents)}>
        Show events
      </button>
      <div
        className="App"
        style={{ height: "600px", width: "600px", background: "black" }}
      >
        <Floormap
          isAnnotationOn={isAnnotationOn}
          isShowingEvents={isShowingEvents}
        />
      </div>
    </>
  );
}

export default App;
