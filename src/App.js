import React from "react";
import "./App.css";
import Toggle from "./Toggle/Toggle";
import Fetch from "./Fetch/Fetch";

function ErrorMessage({ error }) {
  return <div> {error} </div>;
}

function Ricky({ data }) {
  return <div> There is data available</div>;
}
function App() {
  const handleToggle = () => {
    console.log("Toggled");
  };
  return (
    // <div>
    //   <Toggle onToggle={handleToggle}>
    //     <Toggle.Button></Toggle.Button>
    //     <Toggle.On>The button is on</Toggle.On>
    //     <Toggle.Off>The button is off</Toggle.Off>

    //     <span>Wonderful</span>
    //   </Toggle>
    // </div>

    <Fetch
      loading={"Loading"}
      error={error => <ErrorMessage error={error} />}
      render={data => <Ricky data={data} />}
    />
  );
}

export default App;
