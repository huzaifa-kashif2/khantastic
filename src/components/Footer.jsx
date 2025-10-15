import { NavLink, useNavigate } from "react-router-dom";
import styles from "../styles/Footer.module.css";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const navigate = useNavigate();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Who We Are", path: "/who-we-are" },
    { name: "About Us", path: "/about-us" },
    { name: "Our Ventures", path: "/ventures" },
    { name: "Consulting", path: "/consulting" },
    { name: "Let’s Chat", path: "/contact" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Quick Links */}
        <div className={styles.column}>
          <h3>Quick Links</h3>
          <ul>
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
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.column}>
          <h3>Contact</h3>
          <p>
            Email:{" "}
            <a href="mailto:info@khantastic.net">info@khantastic.net</a>
          </p>
          <p>Office: Daftarkhwan Downtown, Fatima Mateen Road, Lahore</p>
        </div>

        {/* Social Icons */}
        <div className={styles.column}>
          <h3>Follow Us</h3>
          <div className={styles.socials}>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2020 Khantastic Ventures. All rights reserved.</p>
        <div className={styles.links}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
