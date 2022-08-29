import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import NavBar from "../components/NavBar"

it("renders", () => {
    const {asFragment} = render(<App />)
    expect(asFragment()).toMatchSnapshot();
})

test('renders Home Link', () => {
  render(<NavBar />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

