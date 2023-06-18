import React from "react";
import LogoImg from "../../assets/logo.png";

export const Logo = () => {
  return (
    <div className="d-flex align-items-center" style={{ minHeight: "60px" }}>
      <img src={LogoImg} width={50} height={50} alt="Logo" />
      <h5 className="px-3">WeatherExtra</h5>
    </div>
  );
};
