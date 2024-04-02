import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ProfileCard from "./ProfileCard";

describe("ProfileCard component", () => {
  it("renders the profile card correctly", () => {
    render(
      <Router>
        <ProfileCard />
      </Router>
    );

    const profileCardElement = screen.getByTestId("ProfileCard");
    expect(profileCardElement).toBeInTheDocument();
  });

});
