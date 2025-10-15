import styles from "../styles/CreareConsulting.module.css";

export default function CreareConsulting() {
  return (
    <section className={styles.creare}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Creare Consulting</h2>
        <p className={styles.description}>
          A boutique consulting firm specializing in high-impact, tailor-made
          solutions for organizations seeking strategic clarity, operational
          excellence, and sustainable growth.
        </p>

        <a
          href="#"
          className={styles.cta}
          target="_blank"
          rel="noreferrer"
        >
          Discover More →
        </a>
      </div>
    </section>
  );
}
