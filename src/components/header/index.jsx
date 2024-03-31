/**
 * Header component.
 * Renders the header section of the website.
 */
import { useState  } from "react";
import { NavLink } from "react-router-dom";
import { Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import moduleStyle from "../../assets/sass/main.module.scss";

import "./style.scss";

/**
 * Header component.
 * Renders the header section of the website.
 * @returns {JSX.Element} The rendered header component.
 */
function Header() {
  const [opened, setOpened] = useState(false);

  return (
    <header data-testid="header" className="header">
      <h2>
        <NavLink to="/">
          Leroy <span>Aurélien</span>
        </NavLink>
      </h2>
      <nav className="navbar" data-testid="navbar">
        <div id="nav_trigger">
          <button
            aria-label="Main Menu"
            onClick={() => setOpened(!opened)}
            className={opened ? "opened" : ""}
          >
            <svg viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
        </div>
        <div className={opened ? "opened nav_links" : "nav_links"}>
          <NavLink to="/">
            {opened ? (
              "Accueil"
            ) : (
              <Tooltip
                title="Accueil"
                placement="left"
                color={moduleStyle.toolTipBackground}
              >
                <FontAwesomeIcon icon={faHouse}  data-testid="Accueil"/>
              </Tooltip>
            )}
          </NavLink>

          <NavLink to="/profile">
            {opened ? (
              "Mon profil"
            ) : (
              <Tooltip
                title="Mon profil"
                placement="left"
                color={moduleStyle.toolTipBackground}
              >
                <FontAwesomeIcon icon={faUser} data-testid="MonProfil" />
              </Tooltip>
            )}
          </NavLink>

          <NavLink to="/projet">
            {opened ? (
              "Mes projets"
            ) : (
              <Tooltip
                title="Mes projets"
                placement="left"
                color={moduleStyle.toolTipBackground}
              >
                <FontAwesomeIcon icon={faGithub} data-testid="MesProjets"/>
              </Tooltip>
            )}
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
