import Hero from "../components/Hero";

const Home = () => {
  return (
    <main className="home-container">
      <Hero />

      <section className="intro-section">
        <div className="intro-content">
          <div className="cta-container">
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
