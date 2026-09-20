import { useMemo, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "../styles/Home.module.css";

// Pre-compute particle data ONCE (outside component so it never re-computes)
const PARTICLE_DATA = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  left: `${(i * 10.3 + 5) % 100}%`,
  delay: `${(i * 0.9) % 7}s`,
  duration: `${7 + (i % 5)}s`,
  size: `${2 + (i % 3)}px`,
}));

// Typewriter component
function Typewriter({ words }) {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWord];
    const speed = isDeleting ? 65 : 110;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(word.slice(0, displayText.length + 1));
        if (displayText.length === word.length) {
          setTimeout(() => setIsDeleting(true), 1600);
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

// Stats counter with IntersectionObserver
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
    const duration = 1800;
    const steps = 40;
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
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const typewriterWords = useMemo(() => ["Entrepreneurs.", "Innovators.", "Dreamers.", "Leaders."], []);

  return (
    <motion.section
      ref={heroRef}
      className={styles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Static gradient orbs — no filter:blur, use box-shadow instead */}
      <div className={styles.orbsContainer} aria-hidden="true">
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
      </div>

      {/* Particles — pre-computed, no rotation */}
      <div className={styles.particles} aria-hidden="true">
        {PARTICLE_DATA.map((p) => (
          <div
            key={p.id}
            className={styles.particle}
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>

      {/* Static grid — no animation */}
      <div className={styles.gridLines} aria-hidden="true" />

      <motion.div className={styles.content} style={{ y, opacity }}>
        {/* Badge */}
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.45, type: "spring", stiffness: 260 }}
        >
          <span className={styles.badgeDot} />
          Pakistan&apos;s Premier Venture Studio
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Empowering{" "}
          <Typewriter words={typewriterWords} />
          <br />
          <span className={styles.gradientText}>Building the Future.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          We invest in innovative startups, drive strategic growth, and nurture
          Pakistan&apos;s entrepreneurial ecosystem.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.55 }}
        >
          <Link to="/ventures" className={styles.primaryBtn}>
            Explore Ventures
            <span className={styles.btnArrow}>→</span>
          </Link>
          <Link to="/contact" className={styles.secondaryBtn}>
            Let&apos;s Chat
          </Link>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className={styles.statsRow}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.82, duration: 0.6 }}
        >
          <StatCounter end={9} suffix="+" label="Active Ventures" />
          <div className={styles.statDivider} />
          <StatCounter end={25} suffix="+" label="Years Experience" />
          <div className={styles.statDivider} />
          <StatCounter end={2020} suffix="" label="Est. Year" />
        </motion.div>
      </motion.div>

    </motion.section>
  );
}
