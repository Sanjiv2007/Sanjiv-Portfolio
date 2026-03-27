import React from 'react';
import profileImg from '../assets/images/profile.png';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid reveal">
          <div className="about-image-side">
            <div className="image-card glass-card">
              <img src={profileImg} alt="Sanjiv Krishna" />
            </div>
          </div>
          
          <div className="about-text-side">
            <div className="section-title">
              <h2>About Me</h2>
              <div className="underline"></div>
            </div>
            <p className="lead-text">
              I am a <span className="highlight-text">Full Stack Developer</span> with a passion for 
              building seamless digital experiences.
            </p>
            <p className="description">
              With over 3 years of experience in the industry, I specialize in React, Node.js, and modern 
              web architectures. I believe in writing <span className="highlight-text">clean, maintainable code</span> 
              and staying up-to-date with the latest industry trends.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3>3+</h3>
                <p>Years exp.</p>
              </div>
              <div className="stat-item">
                <h3>15+</h3>
                <p>Projects</p>
              </div>
              <div className="stat-item">
                <h3>5+</h3>
                <p>Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
