import styles from "../styles/WhoWeAre.module.css";

export default function WhoWeAre() {
  return (
    <section className={styles.whoWeAre}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Who We Are</h2>

        <div className={styles.contentWrapper}>
          <div className={styles.left}>
            <p className={styles.text}>
              We are a venture capital entity that aims to create and support
              Pakistan’s entrepreneurial ecosystem by providing strategic
              direction and financial capital for startups to reach
              product-market fit and, most importantly, to create a platform for
              idea exploration.
            </p>
          </div>

          <div className={styles.right}>
            <p className={styles.text}>
              Established in 2020 by senior management with over 25 years of
              experience in strategy development & execution, digital marketing,
              product, and venture development across Pakistan and abroad.
            </p>
            <p className={styles.text}>
              Our management has advised, mentored, and served on boards of
              multiple tech startups and is deeply involved in the venture
              studio and startup ecosystem within and outside Pakistan.
            </p>
          </div>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <span className={styles.year}>2020</span>
            <p className={styles.milestone}>Khantastic Ventures established</p>
          </div>
          <div className={styles.timelineItem}>
            <span className={styles.year}>2021</span>
            <p className={styles.milestone}>First venture launched — FruitRush</p>
          </div>
          <div className={styles.timelineItem}>
            <span className={styles.year}>2023</span>
            <p className={styles.milestone}>Expanded into consulting & incubation</p>
          </div>
          <div className={styles.timelineItem}>
            <span className={styles.year}>2025</span>
            <p className={styles.milestone}>Continuing to empower entrepreneurs across Pakistan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
