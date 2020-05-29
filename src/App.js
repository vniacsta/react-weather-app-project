import React from "react";
import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <Search />
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
            href="https://www.linkedin.com/in/vaniarcosta/"
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
