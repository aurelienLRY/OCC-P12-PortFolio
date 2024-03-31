import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../utils/context/dataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "antd";
import PropTypes from "prop-types"; 
import moduleStyle from "../../assets/sass/main.module.scss";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faSquareJs,
  faReact,
  faNodeJs,
  faPhp,
  faFigma,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import PhotoshopSvg from "./svg/photoshop";
import JestSvg from "./svg/jest";
import VscodeSvg from "./svg/vscode";

/**
 * Renders an icon based on the provided iconId.
 *
 * @param {Object} props - The component props.
 * @param {string} props.className - The class name for the icon.
 * @param {string} props.tooltip - The tooltip text for the icon.
 * @param {string} props.position - The position of the tooltip.
 * @param {string} props.iconId - The ID of the icon to be rendered.
 * @returns {JSX.Element} The rendered icon component.
 */
function IconDispatch({ className, tooltip, position, iconId }) {
  const [icon, setIcon] = useState({});
  const mapperIcon = useContext(DataContext).iconType;

  useEffect(() => {
    mapperIcon.map((mapped) => {
      if (mapped.id === iconId) {
        setIcon({
          id: mapped.id,
          type: mapped.type,
          value: mapped.value,
        });
      }
    });
  }, []);

  return (
    <Tooltip
      title={tooltip}
      placement={position}
      color={moduleStyle.toolTipBackground}
      data-testid="iconDispatch"
    >
      {icon.type === "fontawesome" && (
        <FontAwesomeIcon icon={iconMap[icon.value]} className={className} data-testid="awesomeSvg"/>
      )}

      {icon.type === "Custom" && icon.value === "photoshop" && (
        <PhotoshopSvg className={className}  />
      )}
      
      {icon.type === "Custom" && icon.value === "Jest" && (
        <JestSvg className={className}  />
      )}
      {icon.type === "Custom" && icon.value === "Vscode" && (
        <VscodeSvg className={className}  />
      )}
    </Tooltip>
  );
}

IconDispatch.prototype = {
  className: PropTypes.string,
  tooltip: PropTypes.string,
  position: PropTypes.string,
  iconId: PropTypes.string,
};

export default IconDispatch;

const iconMap = {
  faHtml5: faHtml5,
  faCss3Alt: faCss3Alt,
  faSass: faSass,
  faSquareJs: faSquareJs,
  faReact: faReact,
  faNodeJs: faNodeJs,
  faPhp: faPhp,
  faDatabase: faDatabase,
  faFigma: faFigma,
  faGithub: faGithub,
};



