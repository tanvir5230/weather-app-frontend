import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    pv: 24,
  },
  {
    name: "Page B",
    pv: 20,
  },
  {
    name: "Page C",
    pv: 24,
  },
  {
    name: "Page D",
    pv: 20,
  },
];

const CurveGraph = () => {
  return (
    <ResponsiveContainer height={80}>
      <LineChart
        className="d-flex flex-columns align-items-center"
        height={150}
        data={data}
      >
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#53759B"
          strokeWidth={4}
          height={150}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CurveGraph;
