import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [state] = React.useState({
    series: [22, 18, 16, 17, 14, 22, 10, 21],

    options: {
      chart: {
        type: "polarArea",
      },
      labels: [
        "Entertainment",
        "Fuel",
        "Fast food",
        "Cafe",
        "Сonnection",
        "Healthcare",
        "Fitness",
        "Supermarket",
      ],
      colors: [
        "#794dc7",
        "#ff7c5f",
        "#3abb90",
        "#ffbe3a",
        "#3a8db3",
        "#3ac8e2",
        "#54d283",
        "#c78f3a",
      ],
      stroke: {
        colors: ["#fff"],
      },
      fill: {
        opacity: 0.9,
      },
      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 400,
            },
          },
        },
      ],
    },
  });
  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="polarArea"
        />
      </div>
    </div>
  );
};

export default ApexChart;
