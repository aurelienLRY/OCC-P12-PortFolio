import React from "react";
import { Avatar } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./ProfileCard.scss";
import { Link } from "react-router-dom";
/**
 * Renders a profile card component.
 *
 * @component
 * @returns {JSX.Element} ProfileCard component
 */
function ProfileCard() {
  return (
    <div className="item profileCard" data-testid="ProfileCard">
      <div className="profileCard-avatar">
          <img
            src="./img/aurelien-leroy/leroy-aurelien_photographie-w300.jpeg"
            alt="leroy-aurelien_photographie" 
          />
      </div>
      <div className="profileCard-text">
        <h3> Leroy Aurélien </h3>
        <a href="mailto:leroyaurelien11@gmail.com">leroyaurelien11@gmail.com</a>
        <Link to="https://www.linkedin.com/in/aur%C3%A9lien-leroy-3a3b3a1b3/">
          <FontAwesomeIcon icon={faLinkedin} /> Linkedin
        </Link>
        <Link to="https://github.com/leroyaurelien">
          <FontAwesomeIcon icon={faGithub} /> Github
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;
