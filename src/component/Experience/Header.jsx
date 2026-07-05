import { motion } from "framer-motion";

function Header() {
  return (
    <motion.div
      className="experience-header-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="experience-title"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
        viewport={{ once: true }}
      >
        Work <span>Experience</span>
      </motion.h2>

      <motion.p
        className="experience-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
        }}
        viewport={{ once: true }}
      >
        My professional journey as a Full Stack Developer,
        building scalable web applications using React,
        Next.js, Node.js, Express.js and MongoDB.
      </motion.p>

      <motion.div
        className="title-line"
        initial={{ width: 0 }}
        whileInView={{ width: "120px" }}
        transition={{
          duration: 1,
          delay: 0.6,
        }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
}

export default Header;