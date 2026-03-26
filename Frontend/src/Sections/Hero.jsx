import { motion } from "framer-motion";
import "../CSS/hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="tag">MERN STACK DEVELOPER</p>

        <h1>
          Hi, I'm <span>Sneha</span>
        </h1>

        <p className="subtitle">
          I build scalable web applications using MongoDB, Express, React, and Node.js.
        </p>

        <div className="buttons">
          <button className="primary">Contact Me</button>
          <button className="secondary">View Resume</button>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;