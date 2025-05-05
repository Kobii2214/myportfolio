import React from 'react';
import './contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  return (
    <footer className="contact-section">
      <h2>You like what you see? Let’s work together!</h2>
      <p>Feel free to reach out through email or connect with me on social media.</p>
      <a href="kobejamaalelisan@gmail.com" className="email-link">
      kobejamaalelisan@gmail.com
      </a>
      <div className="social-icons1">
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
    </footer>
  );
};

export default Contact;
