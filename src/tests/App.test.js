import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

it("renders", () => {
    const {asFragment} = render(<App />)
    expect(asFragment()).toMatchSnapshot();
})

test('renders Footer Content', () => {
  render(<App />);
  const linkElement = screen.getByText(/Footer Content/i);
  expect(linkElement).toBeInTheDocument();
});
