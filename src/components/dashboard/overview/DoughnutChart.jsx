import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const data = {
  labels: [
    "Pending",
    "Processing",
    "Ready To Deliver",
    "Delivered",
    "Returned",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [202, 99, 263, 347, 30],
      backgroundColor: ["#a7a8af", "#faad40", "#2ecf88", "#0083ff", "#f0345d"],
      hoverOffset: 0,
    },
  ],
};
const options = {
  responsive: true,

  plugins: {
    legend: {
      position: "bottom",
      align: "start",
      ltr: true,
      fullSize: true,
      labels: {
        usePointStyle: true,
        boxWidth: 8,
      },
    },
  },
};
const DoughnutChart = () => {
  return (
    <>
      <h2 className="font-medium text-xl mb-3">Overview</h2>
      <Doughnut data={data} options={options} />
    </>
  );
};

export default DoughnutChart;
