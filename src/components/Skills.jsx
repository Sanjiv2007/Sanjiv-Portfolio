import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind"],
      icon: "🎨"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Go", "PostgreSQL"],
      icon: "⚙️"
    },
    {
      title: "Tools",
      skills: ["Git", "Docker", "AWS", "Figma"],
      icon: "🛠️"
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title reveal">
          <h2>My Skills</h2>
          <div className="underline"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card glass-card reveal">
              <div className="skill-header">
                <span className="skill-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <span className="skill-name">{skill}</span>
                    <div className="progress-bar">
                      <div className="progress" style={{width: '85%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
