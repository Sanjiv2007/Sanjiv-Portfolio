import React from 'react';
import profileImg from '../assets/images/profile.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-image-container reveal">
          <div className="image-frame">
            <img src={profileImg} alt="Sanjiv Krishna" />
            <div className="decorative-element blob"></div>
            <div className="decorative-element dot-grid"></div>
          </div>
        </div>

        <div className="hero-content reveal">
          <div className="badge">Available for Work</div>
          <h1 className="hero-title">
            Full Stack <br />
            Developer <span className="highlight">Portfolio.</span>
          </h1>
          <p className="hero-subtitle">
            I'm <strong>Sanjiv Krishna</strong>, building modern web applications 
            that solve real-world problems with elegant code.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn primary-btn">View My Work</a>
            <a href="/resume.pdf" className="btn secondary-btn" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>

          <div className="hero-socials reveal">
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className="social-icon" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.2-18 11.6 7.2.7 14.2-4.5 14.2-11.7 0-.9-.1-1.7-.4-2.5 1.7-1.5 4-4.4 3.9-6.9 0 0-2.3 2-4.4 2.8C13.5 1.1 8 5.4 8 10.5c0 .9.1 1.7.4 2.5-7.1-.4-13.6-3.8-13.6-3.8 0 0-2 4.1.8 8.5L.2 18s4.3 1.5 8.1-1.1c.4 0 1.2 0 1.9-.1"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
