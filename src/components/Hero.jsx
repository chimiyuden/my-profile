import { useState, useEffect } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = [
    "Fullstack Developer",
    "Tech Enthusiast",
    "Lifelong Learner",
  ];

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= phrases[currentPhraseIndex].length) {
        setTypedText(phrases[currentPhraseIndex].substring(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 2000);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [currentPhraseIndex]);

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-terminal">
          <div className="terminal-header">
            <div className="terminal-controls">
              <span className="control-dot red"></span>
              <span className="control-dot yellow"></span>
              <span className="control-dot green"></span>
            </div>
          </div>

          <div className="terminal-body">
            <p className="terminal-line">
              <span className="prompt"></span> Welcome and Kuzu Zangpo!
            </p>
            <p className="terminal-line">
              Hello! I'm <span className="highlight">Chimi Yuden</span>
            </p>
            <p className="terminal-line">
              <span className="prompt"></span> pronouns --she/her
            </p>

            <p className="typing-text">
              {typedText}
              <span className="cursor">|</span>
            </p>
          </div>
        </div>

        <div className="hero-footer">
          <p>Based in Bumthang, Bhutan</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
