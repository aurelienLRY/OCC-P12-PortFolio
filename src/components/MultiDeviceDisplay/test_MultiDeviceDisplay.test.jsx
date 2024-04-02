import { render, screen } from "@testing-library/react";
import MultiDeviceDisplay from "./index";

describe("MultiDeviceDisplay component", () => {
  const images = {
    desktop: "desktop-image-url",
    tablet: "tablet-image-url",
    mobile: "mobile-image-url",
  };

  it("renders the component with all devices", () => {
    render(<MultiDeviceDisplay images={images} />);

    const desktopDevice = screen.getByTestId("multiDevice-desktop");
    const tabletDevice = screen.getByTestId("multiDevice-tablet");
    const mobileDevice = screen.getByTestId("multiDevice-mobile");

    expect(desktopDevice).toBeInTheDocument();
    expect(tabletDevice).toBeInTheDocument();
    expect(mobileDevice).toBeInTheDocument();
  });

  it("renders the component without desktop device", () => {
    const imagesWithoutDesktop = {
      tablet: "tablet-image-url",
      mobile: "mobile-image-url",
    };

    render(<MultiDeviceDisplay images={imagesWithoutDesktop} />);

    const desktopDevice = screen.queryByTestId("multiDevice-desktop");
    const tabletDevice = screen.getByTestId("multiDevice-tablet");
    const mobileDevice = screen.getByTestId("multiDevice-mobile");

    expect(desktopDevice).not.toBeInTheDocument();
    expect(tabletDevice).toBeInTheDocument();
    expect(mobileDevice).toBeInTheDocument();
  });



});