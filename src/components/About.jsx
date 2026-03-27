import React from 'react';
import profileImg from '../assets/images/profile.png';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid reveal">
          <div className="about-text-side">
            <div className="section-title">
              <h2>About Me</h2>
              <div className="underline"></div>
            </div>
            <p className="lead-text">
              I am a <span className="highlight-text">Machine Learning Engineer & Data Scientist</span> with a passion for
              building intelligent digital experiences.
            </p>
            <p className="description">
              I specialize in <span className="highlight-text">Model Development, Data Science, and advanced Python programming</span>.
              With expertise in XGBoost, Time Series, and Deep Learning (CNN), I bridge the gap between complex
              data insights and scalable software solutions. I believe in writing <span className="highlight-text">efficient, data-driven code</span>
              and continuously exploring the frontiers of AI.
            </p>
            <div className="achievements">
              <h3>Achievements & Certifications</h3>
              <ul>
                <li>🏆 <strong>1st Prize</strong> – IANC Hackathon (₹75,000 cash prize)</li>
                <li>🚀 <strong>Advanced to Round 2</strong> – Startup Flight Vietnam (International Startup Innovation)</li>
                <li>🎓 <strong>Intermediate Machine Learning</strong> – Kaggle Certification</li>
              </ul>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <h3>1+</h3>
                <p>Year exp.</p>
              </div>
              <div className="stat-item">
                <h3>2+</h3>
                <p>Projects</p>
              </div>
              <div className="stat-item">
                <h3>1+</h3>
                <p>Awards</p>
              </div>
            </div>
          </div>

          <div className="about-image-side">
            <div className="image-card glass-card">
              <img src="/SUU00511.JPG.jpeg" alt="Sanjiv Krishna" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
