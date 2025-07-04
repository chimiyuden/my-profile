// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import "./App.css";
// import Hero from "./components/Hero";
// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Hero />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

// import { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import "./App.css";
// import Hero from "./components/Hero";
// import Footer from "./components/Footer";

// function App() {
//   const [activeSection, setActiveSection] = useState("home");
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

//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setActiveSection(sectionId);
//     }
//   };

//   return (
//     <>
//       <div className="app">
//         <Navbar
//           activeSection={activeSection}
//           scrollToSection={scrollToSection}
//           toggleTheme={toggleTheme}
//           theme={theme}
//         />

//         <main>
//           <Hero id="/" />
//           <About id="about" />
//           <Projects id="projects" />
//           <Contact id="contact" />
//         </main>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default App;import { useState, useEffect } from 'react';

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";
import { useEffect, useState } from "react";
import Home from "./pages/Home";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  // const [theme, setTheme] = useState("light");

  // Initialize theme from localStorage or system preference
  // useEffect(() => {
  //   const savedTheme =
  //     localStorage.getItem("theme") ||
  //     (window.matchMedia("(prefers-color-scheme: dark)").matches
  //       ? "dark"
  //       : "light");
  //   setTheme(savedTheme);
  //   document.documentElement.setAttribute("data-theme", savedTheme);
  // }, []);

  // Theme toggle function
  // const toggleTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  //   localStorage.setItem("theme", newTheme);
  //   document.documentElement.setAttribute("data-theme", newTheme);
  // };

  // Scroll to section with offset
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const sectionPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        sectionPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        // toggleTheme={toggleTheme}
        // theme={theme}
      />

      <main>
        <Home id="home" />
        <About id="about" />
        <Projects id="projects" />
        <Contact id="contact" />
      </main>

      <Footer />
    </div>
  );
}

export default App;
