import { motion } from "framer-motion";

import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

function ExperienceCard() {
  return (
    <section className="experience-card-section">

      <motion.div
        className="experience-card"

        initial={{ opacity: 0, y: 80 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.8 }}

        viewport={{ once: true }}

        whileHover={{
          y: -10,
        }}
      >

        <div className="experience-card-shine"></div>

        {/* Header */}

        <div className="experience-card-header">

         <motion.div
  className="company-logo"
  animate={{
    y: [0, -8, 0],
  }}
  transition={{
    repeat: Infinity,
    duration: 3,
  }}
>
  <img
    src="https://media.licdn.com/dms/image/v2/D4D0BAQEx0TCIDlMc-w/company-logo_200_200/company-logo_200_200/0/1685970305956/prismplus_technosoft_logo?e=2147483647&v=beta&t=jAoPQud_CC9-jixB7sN2YpeqvbQC8ZV6F4jwLLP2loQ"
    alt="PrismPlus Technosoft LLP"
  />
</motion.div>

          <div>

            <h2>

              Full Stack Developer Intern

            </h2>

            <h4>

              PrismPlus Technosoft LLP

            </h4>

          </div>

        </div>

        {/* Info */}

        <div className="experience-card-info">

       

        </div>

        {/* Description */}

        <p className="experience-description">

          Worked as a Full Stack Developer Intern at
          <strong> PrismPlus Technosoft LLP</strong>,
          where I developed scalable web applications
          using React.js, Next.js, Node.js, Express.js
          and MongoDB.

          Built secure REST APIs, implemented JWT
          authentication, integrated Redux Toolkit
          for state management, optimized application
          performance, fixed production issues and
          collaborated with senior developers using
          Git and Agile methodology.

        </p>

        {/* Highlights */}

        <div className="experience-highlights">

          <div>

            <FaCheckCircle />

            Developed Responsive UI

          </div>

          <div>

            <FaCheckCircle />

            Built REST APIs

          </div>

          <div>

            <FaCheckCircle />

            JWT Authentication

          </div>

          <div>

            <FaCheckCircle />

            MongoDB Integration

          </div>

          <div>

            <FaCheckCircle />

            Redux Toolkit

          </div>

          <div>

            <FaCheckCircle />

            Git & GitHub

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default ExperienceCard;