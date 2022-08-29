import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ShopProductDetails from "../components/ShopProductDetails";
import App from "../App";

it("renders", () => {
    const {asFragment} = render(<App />)
    expect(asFragment()).toMatchSnapshot();
})

test('renders Home Link', () => {
  render(<ShopProductDetails />);
  const linkElement = screen.getByText(/Summary/i);
  expect(linkElement).toBeInTheDocument();
});

