import { useContext } from "react";
import { DataContext } from "../../../../utils/context/dataContext";
import IconDispatch from "../../../IconDispatch";
import PropTypes from "prop-types";
import "./technicalSkills.scss";

/**
 * Renders the technical skills component.
 * @returns {JSX.Element} The rendered technical skills component.
 */
function TechnicalSkills() {
  const { technical } = useContext(DataContext).skills;
  return (
    <div className="item" data-testid="technicalSkills">
      {technical.map((comp, index) => (
        <div key={`comp${index}`} className={`${comp.name} item_row`}>
          {comp.name} :
          {comp.descriptif.map((desc) => {
            let tooltips = "";
            if (desc.date) {
              const date = calculateExperience(desc.date);
              tooltips =
                date.years > 0
                  ? `: ${date.years} ans et ${date.months} mois de pratiques`
                  : `: ${date.months} mois de pratiques`;
            } 
            return (
              <IconDispatch
                key={`icon${desc.name}`}
                className="icon"
                tooltip={`${desc.name}${tooltips}`}
                position="top"
                iconId={desc.icon}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default TechnicalSkills;

/**
 * Prop types for the TechnicalSkills component.
 * @type {object}
 * @property {object} iconMap - The icon map object.
 */
TechnicalSkills.propTypes = {
  iconMap: PropTypes.object,
};

/**
 * Calculates the experience in years and months.
 * @param {string} dateString - The date string.
 * @returns {object} The years and months.
 */
function calculateExperience(dateString) {
  const startDate = new Date(dateString);
  const endDate = new Date();

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (months < 0 || (months === 0 && endDate.getDate() < startDate.getDate())) {
    years--;
    months += 12;
  }

  return { years, months };
}
