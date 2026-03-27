import React from 'react';
import './Projects.css';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';

const Projects = () => {
  const projects = [
    {
      title: "Enterprise SaaS",
      tag: "Web App",
      image: project1,
      desc: "Cloud-native enterprise management platform with advanced analytics."
    },
    {
      title: "Mobile Fintech",
      tag: "Mobile",
      image: project3,
      desc: "Next-gen banking application with crypto integration and secure pay."
    },
    {
      title: "Dev Productivity",
      tag: "Desktop",
      image: project2,
      desc: "Unified workspace tool for engineering teams to manage workflows."
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
                  <a href="#" className="btn-link">View Project →</a>
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
