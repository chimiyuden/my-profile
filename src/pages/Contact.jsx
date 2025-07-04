// import { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     console.log("Form submitted:", formData);
//     // Reset form after submission
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <section className="contact-section">
//       <div className="contact-container">
//         <div className="contact-header">
//           <h2 className="section-title">Get In Touch</h2>
//           <p className="section-subtitle">
//             Have a project in mind or want to collaborate? Let's connect.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="contact-form">
//           <div className="form-group">
//             <label htmlFor="name" className="form-label">
//               Your Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="form-input"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email" className="form-label">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="form-input"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="message" className="form-label">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className="form-textarea"
//               rows="5"
//               required
//             ></textarea>
//           </div>

//           <button type="submit" className="submit-button">
//             Send Message
//             <svg className="send-icon" viewBox="0 0 24 24">
//               <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
//             </svg>
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Contact = ({ id }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const contactRef = useRef(null);

  // Initialize intersection observer for scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // You can add active section logic here if needed
        }
      },
      { threshold: 0.5 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your actual form submission logic
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
      // Show success message
    } catch (error) {
      console.error("Submission error:", error);
      // Show error message
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id={id} ref={contactRef} className="contact-section">
      <motion.div
        className="contact-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="contact-header" variants={itemVariants}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? Let's connect.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="contact-form"
          variants={itemVariants}
        >
          <motion.div className="form-group" variants={itemVariants}>
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </motion.div>

          <motion.div className="form-group" variants={itemVariants}>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </motion.div>

          <motion.div className="form-group" variants={itemVariants}>
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              rows="5"
              required
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="submit-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            Send Message
            <svg className="send-icon" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
            </svg>
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;