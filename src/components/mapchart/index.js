import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";
import "./styles.css";

const MapChart = ({ markers, geoUrl, style }) => {
  return (
    <div className="mapChartContainer" style={style}>
      <h2>Network Map</h2>
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-80, -20, 0],
          scale: 1000,
        }}
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
        <Line
          from={[72.8777, 19.076]}
          to={[73.7125, 24.5854]}
          stroke="#FF5533"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <Line
          from={[72.8777, 19.076]}
          to={[69.8597, 23.7337]}
          stroke="#FF5533"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <Line
          from={[72.8777, 19.076]}
          to={[76.695, 11.4102]}
          stroke="#FF5533"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <Line
          from={[72.8777, 19.076]}
          to={[68.9674, 22.2376]}
          stroke="#FF5533"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <Line
          from={[75.8577, 22.7196]}
          to={[73.7125, 24.5854]}
          stroke="#FF5533"
          strokeWidth={2}
          strokeLinecap="round"
        />
        {markers.map(({ name, coordinates, markerOffset }) => (
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
