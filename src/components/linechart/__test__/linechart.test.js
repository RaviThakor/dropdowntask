import { render, screen } from "@testing-library/react";
import LineChart from "../index";
import { lineChartData } from "../../../utils/staticData";

test("Line chart should be rendered", () => {
  render(<LineChart data={lineChartData} />);
  const lineChart = screen.getByTestId(/lineChart/i);
  expect(lineChart).toBeInTheDocument();
});
