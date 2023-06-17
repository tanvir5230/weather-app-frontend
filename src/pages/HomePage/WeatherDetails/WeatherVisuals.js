import React from "react";
import "./style.css";
const WindVisual = ({ direction }) => {
  const getRotation = () => {
    switch (direction) {
      case "north":
        return "rotate(0deg)";
      case "north-east":
        return "rotate(45deg)";
      case "east":
        return "rotate(90deg)";
      case "south-east":
        return "rotate(135deg)";
      case "south":
        return "rotate(180deg)";
      case "south-west":
        return "rotate(225deg)";
      case "west":
        return "rotate(270deg)";
      case "north-west":
        return "rotate(315deg)";
      default:
        return "rotate(0deg)";
    }
  };

  return (
    <div className="compass">
      <p
        className="p-0 m-0"
        style={{
          position: "absolute",
          top: "35px",
          left: "44px",
          fontWeight: "bold",
          color: "gray",
        }}
      >
        o
      </p>
      <div
        className="compass-needle"
        style={{ transform: getRotation() }}
      ></div>
      <div className="compass-letter compass-north">N</div>
      <div className="compass-letter compass-east">E</div>
      <div className="compass-letter compass-south">S</div>
      <div className="compass-letter compass-west">W</div>
    </div>
  );
};

export { WindVisual };
