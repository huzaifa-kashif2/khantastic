import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Let's Chat</h2>
        <p className={styles.subtext}>
          Ready to discuss your idea or explore collaboration? We’d love to hear from you.
        </p>

        <form className={styles.form}>
          <input
            type="text"
            placeholder="Your Name"
            className={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className={styles.input}
            required
          />
          <textarea
            placeholder="Your Message"
            className={styles.textarea}
            required
          ></textarea>
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>

        <div className={styles.socials}>
          <a href="#" className={styles.link}>
            LinkedIn
          </a>
          <a href="#" className={styles.link}>
            Twitter
          </a>
          <a href="#" className={styles.link}>
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
