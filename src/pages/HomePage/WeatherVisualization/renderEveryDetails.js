import React from "react";

export const renderEveryDetails = (
  parameter = "wind",
  heading = "Today Wind Speed",
  unit = "m/s",
  { component: Component, attributes }
) => {
  const { value } = { ...attributes };
  return (
    <div className="col-12 col-lg-6 p-0 m-0">
      <div
        className="d-flex justify-content-between align-items-center bg-light border px-3 m-3"
        style={{ height: "150px", borderRadius: "10px" }}
      >
        <div>
          <h5>{parameter}</h5>
          <p>{heading}</p>
          <h5>
            {value}
            {unit}
          </h5>
        </div>
        <div style={{ width: "100px", height: "100px" }}>
          <Component {...attributes} />
        </div>
      </div>
    </div>
  );
};
