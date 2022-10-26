import {
  BarChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import "../index.css";
import { createRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import getData from "../functions/getData";
import { saveAs } from "file-saver";
import exportChart from "../functions/exportChart";

function Chart() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData(setData);
  }, []);
  const chartRef = createRef();
  return (
    <div>
      <ResponsiveContainer width="100%" height={500} ref={chartRef}>
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="regular" stroke="#2451B7" fill="url(#color)" />
          <XAxis
            dataKey="razonsocial"
            tickCount={5}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            dataKey="regular"
            axisLine={false}
            tickLine={false}
            tickCount={8}
            tickFormatter={(number) => `$${number}`}
          />
        </BarChart>
      </ResponsiveContainer>
      <button
        type="button"
        onClick={() => {
          exportChart(chartRef);
        }}
      >
        Export
      </button>
    </div>
  );
}

export default Chart;
