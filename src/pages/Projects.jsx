import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Currently curating my professional work - check back soon!
        </p>
      </div>

      <div className="projects-placeholder">
        <motion.div
          className="placeholder-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="placeholder-content">
            <svg className="projects-icon" viewBox="0 0 24 24">
              <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <h3>Projects Coming Soon</h3>
            <p>
              I'm currently working on some exciting projects that will be
              showcased here. In the meantime, feel free to explore my skills or
              get in touch.
            </p>
            <div className="placeholder-actions">
              <a href="#skills" className="placeholder-button">
                View My Skills
              </a>
              <a href="#contact" className="placeholder-button secondary">
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
