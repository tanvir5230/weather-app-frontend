import React from "react";

export const TemperatureInDiffTime = () => {
  return (
    <div className="row d-flex justify-content-between w-100 m-0">
      <div className="col-3">
        <h6 style={{ textAlign: "center" }}>Morning</h6>
        <h6 style={{ textAlign: "center" }}>
          <span>15</span>
          <sup>o</sup>
        </h6>
      </div>
      <div className="col-3">
        <h6 style={{ textAlign: "center" }}>Noon</h6>
        <h6 style={{ textAlign: "center" }}>
          <span>15</span>
          <sup>o</sup>
        </h6>
      </div>
      <div className="col-3">
        <h6 style={{ textAlign: "center" }}>Evening</h6>
        <h6 style={{ textAlign: "center" }}>
          <span>15</span>
          <sup>o</sup>
        </h6>
      </div>
      <div className="col-3">
        <h6 style={{ textAlign: "center" }}>Night</h6>
        <h6 style={{ textAlign: "center" }}>
          <span>15</span>
          <sup>o</sup>
        </h6>
      </div>
    </div>
  );
};
