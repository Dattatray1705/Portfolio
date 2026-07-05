import "./Projects.css";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaCheckCircle,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";

const projects = [
  {
    id: 1,

    icon: <FaRocket />,

    title: "ConnectX",

    type: "Professional Networking Platform",

    github: "https://github.com/Dattatray1705/ConnectX",

description:
  "Developed a full-stack professional networking platform using Next.js, React, Node.js, Express.js, and MongoDB. Implemented secure JWT authentication, Redux state management, Cloudinary media uploads, OTP-based password recovery, PDF resume generation, and scalable REST APIs to deliver a responsive LinkedIn-inspired experience.",
    technologies: [
      "Next.js",
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Multer",
      "Nodemailer",
      "PDFKit",
    ],

    features: [
      "JWT Authentication",
      "Professional Profiles",
      "Posts & Feed",
      "Likes & Comments",
      "Connection Requests",
      "Notifications",
      "Resume Generator",
      "Forgot Password OTP",
    ],
  },

  {
    id: 2,

    icon: <FaChartLine />,

    title: "ProfitX",

    type: "Online Trading Platform",

    github: "https://github.com/Dattatray1705/ProfitX",

description:
  "Built a full-stack stock trading platform inspired by Zerodha using React, Node.js, Express.js, and MongoDB. Developed secure authentication, portfolio management, buy/sell order processing, holdings and positions tracking, trading journal, analytics dashboard, and RESTful APIs for a seamless trading experience.",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Chart.js",
      "Bootstrap",
      "REST API",
    ],

    features: [
      "Authentication",
      "Trading Dashboard",
      "Buy & Sell",
      "Holdings",
      "Positions",
      "Trading Journal",
      "Achievements",
      "Portfolio Analytics",
    ],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
    >

      <div className="projects-blur blur-left"></div>
      <div className="projects-blur blur-right"></div>

      <div className="container">

        <motion.div
          className="text-center mb-5"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .8,
          }}
          viewport={{
            once: true,
          }}
        >

          <h2 className="projects-title">

            Featured <span>Projects</span>

          </h2>

          <p className="projects-subtitle">

            Building scalable, secure, responsive and modern full-stack applications.

          </p>

        </motion.div>

        {

          projects.map((project, index) => (

            <motion.div

              key={project.id}

              className="project-card"

              initial={{
                opacity: 0,
                y: 80,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              whileHover={{
                y: -10,
              }}

              transition={{
                duration: .6,
              }}

              viewport={{
                once: true,
              }}

            >

              <div className="project-top">

                <div className="project-icon">

                  {project.icon}

                </div>

                <div>

                  <h3>

                    {project.title}

                  </h3>

                  <p className="project-type">

                    {project.type}

                  </p>

                </div>

              </div>

              <p className="project-description">

                {project.description}

              </p>

              <div className="tech-stack">

                {

                  project.technologies.map((tech, i) => (

                    <span key={i}>

                      {tech}

                    </span>

                  ))

                }

              </div>

              <div className="feature-list">
                                {

                  project.features.map((feature, i) => (

                    <div
                      key={i}
                      className="feature-item"
                    >

                      <FaCheckCircle />

                      <span>

                        {feature}

                      </span>

                    </div>

                  ))

                }

              </div>

              <div className="project-footer">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >

                  <FaGithub className="me-2" />

                  GitHub Repository

                </a>

              </div>

            </motion.div>

          ))

        }

      </div>

    </section>

  );
}

export default Projects;