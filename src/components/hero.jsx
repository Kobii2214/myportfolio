import React from 'react';
import './Hero.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { TypeAnimation } from 'react-type-animation';

const profileImg = 'https://ui-avatars.com/api/?name=Kobe+Jamaal&background=000000&color=ffffff&size=280';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Hello, I'm{' '}
            <TypeAnimation
              sequence={[
                'Kobe Jamaal Elisan', 2000,
                '', 1000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="highlight"
            />
          </h1>
          <h2>Front-End Developer & UI/UX Designer</h2>
          <p>I craft beautiful and responsive websites using React and modern design principles.</p>
          <a href="#projects" className="hero-button">My Projects</a>

          <div className="social-icons">
            <a href="https://github.com/Kobii2214" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/kobe-elisan-15a446361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://web.facebook.com/kobe.elisan.96" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <img src={profileImg} alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
