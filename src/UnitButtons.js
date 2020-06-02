import React from "react";
import "./UnitButtons.css";

export default function UnitButtons() {
  return (
    <div className="UnitButtons">
      <button onClick={showCelsius} className="celsius-btn">
        ºC
      </button>
      <button onClick={showFahrenheit} className="fahrenheit-btn">
        ºF
      </button>
    </div>
  );
}
