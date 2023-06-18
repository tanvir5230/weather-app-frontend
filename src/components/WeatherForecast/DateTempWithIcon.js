import React from "react";
import { ReactComponent as Sunny } from "../../assets/icons/sunny.svg";

export const DateTempWithIcon = () => {
  return (
    <div
      className="row py-3"
      style={{ overflowY: "auto", overflowX: "hidden" }}
    >
      <div className="col-4">
        <h6>Tomorrow</h6>
        <small>12 Apr</small>
      </div>
      <div className="col-4 d-flex align-items-center justify-content-center">
        <h5>16</h5>
      </div>
      <div className="col-4 d-flex align-items-center justify-content-center">
        <Sunny />
      </div>
    </div>
  );
};
