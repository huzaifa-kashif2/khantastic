import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "", organization: "", interest: "", message: "" });
  };

  return (
    <section className={styles.contactSection}>
      {/* Background orbs */}
      <div className={styles.bgDecor} aria-hidden="true">
        <div className={styles.bgOrb1} />
        <div className={styles.bgOrb2} />
      </div>

      <div className={styles.inner}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <div className={styles.sectionTag}>Get In Touch</div>
          <h2 className={styles.heading}>Let&apos;s Chat</h2>
          <div className={styles.headingLine} />
          <p className={styles.subtext}>
            Whether you&apos;re an entrepreneur with a bold idea or a partner seeking
            collaboration, we&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.form
          className={styles.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          {/* Row 1 */}
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="cf-name">Full Name <span className={styles.req}>*</span></label>
              <input
                id="cf-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="e.g. Ahmed Khan"
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="cf-email">Email Address <span className={styles.req}>*</span></label>
              <input
                id="cf-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className={styles.input}
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="cf-phone">Phone <span className={styles.optional}>(optional)</span></label>
              <input
                id="cf-phone"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+92 300 0000000"
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="cf-org">Organization / Startup <span className={styles.optional}>(optional)</span></label>
              <input
                id="cf-org"
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Your company name"
                className={styles.input}
              />
            </div>
          </div>

          {/* Interest Select */}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="cf-interest">Area of Interest <span className={styles.req}>*</span></label>
            <select
              id="cf-interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
              className={styles.select}
            >
              <option value="" disabled>Select one...</option>
              <option value="funding">💰 Funding / Investment</option>
              <option value="partnership">🤝 Partnership / Collaboration</option>
              <option value="consulting">📊 Consulting Inquiry</option>
              <option value="general">💬 General Question</option>
            </select>
          </div>

          {/* Message */}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="cf-message">Message <span className={styles.req}>*</span></label>
            <textarea
              id="cf-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              placeholder="Tell us about your idea or inquiry..."
              className={styles.textarea}
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            className={styles.submitBtn}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Send Message</span>
            <span className={styles.btnIcon}>✈️</span>
          </motion.button>

          {/* Success */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                className={styles.successMsg}
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <span className={styles.successIcon}>✅</span>
                <div>
                  <p className={styles.successTitle}>Message Sent!</p>
                  <p className={styles.successText}>We&apos;ll get back to you within 24–48 hours.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
