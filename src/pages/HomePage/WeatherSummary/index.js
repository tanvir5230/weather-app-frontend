import React from "react";
import { BiMap } from "react-icons/bi";
import { GiSpeedBoat } from "react-icons/gi";
import MyBackgroundImage from "../../../assets/backgrounds/clear-sky.jpg";
import { TemperatureOverview } from "./TemperatureOverview";

export const WeatherSummary = () => {
  return (
    <div
      className="row"
      style={{
        minHeight: "40vh",
        backgroundImage: `url(${MyBackgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "10px",
        position: "relative",
      }}
    >
      <div
        className="position-absolute w-100 h-100"
        style={{
          backgroundColor: "rgba(173, 216, 230, 0.4)", // White mask color with opacity
          borderRadius: "10px",
        }}
      ></div>
      <div className="col-12 col-md-6 text-black position-relative z-100 d-flex flex-column justify-content-between py-3">
        <div className="d-flex justify-content-between align-items-center">
          <PlaceName />
          <Time />
        </div>
        <div className="d-flex justify-content-center flex-column align-items-center p-0 m-0">
          <p style={{ fontSize: "60px" }} className="p-0 m-0">
            14
          </p>
          <p className="p-0 m-0">mostly clear</p>
        </div>
        <div className="d-flex justify-content-between">
          {showMeasurement(GiSpeedBoat, 720, "hpa")}
          {showMeasurement(GiSpeedBoat, 720, "hpa")}
          {showMeasurement(GiSpeedBoat, 720, "hpa")}
        </div>
      </div>
      <div className="col-12 col-md-6 text-black position-relative z-100 d-flex flex-column justify-content-between p-3">
        <div
          className="w-100 h-100 p-3 d-flex flex-column justify-content-between align-items-start"
          style={{
            backgroundColor: "rgba(255,255,255, 0.4)",
            borderRadius: "10px",
          }}
        >
          <TemperatureOverview />
        </div>
      </div>
    </div>
  );
};

const PlaceName = () => {
  return (
    <div className="d-flex justify-content-start align-items-center">
      <BiMap />
      <p className="m-0 p-0">Cumilla</p>
    </div>
  );
};

const Time = () => {
  return (
    <div className="d-flex justify-content-start align-items-center">
      <p className="m-0" style={{ paddingRight: "10px" }}>
        Today
      </p>
      <p className="p-0 m-0">00:32 PM</p>
    </div>
  );
};

const showMeasurement = (Icon, value, unit) => {
  return (
    <div className="d-flex justify-content-center align-items-center m-0">
      <Icon />
      <p className="p-0 m-0">{value}</p>
      <p className="p-0  m-0">{unit}</p>
    </div>
  );
};
