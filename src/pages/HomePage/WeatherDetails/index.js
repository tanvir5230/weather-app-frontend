import React from "react";
import { renderEveryDetails } from "./renderEveryDetails";
import { WindVisual } from "./WeatherVisuals";

export const WeatherDetails = () => {
  return (
    <div className="row py-3" style={{ minHeight: "40vh" }}>
      {renderEveryDetails("wind", "Today Wind Speed", "120 m/s", {
        component: WindVisual,
        attributes: { direction: "north" },
      })}
      {renderEveryDetails("wind", "Today Wind Speed", "120 m/s", {
        component: WindVisual,
        attributes: { direction: "north" },
      })}
      {renderEveryDetails("wind", "Today Wind Speed", "120 m/s", {
        component: WindVisual,
        attributes: { direction: "north" },
      })}
      {renderEveryDetails("wind", "Today Wind Speed", "120 m/s", {
        component: WindVisual,
        attributes: { direction: "north" },
      })}
    </div>
  );
};
