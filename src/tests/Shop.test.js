import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import Shop from "../components/Shop"

it("renders", () => {
    const {asFragment} = render(<App />)
    expect(asFragment()).toMatchSnapshot();
})

test('renders Home Link', () => {
  render(<Shop />);
  const linkElement = screen.getByText(/All Items/i);
  expect(linkElement).toBeInTheDocument();
});

