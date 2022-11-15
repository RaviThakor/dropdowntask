import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";
import { getProjectionConfigData } from "../../utils/common";
import "./styles.css";

const MapChart = ({ markers, title, country, style, lines }) => {
  const geoUrl = `https://raw.githubusercontent.com/techslides/D3-Maps/master/data/world/country/${country}.topo.json`;

  return (
    <div data-testid="mapChart" className="mapChartContainer" style={style}>
      <h2 title="networkMapTitle">{title}</h2>
      <ComposableMap
        projectionConfig={getProjectionConfigData(country)}
        projection="geoAzimuthalEqualArea"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
          }
        </Geographies>
        {lines &&
          lines.map((item) => (
            <Line
              from={item.from}
              to={item.to}
              stroke="#FF5533"
              strokeWidth={2}
              strokeLinecap="round"
            />
          ))}
        {markers &&
          markers.map(({ name, coordinates, markerOffset }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={4} fill="#F00" stroke="#fff" strokeWidth={2} />
              <text
                textAnchor="middle"
                y={markerOffset}
                style={{
                  fontFamily: "system-ui",
                  fill: "#5D5A6D",
                  fontSize: 10,
                }}
              >
                {name}
              </text>
            </Marker>
          ))}
      </ComposableMap>
    </div>
  );
};

export default MapChart;
