import { useContext } from "react";
import { DataContext } from "../../utils/context/dataContext";
import ProjectCard from "../../components/projectCard";
import "./style.scss";

/**
 * Renders a list of projects using data from the DataContext.
 * @returns {JSX.Element} The rendered project list component.
 */
function ProjectList() {
  const gitData = useContext(DataContext).gitData ;
  const sortedData = [...gitData].sort((a, b) =>(a.date) - (b.date));


  return (
    <section className="projectList" data-testid="projectList">
      {
      sortedData.map((repo) => (
        <ProjectCard key={`repos-${repo.name}`} repo={repo} />
      ))}
    </section>
  );
}

export default ProjectList;
