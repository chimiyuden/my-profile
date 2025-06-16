import Hero from "../components/Hero";

const Home = () => {
  return (
    <main className="home-container">
      <Hero />

      <section className="intro-section">
        <div className="intro-content">
          <h2 className="section-title">Welcome to My Portfolio</h2>
          <p className="section-description">
            I'm a frontend developer specializing in creating beautiful,
            functional digital experiences. With a focus on clean code and
            thoughtful design, I bridge the gap between technology and
            aesthetics.
          </p>

          <div className="cta-container">
            <a href="#projects" className="cta-button">
              View My Work
              <svg className="arrow-icon" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="cta-button secondary">
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
