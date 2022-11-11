import { render, screen } from "@testing-library/react";
import MapChart from "../index";
import { markersData } from "../../../utils/staticData";

test("Map chart should be rendered", () => {
  render(<MapChart markers={markersData} />);
  const mapChart = screen.getByTestId(/mapChart/i);
  const titleElement = screen.getByTitle("networkMapTitle");

  expect(mapChart).toBeInTheDocument();
  expect(mapChart.children.length).toBe(2);
  expect(titleElement).toBeInTheDocument();
});
