import React from "react";
import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <Search defaultCity="Porto" />
        </div>
        <small>
          <a
            href="https://github.com/vniacsta/react-app-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          , by{" "}
          <a
            href="https://vniacsta.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vania Costa
          </a>
        </small>
      </div>
    </div>
  );
}
