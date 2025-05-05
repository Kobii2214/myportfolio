import React from 'react';
import './about.css';
import logo from '../assets/schoollogo.png';
import FadeInWhenVisible from './FadeInWhenVisible';

const About = () => {
  return (
    <div className="about-me">
      <FadeInWhenVisible delay={0}>
        <p className="about-text">Get to know More</p>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.1}>
        <h2>About Me</h2>
      </FadeInWhenVisible>

      <div className="about-container">
        <div className="about-box">
          <FadeInWhenVisible delay={0.2}>
            <div className="education">
              <h3>Education</h3>
              <img src={logo} alt="University Logo" className="education-logo" />
              <p>Western Mindanao State University</p>
              <p>Bachelor of Science in Computer Science</p>
              <p>2019 - Present</p>
            </div>
          </FadeInWhenVisible>
        </div>

        <div className="about-box">
          <FadeInWhenVisible delay={0.3}>
            <div>
              <h3>Skills</h3>

              <div className="skill-category">
                <h4>Languages</h4>
                <p>JavaScript, Python, C++, HTML, CSS</p>
              </div>

              <div className="skill-category">
                <h4>Frameworks & Libraries</h4>
                <p>React, Tailwind CSS</p>
              </div>

              <div className="skill-category">
                <h4>Tools & Platforms</h4>
                <p>VS Code, Git & GitHub, Figma, JSON Server</p>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>

      <div className="about-description-wrapper">
      <h3>Me</h3>
  <p className="about-description">
    I'm a passionate front-end developer with experience in React, JavaScript, HTML, and CSS. I love building modern, interactive websites that are both functional and visually appealing. With a strong focus on user experience and clean code, I’m always looking for opportunities to learn and grow in the ever-evolving field of web development. I enjoy creating seamless, responsive websites that provide users with an intuitive experience, and I’m excited about exploring new technologies and design trends to enhance my work.
  </p>
</div>

    </div>
  );
};

export default About;
