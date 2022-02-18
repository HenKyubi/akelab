import React, { useState } from "react";
import ReactDOM from "react-dom";
import useDarkMode from "use-dark-mode"; // Don't forget to import the NPM package use-dark-mode

// import "./styles.scss";

const ToggleDarkMode = () => {
  const { value, toggle } = useDarkMode(false);

  return (
    <div>
      <label className="switch">
        <input type="checkbox" onChange={toggle} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleDarkMode;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
