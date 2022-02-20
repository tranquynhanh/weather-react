import React, { useState } from "react";

export default function WeatherTemperature(props) {
    function convertToFar(e) {
        e.preventDefault()
        setUnit("fahrenheit")
    }

    function convertToCel(e) {
        e.preventDefault()
        setUnit("celsius")
    }

    const [unit, setUnit] = useState("celsius")
    if (unit === "celsius") {
        return (
            <div className="weather-temperature">
                <span className="current-temperature">
                  {props.celsius}
                </span>
                <span id="btn-group">
                  <span className="deg active">°C |
                    <a href="/" onClick={convertToFar} className="far"> °F</a>                  
                  </span>
                </span>
            </div>
        );
    } else {
        let fah = (props.celsius * 9 / 5) + 32
        return (
            <div className="weather-temperature">
                <span className="current-temperature">
                  {Math.round(fah)}
                </span>
                <span id="btn-group">
                  <span className="deg active">°F |
                    <a href="/" onClick={convertToCel} className="far"> °C</a>                  
                  </span>
                </span>
            </div>
        );
    }
}