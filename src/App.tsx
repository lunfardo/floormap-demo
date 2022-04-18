import React from "react";
import "./App.css";
import Floormap from "./components/pages/Floormap";

function App() {
  return (
    <div
      className="App"
      style={{ height: "600px", width: "600px", background: "black" }}
    >
      <Floormap />
    </div>
  );
}

export default App;
