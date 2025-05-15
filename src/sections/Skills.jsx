import styled from "styled-components";

const SkillsSection = styled.section`
  padding: 2rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #213547;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled.div`
  background-color: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #213547;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SkillItem = styled.li`
  background-color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #213547;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const skillsData = {
  frontend: ["Html", "Css", "JavaScript", "TypeScript", "React", "Next.js"],
  design: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Indesign", "Figma"],
};

const Skills = () => {
  return (
    <SkillsSection>
      <SectionTitle>WHAT ABOUT MY SKILLS</SectionTitle>
      <SkillsContainer>
        <SkillCategory>
          <CategoryTitle>FrontEnd</CategoryTitle>
          <SkillsList>
            {skillsData.frontend.map((skill, index) => (
              <SkillItem key={index}>{skill}</SkillItem>
            ))}
          </SkillsList>
        </SkillCategory>
        <SkillCategory>
          <CategoryTitle>Design</CategoryTitle>
          <SkillsList>
            {skillsData.design.map((skill, index) => (
              <SkillItem key={index}>{skill}</SkillItem>
            ))}
          </SkillsList>
        </SkillCategory>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
