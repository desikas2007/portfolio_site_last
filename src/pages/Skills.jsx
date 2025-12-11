import React from 'react';
import '../styles/Projects.css'; // Reuse styles from Projects.css (tech-grid)

export default function Skills() {
  const techStack = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  ];

  return (
    <div className="skills-section-content">
      <h1 className="projects-title sketch-title">MY SKILLS</h1> {/* Reuse title style */}
      <div className="tech-grid">
        {techStack.map((tech, index) => (
          <div className="tech-card" key={index}>
            <img src={tech.icon} alt={tech.name} className="tech-icon" />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}