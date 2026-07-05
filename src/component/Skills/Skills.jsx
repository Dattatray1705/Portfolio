import "./Skills.css";

import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDocker,
  FaLinux,
  FaDatabase,
} from "react-icons/fa";

import {
  SiBootstrap,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiKubernetes,
  SiGithubactions,
  
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { icon: <FaHtml5 />, name: "HTML5", level: 95 },
      { icon: <FaCss3Alt />, name: "CSS3", level: 95 },
      { icon: <FaJs />, name: "JavaScript", level: 90 },
      { icon: <FaReact />, name: "React.js", level: 90 },
      { icon: <SiBootstrap />, name: "Bootstrap", level: 92 },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", level: 85 },
      { icon: <SiRedux />, name: "Redux", level: 80 },
      { icon: <SiRedux />, name: "Redux Toolkit", level: 80 },
    ],
  },

  {
    title: "Backend",
    skills: [
      { icon: <FaNodeJs />, name: "Node.js", level: 90 },
      { icon: <SiExpress />, name: "Express.js", level: 90 },
    ],
  },

  {
    title: "Database",
    skills: [
      { icon: <SiMongodb />, name: "MongoDB", level: 90 },
      { icon: <FaDatabase />, name: "SQL", level: 85 },
    ],
  },

  {
    title: "DevOps & Tools",
    skills: [
      { icon: <FaGitAlt />, name: "Git", level: 85 },
      { icon: <FaGithub />, name: "GitHub", level: 90 },
      { icon: <SiPostman />, name: "Postman", level: 90 },
      {icon: <VscVscode /> , name : "VS Code" , level:90}


    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">

      {/* Background Blur */}
      <div className="skills-blur blur-left"></div>
      <div className="skills-blur blur-right"></div>

      <div className="container">

        {/* Heading */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="skills-title">
            My <span>Skills</span>
          </h2>

          <p className="skills-subtitle">
            Technologies I use to build fast, scalable and modern web applications.
          </p>
        </motion.div>

        {skillCategories.map((category, categoryIndex) => (

          <div key={categoryIndex} className="mb-5">

            <motion.h3
              className="category-title"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {category.title}
            </motion.h3>

            <div className="row">

              {category.skills.map((skill, index) => (

                <motion.div
                  key={index}
                  className="col-lg-6 mb-4"

                  initial={{
                    opacity: 0,
                    y: 40,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}

                  transition={{
                    duration: .4,
                    delay: index * .08,
                  }}

                  viewport={{
                    once: true,
                  }}
                >

                  <div className="skill-card">

                    <div className="skill-header">

                      <div className="skill-icon">
                        {skill.icon}
                      </div>

                      <div className="skill-info">

                        <h5>{skill.name}</h5>

                        <span>{skill.level}%</span>

                      </div>

                    </div>

                    <div className="progress">

                      <motion.div
                        className="progress-fill"

                        initial={{
                          width: 0,
                        }}

                        whileInView={{
                          width: `${skill.level}%`,
                        }}

                        transition={{
                          duration: 1.5,
                          ease: "easeOut",
                        }}

                        viewport={{
                          once: true,
                        }}
                      />

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;