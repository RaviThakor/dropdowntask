import Sankey, { Tooltip, Node } from "devextreme-react/sankey";
import "./styles.css";

function SankeyChart({ data, style, chartStyle }) {
  return (
    <div
      className="sankeyChartContainer"
      data-testid="sankeyChart"
      style={style}
    >
      <Sankey
        id="sankey"
        dataSource={data}
        sourceField="source"
        targetField="target"
        weightField="weight"
        style={chartStyle}
        title="Sankey Chart"
        link={{
          colorMode: "source",
        }}
      >
        <Tooltip enabled={true}></Tooltip>
        <Node width={10} padding={30}></Node>
      </Sankey>
    </div>
  );
}

export default SankeyChart;
