import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiRedux,
  SiPostman,
} from "react-icons/si";

const technologies = [
  {
    icon: <FaReact />,
    name: "React.js",
    color: "#61DAFB",
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    color:"var(--text)"
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
    color: "#3C873A",
  },
  {
    icon: <SiExpress />,
    name: "Express.js",
   color:"var(--text)"
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
    color: "#13AA52",
  },
  {
    icon: <SiRedux />,
    name: "Redux",
    color: "#764ABC",
  },
  {
    icon: <SiRedux />,
    name: "Redux Toolkit",
    color: "#8A2BE2",
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
    color: "#F7DF1E",
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
    color: "#F05032",
  },
  {
    icon: <SiPostman />,
    name: "Postman",
    color: "#FF6C37",
  },
];

function Technologies() {
  return (
    <section className="technologies-section">

      <motion.h2
        className="tech-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >
        Technologies Used
      </motion.h2>

      <motion.p
        className="tech-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: .2 }}
        viewport={{ once: true }}
      >
        Technologies and tools I used throughout my internship.
      </motion.p>

      <div className="tech-grid">

        {technologies.map((tech, index) => (

          <motion.div
            key={index}
            className="tech-card"

            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: index * .08,
              duration: .5,
            }}

            viewport={{
              once: true,
            }}

            whileHover={{
              y: -10,
              scale: 1.05,
            }}
          >

            <motion.div
              className="tech-icon"

              style={{
                color: tech.color,
              }}

              animate={{
                y: [0, -6, 0],
                rotate: [0, 6, -6, 0],
              }}

              transition={{
                repeat: Infinity,
                duration: 4,
                delay: index * .2,
              }}
            >
              {tech.icon}
            </motion.div>

            <h3>{tech.name}</h3>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Technologies;