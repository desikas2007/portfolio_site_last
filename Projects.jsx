import React, { useState } from "react";
import "../styles/Projects.css"; // Make sure this path matches your folder

// Certificate Images (keep your local imports)
import cert1 from "../assets/certificates1.jpeg";
import cert2 from "../assets/certificates2.jpeg";
import cert3 from "../assets/certificates3.jpeg";

export default function Projects() {
  const [openFolder, setOpenFolder] = useState(null); // "web", "mobile", "certificates" or null

  const webProjects = [
    {
      title: "Food Stall",
      desc: "A cute and modern food ordering app with smooth animations and clean UI.",
      demo: "https://desikas2007.github.io/Food-Stall/",
      repo: "https://github.com/desikas2007/Food-Stall",
      img: "https://img.freepik.com/free-psd/food-menu-restaurant-web-banner-template_120329-4909.jpg?w=740",
    },
    {
      title: "My Portfolio",
      desc: "Personal portfolio with glassmorphism and neon glow effects.",
      demo: "https://desikas2007.github.io/PORTFOLIO/",
      repo: "https://github.com/desikas2007/PORTFOLIO",
      img: "https://image.slidesdocs.com/responsive-images/slides/0-blue-simple-personal-portfolio-powerpoint-background_d30f33114b__960_540.jpg",
    },
    {
      title: "E-commerce Website",
      desc: "Online shopping platform with cart, filtering & responsive design.",
      demo: "https://desikas2007.github.io/pothys-mart/",
      repo: "https://github.com/desikas2007/pothys-mart",
      img: "https://img.freepik.com/free-photo/black-friday-sales-sign-neon-light_23-2151833076.jpg?w=740",
    },
  ];

  const mobileProjects = [
    { title: "Sakura Notes", desc: "Anime-themed note app with stickers & pastel themes.", img: "https://cdn.dribbble.com/userupload/15861996/file/original-dffe52a7ba5b3062923ef5ae2f995064.png?resize=800x600", comingSoon: true },
    { title: "Kawaii Weather", desc: "Adorable weather app with mood-based anime characters.", img: "https://static.vecteezy.com/system/resources/thumbnails/003/774/267/small/weather-check-cartoon-smartphone-interface-templates-set-winter-overcast-mobile-app-screen-page-day-and-dark-mode-design-forecast-ui-for-application-phone-display-with-flat-character-vector.jpg", comingSoon: true },
    { title: "Anime Habit", desc: "Cute habit tracker with rewards & kawaii animations.", img: "https://cdn.dribbble.com/userupload/17261365/file/original-82743882490cdb98157f2f2e3e6d0030.png?resize=800x600", comingSoon: true },
  ];

  const certificates = [
    { title: "Data Driven program", issuer: "NoviTech R&D Private Limited", date: "Oct 2nd 2025", img: cert1 },
    { title: "Masterclass in Full Stack", issuer: "NoviTech R&D Private Limited", date: "Aug 27th – Sept 30th 2025", img: cert2 },
    { title: "PowerBI Workshop", issuer: "Office Master", date: "Oct 25th 2025", img: cert3 },
  ];

  const folders = [
    { id: "web", label: "Web Projects", color: "#00d4ff", items: webProjects },
    { id: "mobile", label: "Mobile Apps", color: "#ff6bcb", items: mobileProjects },
    { id: "certificates", label: "Certificates", color: "#8b4aff", items: certificates },
  ];

  const handleFolderClick = (id) => {
    setOpenFolder(openFolder === id ? null : id);
  };

  return (
    <div className="projects-section">
      <div className="projects-section-content">
        <h1 className="projects-title">MY WORK</h1>

        <div className="folders-container">
          {folders.map((folder) => (
            <div className="folder-wrapper" key={folder.id}>
              <div
                className={`folder ${openFolder === folder.id ? "open" : ""}`}
                style={{ "--folder-color": folder.color }}
                onClick={() => handleFolderClick(folder.id)}
              >
                <div className="folder__back">
                  {folder.items.slice(0, 3).map((item, i) => (
                    <div key={i} className={`paper paper-${i + 1}`}>
                      {openFolder === folder.id && (
                        <div className="paper-content">
                          <img src={item.img} alt={item.title} />
                          <div className="paper-text">
                            <h3>{item.title}</h3>
                            {folder.id === "certificates" ? (
                              <>
                                <p className="issuer">{item.issuer}</p>
                                <p className="date">{item.date}</p>
                                <a href={item.img} target="_blank" rel="noreferrer" className="view-btn">
                                  View Full Certificate →
                                </a>
                              </>
                            ) : (
                              <>
                                <p>{item.desc}</p>
                                <div className="paper-links">
                                  {item.comingSoon ? (
                                    <span className="coming-soon">Coming Soon</span>
                                  ) : (
                                    <>
                                      <a href={item.repo} target="_blank" rel="noreferrer">Repo</a>
                                      <a href={item.demo} target="_blank" rel="noreferrer">Live Demo</a>
                                    </>
                                  )}
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="folder__front"></div>
                  <div className="folder__front right"></div>
                </div>
                <p className="folder-label">{folder.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Close hint on mobile */}
        {openFolder && (
          <div className="close-hint" onClick={() => setOpenFolder(null)}>
            Tap folder again to close
          </div>
        )}
      </div>
    </div>
  );
}