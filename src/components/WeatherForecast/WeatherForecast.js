import React from "react";
import { WeatherForecastForToday } from "./WeatherForecastForToday";
import { WeatherForecastForUpcoming } from "./WeatherForecastForUpcoming";

export const WeatherForecast = () => {
  return (
    <div>
      <WeatherForecastForToday />
      <WeatherForecastForUpcoming />
    </div>
  );
};
