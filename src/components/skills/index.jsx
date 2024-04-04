
import { useState, useContext } from "react";
import { DataContext } from "../../utils/context/dataContext";

import TechnicalSkills from "./items/technicalSkills/technicalSkills";
import ProfileCard from "./items/ProfileCard/ProfileCard";
import Experiences from "./items/Experiences/Experiences";
import PrizeSkills from "./items/prizeSkills/prizeSkills";

import "./skills.scss";
/**
 * Renders the Skills component.
 * 
 * @returns {JSX.Element} The Skills component.
 */
function Skills() {
  const [skillsOpened, setSkillsOpened] = useState(0);
  const { header } = useContext(DataContext).skills;

  return (
    <div className="skills" data-testid="skills">
<div className="skills_header">
  {header.map((skill, index) => (
    index % 2 === 0 ? (
      <div className="skills_header_divider" key={`divider${index}`}>
        <button
          key={`skills-header${index}`}
          onClick={() => setSkillsOpened(index)}
          className={skillsOpened === index ? "active" : ""}
        >
          {skill.name}
        </button>
        {header[index + 1] && (
          <button
            key={`skills-header${index + 1}`}
            onClick={() => setSkillsOpened(index + 1)}
            className={skillsOpened === index + 1 ? "active" : ""}
          >
            {header[index + 1].name}
          </button>
        )}
      </div>
    ) : null
  ))}
</div>

      <div
        className={
          skillsOpened === 2
            ? "skills_body-experience skills_body"
            : "skills_body"
        }
      >
        {skillsOpened === 0 && <ProfileCard />}
        {skillsOpened === 1 && <TechnicalSkills />}
        {skillsOpened === 2 && <Experiences />}
        {skillsOpened === 3 && <PrizeSkills />}
      </div>
    </div>
  );
}

export default Skills;
