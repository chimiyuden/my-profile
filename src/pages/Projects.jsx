import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "SengShelf",
      description:
        "Personal book tracking system that lets users catalog their reading collection, monitor reading progress, and organize books by custom categories. Developed with intuitive navigation and mobile-responsive design.",

      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "https://sengshelf.netlify.app/",
      githubLink: "https://github.com/chimiyuden", // Add your GitHub link if available
      image:
        "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    },
    // Add more projects as needed
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2 className="section-title">Project Portfolio</h2>
        <p className="section-subtitle">
          Selected development work demonstrating my technical capabilities
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="project-image"
              />
              <div className="project-overlay">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overlay-button"
                >
                  Live Demo
                </a>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-button secondary"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="tech-stack">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div
          className="upcoming-projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="upcoming-content">
            <div className="upcoming-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"></path>
              </svg>
            </div>
            <h3>Current Development Focus</h3>
            <p>
              I'm actively expanding my portfolio with new projects that
              showcase advanced technical implementations and innovative
              solutions.
            </p>
            <div className="upcoming-cta">
              <a href="#contact" className="cta-button">
                <span>Discuss Potential Projects</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
