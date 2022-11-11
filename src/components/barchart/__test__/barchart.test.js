import { render, screen } from "@testing-library/react";
import BarChart from "../index";
import { barChartData } from "../../../utils/staticData";

test("Bar chart should be rendered", () => {
  render(<BarChart data={barChartData} />);
  const barChart = screen.getByTestId(/barChart/i);
  expect(barChart).toBeInTheDocument();
});
