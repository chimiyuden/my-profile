// // import { useState, useEffect } from "react";
// // import myPhoto from "../assets/chimiPhoto.png";
// // const Hero = () => {
// //   const [typedText, setTypedText] = useState("");
// //   const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
// //   const phrases = [
// //     "Fullstack Developer",
// //     "Tech Enthusiast",
// //     "Lifelong Learner",
// //   ];

// //   useEffect(() => {
// //     let i = 0;
// //     const typingInterval = setInterval(() => {
// //       if (i <= phrases[currentPhraseIndex].length) {
// //         setTypedText(phrases[currentPhraseIndex].substring(0, i));
// //         i++;
// //       } else {
// //         clearInterval(typingInterval);
// //         setTimeout(() => {
// //           setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
// //         }, 2000);
// //       }
// //     }, 150);

// //     return () => clearInterval(typingInterval);
// //   }, [currentPhraseIndex]);

// //   return (
// //     <>
// //       <section className="hero-section">
// //         <div className="hero-container">
// //           <div className="profile-image-container">
// //             <img
// //               src={myPhoto}
// //               alt="Chimi Yuden"
// //               className="profile-image"
// //               onError={(e) => {
// //                 e.target.src = "/images/default-profile.jpg"; // Fallback image
// //               }}
// //             />
// //           </div>

// //           <div className="hero-terminal">
// //             <div className="terminal-header">
// //               <div className="terminal-controls">
// //                 <span className="control-dot red"></span>
// //                 <span className="control-dot yellow"></span>
// //                 <span className="control-dot green"></span>
// //               </div>
// //             </div>

// //             <div className="terminal-body">
// //               <p className="terminal-line">
// //                 <span className="prompt"></span> Welcome and Kuzu Zangpo!
// //               </p>
// //               <p className="terminal-line">
// //                 Hello! I'm <span className="highlight">Chimi Yuden</span>
// //               </p>
// //               <p className="terminal-line">
// //                 <span className="prompt"></span> pronouns --she/her
// //               </p>

// //               <p className="typing-text">
// //                 {typedText}
// //                 <span className="cursor">|</span>
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default Hero;



// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import myPhoto from "../assets/chimiPhoto.png";

// const Hero = ({ id }) => {
//   const [typedText, setTypedText] = useState("");
//   const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
//   const heroRef = useRef(null);
//   const phrases = [
//     "Fullstack Developer",
//     "Tech Enthusiast",
//     "Lifelong Learner",
//   ];

//   // Typing animation effect
//   useEffect(() => {
//     let i = 0;
//     const typingInterval = setInterval(() => {
//       if (i <= phrases[currentPhraseIndex].length) {
//         setTypedText(phrases[currentPhraseIndex].substring(0, i));
//         i++;
//       } else {
//         clearInterval(typingInterval);
//         setTimeout(() => {
//           setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
//         }, 2000);
//       }
//     }, 150);

//     return () => clearInterval(typingInterval);
//   }, [currentPhraseIndex]);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section id={id} ref={heroRef} className="hero-section">
//       <motion.div
//         className="hero-container"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         variants={containerVariants}
//       >
//         <motion.div 
//           className="profile-image-container"
//           variants={itemVariants}
//           whileHover={{ scale: 1.03 }}
//           transition={{ type: "spring", stiffness: 400, damping: 10 }}
//         >
//           <img
//             src={myPhoto}
//             alt="Chimi Yuden"
//             className="profile-image"
//             onError={(e) => {
//               e.target.src = "/images/default-profile.jpg";
//             }}
//           />
//         </motion.div>

//         <motion.div 
//           className="hero-terminal"
//           variants={itemVariants}
//         >
//           <div className="terminal-header">
//             <div className="terminal-controls">
//               <span className="control-dot red"></span>
//               <span className="control-dot yellow"></span>
//               <span className="control-dot green"></span>
//             </div>
//           </div>

//           <motion.div 
//             className="terminal-body"
//             variants={containerVariants}
//           >
//             <motion.p className="terminal-line" variants={itemVariants}>
//               <span className="prompt"></span> Welcome and Kuzu Zangpo!
//             </motion.p>
//             <motion.p className="terminal-line" variants={itemVariants}>
//               Hello! I'm <span className="highlight">Chimi Yuden</span>
//             </motion.p>
//             <motion.p className="terminal-line" variants={itemVariants}>
//               <span className="prompt"></span> pronouns --she/her
//             </motion.p>

//             <motion.p 
//               className="typing-text"
//               variants={itemVariants}
//             >
//               {typedText}
//               <span className="cursor">|</span>
//             </motion.p>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;