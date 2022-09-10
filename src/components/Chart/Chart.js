import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = props => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); //dataPoints의 value가 dataPointValues에 배열로 들어가게 된다.
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
