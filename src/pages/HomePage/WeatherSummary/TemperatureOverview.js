import React from "react";
import CurveGraph from "./CurveGraph";
import { TemperatureInDiffTime } from "./TemperatureInDiffTime";

export const TemperatureOverview = () => {
  return (
    <>
      <h3 className="pb-5">Temperature</h3>
      <CurveGraph />
      <TemperatureInDiffTime />
    </>
  );
};

// const
