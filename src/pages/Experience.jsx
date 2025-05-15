import { experiences } from "../data/experience";
import ExperienceItem from "../components/UI/ExperienceItem";
import {
  ExperiencePage,
  PageTitle,
  ExperienceList,
} from "../styles/pages/Experience.styles";

const Experience = () => {
  return (
    <ExperiencePage>
      <PageTitle>Experience</PageTitle>
      <ExperienceList>
        {experiences.map((exp) => (
          <ExperienceItem
            key={exp.id}
            id={exp.id}
            role={exp.role}
            company={exp.company}
            period={exp.period}
          />
        ))}
      </ExperienceList>
    </ExperiencePage>
  );
};

export default Experience;
