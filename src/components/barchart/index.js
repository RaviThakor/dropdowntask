import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import chartDataLabels from "chartjs-plugin-datalabels";
import "./styles.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  chartDataLabels,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    datalabels: {
      display: true,
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
      text: "Bar Chart",
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
        display: false,
      },
    },
  },
};

const BarChart = ({ data, containerStyle }) => {
  return (
    <div className="barChartContainer" style={containerStyle}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
