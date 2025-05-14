import "./ExperienceItem.css";

const ExperienceItem = ({ id, role, company, period }) => {
  return (
    <div className="experience-item">
      <div className="experience-number">{String(id).padStart(2, "0")}</div>
      <div className="experience-content">
        <h3 className="experience-role">{role}</h3>
        <p className="experience-company">{company}</p>
        <p className="experience-period">{period}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
