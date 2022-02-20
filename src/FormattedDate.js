import React from "react";

export default function FormattedDate(props) {
    console.log(props.date)
    let minutes = props.date.getMinutes()
    let hour = props.date.getHours();
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    let day = weekday[props.date.getDay()]
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    return (
        <p className="time">{day} {hour}:{minutes}</p>
    )
}