
import PropTypes from "prop-types";
import MultiDeviceDisplay from "../MultiDeviceDisplay";
import IconDispatch from "../IconDispatch";
import { Tooltip } from "antd";
import moduleStyle from "../../assets/sass/main.module.scss";
import "./style.scss";
/**
 * Renders a project card component.
 *
 * @component
 * @param {Object} repo - The project repository object.
 * @param {string} repo.name - The name of the project.
 * @param {string} repo.date - The date of the project.
 * @param {string} repo.description - The description of the project.
 * @param {Array} repo.images - The images of the project.
 * @param {string} repo.UrlDeployed - The URL of the deployed project.
 * @param {string} repo.UrlGithub - The URL of the project's GitHub repository.
 * @param {string} repo.objectif - The objective of the project.
 * @param {string} repo.statut - The status of the project.
 * @param {Object} repo.frontend - The frontend technologies used in the project.
 * @param {Object} repo.backend - The backend technologies used in the project.
 * @param {string} repo.typeProject - The type of the project.
 * @returns {JSX.Element} The project card component.
 */
function ProjectCard(repo) {
  const {
    name,
    date,
    description,
    images,
    UrlDeployed,
    UrlGithub,
    objectif,
    statut,
    frontend,
    backend,
    typeProject,
  } = repo.repo;

  return (
    <article className="project-card">
      <div className="project-card_type">{typeProject}</div>
      <div className="project-card_header">
        <h3 className="project-card_title">
          {name}
          <span> .{date}</span>
        </h3>
      </div>

      <div className="project-card_body">
        <div className="project-card_content">
          <p>{description}</p>
          <div>
            <strong>Objectif: </strong>
            <p>{objectif}</p>
          </div>
          <div className="project-card_techno">
            <strong>Technologies: </strong>
            {frontend &&
              Object.entries(frontend).map(([key, value]) => {
                return (
                  <IconDispatch
                    key={`frontend-${key}`}
                    tooltip={key}
                    position="top"
                    className="icon"
                    iconId={value}
                  />
                );
              })}
            {backend &&
              Object.entries(backend).map(([key, value]) => {
                return (
                  <IconDispatch
                    key={`backend-${key}`}
                    tooltip={key}
                    position="top"
                    className="icon"
                    iconId={value}
                  />
                );
              })}
          </div>
        </div>

        <div className="project-card_aside">
          <div className="img-card">
            <MultiDeviceDisplay images={images} />
          </div>

          {statut === "deployed" && (
            <Tooltip
              title="Ouvrir"
              placement="top"
              color={moduleStyle.toolTipBackground}
            >
              <span className="project-card_statut deployed">
                <a href={UrlDeployed} target="_blank" rel="noopener noreferrer">
                  En ligne
                </a>
              </span>
            </Tooltip>
          )}
          {statut === "done" && (
            <Tooltip
              title="Le projet est terminé sans mise en production"
              placement="top"
              color={moduleStyle.toolTipBackground}
            >
              <span className="project-card_statut done">Terminé</span>
            </Tooltip>
          )}
          {statut === "in-progress" && (
            <Tooltip
              title="Le projet est en cours de développement"
              placement="top"
              color={moduleStyle.toolTipBackground}
            >
              <span className="project-card_statut progress">En cours</span>
            </Tooltip>
          )}
        </div>
      </div>

      <div className="project-card_footer">

        {UrlGithub && (
          <Tooltip
            title="Voir le code"
            placement="top"
            color={moduleStyle.toolTipBackground}
          >
            <a href={UrlGithub} target="_blank" rel="noopener noreferrer">
              Repository
            </a>
          </Tooltip>
        )}

        {statut === "in-progress" && UrlDeployed && (
          <Tooltip
            title="Découvrir la beta"
            placement="top"
            color={moduleStyle.toolTipBackground}
          >
            <a href={UrlDeployed} target="_blank" rel="noopener noreferrer">
              Beta
            </a>
          </Tooltip>
        )}
      </div>
    </article>
  );
}
ProjectCard.prototype = {
  repo: PropTypes.object.isRequired,
};

export default ProjectCard;
