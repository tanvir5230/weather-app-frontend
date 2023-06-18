import React from "react";
import { TimeTempWithIcon } from "./TimeTempWithIcon";
import { ReactComponent as Sunny } from "../../assets/icons/sunny.svg";
import { ReactComponent as Rainy } from "../../assets/icons/rain.svg";
import { ReactComponent as Cloudy } from "../../assets/icons/cloudy.svg";

export const WeatherForecastForToday = () => {
  return (
    <div className="py-3" style={{ height: "20vh" }}>
      <h6>Today</h6>
      <div className="row">
        <div className="col-3">
          <TimeTempWithIcon
            showBgColor={true}
            time={"now"}
            icon={Sunny}
            tempVal={24}
          />
        </div>
        <div className="col-3">
          <TimeTempWithIcon
            showBgColor={false}
            time={"1:00 PM"}
            icon={Cloudy}
            tempVal={14}
          />
        </div>
        <div className="col-3">
          <TimeTempWithIcon
            showBgColor={false}
            time={"3:00 PM"}
            icon={Rainy}
            tempVal={10}
          />
        </div>
        <div className="col-3">
          <TimeTempWithIcon
            showBgColor={false}
            time={"5:00 PM"}
            icon={Sunny}
            tempVal={25}
          />
        </div>
      </div>
    </div>
  );
};
