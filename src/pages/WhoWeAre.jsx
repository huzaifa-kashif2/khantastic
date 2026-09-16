import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "../styles/WhoWeAre.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" }
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

function AnimatedSection({ children, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={stagger}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export default function WhoWeAre() {
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-80px" });

  const timelineItems = [
    { year: "2020", milestone: "Khantastic Ventures officially launched", icon: "🚀" },
    { year: "2021", milestone: "Launched 9 new ventures under Eight Venture Studio", icon: "🏗️" },
    { year: "2023", milestone: "Expanded into Management Consulting", icon: "📈" },
    { year: "2025", milestone: "Continuing to empower entrepreneurs across Pakistan", icon: "🌟" },
  ];

  return (
    <section className={styles.whoWeAre}>
      {/* Background decorations */}
      <div className={styles.bgDecor} aria-hidden="true">
        <div className={styles.bgCircle1} />
        <div className={styles.bgCircle2} />
      </div>

      <div className={styles.container}>
        {/* Section Header */}
        <AnimatedSection>
          <motion.div className={styles.sectionTag} variants={fadeUp}>
            Our Story
          </motion.div>
          <motion.h2 className={styles.heading} variants={fadeUp} custom={1}>
            Who We Are
          </motion.h2>
          <motion.div className={styles.headingLine} variants={fadeUp} custom={2} />
        </AnimatedSection>

        {/* Content Grid */}
        <AnimatedSection className={styles.contentWrapper}>
          <motion.div className={styles.left} variants={fadeUp} custom={0}>
            <div className={styles.textCard}>
              <div className={styles.textCardIcon}>🎯</div>
              <p className={styles.text}>
                We are a venture capital entity that aims to create and support
                Pakistan&apos;s entrepreneurial ecosystem by providing strategic
                direction and financial capital for startups to reach
                product-market fit and, most importantly, to create a platform for
                idea exploration.
              </p>
            </div>
          </motion.div>

          <motion.div className={styles.right} variants={fadeUp} custom={1}>
            <div className={styles.textCard}>
              <div className={styles.textCardIcon}>💡</div>
              <p className={styles.text}>
                Established in 2020 by senior management with over 25 years of
                experience in strategy development &amp; execution, digital marketing,
                product, and venture development across Pakistan and abroad.
              </p>
              <p className={styles.text} style={{ marginTop: "1rem" }}>
                Our management has advised, mentored, and served on boards of
                multiple tech startups and is deeply involved in the venture
                studio and startup ecosystem within and outside Pakistan.
              </p>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Timeline */}
        <motion.div
          ref={timelineRef}
          className={styles.timelineWrapper}
          initial={{ opacity: 0, y: 50 }}
          animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={styles.timelineTitle}>Our Journey</h3>

          <div className={styles.timeline}>
            <div className={styles.timelineLine}>
              <motion.div
                className={styles.timelineProgress}
                initial={{ scaleX: 0 }}
                animate={timelineInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
              />
            </div>

            {timelineItems.map((item, i) => (
              <motion.div
                key={item.year}
                className={styles.timelineItem}
                initial={{ opacity: 0, y: 30 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
              >
                <div className={styles.timelineDot}>
                  <span>{item.icon}</span>
                </div>
                <span className={styles.year}>{item.year}</span>
                <p className={styles.milestone}>{item.milestone}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
