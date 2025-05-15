import { useState } from "react";
import {
  ContactPage,
  PageTitle,
  ContactContent,
  ContactInfo,
  ContactInfoTitle,
  ContactInfoText,
  SocialLinks,
  SocialLink,
  ContactForm,
  FormGroup,
  Label,
  Input,
  Textarea,
  SubmitButton,
} from "../styles/pages/Contact.styles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <ContactPage>
      <PageTitle>Contact</PageTitle>
      <ContactContent>
        <ContactInfo>
          <ContactInfoTitle>Let's Connect!</ContactInfoTitle>
          <ContactInfoText>
            프로젝트 문의나 협업 제안을 기다립니다.
          </ContactInfoText>
          <SocialLinks>
            <SocialLink
              href="https://github.com/unjyon"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </SocialLink>
          </SocialLinks>
        </ContactInfo>
        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
          </FormGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactPage>
  );
};

export default Contact;
