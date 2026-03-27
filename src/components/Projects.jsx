import React from 'react';
import './Projects.css';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';

const Projects = () => {
  const projects = [
    {
      title: "Interactive Emergency Management System",
      tag: "HTML, CSS, JavaScript",
      image: project1,
      desc: "Browser-based emergency simulation (60 FPS) with pure JS incidents, hybrid dispatch, map UI, and voice controls. Zero-dependency web app featuring offline storage and escalation mechanics.",
      link: "https://github.com/ambalavanan01/crisis-response-command-center"
    },
    {
      title: "Leakage Prediction in HVAC Systems",
      tag: "Machine Learning, Python",
      image: project2,
      desc: "Comprehensive ML solution using ensemble methods (RandomForest, VotingClassifier, GradientBoosting) to detect and quantify leaks across diverse HVAC configurations.",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title reveal">
          <h2>Recent Projects</h2>
          <div className="underline"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-card reveal">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <span className="project-tag">{project.tag}</span>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-footer">
                  <a href={project.link} className="btn-link" target="_blank" rel="noopener noreferrer">View Project →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
