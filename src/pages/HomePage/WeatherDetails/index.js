import React from "react";
import { renderEveryDetails } from "./renderEveryDetails";
import {
  PressureVisual,
  RainVisual,
  UVVisual,
  WindVisual,
} from "./WeatherVisuals";

export const WeatherDetails = () => {
  return (
    <div className="row py-3" style={{ minHeight: "40vh" }}>
      {renderEveryDetails("wind", "Today Wind Speed", "", {
        component: WindVisual,
        attributes: { value: "north" },
      })}
      {renderEveryDetails("Rain Chance", "Chance of Rain", "%", {
        component: RainVisual,
        attributes: { value: 54 },
      })}
      {renderEveryDetails("Pressure", "Today's Pressure", " hpa", {
        component: PressureVisual,
        attributes: { value: 1300 },
      })}
      {renderEveryDetails("UV", "Today's UV Index", "", {
        component: UVVisual,
        attributes: { value: 2 },
      })}
    </div>
  );
};
