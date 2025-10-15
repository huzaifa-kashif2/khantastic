import styles from "../styles/VentureCard.module.css";

export default function VentureCard({ logo, name, description, link }) {
  return (
    <div className={styles.card}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt={name} className={styles.logo} />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      {link && (
        <a href={link} className={styles.link} target="_blank" rel="noreferrer">
          Visit Website →
        </a>
      )}
    </div>
  );
}
