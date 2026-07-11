import "./About.css";
import profile from "../../assets/images/logo.jpeg";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaJava,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiBootstrap,
  SiRedux,
  SiGit,
  SiTailwindcss,
  SiMysql,
  SiNextdotjs,
} from "react-icons/si";

function About() {

  const positions = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "React Developer",
  "Frontend Developer",
  "Backend Developer",
  "Software Developer",
];

const [currentPosition, setCurrentPosition] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentPosition((prev) => (prev + 1) % positions.length);
  }, 2000); // Changes every 2 seconds

  return () => clearInterval(interval);
}, []);


  return (
    <section id="about" className="about-section">

      <div className="container">

        {/* Heading */}

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            About <span>Me</span>
          </h2>

          <p className="section-subtitle">
            Passionate Full Stack Developer who loves creating
            beautiful and scalable web applications.
          </p>
        </motion.div>

        {/* Main Content */}

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          {/* Profile Image */}

          <motion.div
            className="profile-ring"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <img
              src={profile}
              alt="Profile"
              className="profile-image"
            />
          </motion.div>

          {/* Name */}

          <h2 className="about-name">
            Dattatray <span>Savalkar</span>
          </h2>

          {/* Position */}

         <motion.h4
  key={currentPosition}
  className="about-role"
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {positions[currentPosition]}
</motion.h4>

          {/* Description */}

          <p className="about-description">
  I'm a dedicated <strong>Full Stack MERN Developer</strong> with a passion
  for building modern, responsive, and scalable web applications. My expertise
  includes <strong>React.js, Next.js, Node.js, Express.js, MongoDB, JavaScript,</strong>
  and RESTful APIs, enabling me to develop seamless user experiences and
  efficient backend systems.
  <br /><br />
  I believe in writing clean, maintainable, and efficient code while following
  industry best practices. Constant learning, problem-solving, and delivering
  high-quality software drive me to grow as a developer and contribute to
  innovative projects.
</p>

          {/* Contact Button */}

          <div className="about-buttons">

            <a
              href="#contact"
              className="btn btn-primary"
            >
              Contact Me
            </a>

          </div>

          {/* Social Icons */}

          <div className="social-icons">

            <motion.a
              href="https://github.com/Dattatray1705"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, y: -6 }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/dattatray-savalkar-687103416/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, y: -6 }}
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=dattatraysavalkar1705@gmail.com"
              whileHover={{ scale: 1.2, y: -6 }}
            >
              <FaEnvelope />
            </motion.a>

          </div>

          {/* Tech Stack */}

          <div className="tech-stack">

  <span><FaHtml5 /> HTML5</span>

  <span><FaCss3Alt /> CSS3</span>

  <span><SiJavascript /> JavaScript</span>

  <span><FaReact /> React</span>

  <span><SiNextdotjs /> Next.js</span>

  <span><FaNodeJs /> Node.js</span>

  <span><SiExpress /> Express.js</span>

  <span><SiMongodb /> MongoDB</span>

  <span><FaJava /> Java</span>

  <span><SiMysql /> SQL</span>

  <span><SiBootstrap /> Bootstrap</span>

  <span><SiTailwindcss /> Tailwind CSS</span>

  <span><SiRedux /> Redux</span>

  <span><SiGit /> Git</span>

  <span><FaGithub /> GitHub</span>

</div>

          {/* Stats */}

          <div className="stats-grid">

            <motion.div
              className="stat-card"
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
            >
              <h2>3+</h2>
              <p>Projects</p>
            </motion.div>

            <motion.div
              className="stat-card"
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
            >
              <h2>10+</h2>
              <p>Technologies</p>
            </motion.div>

            <motion.div
              className="stat-card"
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
            >
              <h2>2+</h2>
              <p>Years Learning</p>
            </motion.div>

          </div>

          {/* Personal Info */}

         

        </motion.div>

      </div>

    </section>
  );
}

export default About;