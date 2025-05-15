import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const HeroSection = styled.section`
  margin-bottom: 2rem;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #213547;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const HeroText = styled.p`
  font-size: 1.2rem;
  color: #213547;
  line-height: 1.6;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
