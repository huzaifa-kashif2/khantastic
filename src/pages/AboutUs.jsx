import styles from "../styles/AboutUs.module.css";

export default function AboutUs() {
  const values = [
    { icon: "🤝", title: "Collaboration" },
    { icon: "💡", title: "Innovation" },
    { icon: "🔄", title: "Adaptability" },
    { icon: "🌟", title: "Excellence" },
    { icon: "🚀", title: "Empowerment" },
  ];

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About Us</h2>

        <div className={styles.contentWrapper}>
          <div className={styles.left}>
            <h3 className={styles.subHeading}>Corporate Vision</h3>
            <p className={styles.text}>
              “To empower individuals and businesses in a Khantastic way so that
              they cannot imagine going back to the old way.”
            </p>

            <h3 className={styles.subHeading}>Corporate Mission</h3>
            <p className={styles.text}>
              “To drive sustainable growth by fostering innovation, providing
              exceptional services, and creating value for our stakeholders
              across diverse industries.”
            </p>
          </div>

          <div className={styles.right}>
            <h3 className={styles.subHeading}>Our Values</h3>
            <div className={styles.valuesGrid}>
              {values.map((val, i) => (
                <div key={i} className={styles.valueCard}>
                  <span className={styles.icon}>{val.icon}</span>
                  <p className={styles.valueTitle}>{val.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
