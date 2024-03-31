import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./index";

describe("Header component", () => {
  it("renders the header component correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();
  });

  it('renders the "Accueil" link correctly', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const accueilLink = screen.getByTestId("Accueil");
    expect(accueilLink).toBeInTheDocument();
  });

  it('renders the "Mon profil" link correctly', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const profilLink = screen.getByTestId("MonProfil");
    expect(profilLink).toBeInTheDocument();
  });

  it('renders the "Mes projets" link correctly', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const projetsLink = screen.getByTestId("MesProjets");
    expect(projetsLink).toBeInTheDocument();
  });
});