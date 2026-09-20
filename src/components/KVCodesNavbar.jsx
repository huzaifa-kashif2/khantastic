import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";
import styles from "../styles/KVCodesNavbar.module.css";

const NAV_ITEMS = [
  { name: "Home",      href: "hero" },
  { name: "Services",  href: "services" },
  { name: "Why Us",    href: "whyus" },
  { name: "Process",   href: "process" },
  { name: "Tech Stack",href: "techstack" },
];

export default function KVCodesNavbar() {
  const [scrolled,        setScrolled]        = useState(false);
  const [menuOpen,        setMenuOpen]        = useState(false);
  const [activeId,        setActiveId]        = useState("hero");
  const [contactVisible,  setContactVisible]  = useState(false);
  const navigate    = useNavigate();
  const observerRef = useRef(null);
  const contactObserverRef = useRef(null);

  /* ── Scroll-glass effect ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Body lock when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ── IntersectionObserver: highlight active section ── */
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((n) => n.href);

    // Persistent map: id → intersectionRatio for all currently-visible sections
    const visibleMap = new Map();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleMap.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleMap.delete(entry.target.id);
          }
        });

        if (visibleMap.size > 0) {
          // Pick the section with the highest visible ratio
          let bestId = "";
          let bestRatio = -1;
          visibleMap.forEach((ratio, id) => {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              bestId = id;
            }
          });
          setActiveId(bestId);
        } else {
          // Nothing in the detection band → remove all highlights
          setActiveId("");
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  /* ── Separate observer for #contact → highlight CTA button ── */
  useEffect(() => {
    contactObserverRef.current = new IntersectionObserver(
      ([entry]) => setContactVisible(entry.isIntersecting),
      {
        root: null,
        rootMargin: "-10% 0px -10% 0px",
        threshold: 0.1,
      }
    );
    const el = document.getElementById("contact");
    if (el) contactObserverRef.current.observe(el);
    return () => contactObserverRef.current?.disconnect();
  }, []);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Logo */}
        <div className={styles.logo} onClick={() => navigate("/")} role="button" tabIndex={0}>
          <div className={styles.logoIcon}><FaCode /></div>
          <span className={styles.logoText}>
            KV<span className={styles.logoCyan}>Codes</span>
          </span>
        </div>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span key="close"
                initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                <FaTimes />
              </motion.span>
            ) : (
              <motion.span key="open"
                initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                <FaBars />
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        {/* Nav links */}
        <nav className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.href;
            return (
              <button
                key={item.href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
                {/* Animated underline indicator */}
                {isActive && (
                  <motion.span
                    className={styles.activeBar}
                    layoutId="kv-nav-indicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}

          <button
            className={`${styles.ctaBtn} ${contactVisible ? styles.ctaBtnActive : ""}`}
            onClick={() => scrollToSection("contact")}
          >
            Get a Quote
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
