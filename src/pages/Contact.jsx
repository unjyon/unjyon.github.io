import { useState } from "react";
import "./Contact.css";

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
    // 여기에 폼 제출 로직 추가
    console.log("Form submitted:", formData);
    // 폼 초기화
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <h2 className="page-title">Contact</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's Connect!</h3>
          <p>프로젝트 문의나 협업 제안을 기다립니다.</p>
          <div className="social-links">
            <a
              href="https://github.com/unjyon"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            />
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
