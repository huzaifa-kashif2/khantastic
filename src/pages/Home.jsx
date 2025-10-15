import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Empowering Entrepreneurs. <br /> Building the Future.
        </h1>

        <p className={styles.subtitle}>
          We invest in innovative startups, drive strategic growth, and nurture
          Pakistan’s entrepreneurial ecosystem.
        </p>

        <div className={styles.buttons}>
          <Link to="/our-ventures" className={styles.primaryBtn}>
            Explore Ventures
          </Link>
          <Link to="/contact" className={styles.secondaryBtn}>
            Let’s Chat
          </Link>
        </div>
      </div>
    </section>
  );
}
