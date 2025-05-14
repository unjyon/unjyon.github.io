import { experiences } from "../data/experience";
import ExperienceItem from "../components/UI/ExperienceItem";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience-page">
      <h2 className="page-title">Experience</h2>
      <div className="experience-list">
        {experiences.map((exp) => (
          <ExperienceItem
            key={exp.id}
            id={exp.id}
            role={exp.role}
            company={exp.company}
            period={exp.period}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
