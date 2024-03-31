import { render, screen } from "@testing-library/react";
import { DataProvider } from "../../utils/context/dataContext";
import IconDispatch from "./index";

describe("IconDispatch component", () => {
  it("renders the fontawesome icon correctly", () => {
    render(
      <DataProvider>
        <IconDispatch
          iconId="React"
          tooltip="React"
          position="top"
          className="icon-class"
        />
      </DataProvider>
    );

    const iconElement = screen.getByTestId("awesomeSvg");
    expect(iconElement).toBeInTheDocument();
  });

  it("renders the custom icon correctly", () => {
    render(
      <DataProvider>
        <IconDispatch
          iconId="photoshop"
          tooltip="Photoshop"
          position="bottom"
          className="icon-class"
        />
      </DataProvider>
    );

    const iconElement = screen.getByTestId("customSvgPhotoshop");
    expect(iconElement).toBeInTheDocument();
  });
});
