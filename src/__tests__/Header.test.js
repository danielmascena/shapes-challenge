import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../views/layout/Header";

afterEach(cleanup);

test("Header opens the dialog after click", () => {
  const { getByDisplayValue, getByRole } = render(<Header />);
  fireEvent.click(getByDisplayValue("About"));
  expect(getByRole("dialog")).toHaveAttribute("open");
});
