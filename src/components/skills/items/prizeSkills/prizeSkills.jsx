import "./prizeSkills.scss";
import { DataContext } from "../../../../utils/context/dataContext";
import { useContext } from "react";
/**
 * Renders the PrizeSkills component.
 * This component displays a list of prizes/skills.
 *
 * @returns {JSX.Element} The rendered PrizeSkills component.
 */
function PrizeSkills() {
  const { prize } = useContext(DataContext).skills;
  const sortPrize = prize.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="item bg-gradient " data-testid="prizeSkills">
      {sortPrize.map((comp, index) => (
        <div key={`comp${index}`} className="prizeSkills" data-testid="prizeSkills-item">
          <div className="prizeSkills_date">{comp.date}.</div>
          <div>
            <h3 className="prizeSkills_title">{comp.name}</h3>
            {comp.description && (
              <p className="prizeSkills_content">{comp.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PrizeSkills;
