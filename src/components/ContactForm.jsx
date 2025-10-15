import { useState } from "react";
import styles from "../styles/ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    interest: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      interest: "",
      message: "",
    });
  };

  return (
    <section className={styles.contactSection}>
      <h2>Let’s Chat</h2>
      <p>
        Whether you’re an entrepreneur with a bold idea or a partner seeking collaboration, 
        we’d love to hear from you.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.field}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Full Name</label>
          </div>

          <div className={styles.field}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email Address</label>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <label>Phone Number (optional)</label>
          </div>

          <div className={styles.field}>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
            />
            <label>Organization / Startup Name</label>
          </div>
        </div>

        <div className={styles.field}>
          <select
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            required
          >
            <option value="">Select Interest</option>
            <option value="funding">Funding / Investment</option>
            <option value="partnership">Partnership / Collaboration</option>
            <option value="consulting">Consulting Inquiry</option>
            <option value="general">General Question</option>
          </select>
        </div>

        <div className={styles.field}>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />
          <label>Tell us about your idea or inquiry</label>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Send Message
        </button>

        {submitted && (
          <p className={styles.successMsg}>
            ✅ Thank you! Your message has been sent successfully.
          </p>
        )}
      </form>
    </section>
  );
}
