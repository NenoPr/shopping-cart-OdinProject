import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Checkout from "../components/Checkout";
import App from "../App";

it("renders", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});


test("renders Home Link", () => {
  render(<Checkout />);
  const linkElement = screen.getByText(/Complete Purchase/i);
  expect(linkElement).toBeInTheDocument();
});

