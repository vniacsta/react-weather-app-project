import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
    return (
      <h2 className="currentTemp">
        {props.temp}
        <span className="weatherUnit">ºC</span>
      </h2>
    );
  } else {
    return (
      <h2 className="currentTemp">
        {Math.round(props.temp * 1.8 + 32)}
        <span className="weatherUnit">ºF</span>
      </h2>
    );
  }
}
