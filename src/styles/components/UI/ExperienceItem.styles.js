import styled from "styled-components";

export const ExperienceItemContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  margin-bottom: 2rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ExperienceNumber = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #646cff;
  min-width: 2.5rem;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

export const ExperienceContent = styled.div`
  flex: 1;
`;

export const ExperienceRole = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #213547;
`;

export const ExperienceCompany = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #213547;
`;

export const ExperiencePeriod = styled.p`
  font-size: 0.9rem;
  color: #213547;
  opacity: 0.8;
`;
