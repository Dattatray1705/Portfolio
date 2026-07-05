import { motion } from "framer-motion";

import {
  FaTrophy,
  FaAward,
  FaLaptopCode,
  FaChartLine,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaLaptopCode />,
    title: "Projects",
    value: "2",
  },
  {
    icon: <FaChartLine />,
    title: "REST APIs",
    value: "30+",
  },
  {
    icon: <FaAward />,
    title: "Internship",
    value: "6 Months",
  },
  {
    icon: <FaTrophy />,
    title: "Technologies",
    value: "10+",
  },
];

function Growth() {
  return (
    <section className="growth-section">

      <motion.div
        className="growth-card"

        initial={{
          opacity: 0,
          y: 80,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.8,
        }}

        viewport={{
          once: true,
        }}
      >

        <motion.div
          className="growth-icon"

          animate={{
            y: [0, -10, 0],
            rotate: [0, 6, -6, 0],
          }}

          transition={{
            repeat: Infinity,
            duration: 4,
          }}
        >
          <FaTrophy />
        </motion.div>

        <h2>

          Professional Growth

        </h2>

        <p>

          During my internship at <strong>PrismPlus Technosoft LLP</strong>,
          I gained practical experience in developing scalable Full Stack
          web applications using React.js, Next.js, Node.js, Express.js,
          MongoDB and Redux Toolkit.

          I worked on real-world client projects, collaborated with senior
          developers, improved debugging skills, optimized application
          performance and followed Agile software development practices.

        </p>

        <div className="achievement-grid">

          {achievements.map((item, index) => (

            <motion.div

              key={index}

              className="achievement-card"

              whileHover={{
                scale: 1.05,
                y: -8,
              }}
            >

              <div className="achievement-icon">

                {item.icon}

              </div>

              <h3>

                {item.value}

              </h3>

              <span>

                {item.title}

              </span>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>
  );
}

export default Growth;