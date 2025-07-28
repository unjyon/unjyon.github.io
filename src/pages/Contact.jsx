import { useCallback, useState } from "react";
import { sendEmail } from "../api/email";
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
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeName = useCallback((e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      name: value,
    }));
  }, []);

  const handleChangeEmail = useCallback((e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      email: value,
    }));
  }, []);

  const handleChangeMessage = useCallback((e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      message: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    },
    [formData]
  );

  const validateCheck = useCallback(() => {
    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name || !formData.email || !formData.message) {
      alert("모든 필드를 입력해주세요.");
      return false;
    } else if (!checkEmail.test(formData.email)) {
      alert("이메일 형식이 올바르지 않습니다.");
      return false;
    }
    return true;
  }, [formData]);

  const submitEmail = useCallback(async () => {
    console.log("submitEmail submitted:", formData);
    if (validateCheck()) {
      setIsLoading(true);
      try {
        console.log("sendEmail::", formData);
        await sendEmail(formData);
        alert("이메일이 성공적으로 전송되었습니다!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } catch (error) {
        console.error("이메일 전송 실패:", error);
        alert("이메일 전송에 실패했습니다. 다시 시도해주세요.");
      } finally {
        setIsLoading(false);
      }
    }
  }, [formData, validateCheck]);

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
              onChange={handleChangeName}
              required
              maxLength={10}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChangeEmail}
              maxLength={30}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChangeMessage}
              rows="5"
              required
            />
          </FormGroup>
          <SubmitButton
            type="submit"
            onClick={submitEmail}
            disabled={isLoading}
          >
            {isLoading ? "전송 중..." : "Send Message"}
          </SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactPage>
  );
};

export default Contact;
