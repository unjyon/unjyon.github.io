import styled from "styled-components";

export const ContactPage = styled.div`
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
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactInfo = styled.div`
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  height: fit-content;
`;

export const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #213547;
`;

export const ContactInfoText = styled.p`
  margin-bottom: 2rem;
  color: #213547;
  line-height: 1.6;
`;

export const SocialLinks = styled.div`
  margin-top: 2rem;
`;

export const SocialLink = styled.a`
  display: inline-block;
  color: #646cff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #535bf2;
  }
`;

export const ContactForm = styled.form`
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #213547;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #646cff;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #646cff;
  }
`;

export const SubmitButton = styled.button`
  background-color: #646cff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #535bf2;
  }
`;
