import "./Skills.css";

const skillsData = {
  frontend: ["Html", "Css", "JavaScript", "TypeScript", "React", "Next.js"],
  design: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Indesign", "Figma"],
};

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="section-title">WHAT ABOUT MY SKILLS</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>FrontEnd</h3>
          <ul className="skills-list">
            {skillsData.frontend.map((skill, index) => (
              <li key={index} className="skill-item">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Design</h3>
          <ul className="skills-list">
            {skillsData.design.map((skill, index) => (
              <li key={index} className="skill-item">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
