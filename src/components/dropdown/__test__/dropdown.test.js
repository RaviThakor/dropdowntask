import React from "react";
import CDropdown from "../index";

import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("renders dropdown 1 correctly", () => {
  const { getByTestId } = render(<CDropdown label="Friday" />);
  expect(getByTestId("dropdown-parent")).toHaveTextContent("Friday");
});

it("renders dropdown 2 correctly", () => {
  const { getByTestId } = render(<CDropdown label="Saturday" />);
  expect(getByTestId("dropdown-parent")).toHaveTextContent("Saturday");
});

it("renders if DropdownDiv class is found", () => {
  const { getByTestId } = render(<CDropdown />);
  expect(getByTestId("dropdown-parent")).toHaveClass("DropdownDiv");
});

it("renders if DropdownTitle class is found", () => {
  const { getByTestId } = render(<CDropdown />);
  expect(getByTestId("dropdown-label")).toHaveClass("DropdownTitle");
});

it("renders if Dropdown has length 4", () => {
  const { getAllByRole } = render(<CDropdown />);
  expect(getAllByRole("option").length).toBe(5);
});
