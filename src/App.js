import React from "react";
import CommandInterface from "./components/CommandInterface";
import header from "./images/header.png";
import "./css/main.css";

const App = () => {
  //Prevents onBlur from disrupting links clicked or other interaction
  const onMouseDownHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div onMouseDownCapture={onMouseDownHandler}>
      {/* prettier-ignore */}
      <img className="header" src={header} alt="AMG"/>
      <p>enter 'help' for a list of available commands</p>
      <CommandInterface />
      {/* <Clock /> */}
    </div>
  );
};

export default App;
