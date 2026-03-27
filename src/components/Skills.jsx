import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      type: "progress",
      skills: [
        { name: "Python (Advanced: Pandas, NumPy, XGBoost, CNN)", level: "95%" },
        { name: "Java", level: "85%" },
        { name: "C / C++", level: "80%" },
        { name: "SQL", level: "85%" },
        { name: "HTML / CSS", level: "90%" },
        { name: "JavaScript", level: "88%" },
        { name: "Go", level: "75%" }
      ]
    },
    {
      title: "ML / Data Science",
      icon: "🤖",
      type: "progress",
      skills: [
        { name: "Model Development (XGBoost, Time Series)", level: "90%" },
        { name: "Data Preprocessing", level: "92%" },
        { name: "Colab Experiments", level: "85%" },
        { name: "MongoDB", level: "80%" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      type: "tags",
      skills: ["Jupyter Notebook", "VS Code", "Google Colab", "Figma", "MIT App Inventor", "Zerodha API Integration", "Selenium", "UnitTest", "Embedded Systems/IoT", "Database Optimization"]
    },
    {
      title: "Soft Skills",
      icon: "🧠",
      type: "tags",
      skills: ["Problem Solving", "Critical Thinking", "Communication", "Teamwork", "Organizational"]
    },
    {
      title: "Language Skills",
      icon: "🌐",
      type: "progress",
      skills: [
        { name: "English (Fluent)", level: "100%" },
        { name: "Tamil (Fluent)", level: "100%" },
        { name: "French (Exam Level)", level: "70%" },
        { name: "Hindi (Learning)", level: "40%" },
        { name: "German (Learning)", level: "30%" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title reveal">
          <h2>Technical & Professional Skills</h2>
          <div className="underline"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card glass-card reveal">
              <div className="skill-header">
                <span className="skill-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {typeof skill === 'string' ? skill : skill.name}
                  </span>
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
