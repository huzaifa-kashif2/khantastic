import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Who We Are", path: "/who-we-are" },
    { name: "About Us", path: "/about-us" },
    { name: "Our Ventures", path: "/ventures" },
    { name: "Consulting", path: "/consulting" },
  ];

  // 👇 Automatically scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false); // Close mobile menu when navigation happens
  }, [location]);

  return (
    <header className={styles.navbar}>
      <div className={styles.logoArea}>
        <Link to="/">
          <img src={logo} alt="Khantastic Ventures" className={styles.logo} />
        </Link>
      </div>

      <div className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ""}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            {item.name}
          </NavLink>
        ))}

        <Link to="/contact" className={styles.chatButton}>
          Let’s Chat
        </Link>
      </nav>
    </header>
  );
}
