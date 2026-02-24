import React from 'react';
import './About.css';

function About() {
  return (
    <div className="page about">
      <div className="container">
        <h1>About Me</h1>
        <div className="about-content">
          <p>
            I'm a passionate Computer Engineering student interested in Front-End Development, 
            Graphic Design, and UI/UX Design. I love building digital experiences that are both 
            beautiful and easy to use. I aim to grow in collaborative environments that challenge 
            creativity and technical skills. My core interests include UI/UX design and Quality Assurance, and I am currently expanding my knowledge in software testing, usability evaluation, and quality improvement practices.
          </p>
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Front-End</h3>
              <ul className="skills-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>UI/UX Design</h3>
              <ul className="skills-list">
                <li>Figma</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Graphic Design</h3>
              <ul className="skills-list">
                <li>Adobe Photoshop</li>
                <li>Canva</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Quality Assurance</h3>
              <ul className="skills-list">
                <li>Manual Testing</li>
                <li>Test Case Design</li>
                <li>Bug Reporting</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Others</h3>
              <ul className="skills-list">
                <li>Python</li>
                <li>Git</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>
          <h2>Education & Certifications</h2>
          <div className="education-section">
            <h3>Education</h3>
            <ul className="timeline">
              <li><strong>Bachelor in Computer Engineering</strong> – Cosmos College of Management & Technology (Pokhara University)</li>
              <li><strong>+2 Science</strong> – Pinnacle Academy H.S. School/College</li>
              <li><strong>SEE</strong> – Jyotidaya Cooperative Secondary School</li>
            </ul>
            <h3>Certifications</h3>
            <ul className="certifications">
              <li>Graphic Design — Alison (2022)</li>
              <li>Graphic Design — Embark College (2025)</li>
              <li>UI/UX Design — Alison (2025)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
