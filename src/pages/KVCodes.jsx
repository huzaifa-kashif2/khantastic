import { motion } from "framer-motion";
import styles from "../styles/KVCodes.module.css";
import logo from "../assets/logo.jpeg";

export default function KVCodes() {
  return (
    <section className={styles.page}>
      {/* Floating orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />

      {/* Animated grid */}
      <div className={styles.grid} />

      <div className={styles.content}>
        {/* Logo */}
        <motion.img
          src={logo}
          alt="Khantastic"
          className={styles.logo}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
        />

        {/* Badge */}
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className={styles.badgeDot} />
          Coming Soon
        </motion.div>

        {/* Title */}
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          KV<span className={styles.titleGold}>Codes</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Something amazing is being built here.<br />
          Stay tuned — we&apos;re cooking up something Khantastic.
        </motion.p>

        {/* Animated dots loader */}
        <motion.div
          className={styles.loader}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={styles.dot}
              style={{ animationDelay: `${i * 0.25}s` }}
            />
          ))}
        </motion.div>

        {/* Notify text */}
        <motion.p
          className={styles.notify}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          ✉️ Reach us at{" "}
          <a href="mailto:info@khantastic.net" className={styles.notifyLink}>
            info@khantastic.net
          </a>{" "}
          to stay in the loop.
        </motion.p>
      </div>
    </section>
  );
}
