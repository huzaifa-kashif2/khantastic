import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "../styles/CreareConsulting.module.css";

export default function CreareConsulting() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const pillars = [
    { icon: "🔍", title: "Strategic Clarity", desc: "Cutting through complexity to chart clear, decisive directions for your organization." },
    { icon: "⚙️", title: "Operational Excellence", desc: "Optimizing your processes and systems to unlock maximum efficiency and quality." },
    { icon: "📈", title: "Sustainable Growth", desc: "Building growth engines that compound — not just quick wins, but lasting impact." },
  ];

  return (
    <section className={styles.creare}>
      {/* Background */}
      <div className={styles.bgDecor} aria-hidden="true">
        <div className={styles.bgOrb1} />
        <div className={styles.bgOrb2} />
        <div className={styles.bgGrid} />
      </div>

      <div className={styles.container}>
        {/* Hero Area */}
        <motion.div
          className={styles.heroArea}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.sectionTag}>Management Consulting</div>
          <h2 className={styles.heading}>Creare Consulting</h2>
          <div className={styles.headingLine} />
          <p className={styles.description}>
            A boutique consulting firm specializing in high-impact, tailor-made
            solutions for organizations seeking strategic clarity, operational
            excellence, and sustainable growth.
          </p>
          <motion.a
            href="https://creare-consulting.com/"
            className={styles.cta}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            Discover More <span className={styles.ctaArrow}>→</span>
          </motion.a>
        </motion.div>

        {/* Pillars */}
        <motion.div
          ref={ref}
          className={styles.pillars}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              className={styles.pillar}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ delay: 0.15 + i * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.pillarIcon}>{p.icon}</div>
              <h3 className={styles.pillarTitle}>{p.title}</h3>
              <p className={styles.pillarDesc}>{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
