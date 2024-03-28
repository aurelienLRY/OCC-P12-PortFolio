import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../utils/context/dataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "antd";
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
    >
      {icon.type === "fontawesome" && (
        <FontAwesomeIcon icon={iconMap[icon.value]} className={className} />
      )}

      {icon.type === "Custom" && icon.value === "photoshop" && (
        <PhotoshopSvg className={className} />
      )}
      
      {icon.type === "Custom" && icon.value === "Jest" && (
        <JestSvg className={className} />
      )}
      {icon.type === "Custom" && icon.value === "Vscode" && (
        <VscodeSvg className={className} />
      )}
      
    
    </Tooltip>
  );
}

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
  // ajoutez d'autres icônes ici si nécessaire
};



