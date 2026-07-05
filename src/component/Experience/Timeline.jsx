import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Timeline() {
  return (
    <section className="timeline-section">

      <motion.h2
        className="timeline-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >
        Internship Timeline
      </motion.h2>

      <div className="timeline-container">

        {/* Left Timeline */}

        <div className="timeline-left">

          <motion.div
            className="timeline-circle"

            animate={{
              scale: [1, 1.25, 1],
            }}

            transition={{
              repeat: Infinity,
              duration: 2,
            }}
          />

          <div className="timeline-line"></div>

        </div>

        {/* Right Card */}

        <motion.div
          className="timeline-card"

          initial={{
            opacity: 0,
            x: 80,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: .8,
          }}

          viewport={{
            once: true,
          }}

          whileHover={{
            y: -8,
          }}
        >

          <div className="timeline-icon">

            <FaBriefcase />

          </div>

          <h3>

            Full Stack Developer Intern

          </h3>

          <h4>

            PrismPlus Technosoft LLP

          </h4>

          <div className="timeline-info">

            <span>

              <FaCalendarAlt />

              Jan 2025 - Jun 2025

            </span>

            <span>

              <FaMapMarkerAlt />

              Pune, Maharashtra

            </span>

          </div>

          <div className="timeline-status">

            Internship Completed

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Timeline;