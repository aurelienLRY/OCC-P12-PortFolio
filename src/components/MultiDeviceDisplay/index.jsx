import "./multiDeviceDisplay.scss";

import Desktop from "./img/projectCard-layout_desktop.jsx";
import Tablet from "./img/projectCard-layout_tablet.jsx";
import Mobile from "./img/projectCard-layout_mobile.jsx";
/**
 * Renders a multi-device display component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.images - The images for different devices.
 * @param {string|null} props.images.desktop - The image URL for desktop device.
 * @param {string|null} props.images.tablet - The image URL for tablet device.
 * @param {string|null} props.images.mobile - The image URL for mobile device.
 * @returns {JSX.Element} - The rendered component.
 */
function MultiDeviceDisplay({ images }) {
  return (
    <div className="multiDevice" data-testid="multiDevice" >
      <div className="multiDevice relative" data-testid="MultiDeviceDisplay">
        {images.desktop && (
          <div className="desktopDevice" data-testid="multiDevice-desktop">
            <div className="desktopDevice relative">
              <Desktop className="desktopDevice-layout" />
              <img src={images.desktop} alt="" className="desktopDevice-img" />
            </div>
          </div>
        )}

        {images.tablet && (
          <div className="tabletDevice" data-testid="multiDevice-tablet">
            <div className="tabletDevice relative">
              <Tablet className="tabletDevice-layout" />
              <img src={images.tablet} alt="" className="tabletDevice-img" />
            </div>
          </div>
        )}

        {images.mobile && (
          <div className="mobileDevice" data-testid="multiDevice-mobile">
            <div className="mobileDevice relative">
              <Mobile className="mobileDevice-layout" />
              <img src={images.mobile} alt="" className="mobileDevice-img" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
import PropTypes from "prop-types";

MultiDeviceDisplay.propTypes = {
  images: PropTypes.shape({
    desktop: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
    tablet: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
    mobile: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  }).isRequired,
};

export default MultiDeviceDisplay;
