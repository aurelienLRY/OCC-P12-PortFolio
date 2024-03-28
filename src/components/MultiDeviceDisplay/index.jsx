import React from "react";
import "./multiDeviceDisplay.scss";

import Desktop from "./img/projectCard-layout_desktop.jsx";
import Tablet from "./img/projectCard-layout_tablet.jsx";
import Mobile from "./img/projectCard-layout_mobile.jsx";

function MultiDeviceDisplay({ images }) {
  return (
    <div className="multiDevice">
      <div className="multiDevice relative" data-testid="MultiDeviceDisplay">
        {images.desktop && (
          <div className="desktopDevice">
            <div className="desktopDevice relative">
              <Desktop className="desktopDevice-layout" />
              <img src={images.desktop} alt="" className="desktopDevice-img" />
            </div>
          </div>
        )}

        {images.tablet && (
          <div className="tabletDevice">
            <div className="tabletDevice relative">
              <Tablet className="tabletDevice-layout" />
              <img src={images.tablet} alt="" className="tabletDevice-img" />
            </div>
          </div>
        )}

        {images.mobile && (
          <div className="mobileDevice">
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
