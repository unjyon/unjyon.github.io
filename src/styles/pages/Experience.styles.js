import styled from "styled-components";

export const ExperiencePage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const PageTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #213547;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
