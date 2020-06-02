import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastInfo from "./ForecastInfo";

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(response.data);
    setReady(true);
  }

  if (ready && props.city === forecast.city.name) {
    return (
      <div className="Forecast">
        <div className="row row-cols-6">
          <ForecastInfo data={forecast.list[0]} unit={props.unit} />
          <ForecastInfo data={forecast.list[1]} unit={props.unit} />
          <ForecastInfo data={forecast.list[2]} unit={props.unit} />
          <ForecastInfo data={forecast.list[3]} unit={props.unit} />
          <ForecastInfo data={forecast.list[4]} unit={props.unit} />
          <ForecastInfo data={forecast.list[5]} unit={props.unit} />
        </div>
      </div>
    );
  } else {
    let apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=5ce165099db98eb1a4172c9b8eea4597&units=metric`;
    axios.get(apiUrl).then(displayForecast);

    return null;
  }
}
