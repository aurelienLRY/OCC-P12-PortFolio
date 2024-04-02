import { render, screen } from "@testing-library/react";
import { DataContext } from "../../../../utils/context/dataContext";
import PrizeSkills from "./prizeSkills";


describe("PrizeSkills Component", () => {
  it("it renders and displays the skills correctly", () => {
    render(
      <DataContext.Provider value={{ skills: 
        {
          prize: [
            {
              date: "2021",
              name: "First Prize",
              description: "First prize description",
            },
            {
              date: "2022",
              name: "Second Prize",
              description: "Second prize description",
            },
          ],
        },
      }}>
        <PrizeSkills />
      </DataContext.Provider>
    );

    expect(screen.getByTestId("prizeSkills")).toBeInTheDocument();
    // Checking if the prizes are sorted and displayed correctly
    const prizes = screen.getAllByTestId("prizeSkills-item");
    expect(prizes).toHaveLength(2);
    expect(screen.getByText("First Prize")).toBeInTheDocument();
    expect(screen.getByText("Second Prize")).toBeInTheDocument();
    // You can add more assertions here to check for the correct sorting, etc.
  });
});
    