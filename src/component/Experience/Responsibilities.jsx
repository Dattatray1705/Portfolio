import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const responsibilities = [
  "Developed responsive web applications using React.js & Next.js.",
  "Built secure REST APIs using Node.js and Express.js.",
  "Integrated MongoDB with Mongoose for database operations.",
  "Implemented JWT Authentication & Authorization.",
  "Managed global state using Redux & Redux Toolkit.",
  "Optimized application performance and fixed production bugs.",
  "Used Git & GitHub for version control and collaboration.",
  "Tested APIs using Postman.",
  "Worked in Agile development environment.",
  "Collaborated with senior developers on client projects.",
];

function Responsibilities() {
  return (
    <section className="responsibilities-section">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="responsibilities-title">
          Key Responsibilities
        </h2>

        <p className="responsibilities-subtitle">
          My major responsibilities and achievements during the internship.
        </p>
      </motion.div>

      <div className="responsibilities-grid">

        {responsibilities.map((item, index) => (

          <motion.div
            key={index}
            className="responsibility-card"

            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}

            viewport={{
              once: true,
            }}

            whileHover={{
              scale: 1.03,
              y: -8,
            }}
          >

            <div className="responsibility-icon">

              <FaCheckCircle />

            </div>

            <p>{item}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Responsibilities;