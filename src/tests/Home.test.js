import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../components/Home";
import App from "../App";

it("renders", () => {
    const {asFragment} = render(<App />)
    expect(asFragment()).toMatchSnapshot();
})

test('renders Home Link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Welcome to Genshin Shop!/i);
  expect(linkElement).toBeInTheDocument();
});

