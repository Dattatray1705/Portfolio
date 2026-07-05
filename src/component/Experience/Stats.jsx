import { motion } from "framer-motion";

import {
  FaBriefcase,
  FaCode,
  FaRocket,
  FaUsers,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaBriefcase />,
    number: "6",
    suffix: "",
    title: "Months",
    subtitle: "Experience",
    color: "#2563eb",
  },
  {
    icon: <FaCode />,
    number: "30",
    suffix: "+",
    title: "REST APIs",
    subtitle: "Developed",
    color: "#10b981",
  },
  {
    icon: <FaRocket />,
    number: "2",
    title: "Projects",
    subtitle: "Completed",
    color: "#9333ea",
  },
 
];

function Stats() {
  return (
    <section className="stats-section">

      <div className="stats-grid">

        {stats.map((item, index) => (

          <motion.div
            key={index}
            className="stat-card"

            initial={{
              opacity: 0,
              y: 60,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.6,
              delay: index * 0.15,
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
              className="stat-icon"

              style={{
                background: item.color,
              }}

              animate={{
                y: [0, -8, 0],
              }}

              transition={{
                repeat: Infinity,
                duration: 3,
                delay: index * 0.3,
              }}
            >
              {item.icon}
            </motion.div>

            <div className="stat-content">

              <h3>
                {item.number}
                {item.suffix}
              </h3>

              <h4>{item.title}</h4>

              <p>{item.subtitle}</p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Stats;