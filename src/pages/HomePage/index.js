import React from "react";
import { Header } from "./Header/index.js";
import { WeatherSummary } from "./WeatherSummary/index.js";
import { WeatherDetails } from "./WeatherDetails/index.js";

export const HomePage = () => {
  return (
    <>
      <Header />
      <WeatherSummary />
      <WeatherDetails />
    </>
  );
};
