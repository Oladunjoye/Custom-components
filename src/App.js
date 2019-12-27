import React from "react";
import "./App.css";
import Toggle from "./Toggle/Toggle";

function App() {
  const handleToggle = () => {
    console.log("Toggled");
  };
  return (
    <div>
      <Toggle onToggle={handleToggle}>
        <Toggle.Button></Toggle.Button>
        <Toggle.On>The button is on</Toggle.On>
        <Toggle.Off>The button is off</Toggle.Off>

        <span>Wonderful</span>
      </Toggle>
    </div>
  );
}

export default App;
