import { useRef } from 'react';
import './styles/theme.css';
import Iridescence from './pages/Iridescence';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef,
  };

  const scrollTo = (id) => {
    refs[id].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Full-screen iridescence background */}
      <Iridescence
        color={[0.5, 0.3, 1.0]}   // Deep purple-blue glow
        speed={0.6}
        amplitude={0.08}
        mouseReact={true}
      />

      {/* Navbar – only logo + hamburger visible until clicked */}
      <Navbar scrollTo={scrollTo} />

      <main>
        <section ref={homeRef} id="home" className="section home-section">
          <Home />
        </section>
        <section ref={aboutRef} id="about" className="section about-section">
          <About />
        </section>
        <section ref={skillsRef} id="skills" className="section skills-section">
          <Skills />
        </section>
        <section ref={projectsRef} id="projects" className="section projects-section">
          <Projects />
        </section>
        <section ref={contactRef} id="contact" className="section contact-section">
          <Contact />
        </section>
      </main>
    </>
  );
}