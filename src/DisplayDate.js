import React from "react";

export default function DisplayDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = ("0" + props.date.getHours()).slice(-2);
  let minutes = ("0" + props.date.getMinutes()).slice(-2);

  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
