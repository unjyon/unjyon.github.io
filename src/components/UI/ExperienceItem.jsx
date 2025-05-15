import {
  ExperienceItemContainer,
  ExperienceNumber,
  ExperienceContent,
  ExperienceRole,
  ExperienceCompany,
  ExperiencePeriod,
} from "../../styles/components/UI/ExperienceItem.styles";

const ExperienceItem = ({ id, role, company, period }) => {
  return (
    <ExperienceItemContainer>
      <ExperienceNumber>{String(id).padStart(2, "0")}</ExperienceNumber>
      <ExperienceContent>
        <ExperienceRole>{role}</ExperienceRole>
        <ExperienceCompany>{company}</ExperienceCompany>
        <ExperiencePeriod>{period}</ExperiencePeriod>
      </ExperienceContent>
    </ExperienceItemContainer>
  );
};

export default ExperienceItem;
