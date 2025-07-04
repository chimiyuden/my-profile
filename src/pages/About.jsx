import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const skills = [
    { name: "React.js", level: 50 },
    { name: "CSS", level: 65 },
    { name: "JavaScript", level: 50 },
    { name: "Node.js", level: 50 },
  ];

return (
    <section className="professional-about" ref={ref}>
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="about-header">
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">
            My journey in technology and design
          </p>
        </div>

        <div className="about-content">
          <div className="about-intro">
            <motion.p
              className="intro-text"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Hello! I'm Chimi Yuden, a fullstack developer with a passion for
              creating beautiful, functional interfaces. With background in both
              design and development, I bridge the gap between aesthetics and
              technology.
            </motion.p>
          </div>

          <div className="about-grid">
            <motion.div
              className="about-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <div className="card-header">
                <div className="card-icon">🎓</div>
                <h3>Education & Training</h3>
              </div>
              <div className="card-content">
                <h4>Higher Secondary Education</h4>
                <p>Completed High School (Class XII)</p>
                <p>Jakar Higher Secondary School</p>
                <p className="date">Graduated in 2023</p>

                <div className="education-divider"></div>

                <h4>Military Training</h4>
                <p>Basic Military Training Program</p>
                <p className="date">2024 (3 months intensive)</p>

                <div className="education-divider"></div>

                <h4>Current Education</h4>
                <p>Web Design & Development Certification (In Progress)</p>
                <p>
                  Future Nursing Student - Apollo College of Nursing, Bhutan
                </p>
                <p className="date">Starting 2025</p>
              </div>
            </motion.div>

            <motion.div
              className="about-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <div className="card-header">
                <div className="card-icon">💼</div>
                <h3>Career Journey</h3>
              </div>
              <div className="card-content">
                <h4>Ministry of Labour Internship</h4>
                <p>
                  Currently gaining valuable government sector experience through a 
                  one-month internship program
                </p>
                <p className="date">Present</p>

                <div className="education-divider"></div>

                <h4>Aspiring Web Developer</h4>
                <p>
                  Building professional skills through coursework, personal projects,
                  and real-world experience
                </p>
                <p className="date">2025-Present</p>

                <div className="education-divider"></div>

                <h4>Military Service</h4>
                <p>Completed Basic Military Training</p>
                <p className="date">2024 (3 months)</p>
              </div>
            </motion.div>

            <motion.div
              className="about-card skills-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div className="card-header">
                <div className="card-icon">🛠️</div>
                <h3>Skills</h3>
              </div>
              <div className="card-content">
                <div className="skills-container">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-bar">
                        <div
                          className="skill-level"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
