import * as React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

import { getTotalVotes } from "./data/datamanager";
import { pieData, barData } from "./data/graphManager";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const options = {
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const DataVizualizer = () => {
  return (
    <>
      <h1>Votos Totais</h1>
      <div>
        <Doughnut data={pieData(getTotalVotes())} />
      </div>
      <div style={{height:50}}>
        <Bar options={options} data={barData(getTotalVotes())} />
      </div>
    </>
  );
};

export default DataVizualizer;
