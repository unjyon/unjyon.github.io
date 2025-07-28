import styled from "styled-components";
export const Section = styled.section`
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
