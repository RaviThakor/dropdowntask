import BarChart from "./components/barchart";
import LineChart from "./components/linechart";
import SankeyChart from "./components/sankeychart";
import MapChart from "./components/mapchart";
import {
  barChartData,
  lineChartData,
  sankeyChartData,
  markersData,
  linesData,
} from "./utils/staticData";
import "./App.css";

function App() {
  return (
    <div className="MainContainer">
      <div className="ChartsContainer">
        <BarChart data={barChartData} />
        <LineChart data={lineChartData} />
        <SankeyChart style={{ marginTop: 50 }} data={sankeyChartData} />
        <MapChart
          title="Network Map"
          country="Nepal"
          // lines={linesData}
          // markers={markersData}
        />
      </div>
    </div>
  );
}

export default App;
