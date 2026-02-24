import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-image-container">
            <div className="hero-image">
              <img src="/profile.jpeg" alt="Nirjala Deshar" />
            </div>
          </div>
          
          <h1 className="hero-title">Hi, I'm <span className="highlight">Nirjala Deshar</span></h1>
          <p className="hero-subtitle">Computer Engineering Student</p>
          <p className="hero-description">
            Front-End Developer | UI/UX Designer | Quality Assurance Specialist
          </p>

          <div className="hero-introduction">
            <p>
              Hello, I am Nirjala Deshar, a final-year Computer Engineering student with a strong academic foundation and a growing specialization in user-centered design. I am passionate about creating intuitive, efficient, and visually engaging digital experiences that align with user needs and system functionality.
            </p>
            <p>
              Recently, I completed a Nepal Tourism Recommender System project, where I was responsible for the UI/UX design and interface structure. This experience strengthened my skills in wireframing, prototyping, and usability-focused design.
            </p>
            <p>
              My core interests include UI/UX design and Quality Assurance, and I am currently expanding my knowledge in software testing, usability evaluation, and quality improvement practices. I am skilled in using design tools such as Figma and have experience working with modern web technologies.
            </p>
            <p>
              I am seeking an opportunity to begin my professional career where I can apply my design and quality-focused skills while continuously learning and contributing to meaningful software solutions.
            </p>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <h3>9+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>3</h3>
              <p>Certifications</p>
            </div>
            <div className="stat-item">
              <h3>10+</h3>
              <p>Skills Mastered</p>
            </div>
          </div>

          <div className="hero-skills">
            <h3>Core Competencies</h3>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">UI/UX Design</span>
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Quality Assurance</span>
              <span className="skill-tag">Adobe Photoshop</span>
            </div>
          </div>

          <div className="hero-btns">
            <button onClick={() => handleNavigation('/projects')} className="btn">View My Work</button>
            <a href="/cv.pdf" className="btn-outline" target="_blank" rel="noopener noreferrer">Download Resume</a>
            <button onClick={() => handleNavigation('/contact')} className="btn-secondary">Get In Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
