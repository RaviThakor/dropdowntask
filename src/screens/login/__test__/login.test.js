import Login from "../index";
import React from "react";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";

jest.mock("axios", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1, name: "John" },
    }),
  },
}));

describe("Login component", () => {
  it("Username field should be rendered", () => {
    render(<Login />);
    const userInputEl = screen.getByPlaceholderText("Username");
    expect(userInputEl).toBeInTheDocument();
  });

  it("Password field should be rendered", () => {
    render(<Login />);
    const userInputEl = screen.getByPlaceholderText("Password");
    expect(userInputEl).toBeInTheDocument();
  });

  it("login button should be rendered", () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
  });

  it("Username field should be empty", () => {
    render(<Login />);
    const userInputEl = screen.getByPlaceholderText("Username");
    expect(userInputEl.value).toBe("");
  });

  it("Password field should be empty", () => {
    render(<Login />);
    const userInputEl = screen.getByPlaceholderText("Password");
    expect(userInputEl.value).toBe("");
  });

  it("login button should be disabled", () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeDisabled();
  });

  it("login button should be enabled when username and password is filled", () => {
    render(<Login />);
    const userName = screen.getByPlaceholderText("Username");
    const password = screen.getByPlaceholderText("Password");
    const buttonEl = screen.getByRole("button");

    fireEvent.change(userName, { target: { value: "John" } });
    fireEvent.change(password, { target: { value: "test123" } });

    expect(buttonEl).not.toBeDisabled();
  });

  it("login button should be disabled and in loading state when it is clicked", () => {
    render(<Login />);
    const userName = screen.getByPlaceholderText("Username");
    const password = screen.getByPlaceholderText("Password");
    const buttonEl = screen.getByRole("button");

    fireEvent.change(userName, { target: { value: "John" } });
    fireEvent.change(password, { target: { value: "test123" } });

    fireEvent.click(buttonEl);

    expect(buttonEl).toBeDisabled();
    expect(buttonEl.value).toBe("Loading...");
  });

  it("login button should not be disabled and in loading state when it is clicked", async () => {
    render(<Login />);
    const userName = screen.getByPlaceholderText("Username");
    const password = screen.getByPlaceholderText("Password");
    const buttonEl = screen.getByRole("button");

    fireEvent.change(userName, { target: { value: "John" } });
    fireEvent.change(password, { target: { value: "test123" } });

    fireEvent.click(buttonEl);

    await waitFor(() => {
      expect(buttonEl).not.toBeDisabled();
      expect(buttonEl.value).toBe("Login");
    });
  });
});
