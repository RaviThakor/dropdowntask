import React from "react";
import CDropdown from "../index";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("renders dropdown 1 correctly", () => {
  const { getByTestId } = render(<CDropdown label="Friday" />);
  expect(getByTestId("dropdown")).toHaveTextContent("Friday");
});

it("renders dropdown 2 correctly", () => {
  const { getByTestId } = render(<CDropdown label="Saturday" />);
  expect(getByTestId("dropdown")).toHaveTextContent("Saturday");
});
