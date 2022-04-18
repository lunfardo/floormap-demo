import React from "react";
import logo from "./logo.svg";
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
