import React from "react";
import ReactDOM from "react-dom";

import * as smoothscroll from "smoothscroll-polyfill";

import "./styles.css";

import DemoContainer from "./components/demo-container";

smoothscroll.polyfill();
function App() {
  return (
    <div className="App">
      <h1>React Auto-Scroll</h1>
      <p>Basic demo making use of window.scrollTo with the "smooth" behavior</p>
      <DemoContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
