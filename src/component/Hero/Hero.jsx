import "./Hero.css";
import logo from "../../assets/images/logo.png";
import resume from "../../assets/resume/resume.pdf";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero-section">

      {/* Background Blur */}
            <div className="about-blur blur-left"></div>
    

      <div className="container">

        <div className="row align-items-center min-vh-100">

          {/* Left Side */}

          <div className="col-lg-6">

            <motion.p
              className="hero-greeting"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8 }}
            >
              👋 Hi, I'm
            </motion.p>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .2 }}
            >
             Dattatray  <span>Savalkar</span>
            </motion.h1>

            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "React Developer",
                2000,
                "Backend Developer",
                2000,
                "Node.js Developer",
                2000,
              ]}
              wrapper="h3"
              speed={50}
              repeat={Infinity}
              className="hero-subtitle"
            />

            <motion.p
              className="hero-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .5 }}
            >
            Driven Full Stack Developer with expertise in **React.js, Next.js, Node.js, Express.js, and MongoDB**,
            focused on building secure, scalable, and production-ready web applications.
            Passionate about solving real-world problems through clean architecture, intuitive user experiences, efficient REST APIs, and high-quality, maintainable code.

            </motion.p>

            <motion.div
              className="hero-buttons mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .8 }}
            >

            

              <a
                href="#contact"
                className="btn btn-outline-primary"
              >
                Contact Me
              </a>

            </motion.div>

            <motion.div
              className="social-icons mt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >

              <a
                href="https://github.com/Dattatray1705"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/dattatray-savalkar-687103416/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=dattatraysavalkar1705@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaEnvelope />
</a>

            </motion.div>

          </div>

          {/* Right Side */}

          <div className="col-lg-6 text-center mt-5 mt-lg-0">

            <motion.img
              src={logo}
              alt="Dattatray Savalkar"
              className="hero-image img-fluid"
              animate={{
                y: [0, -20, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;