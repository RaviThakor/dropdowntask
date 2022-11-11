import BarChart from "./components/barchart";
import LineChart from "./components/linechart";
import SankeyChart from "./components/sankeychart";
import MapChart from "./components/mapchart";
import {
  barChartData,
  lineChartData,
  sankeyChartData,
  markersData,
} from "./utils/staticData";
import "./App.css";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json";

function App() {
  return (
    <div className="MainContainer">
      <div className="ChartsContainer">
        <BarChart data={barChartData} />
        <LineChart data={lineChartData} />
        <SankeyChart style={{ marginTop: 50 }} data={sankeyChartData} />
        <MapChart geoUrl={geoUrl} markers={markersData} />
      </div>
    </div>
  );
}

export default App;
