import React from "react";
export const TimeTempWithIcon = ({
  showBgColor,
  time,
  icon: Icon,
  tempVal,
}) => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center py-2"
      style={{
        backgroundColor: `${showBgColor ? "#CAE1FC" : ""}`,
        borderRadius: "10px",
      }}
    >
      <span>{time}</span>
      <Icon className="py-1" />
      <span style={{ fontWeight: "bold" }}>
        {tempVal}
        <sup>o</sup>
      </span>
    </div>
  );
};
