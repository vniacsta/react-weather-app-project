import React from "react";

import clear from "./media/clear.png";
import cloudy from "./media/cloudy.png";
import fog from "./media/fog.png";
import mostlycloudy from "./media/mostlycloudy.png";
import nt_clear from "./media/nt_clear.png";
import nt_mostlycloudy from "./media/nt_mostlycloudy.png";
import rain from "./media/rain.png";
import snow from "./media/snow.png";
import tstorms from "./media/tstorms.png";

export default function WeatherIcons(props) {
  const iconMapping = {
    "01d": clear,
    "01n": nt_clear,
    "02d": mostlycloudy,
    "02n": nt_mostlycloudy,
    "03d": cloudy,
    "03n": cloudy,
    "04d": cloudy,
    "04n": cloudy,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "11d": tstorms,
    "11n": tstorms,
    "13d": snow,
    "13n": snow,
    "50d": fog,
    "50n": fog,
  };

  return (
    <img src={iconMapping[props.icon]} alt={props.alt} height={props.height} />
  );
}
