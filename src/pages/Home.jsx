import Hero from "../components/Hero";

const Home = () => {
  return (
    <main className="home-container">
      <Hero />

      <section className="intro-section">
        <div className="intro-content">
          <div className="cta-container">
            <a href="#projects" className="cta-button">
              View My Work
              <svg className="arrow-icon" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="cta-button secondary">
              Contact Me: 123456789
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
