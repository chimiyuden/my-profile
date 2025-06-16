import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <nav className="elegant-navbar">
      <div className="nav-brand">
        <span className="logo-icon">🌿</span>
        <span className="logo-text">Chimi Yuden</span>
      </div>

      <ul className="nav-menu">
        <li className={activeLink === "/" ? "active" : ""}>
          <Link to="/" onClick={() => setActiveLink("/")} className="nav-link">
            <span className="link-icon">⎔</span>
            <span className="link-text">Home</span>
          </Link>
        </li>
        <li className={activeLink === "/about" ? "active" : ""}>
          <Link
            to="/about"
            onClick={() => setActiveLink("/about")}
            className="nav-link"
          >
            <span className="link-icon">⏦</span>
            <span className="link-text">About</span>
          </Link>
        </li>
        <li className={activeLink === "/projects" ? "active" : ""}>
          <Link
            to="/projects"
            onClick={() => setActiveLink("/projects")}
            className="nav-link"
          >
            <span className="link-icon">⎔</span>
            <span className="link-text">Work</span>
          </Link>
        </li>
        <li className={activeLink === "/contact" ? "active" : ""}>
          <Link
            to="/contact"
            onClick={() => setActiveLink("/contact")}
            className="nav-link"
          >
            <span className="link-icon">✉</span>
            <span className="link-text">Contact</span>
          </Link>
        </li>
      </ul>

      <div className="nav-actions">
        <button
          className="theme-toggle"
          aria-label="Toggle theme"
          onClick={toggleTheme}
        >
          <span className="theme-icon">{theme === "light" ? "🌙" : "☀️"}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
