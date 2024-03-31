import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./index";

describe("Footer component", () => {
  it("renders the footer component correctly", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const footerElement = screen.getByTestId("footer");
    const iconElement = screen.getByTestId("iconElement");

    expect(footerElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });
});