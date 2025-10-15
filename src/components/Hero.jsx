import { Link } from "react-router-dom";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>Empowering Entrepreneurs. Building the Future.</h1>
          <p>
            We invest in innovative startups, drive strategic growth, and nurture Pakistan’s
            entrepreneurial ecosystem.
          </p>
          <div className={styles.buttons}>
            <Link to="/ventures" className={styles.primaryBtn}>
              Explore Ventures
            </Link>
            <Link to="/contact" className={styles.secondaryBtn}>
              Let’s Chat
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
