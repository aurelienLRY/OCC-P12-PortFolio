import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./index";

describe("Home component", () => {
  it("renders the homepage content correctly", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const headingElement = screen.getByRole("heading", { level: 2 });
    const paragraphElement = screen.getByText(
      /Bienvenue dans mon univers où chaque clic vous invite à me découvrir./i
    );
    const linkElement = screen.getByRole("link", { name: /Mon profil/i });

    expect(headingElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});