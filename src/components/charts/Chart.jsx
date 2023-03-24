import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import "./chart.css";

export default function Chart({title,data,grid,dataKey}) {
  
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd " />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
          <Tooltip />
          <Legend />
          {/* <YAxis dataKey="amt" stroke= "green"/> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
