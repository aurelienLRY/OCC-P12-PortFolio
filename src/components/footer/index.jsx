
import { Tooltip } from "antd";
import moduleStyle from "./style.module.scss";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./style.scss";


function Footer() {
  return (
    <footer className="footer" data-testid="footer">

      <Tooltip title="Linkedin" placement="top" color={moduleStyle. toolTipBackground}>
      <FontAwesomeIcon icon={faLinkedin} />
      </Tooltip>

    </footer>
  );
}

export default Footer;
