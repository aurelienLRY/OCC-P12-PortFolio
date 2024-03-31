import { render, screen } from "@testing-library/react";
import { DataProvider } from "../context/dataContext";
import { MemoryRouter } from "react-router-dom";
import Routeur from "./index";

describe("Routeur component", () => {
  it('renders Home page when the path is "/"', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routeur />
      </MemoryRouter>
    );
    const homePageElement = screen.getByTestId("homepage");
    expect(homePageElement).toBeInTheDocument();
  });

  it('renders Profile page when the path is "/profile"', () => {
    render(
      <DataProvider>
        <MemoryRouter initialEntries={["/profile"]}>
          <Routeur />
        </MemoryRouter>
      </DataProvider>
    );
    const profilePageElement = screen.getByTestId("profile-page");
    expect(profilePageElement).toBeInTheDocument();
  });

  it('renders Project page when the path is "/projet"', () => {
    render(
      <DataProvider>
        <MemoryRouter initialEntries={["/projet"]}>
          <Routeur />
        </MemoryRouter>
      </DataProvider>
    );
    const projectPageElement = screen.getByTestId("projectPage");
    expect(projectPageElement).toBeInTheDocument();
  });

  it("renders NotFound page when the path is not found", () => {
    render(
      <DataProvider>
        <MemoryRouter initialEntries={["/unknown"]}>
          <Routeur />
        </MemoryRouter>
      </DataProvider>
    );
    const notFoundPageElement = screen.getByTestId("noFoundPage");
    expect(notFoundPageElement).toBeInTheDocument();
  });
});
