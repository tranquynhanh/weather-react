import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature"

export default function WeatherInfo(props) {
    console.log(props.data.wind)
    return (
        <div className="weather-body">
            <div className="weather__details">
              {/* <p className="time">{props.data.day}</p> */}
              < FormattedDate date={props.data.date}/>
              {/* <p className="date">{props.data.date}</p> */}
              <p className="wind">Wind {props.data.wind}km/h</p>
              <p className="humid">
                <i className="fas fa-tint"></i>
                {props.data.humid}%
              </p>
            </div>
            <div className="weather-today">
                <WeatherIcon code= {props.data.icon} size={52} alt= {props.data.description}/>
                <p>{props.data.description}</p>
            </div>
            <WeatherTemperature celsius={props.data.temperature} />
            <div className="weather-temperature">
              {/* <span className="current-temperature">
                {props.data.temperature}
              </span>
              <span id="btn-group">
                <button className="deg active">°C</button>
                {/* <button className="far">°F</button> /}
              </span> */}
            </div>
        </div>
    )
}