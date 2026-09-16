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
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "", organization: "", interest: "", message: "" });
  };

  const inputVariants = {
    focused: { scale: 1.02 },
    unfocused: { scale: 1 },
  };

  return (
    <section className={styles.contactSection}>
      {/* Background decorations */}
      <div className={styles.bgDecor} aria-hidden="true">
        <div className={styles.bgOrb1} />
        <div className={styles.bgOrb2} />
      </div>

      <div className={styles.inner}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.row}>
            {[
              { label: "Full Name", name: "name", type: "text", required: true },
              { label: "Email Address", name: "email", type: "email", required: true },
            ].map((field) => (
              <motion.div
                key={field.name}
                className={`${styles.field} ${focused === field.name ? styles.fieldFocused : ""}`}
                variants={inputVariants}
                animate={focused === field.name ? "focused" : "unfocused"}
                transition={{ duration: 0.2 }}
              >
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  onFocus={() => setFocused(field.name)}
                  onBlur={() => setFocused(null)}
                  placeholder=" "
                />
                <label>{field.label}</label>
                <div className={styles.inputGlow} />
              </motion.div>
            ))}
          </div>

          <div className={styles.row}>
            {[
              { label: "Phone (optional)", name: "phone", type: "text", required: false },
              { label: "Organization / Startup", name: "organization", type: "text", required: false },
            ].map((field) => (
              <motion.div
                key={field.name}
                className={`${styles.field} ${focused === field.name ? styles.fieldFocused : ""}`}
                variants={inputVariants}
                animate={focused === field.name ? "focused" : "unfocused"}
                transition={{ duration: 0.2 }}
              >
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  onFocus={() => setFocused(field.name)}
                  onBlur={() => setFocused(null)}
                  placeholder=" "
                />
                <label>{field.label}</label>
                <div className={styles.inputGlow} />
              </motion.div>
            ))}
          </div>

          <motion.div
            className={`${styles.field} ${focused === "interest" ? styles.fieldFocused : ""}`}
            variants={inputVariants}
            animate={focused === "interest" ? "focused" : "unfocused"}
            transition={{ duration: 0.2 }}
          >
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
              onFocus={() => setFocused("interest")}
              onBlur={() => setFocused(null)}
            >
              <option value="" disabled>Select your interest...</option>
              <option value="funding">💰 Funding / Investment</option>
              <option value="partnership">🤝 Partnership / Collaboration</option>
              <option value="consulting">📊 Consulting Inquiry</option>
              <option value="general">💬 General Question</option>
            </select>
            <div className={styles.inputGlow} />
          </motion.div>

          <motion.div
            className={`${styles.field} ${focused === "message" ? styles.fieldFocused : ""}`}
            variants={inputVariants}
            animate={focused === "message" ? "focused" : "unfocused"}
            transition={{ duration: 0.2 }}
          >
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              placeholder=" "
            />
            <label>Tell us about your idea or inquiry</label>
            <div className={styles.inputGlow} />
          </motion.div>

          <motion.button
            type="submit"
            className={styles.submitBtn}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Send Message</span>
            <span className={styles.btnIcon}>✈️</span>
          </motion.button>

          <AnimatePresence>
            {submitted && (
              <motion.div
                className={styles.successMsg}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className={styles.successIcon}>✅</span>
                <div>
                  <p className={styles.successTitle}>Message Sent!</p>
                  <p className={styles.successText}>We'll get back to you within 24-48 hours.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
