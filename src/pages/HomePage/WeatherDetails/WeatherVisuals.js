import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const WindVisual = (value) => {
  const data = [
    {
      uv: value,
      pv: 2400,
      fill: "#8884d8",
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        cx={"50%"}
        cy={"50%"}
        innerRadius={"10%"}
        outerRadius={"80%"}
        barSize={10}
        data={data}
      >
        <RadialBar
          dataKey={"uv"}
          label={{ position: "inside", fill: "#ffe" }}
          background
          clockWise
          minAngle={15}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export { WindVisual };
