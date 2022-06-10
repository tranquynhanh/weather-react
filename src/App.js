import React from "react";
import Weather from './Weather';
import HeaderTitle from "./HeaderTitle";

export default function App() {
  return (
    <div className="container__body">
      <HeaderTitle />
      <Weather />
    </div>
  )
}
