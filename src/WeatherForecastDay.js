import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        return days[day];
    }

    return (
        <div>
          <strong className="day">{day()}</strong> <br />
          <WeatherIcon code={props.data.weather[0].icon} size={36} />
          <br />
          <strong className="temperature">{Math.round(props.data.temp.max)}°</strong>
          <span> </span>
          <strong className="temperature">{Math.round(props.data.temp.min)}°</strong>
        </div>
    )
}