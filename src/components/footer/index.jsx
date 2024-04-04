import { Tooltip } from "antd";
import moduleStyle from "./style.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./style.scss";
import { NavLink } from "react-router-dom";
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
          <a
            href="https://www.linkedin.com/in/aur%C3%A9lien-leroy-8304a9284/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Lien vers le profil Linkedin d'Aurélien Leroy"
          >
            <FontAwesomeIcon icon={faLinkedin} data-testid="iconLinkedin" />
          </a>
        </Tooltip>
      </div>
    </footer>
  );
}

export default Footer;
