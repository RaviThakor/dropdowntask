import { render, screen } from "@testing-library/react";
import BarChart from "../index";

test("should contain one child", () => {
  render(<BarChart />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
