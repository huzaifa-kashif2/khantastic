import { motion } from "framer-motion";
import { FaCode, FaLinkedin, FaInstagram, FaGithub, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import styles from "../styles/KVCodesFooter.module.css";

const services = [
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Cloud & DevOps",
  "AI/ML Solutions",
  "Custom Software",
];

const socials = [
  { icon: <FaLinkedin />, label: "LinkedIn", href: "#" },
  { icon: <FaGithub />, label: "GitHub", href: "#" },
  { icon: <FaInstagram />, label: "Instagram", href: "#" },
  { icon: <FaTwitter />, label: "Twitter", href: "#" },
];

export default function KVCodesFooter() {
  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      {/* Top glow border */}
      <div className={styles.topGlow} />

      {/* Grid overlay */}
      <div className={styles.gridOverlay} />

      <div className={styles.container}>
        {/* Brand column */}
        <div className={styles.brandCol}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}><FaCode /></div>
            <span className={styles.logoText}>KV<span className={styles.logoCyan}>Codes</span></span>
          </div>
          <p className={styles.tagline}>
            Building tomorrow's software, today.<br />
            A Khantastic Ventures company based in Lahore, Pakistan.
          </p>
          <div className={styles.socials}>
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                aria-label={s.label}
                className={styles.socialLink}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className={styles.column}>
          <h3 className={styles.colTitle}>Services</h3>
          <ul className={styles.linkList}>
            {services.map((s) => (
              <li key={s}>
                <span className={styles.linkArrow}>›</span>
                <span className={styles.linkText}>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div className={styles.column}>
          <h3 className={styles.colTitle}>Company</h3>
          <ul className={styles.linkList}>
            {[
              { label: "About KV Codes", href: "#hero" },
              { label: "Our Process", href: "#process" },
              { label: "Tech Stack", href: "#techstack" },
              { label: "Why Choose Us", href: "#whyus" },
              { label: "Khantastic Ventures", href: "/" },
            ].map((item) => (
              <li key={item.label}>
                <span className={styles.linkArrow}>›</span>
                <button
                  className={styles.linkBtn}
                  onClick={() => {
                    if (item.href.startsWith("/")) window.location.href = item.href;
                    else scrollToSection(item.href);
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.column}>
          <h3 className={styles.colTitle}>Contact</h3>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.contactIcon} />
            <a href="mailto:info@kvcodes.dev" className={styles.contactLink}>info@kvcodes.dev</a>
          </div>
          <div className={styles.contactItem}>
            <FaPhone className={styles.contactIcon} />
            <a href="tel:+923001234567" className={styles.contactLink}>+92 300 123 4567</a>
          </div>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.contactIcon} />
            <p className={styles.contactText}>Daftarkhwan Downtown,<br />Lahore, Pakistan</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} KV Codes — A <a href="/" className={styles.parentLink}>Khantastic Ventures</a> Company. All rights reserved.
        </p>
        <div className={styles.bottomLinks}>
          <a href="#">Privacy Policy</a>
          <span>·</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
