
import { Tooltip } from "antd";
import moduleStyle from "./style.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./style.scss";
/**
 * Footer component.
 * Renders a footer with a LinkedIn icon.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <div className="footer_icon" data-testid="iconElement">
        <Tooltip
          title="Linkedin"
          placement="top"
          color={moduleStyle.toolTipBackground}
        >
          <FontAwesomeIcon icon={faLinkedin} data-testid="iconLinkedin" />
        </Tooltip>
      </div>
    </footer>
  );
}

export default Footer;
