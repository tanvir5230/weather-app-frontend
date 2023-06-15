import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

export const Notification = () => {
  return (
    <div className="col-1 d-flex justify-content-end">
      <button className="btn">
        <IoMdNotificationsOutline />
      </button>
    </div>
  );
};
