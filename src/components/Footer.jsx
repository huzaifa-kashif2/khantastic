import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "../styles/Footer.module.css";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.jpeg";

export default function Footer() {
  const navigate = useNavigate();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Who We Are", path: "/who-we-are" },
    { name: "About Us", path: "/about-us" },
    { name: "Our Ventures", path: "/ventures" },
    { name: "Consulting", path: "/consulting" },
    { name: "KVCodes", path: "/kvcodes" },
    { name: "Let's Chat", path: "/contact" },
  ];

  const socials = [
    { icon: <FaLinkedin />, label: "LinkedIn", href: "#" },
    { icon: <FaInstagram />, label: "Instagram", href: "#" },
    { icon: <FaFacebook />, label: "Facebook", href: "#" },
    { icon: <FaTwitter />, label: "Twitter", href: "#" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      {/* Top glow line */}
      <div className={styles.topGlow} />

      <div className={styles.container}>
        {/* Brand Column */}
        <div className={styles.brandColumn}>
          <motion.img
            src={logo}
            alt="Khantastic Ventures"
            className={styles.logo}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <p className={styles.tagline}>
            Empowering entrepreneurs. Building the future of Pakistan.
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Quick Links</h3>
          <ul className={styles.linkList}>
            {quickLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.footerLink} ${styles.active}`
                      : styles.footerLink
                  }
                >
                  <span className={styles.linkArrow}>›</span>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Contact</h3>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>✉️</span>
            <a href="mailto:info@khantastic.net" className={styles.contactLink}>
              info@khantastic.net
            </a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📍</span>
            <p className={styles.contactText}>
              Daftarkhwan Downtown,<br />Fatima Mateen Road, Lahore
            </p>
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Est. 2020 — Lahore, Pakistan
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © 2020–{new Date().getFullYear()} Khantastic Ventures. All rights reserved.
        </p>
        <div className={styles.bottomLinks}>
          <a href="#">Privacy Policy</a>
          <span>·</span>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
