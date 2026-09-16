import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "../styles/Home.module.css";

// Animated floating orbs background
function FloatingOrbs() {
  return (
    <div className={styles.orbsContainer} aria-hidden="true">
      {[...Array(6)].map((_, i) => (
        <div key={i} className={`${styles.orb} ${styles[`orb${i + 1}`]}`} />
      ))}
    </div>
  );
}

// Animated particles
function Particles() {
  return (
    <div className={styles.particles} aria-hidden="true">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={styles.particle}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 6}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
          }}
        />
      ))}
    </div>
  );
}

// Typewriter component
function Typewriter({ words }) {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWord];
    const speed = isDeleting ? 60 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(word.slice(0, displayText.length + 1));
        if (displayText.length === word.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(word.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentWord((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWord, words]);

  return (
    <span className={styles.typewriter}>
      {displayText}
      <span className={styles.cursor}>|</span>
    </span>
  );
}

// Stats counter
function StatCounter({ end, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <div ref={ref} className={styles.statItem}>
      <span className={styles.statNumber}>{count}{suffix}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const typewriterWords = ["Entrepreneurs.", "Innovators.", "Dreamers.", "Leaders."];

  return (
    <motion.section
      ref={heroRef}
      className={styles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <FloatingOrbs />
      <Particles />

      {/* Animated grid lines */}
      <div className={styles.gridLines} aria-hidden="true" />

      <motion.div className={styles.content} style={{ y, opacity }}>
        {/* Badge */}
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
        >
          <span className={styles.badgeDot} />
          Pakistan&apos;s Premier Venture Studio
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        >
          Empowering{" "}
          <Typewriter words={typewriterWords} />
          <br />
          <span className={styles.gradientText}>Building the Future.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          We invest in innovative startups, drive strategic growth, and nurture
          Pakistan&apos;s entrepreneurial ecosystem.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
            <Link to="/ventures" className={styles.primaryBtn}>
              <span>Explore Ventures</span>
              <span className={styles.btnArrow}>→</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
            <Link to="/contact" className={styles.secondaryBtn}>
              Let&apos;s Chat
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className={styles.statsRow}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
        >
          <StatCounter end={9} suffix="+" label="Active Ventures" />
          <div className={styles.statDivider} />
          <StatCounter end={25} suffix="+" label="Years Experience" />
          <div className={styles.statDivider} />
          <StatCounter end={2020} suffix="" label="Est. Year" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span>Scroll to explore</span>
      </motion.div>
    </motion.section>
  );
}
