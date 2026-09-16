import ContactForm from "../components/ContactForm";
import styles from "../styles/Contact.module.css";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email Us",
      value: "info@khantastic.net",
      href: "mailto:info@khantastic.net",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Find Us",
      value: "Daftarkhwan Downtown, Fatima Mateen Road, Lahore",
      href: "#",
    },
  ];

  const socials = [
    { icon: <FaLinkedin />, label: "LinkedIn", href: "#" },
    { icon: <FaInstagram />, label: "Instagram", href: "#" },
    { icon: <FaFacebook />, label: "Facebook", href: "#" },
    { icon: <FaTwitter />, label: "Twitter", href: "#" },
  ];

  return (
    <div className={styles.contact}>
      {/* Info strip */}
      <section className={styles.infoStrip}>
        <div className={styles.infoContainer}>
          {contactInfo.map((info, i) => (
            <motion.a
              key={i}
              href={info.href}
              className={styles.infoCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className={styles.infoIcon}>{info.icon}</div>
              <div>
                <p className={styles.infoLabel}>{info.label}</p>
                <p className={styles.infoValue}>{info.value}</p>
              </div>
            </motion.a>
          ))}

          <motion.div
            className={styles.socialCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className={styles.infoLabel}>Follow Us</p>
            <div className={styles.socialIcons}>
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className={styles.socialIcon}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
