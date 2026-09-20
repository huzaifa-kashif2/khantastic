import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  FaCode, FaMobileAlt, FaPaintBrush, FaCloud, FaBrain,
  FaCogs, FaArrowRight, FaCheck, FaReact, FaNodeJs,
  FaPython, FaAws, FaDocker, FaFigma, FaStar
} from "react-icons/fa";
import {
  SiNextdotjs, SiFlutter, SiTailwindcss, SiMongodb,
  SiPostgresql, SiFirebase, SiTypescript, SiKubernetes
} from "react-icons/si";
import KVCodesNavbar from "../components/KVCodesNavbar";
import KVCodesFooter from "../components/KVCodesFooter";
import styles from "../styles/KVCodes.module.css";

/* ===================== CONSTANTS ===================== */
const SERVICES = [
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "Blazing-fast, scalable web apps built with React, Next.js, and modern full-stack architecture.",
    tags: ["React", "Next.js", "Node.js"],
    color: "#00e6ff",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Apps",
    desc: "Cross-platform iOS & Android apps with React Native or Flutter — native feel, single codebase.",
    tags: ["React Native", "Flutter", "iOS/Android"],
    color: "#7c3aed",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    desc: "User-first interfaces that convert. We design systems that feel intuitive and look stunning.",
    tags: ["Figma", "Prototyping", "Design Systems"],
    color: "#f472b6",
  },
  {
    icon: <FaCloud />,
    title: "Cloud & DevOps",
    desc: "AWS, GCP, CI/CD pipelines, Docker, and Kubernetes — so your infra scales with your ambition.",
    tags: ["AWS", "Docker", "Kubernetes"],
    color: "#34d399",
  },
  {
    icon: <FaBrain />,
    title: "AI/ML Solutions",
    desc: "Intelligent automation, NLP, computer vision, and custom LLM integrations for your product.",
    tags: ["Python", "TensorFlow", "LLMs"],
    color: "#fbbf24",
  },
  {
    icon: <FaCogs />,
    title: "Custom Software & ERPs",
    desc: "Bespoke enterprise software, CRMs, ERPs, and internal tools that eliminate operational friction.",
    tags: ["Enterprise", "Automation", "APIs"],
    color: "#fb7185",
  },
];

const STATS = [
  { end: 50, suffix: "+", label: "Projects Delivered" },
  { end: 30, suffix: "+", label: "Happy Clients" },
  { end: 5, suffix: "+", label: "Years Experience" },
  { end: 99, suffix: "%", label: "Client Satisfaction" },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery",
    desc: "We deep-dive into your goals, market, and requirements to build a crystal-clear project roadmap.",
    icon: "🔍",
  },
  {
    num: "02",
    title: "Design",
    desc: "Our UI/UX team crafts wireframes and high-fidelity prototypes — you approve every pixel.",
    icon: "🎨",
  },
  {
    num: "03",
    title: "Develop",
    desc: "Agile sprints, clean code, and constant communication — you see progress every single week.",
    icon: "💻",
  },
  {
    num: "04",
    title: "Deploy",
    desc: "We launch, monitor, and hand over complete documentation. Your success is our success.",
    icon: "🚀",
  },
];

const TECH_STACK = [
  { icon: <FaReact />, name: "React", color: "#61dafb" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "#fff" },
  { icon: <FaNodeJs />, name: "Node.js", color: "#8cc84b" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178c6" },
  { icon: <SiFlutter />, name: "Flutter", color: "#54c5f8" },
  { icon: <FaPython />, name: "Python", color: "#ffd343" },
  { icon: <FaAws />, name: "AWS", color: "#ff9900" },
  { icon: <FaDocker />, name: "Docker", color: "#2496ed" },
  { icon: <SiKubernetes />, name: "Kubernetes", color: "#326ce5" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#47a248" },
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
  { icon: <SiFirebase />, name: "Firebase", color: "#ffca28" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "#38bdf8" },
  { icon: <FaFigma />, name: "Figma", color: "#f472b6" },
];

const WHY_US = [
  "Pakistan's fastest-growing software house",
  "End-to-end product ownership — from idea to launch",
  "Dedicated project managers & agile sprints",
  "Transparent pricing — no hidden surprises",
  "Post-launch support & maintenance included",
  "Global clients, local expertise",
];

/* ===================== SUBCOMPONENTS ===================== */

// Animated stat counter
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
    const steps = 50;
    const duration = 2000;
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

// Code rain canvas
function CodeRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const cols = Math.floor(canvas.width / 20);
    const drops = Array(cols).fill(1);
    const chars = "01アイウエオKVCODES</>{}[]();";

    const draw = () => {
      ctx.fillStyle = "rgba(3, 7, 18, 0.07)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0, 230, 255, 0.35)";
      ctx.font = "13px monospace";

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * 20, y * 20);
        if (y * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.codeRain} />;
}

// Service card
function ServiceCard({ service, index }) {
  return (
    <motion.div
      className={styles.serviceCard}
      style={{ "--card-color": service.color }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      <div className={styles.cardGlow} />
      <div className={styles.cardIcon} style={{ color: service.color }}>
        {service.icon}
      </div>
      <h3 className={styles.cardTitle}>{service.title}</h3>
      <p className={styles.cardDesc}>{service.desc}</p>
      <div className={styles.cardTags}>
        {service.tags.map((t) => (
          <span key={t} className={styles.tag} style={{ borderColor: `${service.color}40`, color: service.color }}>
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/* ===================== MAIN PAGE ===================== */
export default function KVCodes() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.kvPage}>
      <KVCodesNavbar />

      {/* =========== HERO =========== */}
      <section id="hero" ref={heroRef} className={styles.hero}>
        <CodeRain />
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />
        <div className={styles.heroOrb3} />

        <motion.div className={styles.heroContent} style={{ y: heroY, opacity: heroOpacity }}>
          <motion.div
            className={styles.heroBadge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
          >
            <span className={styles.badgePulse} />
            Software House · Lahore, Pakistan
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            We Build
            <br />
            <span className={styles.heroGradient}>Digital Products</span>
            <br />
            That <span className={styles.heroUnderline}>Scale.</span>
          </motion.h1>

          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            KV Codes is a full-service software house delivering world-class web apps,
            mobile solutions, AI integrations, and enterprise software for ambitious startups and businesses.
          </motion.p>

          <motion.div
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.55 }}
          >
            <button className={styles.primaryBtn} onClick={scrollToContact}>
              Start Your Project
              <FaArrowRight className={styles.btnIcon} />
            </button>
            <button
              className={styles.secondaryBtn}
              onClick={() => document.querySelector("#services").scrollIntoView({ behavior: "smooth" })}
            >
              Explore Services
            </button>
          </motion.div>

          <motion.div
            className={styles.heroTags}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            {["React", "Next.js", "Flutter", "AWS", "AI/ML", "DevOps"].map((t) => (
              <span key={t} className={styles.heroTag}>{t}</span>
            ))}
          </motion.div>
        </motion.div>

      </section>

      {/* =========== SERVICES =========== */}
      <section id="services" className={styles.section}>
        <div className={styles.sectionInner}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionBadge}>What We Do</span>
            <h2 className={styles.sectionTitle}>
              Services Built for{" "}
              <span className={styles.gradientText}>Scale</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              From idea to deployment — we cover every layer of your digital product.
            </p>
          </motion.div>

          <div className={styles.servicesGrid}>
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* =========== WHY US + STATS =========== */}
      <section id="whyus" className={styles.whySection}>
        <div className={styles.whyGlow} />
        <div className={styles.sectionInner}>
          <div className={styles.whyGrid}>
            {/* Left: Stats */}
            <motion.div
              className={styles.statsCol}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.sectionBadge}>By the Numbers</span>
              <h2 className={styles.sectionTitle} style={{ textAlign: "left", marginBottom: "2.5rem" }}>
                Results That <span className={styles.gradientText}>Speak</span>
              </h2>
              <div className={styles.statsGrid}>
                {STATS.map((s) => (
                  <StatCounter key={s.label} {...s} />
                ))}
              </div>
            </motion.div>

            {/* Right: Why Us */}
            <motion.div
              className={styles.whyCol}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className={styles.sectionBadge}>Why KV Codes</span>
              <h2 className={styles.sectionTitle} style={{ textAlign: "left", marginBottom: "2rem" }}>
                Your Trusted <span className={styles.gradientText}>Tech Partner</span>
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
                    <div className={styles.whyCheck}>
                      <FaCheck />
                    </div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========== PROCESS =========== */}
      <section id="process" className={styles.section}>
        <div className={styles.sectionInner}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionBadge}>How We Work</span>
            <h2 className={styles.sectionTitle}>
              Our <span className={styles.gradientText}>Process</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              A battle-tested 4-step framework that turns your vision into a live product.
            </p>
          </motion.div>

          <div className={styles.processTrack}>
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                className={styles.processCard}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={styles.processNum}>{step.num}</div>
                <div className={styles.processEmoji}>{step.icon}</div>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.desc}</p>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className={styles.processArrow}>→</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========== TECH STACK =========== */}
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
            <span className={styles.sectionBadge}>Tech Stack</span>
            <h2 className={styles.sectionTitle}>
              Built with the <span className={styles.gradientText}>Best Tools</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              We use cutting-edge, battle-tested technologies to power every product we build.
            </p>
          </motion.div>

          <div className={styles.techGrid}>
            {TECH_STACK.map((tech, i) => (
              <motion.div
                key={tech.name}
                className={styles.techCard}
                style={{ "--tech-color": tech.color }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                whileHover={{ y: -4, scale: 1.05 }}
              >
                <span className={styles.techIcon} style={{ color: tech.color }}>{tech.icon}</span>
                <span className={styles.techName}>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========== CTA / CONTACT =========== */}
      <section id="contact" className={styles.ctaSection}>
        <div className={styles.ctaOrb1} />
        <div className={styles.ctaOrb2} />
        <div className={styles.ctaGrid} />

        <motion.div
          className={styles.ctaInner}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.ctaStars}>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={styles.star} />
            ))}
            <span>Trusted by 30+ clients worldwide</span>
          </div>

          <h2 className={styles.ctaTitle}>
            Ready to Build
            <br />
            <span className={styles.heroGradient}>Something Great?</span>
          </h2>
          <p className={styles.ctaSubtitle}>
            Tell us about your project and we'll get back to you within 24 hours
            with a free consultation and proposal.
          </p>

          <div className={styles.ctaForm}>
            <div className={styles.formRow}>
              <input type="text" placeholder="Your Name" className={styles.formInput} />
              <input type="email" placeholder="Email Address" className={styles.formInput} />
            </div>
            <input type="text" placeholder="Project Description" className={styles.formInput} style={{ width: "100%" }} />
            <select className={styles.formInput} style={{ width: "100%" }}>
              <option value="" disabled selected>Select Service</option>
              {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
            </select>
            <motion.button
              className={styles.ctaSubmitBtn}
              whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(0,230,255,0.5), 0 0 80px rgba(124,58,237,0.3)" }}
              whileTap={{ scale: 0.97 }}
            >
              Get Free Consultation
              <FaArrowRight />
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
