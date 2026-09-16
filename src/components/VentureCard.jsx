import { motion } from "framer-motion";
import styles from "../styles/VentureCard.module.css";

export default function VentureCard({ logo, name, description, link, index }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      {/* Glow effect */}
      <div className={styles.cardGlow} />

      <div className={styles.logoWrapper}>
        <img src={logo} alt={name} className={styles.logo} />
        <div className={styles.logoRing} />
      </div>

      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>

      {link && (
        <motion.a
          href={link}
          className={styles.link}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Visit Website <span className={styles.arrow}>→</span>
        </motion.a>
      )}
    </motion.div>
  );
}
