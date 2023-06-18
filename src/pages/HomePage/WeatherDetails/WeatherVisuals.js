import React from "react";
import UVImage from "../../../assets/icons/UV.png";
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

const RainVisual = ({ value }) => {
  return (
    <div className="circular-progress-bar">
      <svg className="progress-ring" width="100" height="100">
        <circle
          className="progress-ring-circle"
          strokeWidth="8"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
        />
        <circle
          className="progress-ring-indicator"
          strokeWidth="8"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
          style={{
            strokeDasharray: `${Math.PI * 100}px`,
            strokeDashoffset: `${((100 - value) / 100) * Math.PI * 100}px`,
          }}
        />
      </svg>
      <div className="progress-percentage">{value < 50 ? "Low" : "High"}</div>
    </div>
  );
};

const PressureVisual = ({ value }) => {
  let amountOfRotation;
  const leftRange = -84;
  const rightRange = 84;
  if (value < 1000) {
    let differenceFromLowest = value - 500;
    amountOfRotation = (leftRange * differenceFromLowest) / 500;
  } else if (value === 1000) {
    amountOfRotation = 0;
  } else {
    let differenceFromHighest = 1500 - value;
    amountOfRotation = (rightRange * differenceFromHighest) / 500;
  }
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        position: "relative",
      }}
    >
      <svg
        style={{
          marginTop: "10px",
          border: "4px dotted #CAE1FC",
          borderRadius: "50%",
          width: "100px",
          height: "100px",
        }}
      >
        <circle r="50" cx="50" cy="50" fill="transparent" />
      </svg>
      <div
        style={{
          width: "100px",
          height: "28px",
          position: "absolute",
          left: "0",
          bottom: "-10px",
          zIndex: 100,
          backgroundColor: "#f8f9fa",
        }}
      ></div>
      <div
        style={{
          width: "4px",
          height: "44px",
          position: "absolute",
          top: "40px",
          left: "48px",
          backgroundColor: "#4994ec",
          borderRadius: "100%",
          transformOrigin: "bottom center",
          transform: `rotate(${amountOfRotation}deg)`,
        }}
      />
    </div>
  );
};

const UVVisual = ({ value }) => {
  function getAngle() {
    let angle = -90;
    switch (value) {
      case 1:
        angle = -90;
        break;
      case 2:
        angle = -52;
        break;
      case 3:
        angle = -18;
        break;
      case 4:
        angle = 18;
        break;
      case 5:
        angle = 50;
        break;
      case 6:
        angle = 90;
        break;

      default:
        break;
    }
    return angle;
  }
  return (
    <div className="position-relative">
      <img
        className="position-absolute"
        style={{ top: 0, bottom: 0, left: 0, right: 0 }}
        width={100}
        height={85}
        src={UVImage}
        alt="UV icon"
      />
      <div
        class="arrow-up"
        style={{ transform: `rotate(${getAngle()}deg)` }}
      ></div>
    </div>
  );
};

export { WindVisual, RainVisual, PressureVisual, UVVisual };
