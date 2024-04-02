import { render, screen } from "@testing-library/react";
import { DataProvider } from "../../utils/context/dataContext";
import ProjectCard from "./index";

describe("ProjectCard component", () => {
  const mockRepo = {
    name: "Sample Project",
    date: "2022-01-01",
    description: "This is a sample project",
    images: [],
    UrlDeployed: "https://example.com",
    UrlGithub: "https://github.com/example",
    objectif: "Sample objective",
    statut: "deployed",
    frontend: {
      React: "React",
    },
    backend: null,
    typeProject: "Sample Type",
  };

  it("renders project card correctly", () => {
    render(
      <DataProvider>
        <ProjectCard repo={mockRepo} />
      </DataProvider>
    );

    const titleElement = screen.getByText("Sample Project");
    const dateElement = screen.getByText(".2022-01-01");
    const descriptionElement = screen.getByText("This is a sample project");
    const objectiveElement = screen.getByText("Sample objective");
    const frontendIconElement = screen.getByTestId("awesomeSvg");
    const deployedLinkElement = screen.getByText("En ligne");
    const repositoryLinkElement = screen.getByText("Repository");

    expect(titleElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(objectiveElement).toBeInTheDocument();
    expect(frontendIconElement).toBeInTheDocument();
    expect(deployedLinkElement).toBeInTheDocument();
    expect(repositoryLinkElement).toBeInTheDocument();
  });

  it("renders beta link when status is 'in-progress'", () => {
    const mockRepoInProgress = { ...mockRepo, statut: "in-progress" };
    render(
      <DataProvider>
        <ProjectCard repo={mockRepoInProgress} />
      </DataProvider>
    );
    const betaLinkElement = screen.getByText("Beta");
    expect(betaLinkElement).toBeInTheDocument();
  });

  it("does not render beta link when status is not 'in-progress'", () => {
    const mockRepoDone = { ...mockRepo, statut: "done" };
    render(
      <DataProvider>
        <ProjectCard repo={mockRepoDone} />
      </DataProvider>
    );
    const betaLinkElement = screen.queryByText("Beta");
    expect(betaLinkElement).not.toBeInTheDocument();
  });
});
