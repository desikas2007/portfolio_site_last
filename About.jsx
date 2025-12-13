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
            <h1>About Me</h1>
            <p>
              Full-stack developer passionate about building beautiful, high-performance web applications with modern technologies like React, Tailwind, and Node.js.
            </p>
          </div>

          {/* Team / Skills Grid */}
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
              <div className="avatar-circle">DS</div>
              <h3>Desika Sekar</h3>
              <p>UI/UX Designer</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: "85%" }}></div>
              </div>
              <span>UI/UX Design</span>
            </div>

            <div className="team-member">
              <div className="avatar-circle">DS</div>
              <h3>Desika Sekar</h3>
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
                Mastering modern tools with goals in AI and data science by 2028.
              </p>
              <div className="skills-tags">
                <span>HTML</span><span>CSS</span><span>React</span>
                <span>Node.js</span><span>Tailwind</span><span>JavaScript</span>
              </div>
            </div>

          
            <div className="info-box">
              <h3>Inspired By</h3>
              <p>Modern UI trends, Tailwind CSS, and React ecosystems.</p>
            </div>
             <div className="info-box">
              <h3>Inspired By</h3>
              <p>Modern UI trends, Tailwind CSS, and React ecosystems.</p>
            </div>

            <div className="info-box">
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