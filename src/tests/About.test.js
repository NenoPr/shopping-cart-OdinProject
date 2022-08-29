import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../components/About";
import App from "../App";

it("renders", () => {
    const {asFragment} = render(<App />)
    expect(asFragment()).toMatchSnapshot();
})

test('renders Home Link', () => {
  render(<About />);
  const linkElement = screen.getByText(/About Content/i);
  expect(linkElement).toBeInTheDocument();
});

