// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

// const Navbar = () => {
//   const [activeLink, setActiveLink] = useState("/");
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     const savedTheme =
//       localStorage.getItem("theme") ||
//       (window.matchMedia("(prefers-color-scheme: dark)").matches
//         ? "dark"
//         : "light");
//     setTheme(savedTheme);
//     document.documentElement.setAttribute("data-theme", savedTheme);
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.setAttribute("data-theme", newTheme);
//   };

//   return (
//     <nav className="elegant-navbar">
//       <div className="nav-brand">
//         <span className="logo-icon">🌿</span>
//         <span className="logo-text">Chimi Yuden</span>
//       </div>

//       <ul className="nav-menu">
//         <li className={activeLink === "/" ? "active" : ""}>
//           <Link to="/" onClick={() => setActiveLink("/")} className="nav-link">
//             <span className="link-icon">⎔</span>
//             <span className="link-text">Home</span>
//           </Link>
//         </li>
//         <li className={activeLink === "/about" ? "active" : ""}>
//           <Link
//             to="/about"
//             onClick={() => setActiveLink("/about")}
//             className="nav-link"
//           >
//             <span className="link-icon">⏦</span>
//             <span className="link-text">About</span>
//           </Link>
//         </li>
//         <li className={activeLink === "/projects" ? "active" : ""}>
//           <Link
//             to="/projects"
//             onClick={() => setActiveLink("/projects")}
//             className="nav-link"
//           >
//             <span className="link-icon">⎔</span>
//             <span className="link-text">Work</span>
//           </Link>
//         </li>
//         <li className={activeLink === "/contact" ? "active" : ""}>
//           <Link
//             to="/contact"
//             onClick={() => setActiveLink("/contact")}
//             className="nav-link"
//           >
//             <span className="link-icon">✉</span>
//             <span className="link-text">Contact</span>
//           </Link>
//         </li>
//       </ul>

//       <div className="nav-actions">
//         <button
//           className="theme-toggle"
//           aria-label="Toggle theme"
//           onClick={toggleTheme}
//         >
//           <span className="theme-icon">{theme === "light" ? "🌙" : "☀️"}</span>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [activeLink, setActiveLink] = useState("/");
//   const [theme, setTheme] = useState("light");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") ||
//       (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
//     setTheme(savedTheme);
//     document.documentElement.setAttribute("data-theme", savedTheme);

//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//       if (window.innerWidth >= 768) setIsMenuOpen(false);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
//   }, [isMenuOpen]);

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.setAttribute("data-theme", newTheme);
//   };

//   const navItems = [
//     { path: "/", icon: "⎔", text: "Home" },
//     { path: "/about", icon: "⏦", text: "About" },
//     { path: "/projects", icon: "⎔", text: "Work" },
//     { path: "/contact", icon: "✉", text: "Contact" }
//   ];

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="navbar-brand">
//           <span className="logo-icon">🌿</span>
//           <span className="logo-text">Chimi Yuden</span>
//         </div>

//         {/* Desktop Navigation - shows on screens > 768px */}
//         <ul className="desktop-nav">
//           {navItems.map((item) => (
//             <li key={item.path} className={activeLink === item.path ? "active" : ""}>
//               <Link
//                 to={item.path}
//                 onClick={() => setActiveLink(item.path)}
//                 className="nav-link"
//               >
//                 <span className="nav-icon">{item.icon}</span>
//                 <span>{item.text}</span>
//               </Link>
//             </li>
//           ))}
//         </ul>

//         <div className="navbar-actions">
//           <button
//             className="theme-toggle"
//             onClick={toggleTheme}
//             aria-label={`Toggle ${theme === "light" ? "dark" : "light"} mode`}
//           >
//             {theme === "light" ? "🌙" : "☀️"}
//           </button>

//           {/* Hamburger - only shows on mobile screens < 768px */}
//           {isMobile && (
//             <button
//               className={`hamburger ${isMenuOpen ? "open" : ""}`}
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               aria-label="Menu"
//               aria-expanded={isMenuOpen}
//             >
//               <span className="hamburger-line"></span>
//               <span className="hamburger-line"></span>
//               <span className="hamburger-line"></span>
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu - only shows on mobile screens */}
//       <AnimatePresence>
//         {isMobile && isMenuOpen && (
//           <motion.div
//             className="mobile-menu"
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "tween", ease: [0.22, 1, 0.36, 1] }}
//           >
//             <div className="mobile-menu-content">
//               <ul className="mobile-nav">
//                 {navItems.map((item) => (
//                   <li key={item.path} className={activeLink === item.path ? "active" : ""}>
//                     <Link
//                       to={item.path}
//                       onClick={() => {
//                         setActiveLink(item.path);
//                         setIsMenuOpen(false);
//                       }}
//                       className="mobile-link"
//                     >
//                       <span className="mobile-icon">{item.icon}</span>
//                       <span>{item.text}</span>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//               <button
//                 className="mobile-theme-toggle"
//                 onClick={toggleTheme}
//               >
//                 {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Navbar = ({
  activeSection,
  scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight =
        document.querySelector(".navbar")?.offsetHeight || 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  },
  //   toggleTheme = () => {
  //     console.warn("toggleTheme not provided");
  //     // Fallback theme toggle implementation
  //     const currentTheme = document.documentElement.getAttribute("data-theme");
  //     const newTheme = currentTheme === "light" ? "dark" : "light";
  //     document.documentElement.setAttribute("data-theme", newTheme);
  //   },
  //   theme = "light",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [scrolled, setScrolled] = useState(false);

  // Responsive handling
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll detection for navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isMenuOpen]);

  const navItems = [
    { id: "home", icon: "⎔", text: "Home" },
    { id: "about", icon: "⏦", text: "About" },
    { id: "projects", icon: "⎔", text: "Work" },
    { id: "contact", icon: "✉", text: "Contact" },
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => handleNavClick("home")}>
          <span className="logo-icon"> 🐌 </span>
          <span className="logo-text">Chimi Yuden</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="desktop-nav">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={activeSection === item.id ? "active" : ""}
            >
              <button
                onClick={() => handleNavClick(item.id)}
                className="nav-link"
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.text}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          {/* <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Toggle ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button> */}

          {/* Mobile Menu Toggle */}
          {isMobile && (
            <button
              className={`hamburger ${isMenuOpen ? "open" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-menu-content">
              <ul className="mobile-nav">
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    className={activeSection === item.id ? "active" : ""}
                  >
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className="mobile-link"
                      aria-current={
                        activeSection === item.id ? "page" : undefined
                      }
                    >
                      <span className="mobile-icon">{item.icon}</span>
                      <span className="mobile-text">{item.text}</span>
                    </button>
                  </li>
                ))}
              </ul>
              {/* <button className="mobile-theme-toggle" onClick={toggleTheme}>
                {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
              </button> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

Navbar.propTypes = {
  activeSection: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func,
  toggleTheme: PropTypes.func,
  theme: PropTypes.string,
};

export default Navbar;
