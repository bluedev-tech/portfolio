import React, { useState } from "react";
import "./landpage.css";
import image1 from "../../assets/ecom.jpg";
import image2 from "../../assets/data collection.jpg";
import { Envelope } from "phosphor-react";
import { LinkedinLogo } from "phosphor-react";
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  img: string;
  link: string;
}

interface SkillCategory {
  category: string;
  skills: string[];
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Users Data Collection Website",
    description:
      "A website for storing users data such as name, email and file records",
    tags: ["React", "TypeScript", "CSS Modules", "MongoDB"],
    img: image2,
    link: "#",
  },
  {
    id: 2,
    title: "E-Commerce Mobile Web App",
    description:
      "A seamless shopping interface featuring dynamic cart handling, micro-interactions, and optimized assets.",
    tags: ["React", "Context API", "Responsive CSS"],
    img: image1,
    link: "#",
  },
];

const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5 / CSS3"],
  },
  {
    category: "Styling & UI",
    skills: [
      "Responsive Design",
      "CSS Grid/Flexbox",
      "Bootstrap",
      "Animations",
    ],
  },
  {
    category: "Tools & Workflow",
    skills: ["Git / GitHub", "Vite"],
  },
];

export const LandPage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo">
          My <span className="accent">Portfolio</span>
        </div>
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <header className="hero-section">
        <div className="hero-badge">Available for New Projects</div>
        <h1>
          Hi, I'm <span className="gradient-text">Ugwoke Chigozie</span>
        </h1>
        <p className="hero-subtitle">
          Frontend Engineer & UI/UX Craftsman building fast, responsive, and
          breathtaking web applications.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn primary-btn">
            Explore Work
          </a>
          <a href="#contact" className="btn secondary-btn">
            Let's Talk
          </a>
        </div>
      </header>

      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <div className="about-card">
          <p>
            I specialize in building scalable web interfaces with clean,
            maintainable code. With a strong focus on user experience,
            performance optimization, and modern design principles, I transform
            complex requirements into seamless, intuitive digital products.
          </p>
        </div>
      </section>

      <section id="skills" className="section">
        <h2 className="section-title">Core Skills</h2>
        <div className="skills-grid">
          {skillsData.map((group, idx) => (
            <div key={idx} className="skill-category-card">
              <h3>{group.category}</h3>
              <ul>
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <img className="pict" src={project.img} alt="" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className="section">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-card">
          <div className="contactDet">
            <Envelope size={20} /> &nbsp;{" "}
            <a href="mailto:pchigozie173@gmail.com">pchigozie173@gmail.com</a>{" "}
            &nbsp;
            <span style={{ color: "#5d7091" }}>OR</span> &nbsp;
            <LinkedinLogo size={20} /> &nbsp;{" "}
            <a href="https://www.linkedin.com/in/chigozie-paul-ugwoke-8a511b436">
              My LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Ugwoke Chigozie. Built with React &
          TypeScript.
        </p>
      </footer>
    </div>
  );
};

export default LandPage;
