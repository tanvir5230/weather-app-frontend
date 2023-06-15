import React from "react";
import { BiMap } from "react-icons/bi";
import { GiSpeedBoat } from "react-icons/gi";

export const WeatherSummary = () => {
  return (
    <div className="row" style={{ height: "40vh", border: "1px solid black" }}>
      <div className="col-6 border-1">
        <div className="d-flex justify-content-between">
          <PlaceName />
          <Time />
        </div>
        <div className="d-flex justify-content-center flex-column align-items-center">
          <p>
            <strong>14</strong>
            <sup>o</sup>
          </p>
          <p>mostly clear</p>
        </div>
        <div className="d-flex justify-content-between">
          {showMeasurement(GiSpeedBoat, 720, "hpa")}
          {showMeasurement(GiSpeedBoat, 720, "hpa")}
          {showMeasurement(GiSpeedBoat, 720, "hpa")}
        </div>
      </div>
    </div>
  );
};

const PlaceName = () => {
  return (
    <div className="d-flex justify-content-start align-items-center">
      <BiMap />
      <p>Cumilla</p>
    </div>
  );
};

const Time = () => {
  return (
    <div className="d-flex">
      <p>Today</p>
      <p>00:32 PM</p>
    </div>
  );
};

const showMeasurement = (Icon, value, unit) => {
  return (
    <div className="d-flex">
      <Icon /> <p>{value}</p> <p>{unit}</p>
    </div>
  );
};
