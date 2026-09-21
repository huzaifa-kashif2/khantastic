import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaCode, FaMobileAlt, FaPaintBrush, FaCloud, FaBrain,
  FaCogs, FaArrowRight, FaCheck, FaReact, FaNodeJs,
  FaPython, FaAws, FaDocker, FaFigma, FaStar, FaBolt
} from "react-icons/fa";
import {
  SiNextdotjs, SiFlutter, SiTailwindcss, SiMongodb,
  SiPostgresql, SiFirebase, SiTypescript, SiKubernetes
} from "react-icons/si";
import KVCodesNavbar from "../components/KVCodesNavbar";
import KVCodesFooter from "../components/KVCodesFooter";
import kvcodesLogo from "../assets/kvcodes_logo.jpeg";
import styles from "../styles/KVCodes.module.css";

/* =================== CONSTANTS =================== */

const TAGLINES = [
  "Your Partner in Tech Excellence.",
  "From Concept to Deployment.",
  "Scalable Solutions. Real Results.",
];

const SERVICES = [
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "Blazing-fast, scalable web apps built with React, Next.js, and modern full-stack architecture.",
    tags: ["React", "Next.js", "Node.js"],
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Apps",
    desc: "Cross-platform iOS & Android apps with React Native or Flutter — native feel, single codebase.",
    tags: ["React Native", "Flutter", "iOS/Android"],
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    desc: "User-first interfaces that convert. We design systems that feel intuitive and look stunning.",
    tags: ["Figma", "Prototyping", "Design Systems"],
  },
  {
    icon: <FaCloud />,
    title: "Cloud & DevOps",
    desc: "AWS, GCP, CI/CD pipelines, Docker, and Kubernetes — so your infra scales with your ambition.",
    tags: ["AWS", "Docker", "Kubernetes"],
  },
  {
    icon: <FaBrain />,
    title: "AI/ML Solutions",
    desc: "Intelligent automation, NLP, computer vision, and custom LLM integrations for your product.",
    tags: ["Python", "TensorFlow", "LLMs"],
  },
  {
    icon: <FaCogs />,
    title: "Custom Software & ERPs",
    desc: "Bespoke enterprise software, CRMs, ERPs, and internal tools that eliminate operational friction.",
    tags: ["Enterprise", "Automation", "APIs"],
  },
];

const STATS = [
  { end: 50, suffix: "+", label: "Projects Delivered" },
  { end: 30, suffix: "+", label: "Happy Clients" },
  { end: 5,  suffix: "+", label: "Years Experience"  },
  { end: 99, suffix: "%", label: "Client Satisfaction" },
];

const PROCESS_STEPS = [
  { num: "01", title: "Discovery",  desc: "We deep-dive into your goals, market, and requirements to build a crystal-clear project roadmap.", icon: "🔍" },
  { num: "02", title: "Design",     desc: "Our UI/UX team crafts wireframes and high-fidelity prototypes — you approve every pixel.",       icon: "🎨" },
  { num: "03", title: "Develop",    desc: "Agile sprints, clean code, and constant communication — you see progress every single week.",     icon: "💻" },
  { num: "04", title: "Deploy",     desc: "We launch, monitor, and hand over complete documentation. Your success is our success.",           icon: "🚀" },
];

const TECH_STACK = [
  { icon: <FaReact />,       name: "React",      color: "#61dafb" },
  { icon: <SiNextdotjs />,   name: "Next.js",    color: "#fff"    },
  { icon: <FaNodeJs />,      name: "Node.js",    color: "#8cc84b" },
  { icon: <SiTypescript />,  name: "TypeScript", color: "#3178c6" },
  { icon: <SiFlutter />,     name: "Flutter",    color: "#54c5f8" },
  { icon: <FaPython />,      name: "Python",     color: "#ffd343" },
  { icon: <FaAws />,         name: "AWS",        color: "#ff9900" },
  { icon: <FaDocker />,      name: "Docker",     color: "#2496ed" },
  { icon: <SiKubernetes />,  name: "Kubernetes", color: "#326ce5" },
  { icon: <SiMongodb />,     name: "MongoDB",    color: "#47a248" },
  { icon: <SiPostgresql />,  name: "PostgreSQL", color: "#336791" },
  { icon: <SiFirebase />,    name: "Firebase",   color: "#ffca28" },
  { icon: <SiTailwindcss />, name: "Tailwind",   color: "#38bdf8" },
  { icon: <FaFigma />,       name: "Figma",      color: "#f472b6" },
];

const WHY_US = [
  "Pakistan's fastest-growing software house",
  "End-to-end product ownership — from idea to launch",
  "Dedicated project managers & agile sprints",
  "Transparent pricing — no hidden surprises",
  "Post-launch support & maintenance included",
  "Global clients, local expertise",
];

/* =================== SUB-COMPONENTS =================== */

/** Animated stat counter (same logic as Xyden's AnimatedCounter) */
function StatCounter({ end, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const inc = end / 80;
    const timer = setInterval(() => {
      current += inc;
      if (current >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 20);
    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <div ref={ref} className={styles.statItem}>
      <span className={styles.statNumber}>{count}{suffix}</span>
      <div className={styles.statUnderline} />
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

/** Service card — Xyden-style icon box + top-bar reveal */
function ServiceCard({ service, index }) {
  return (
    <motion.div
      className={`${styles.serviceCard} group`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Top bar — scales from left on hover */}
      <div className={styles.cardTopBar} />

      {/* Icon box */}
      <div className={styles.cardIconBox}>
        <span className={styles.cardIconWrap}>{service.icon}</span>
      </div>

      <h3 className={styles.cardTitle}>{service.title}</h3>
      <p className={styles.cardDesc}>{service.desc}</p>

      <div className={styles.cardTags}>
        {service.tags.map((t) => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>

      <div className={styles.cardLearnMore}>
        <span>Learn More</span>
        <FaArrowRight className={styles.learnArrow} />
      </div>
    </motion.div>
  );
}

/** Right-side concentric spinning rings with floating badges (Xyden-inspired) */
function HeroRings() {
  return (
    <div className={styles.ringsWrap}>
      {/* Ambient glow */}
      <div className={styles.ringsGlow} />

      <div className={styles.ringsFrame}>
        {/* Outer ring */}
        <div className={styles.ring1}>
          <div className={styles.ring1DotTop} />
          <div className={styles.ring1DotBot} />
        </div>

        {/* Middle ring */}
        <div className={styles.ring2}>
          <div className={styles.ring2Dot} />
        </div>

        {/* Inner dashed ring */}
        <div className={styles.ring3} />

        {/* Center glow pulse */}
        <div className={styles.ringCenterGlow} />

        {/* Center icon */}
        <div className={styles.ringCenter}>
          <img src={kvcodesLogo} alt="KV Codes" className={styles.ringCenterImg} />
        </div>

        {/* Floating badges */}
        <div className={`${styles.floatBadge} ${styles.floatBadge1}`}>
          <span className={styles.greenDot} />
          <span>Pakistan's #1 Choice</span>
        </div>

        <div className={`${styles.floatBadge} ${styles.floatBadge2}`}>
          <FaStar className={styles.badgeStarIcon} />
          <span>5.0 Client Rating</span>
        </div>

        <div className={`${styles.floatBadge} ${styles.floatBadge3}`}>
          <FaBolt className={styles.badgeBoltIcon} />
          <span>Fast Delivery</span>
        </div>

        {/* Corner dots */}
        <div className={`${styles.cornerDot} ${styles.cdTL}`} />
        <div className={`${styles.cornerDot} ${styles.cdTR}`} />
        <div className={`${styles.cornerDot} ${styles.cdBL}`} />
        <div className={`${styles.cornerDot} ${styles.cdBR}`} />
      </div>
    </div>
  );
}

/* =================== MAIN PAGE =================== */
export default function KVCodes() {
  /* Entrance loaded state */
  const [loaded, setLoaded] = useState(false);

  /* Typewriter */
  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayedText, setDisplayedText]   = useState("");
  const [isDeleting, setIsDeleting]         = useState(false);

  /* — Process progress — */
  const STEP_COUNT         = PROCESS_STEPS.length;
  const DURATION_PER_STEP  = 3; // seconds
  
  const [activeStep, setActiveStep] = useState(0);
  const [timerKey, setTimerKey] = useState(0); // forces reset on click
  
  const lineControls = useAnimation();

  /* Stats visible for counter */
  const statsRef             = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  /* — Mount — */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  /* — Typewriter — */
  useEffect(() => {
    const full = TAGLINES[currentTagline];
    let timeout;
    if (!isDeleting && displayedText === full) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentTagline((p) => (p + 1) % TAGLINES.length);
    } else {
      const speed = isDeleting ? 30 : 60;
      timeout = setTimeout(() => {
        setDisplayedText(
          isDeleting
            ? full.substring(0, displayedText.length - 1)
            : full.substring(0, displayedText.length + 1)
        );
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTagline]);

  /* — Process interval — */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEP_COUNT);
    }, DURATION_PER_STEP * 1000);
    return () => clearInterval(timer);
  }, [timerKey, STEP_COUNT]);

  /* — Process line animation — */
  useEffect(() => {
    if (activeStep === 0) {
      // Snap back to 0 immediately
      lineControls.set({ width: "0%" });
      lineControls.start({
        width: `${(1 / STEP_COUNT) * 100}%`,
        transition: { duration: DURATION_PER_STEP, ease: "linear" }
      });
    } else {
      // Smoothly progress to the next fraction
      lineControls.start({
        width: `${((activeStep + 1) / STEP_COUNT) * 100}%`,
        transition: { duration: DURATION_PER_STEP, ease: "linear" }
      });
    }
  }, [activeStep, lineControls, STEP_COUNT, DURATION_PER_STEP]);

  /* — Stats observer — */
  useEffect(() => {
    if (!statsRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const goToStep = (i) => {
    setActiveStep(i);
    setTimerKey(prev => prev + 1);
  };

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  /* =================== RENDER =================== */
  return (
    <div className={styles.kvPage}>
      <KVCodesNavbar />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section id="hero" className={styles.hero}>

        {/* — Background layers — */}
        <div className={styles.heroBg} />

        {/* Dot grid */}
        <div className={styles.dotGrid} />

        {/* Diagonal SVG lines */}
        <svg className={styles.diagLines} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="kv-diag" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <line x1="0" y1="100" x2="100" y2="0" stroke="#FFD700" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#kv-diag)" />
        </svg>

        {/* Spinning conic orbs */}
        <div className={styles.conicOrb1} aria-hidden="true" />
        <div className={styles.conicOrb2} aria-hidden="true" />

        {/* Floating gold particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={styles.floatParticle}
            aria-hidden="true"
            style={{
              left: `${10 + i * 10}%`,
              top: `${15 + (i % 4) * 18}%`,
              animationDuration: `${4 + i * 0.7}s`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}

        {/* — Hero content — */}
        <div className={styles.heroInner}>

          {/* Left column */}
          <div className={styles.heroLeft}>

            {/* Badge */}
            <div
              className={styles.heroBadge}
              style={{
                opacity:    loaded ? 1 : 0,
                transform:  loaded ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s",
              }}
            >
              <div className={styles.pingWrap}>
                <span className={styles.pingRing} />
                <span className={styles.pingDot} />
              </div>
              Software House · Lahore, Pakistan
            </div>

            {/* Title */}
            <div
              style={{
                opacity:    loaded ? 1 : 0,
                transform:  loaded ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 1s ease-out 0.4s, transform 1s ease-out 0.4s",
              }}
            >
              <h1 className={styles.heroTitle}>Innovate. Build.</h1>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroGradient}>Scale.</span>
              </h1>
            </div>

            {/* Typewriter */}
            <div
              className={styles.typewriterRow}
              style={{
                opacity:    loaded ? 1 : 0,
                transform:  loaded ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 1s ease-out 0.6s, transform 1s ease-out 0.6s",
              }}
            >
              <div className={styles.typewriterAccent} />
              <p className={styles.typewriterText}>
                {displayedText}
                <span className={styles.twCursor} />
              </p>
            </div>

            {/* Subtitle */}
            <p
              className={styles.heroSubtitle}
              style={{
                opacity:    loaded ? 1 : 0,
                transform:  loaded ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 1s ease-out 0.8s, transform 1s ease-out 0.8s",
              }}
            >
              KV Codes is a full-service software house delivering world-class web apps,
              mobile solutions, AI integrations, and enterprise software for ambitious businesses.
            </p>

            {/* Buttons */}
            <div
              className={styles.heroButtons}
              style={{
                opacity:    loaded ? 1 : 0,
                transform:  loaded ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 1s ease-out 1s, transform 1s ease-out 1s",
              }}
            >
              {/* Primary — solid gold */}
              <button className={styles.primaryBtn} onClick={scrollToContact}>
                <span className={styles.primaryShimmer} aria-hidden="true" />
                <span className={styles.primaryContent}>
                  Start Your Project
                  <FaArrowRight className={styles.primaryArrow} />
                </span>
              </button>

              {/* Secondary — spinning conic border (Xyden pattern) */}
              <button
                className={styles.secondaryBtn}
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className={styles.conicSpin}     aria-hidden="true" />
                <span className={styles.conicFill}     aria-hidden="true" />
                <span className={styles.conicShimmer}  aria-hidden="true" />
                <span className={styles.secondaryContent}>
                  Explore Services
                </span>
              </button>
            </div>

            {/* Tech tags */}
            <div
              className={styles.heroTags}
              style={{
                opacity:    loaded ? 1 : 0,
                transition: "opacity 1s ease-out 1.2s",
              }}
            >
              {["React", "Next.js", "Flutter", "AWS", "AI/ML", "DevOps"].map((t) => (
                <span key={t} className={styles.heroTag}>{t}</span>
              ))}
            </div>
          </div>

          {/* Right column — concentric rings */}
          <div
            className={styles.heroRight}
            style={{
              opacity:    loaded ? 1 : 0,
              transform:  loaded ? "translateX(0) scale(1)" : "translateX(60px) scale(0.85)",
              transition: "opacity 1.5s ease-out 0.6s, transform 1.5s ease-out 0.6s",
            }}
          >
            <HeroRings />
          </div>
        </div>

        {/* Bottom fade */}
        <div className={styles.heroBottomFade} aria-hidden="true" />
      </section>

      {/* ═══════════════════ SERVICES ═══════════════════ */}
      <section id="services" className={styles.section}>
        <div className={styles.sectionCenterGlow} />
        <div className={styles.sectionInner}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className={styles.sectionLabel}>What We Do</span>
            <h2 className={styles.sectionTitle}>Our Services</h2>
            <p className={styles.sectionSubtitle}>
              From concept to deployment — we cover every layer of your digital product.
            </p>
          </motion.div>

          <div className={styles.servicesGrid}>
            {SERVICES.map((svc, i) => (
              <ServiceCard key={svc.title} service={svc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ WHY US + STATS ═══════════════════ */}
      <section id="whyus" className={styles.whySection}>
        <div className={styles.whyGlow} />
        <div className={styles.sectionInner}>
          <div className={styles.whyGrid}>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              className={styles.statsCol}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className={styles.sectionLabel}>By the Numbers</span>
              <h2 className={`${styles.sectionTitle} ${styles.leftAlign}`}>
                Results That <span className={styles.gradientSpan}>Speak</span>
              </h2>
              <div className={styles.statsGrid}>
                {STATS.map((s) => (
                  <StatCounter key={s.label} {...s} />
                ))}
              </div>
            </motion.div>

            {/* Why us */}
            <motion.div
              className={styles.whyCol}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <span className={styles.sectionLabel}>Why KV Codes</span>
              <h2 className={`${styles.sectionTitle} ${styles.leftAlign}`}>
                Your Trusted <span className={styles.gradientSpan}>Tech Partner</span>
              </h2>
              <div className={styles.whyList}>
                {WHY_US.map((item, i) => (
                  <motion.div
                    key={i}
                    className={styles.whyItem}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <div className={styles.whyCheck}><FaCheck /></div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ PROCESS ═══════════════════ */}
      <section id="process" className={styles.section}>
        <div className={styles.sectionInner}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className={styles.sectionLabel}>How We Work</span>
            <h2 className={styles.sectionTitle}>
              Our <span className={styles.gradientSpan}>Process</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              A battle-tested 4-step framework that turns your vision into a live product.
            </p>
          </motion.div>

          {/* Framer-motion driven progress line */}
          <div className={styles.processLineTrack}>
            <motion.div 
              className={styles.processLineFill} 
              animate={lineControls} 
              initial={{ width: "0%" }}
            />
          </div>

          {/* Process cards */}
          <div className={styles.processTrack}>
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                className={`${styles.processCard} ${activeStep === i ? styles.processCardActive : ""}`}
                onClick={() => goToStep(i)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >

                <div className={styles.processNum}>{step.num}</div>
                <div className={styles.processEmoji}>{step.icon}</div>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ TECH STACK ═══════════════════ */}
      <section id="techstack" className={styles.techSection}>
        <div className={styles.techGlow} />
        <div className={styles.sectionInner}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionLabel}>Tech Stack</span>
            <h2 className={styles.sectionTitle}>
              Built with the <span className={styles.gradientSpan}>Best Tools</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Cutting-edge, battle-tested technologies powering every product we build.
            </p>
          </motion.div>

          <div className={styles.techGrid}>
            {TECH_STACK.map((tech, i) => (
              <motion.div
                key={tech.name}
                className={styles.techCard}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                whileHover={{ y: -6, scale: 1.06 }}
              >
                <span className={styles.techIcon} style={{ color: tech.color }}>{tech.icon}</span>
                <span className={styles.techName}>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA / CONTACT ═══════════════════ */}
      <section id="contact" className={styles.ctaSection}>
        <div className={styles.ctaOrb1} />
        <div className={styles.ctaOrb2} />
        <div className={styles.ctaDotGrid} />

        <motion.div
          className={styles.ctaInner}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.ctaStars}>
            {[...Array(5)].map((_, i) => <FaStar key={i} className={styles.star} />)}
            <span>Trusted by 30+ clients worldwide</span>
          </div>

          <h2 className={styles.ctaTitle}>
            Ready to Build<br />
            <span className={styles.heroGradient}>Something Great?</span>
          </h2>
          <p className={styles.ctaSubtitle}>
            Tell us about your project and we'll get back to you within 24 hours
            with a free consultation and proposal.
          </p>

          <div className={styles.ctaForm}>
            <div className={styles.formRow}>
              <input type="text"  placeholder="Your Name"        className={styles.formInput} />
              <input type="email" placeholder="Email Address"    className={styles.formInput} />
            </div>
            <input  type="text"   placeholder="Project Description" className={styles.formInput} style={{ width: "100%" }} />
            <select className={styles.formInput} style={{ width: "100%" }} defaultValue="">
              <option value="" disabled>Select Service</option>
              {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
            </select>
            <motion.button
              className={styles.ctaSubmitBtn}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className={styles.ctaBtnShimmer} aria-hidden="true" />
              <span className={styles.ctaBtnContent}>
                Get Free Consultation
                <FaArrowRight />
              </span>
            </motion.button>
          </div>

          <div className={styles.ctaContact}>
            <span>Or email us directly at</span>
            <a href="mailto:info@kvcodes.dev" className={styles.ctaEmail}>info@kvcodes.dev</a>
          </div>
        </motion.div>
      </section>

      <KVCodesFooter />
    </div>
  );
}
