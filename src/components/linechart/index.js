import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./styles.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    datalabels: {
      display: false,
      color: "black",
      align: "end",
      anchor: "end",
      font: { size: "14" },
    },
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: true,
      align: "start",
      font: { size: "18" },
      padding: 30,
      text: "Line Chart",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        borderDash: [8, 8],
        borderDashColor: "#555555",
        borderDashWidth: 5,
      },
    },
  },
};

const LineChart = ({ data, style }) => {
  return (
    <div className="lineChartContainer" style={style}>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
