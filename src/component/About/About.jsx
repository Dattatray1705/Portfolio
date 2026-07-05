import "./About.css";
import profile from "../../assets/images/logo.png";
import resume from "../../assets/resume/resume.pdf";

import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaDownload,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaGithub,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiBootstrap,
  SiGit,
  SiRedux,
} from "react-icons/si";

function About() {
  return (
    <section id="about" className="about-section">

      {/* Background Blur */}

      <div className="about-blur blur-left"></div>
      <div className="about-blur blur-right"></div>

      <div className="container">

        {/* Heading */}

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <h2 className="section-title">

            About <span>Me</span>

          </h2>

          <p className="section-subtitle">

            Passionate Full Stack Developer who loves creating
            beautiful and scalable web applications.

          </p>

        </motion.div>

        <div className="row align-items-center">

          {/* LEFT */}

          <motion.div
            className="col-lg-5 mb-5 mb-lg-0"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .9 }}
          >

            <div className="profile-card">

              <div className="profile-ring">

                <img
                  src={profile}
                  alt="Profile"
                  className="profile-image"
                />

              </div>

              <div className="experience-card">

                <h2>2+</h2>

                <p>Year Learning MERN</p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            className="col-lg-7"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .9 }}
          >

            <h3 className="about-name">

              Hi, I'm
              <span> Dattatray Savalkar</span>

            </h3>

            <h5 className="about-role">

            Full Stack Developer

            </h5>

            <p className="about-description">

              I am a passionate Full Stack Developer with
              experience building responsive, scalable and
              user-friendly web applications.

              I enjoy solving real-world problems using
              React.js, Node.js, Express.js and MongoDB.

              My goal is to continuously improve my skills
              while building high-quality software.

            </p>

            {/* TECH STACK */}

            <div className="tech-stack">

              <span><FaReact /> React</span>

              <span><FaNodeJs /> Node.js</span>

              <span><SiExpress /> Express</span>

              <span><SiMongodb /> MongoDB</span>

              <span><SiJavascript /> JavaScript</span>

              <span><SiBootstrap /> Bootstrap</span>

              <span><SiRedux /> Redux</span>

              <span><SiGit /> Git</span>

              <span><FaGithub /> GitHub</span>

            </div>

            {/* COUNTERS */}

            <div className="row mt-5 g-4">

              <div className="col-md-4">

                <motion.div
                  className="stat-card"
                  whileHover={{
                    y: -10,
                    scale: 1.03
                  }}
                >

                  <h2>3</h2>

                  <p>Projects</p>

                </motion.div>

              </div>

              <div className="col-md-4">

                <motion.div
                  className="stat-card"
                  whileHover={{
                    y: -10,
                    scale: 1.03
                  }}
                >

                  <h2>10+</h2>

                  <p>Technologies</p>

                </motion.div>

              </div>

              <div className="col-md-4">

                <motion.div
                  className="stat-card"
                  whileHover={{
                    y: -10,
                    scale: 1.03
                  }}
                >

                  <h2>2</h2>

                  <p>Internship</p>

                </motion.div>

              </div>

            </div>

            {/* PERSONAL INFO */}

            <div className="personal-info">

              <div>

                <FaMapMarkerAlt />

                Maharashtra, India

              </div>

              <div>

                <FaGraduationCap />

                B.Tech Graduate

              </div>

              <div>

                <FaBriefcase />

                Full Stack Developer Intern

              </div>

            </div>

            {/* BUTTONS */}

            <div className="about-buttons">


              <a
                href="#contact"
                className="btn btn-outline-primary"
              >

                Contact Me

              </a>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;