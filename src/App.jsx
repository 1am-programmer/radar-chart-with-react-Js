import React from "react";
import { useRef } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler,
} from "chart.js";

import { Radar, getElementsAtEvent } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler
);

const App = () => {
  const data = {
    labels: [
      "Attack",
      "Defense",
      " Pace",
      "Agility",
      "Accelaration",
      "Passing",
    ],
    datasets: [
      {
        label: "Danny",
        data: [64, 60, 76, 60, 85, 50],
        // backgroundColor: "#c96",
        // borderColor: "#c96",
        link: [
          "https://google.com",
          "https://facebook.com",
          "https://livescore.com",
          "https://score808.com",
          "https://amazon.com",
          "https://instagram.com",
        ],
      },
    ],
  };

  const options = {
    scale: {
      ticks: {
        suggestedMin: 0,
        suggestedMax: 10,
      },
    },
  };
  const chartRef = useRef();
  const onclick = (e) => {
    console.log(getElementsAtEvent(chartRef.current, e));
    if (getElementsAtEvent(chartRef.current, e).length > 0) {
      console.log(getElementsAtEvent(chartRef.current, e));

      const datasetIndexnum = getElementsAtEvent(chartRef.current, e)[0]
        .datasetIndex;
      const dataPoint = getElementsAtEvent(chartRef.current, e)[0].index;
      console.log(dataPoint);
      console.log(data.datasets[datasetIndexnum].link[dataPoint]);
      window.open(data.datasets[datasetIndexnum].link[dataPoint], "_blank");
    }
  };

  return (
    <div className="h-[400px] w-[500px] p-10">
      <Radar onClick={onclick} ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default App;
