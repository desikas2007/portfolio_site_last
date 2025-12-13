// src/About.jsx
import React, { useEffect, useState } from "react";
import "../styles/About.css";

export default function About() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 400);
  }, []);

  return (
    <div className="about-section">
      <div className="about-container">
        <div className={`about-card ${loaded ? "show" : ""}`}>

          {/* Header */}
          <div className="about-header">
            <h1>About Page</h1>
            <p>
              Desika Sekar, Full-stack developer this youre tuleifond poyer tailwind project for falifoy and eaclerly cura a molives thiel Reas, for a React and Tailwind project.
            </p>
          </div>

          {/* Team Members */}
          <div className="team-grid">
            <div className="team-member">
              <div className="avatar-circle">DS</div>
              <h3>Desika Sekar</h3>
              <p>Full-Stack Developer</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: "90%" }}></div>
              </div>
              <span>Full-Stack Development</span>
            </div>

            <div className="team-member">
              <div className="avatar-circle">SJ</div>
              <h3>Sarah Johnson</h3>
              <p>UI/UX Designer</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: "85%" }}></div>
              </div>
              <span>UI/UX Design</span>
            </div>

            <div className="team-member">
              <div className="avatar-circle">MC</div>
              <h3>Michael Chen</h3>
              <p>Frontend Specialist</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: "80%" }}></div>
              </div>
              <span>Frontend Development</span>
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="bottom-grid">
            <div className="info-box">
              <h3>About Me</h3>
              <p>
                Seasoned Full-stack Developer eager to craft beautiful, high-performance web and mobile applications.
                Currently mastering modern tools and aiming to break into the IT industry by 2028, with long-term goals in AI and data science.
              </p>
              <div className="skills-tags">
                <span>HTML</span><span>CSS</span><span>React</span>
                <span>Node.js</span><span>Tailwind</span><span>JavaScript</span>
              </div>
            </div>

            <div className="info-box">
              <h3>Skills</h3>
              <p>Dynamic development using modern tools for creating scalable and elegant solutions.</p>
              <div className="tech-icons">
                <div className="icon">HTML</div>
                <div className="icon">CSS</div>
                <div className="icon">React</div>
                <div className="icon">Node</div>
                <div className="icon">Tailwind</div>
                <div className="icon">JS</div>
              </div>
            </div>

            <div className="info-box striel">
              <h3>Striel By</h3>
              <p>This is pusfimes and fichimes sums to the one developers bussel aent tailwind yeact.</p>
            </div>

            <div className="info-box projects">
              <h3>Projects Completed</h3>
              <div className="project-tags">
                <span>HTML</span><span>JavaScript</span><span>React</span><span>Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}