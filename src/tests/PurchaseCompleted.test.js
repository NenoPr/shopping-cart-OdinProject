import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PurchaseCompleted from "../components/PurchaseCompleted";
import App from "../App";

it("renders", () => {
    const {asFragment} = render(<App />)
    expect(asFragment()).toMatchSnapshot();
})

test('renders Home Link', () => {
  render(<PurchaseCompleted />);
  const linkElement = screen.getByText(/Purchase Completed!/i);
  expect(linkElement).toBeInTheDocument();
});

