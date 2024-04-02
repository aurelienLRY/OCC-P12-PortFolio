import React from "react";
import ProjectList from "../../container/projectList";
import "./style.scss";
function ProjectPage() {
  return (
    <main className="projectPage" data-testid="projectPage">
      <div className="projectPage_header">
        <div className="header_img"></div>
        <div className="header_text">
          <h2>Mes projets web </h2>
          <p>
            Chaque ligne de code, chaque fonctionnalité intégrée représente un
            défi relevé et une étape dans mon parcours de développement.
            Découvrez ici les premiers projets qui ont marqué mon aventure.
          </p>
        </div>
      </div>
      <ProjectList />
    </main>
  );
}

export default ProjectPage;
