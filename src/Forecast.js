import React from "react";
import "./Forecast.css";
import ForecastInfo from "./ForecastInfo";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="row row-cols-6">
        <ForecastInfo info={props.info.list[0]} unit={props.unit} />
        <ForecastInfo info={props.info.list[1]} unit={props.unit} />
        <ForecastInfo info={props.info.list[2]} unit={props.unit} />
        <ForecastInfo info={props.info.list[3]} unit={props.unit} />
        <ForecastInfo info={props.info.list[4]} unit={props.unit} />
        <ForecastInfo info={props.info.list[5]} unit={props.unit} />
      </div>
    </div>
  );
}
