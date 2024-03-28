import { useContext } from "react";
import { DataContext } from "../../utils/context/dataContext";

import ProjectCard from "../../components/projectCard";


import "./style.scss";

function ProjectList() {
  const gitData = useContext(DataContext).gitData ;
  const sortedData = [...gitData].sort((a, b) =>(a.date) - (b.date));


  return (
    <section className="projectList">
      {
      sortedData.map((repo) => (
        <ProjectCard key={`repos-${repo.name}`} repo={repo} />
      ))}
    </section>
  );
}

export default ProjectList;
