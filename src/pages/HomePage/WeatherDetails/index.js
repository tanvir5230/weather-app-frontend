import React from "react";
import { renderEveryDetails } from "./renderEveryDetails";
import { WindVisual } from "./WeatherVisuals";

export const WeatherDetails = () => {
  return (
    <div className="row py-3" style={{ minHeight: "40vh" }}>
      {renderEveryDetails()}
      {renderEveryDetails()}
      {renderEveryDetails()}
      {renderEveryDetails()}
      <WindVisual />
    </div>
  );
};
