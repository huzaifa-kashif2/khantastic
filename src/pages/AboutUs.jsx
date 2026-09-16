import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "../styles/AboutUs.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" }
  }),
};

function ScrollReveal({ children, className, custom }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeUp}
      custom={custom}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export default function AboutUs() {
  const values = [
    { icon: "🤝", title: "Collaboration", desc: "Better together" },
    { icon: "💡", title: "Innovation", desc: "Think differently" },
    { icon: "🔄", title: "Adaptability", desc: "Evolve and grow" },
    { icon: "🌟", title: "Excellence", desc: "Above and beyond" },
    { icon: "🚀", title: "Empowerment", desc: "Unlock potential" },
  ];

  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });

  return (
    <section className={styles.about}>
      {/* Background decorations */}
      <div className={styles.bgDecor} aria-hidden="true">
        <div className={styles.bgCircle1} />
        <div className={styles.bgGradient} />
      </div>

      <div className={styles.container}>
        {/* Section Header */}
        <ScrollReveal className={styles.headerArea}>
          <div className={styles.sectionTag}>Who We Stand For</div>
          <h2 className={styles.heading}>About Us</h2>
          <div className={styles.headingLine} />
        </ScrollReveal>

        {/* Vision + Mission */}
        <div className={styles.contentWrapper}>
          <ScrollReveal custom={0}>
            <div className={styles.visionCard}>
              <div className={styles.cardBadge}>
                <span>👁️</span> Corporate Vision
              </div>
              <blockquote className={styles.quote}>
                &ldquo;To empower individuals and businesses in a Khantastic way so that
                they cannot imagine going back to the old way.&rdquo;
              </blockquote>
              <div className={styles.quoteAccent} />
            </div>
          </ScrollReveal>

          <ScrollReveal custom={1}>
            <div className={styles.missionCard}>
              <div className={styles.cardBadge}>
                <span>🎯</span> Corporate Mission
              </div>
              <blockquote className={styles.quote}>
                &ldquo;To drive sustainable growth by fostering innovation, providing
                exceptional services, and creating value for our stakeholders
                across diverse industries.&rdquo;
              </blockquote>
              <div className={styles.quoteAccent} />
            </div>
          </ScrollReveal>
        </div>

        {/* Values Section */}
        <motion.div
          ref={valuesRef}
          className={styles.valuesSection}
          initial={{ opacity: 0 }}
          animate={valuesInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className={styles.valuesHeading}>Our Core Values</h3>
          <div className={styles.valuesGrid}>
            {values.map((val, i) => (
              <motion.div
                key={i}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={valuesInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
                transition={{ delay: 0.1 + i * 0.12, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <div className={styles.valueIconWrapper}>
                  <span className={styles.icon}>{val.icon}</span>
                  <div className={styles.iconGlow} />
                </div>
                <p className={styles.valueTitle}>{val.title}</p>
                <p className={styles.valueDesc}>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
