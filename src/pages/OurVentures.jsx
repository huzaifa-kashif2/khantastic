import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import VentureCard from "../components/VentureCard";
import styles from "../styles/OurVentures.module.css";
import benny from "../assets/benny.png";
import candlecorner from "../assets/candlecorner.png";
import contentcube from "../assets/contentcube.png";
import fruitrush from "../assets/fruitrush.png";
import impactx from "../assets/impactx.png";
import knittpurl from "../assets/knittpurl.png";
import kretreats from "../assets/krt.png";
import shexcelerate from "../assets/shexcelerate.png";
import tajarba from "../assets/tajarba.png";

export default function OurVentures() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const ventures = [
    {
      name: "FruitRush",
      description: "Enhancing wellness by promoting healthy eatables with easy access to fresh seasonal fruits & dry fruits at affordable prices.",
      logo: fruitrush,
    },
    {
      name: "Tajarba",
      description: "Transforming lives and empowering the youth by helping them turn their dreams into reality.",
      logo: tajarba,
    },
    {
      name: "KnittPurl",
      description: "Preferred choice for those seeking unique, handcrafted knitted products.",
      logo: knittpurl,
    },
    {
      name: "Benny's Pet Lounge",
      description: "Pakistan's first luxury pet spa and hotel, known for our commitment to excellence in pet care.",
      logo: benny,
    },
    {
      name: "Candle Corner",
      description: "Preferred brand for customers with refined tastes in search of premium scented candles.",
      logo: candlecorner,
    },
    {
      name: "K-Retreats & Tours",
      description: "Offering safe, sustainable and soul-stirring travel experiences.",
      logo: kretreats,
    },
    {
      name: "Content Cube Creations",
      description: "To be a creative force in visual and performing arts, crafting impactful short films and theatrical productions.",
      logo: contentcube,
    },
    {
      name: "SheXcelerate",
      description: "Empowering the next generation of female entrepreneurs and women-led ventures in Pakistan through celebration, opportunity and funding.",
      logo: shexcelerate,
    },
    {
      name: "ImpactX",
      description: "Purpose-built incubation centers throughout Pakistan, helping creative entrepreneurs bring their ideas to life and scale their impact.",
      logo: impactx,
    },
  ];

  return (
    <section className={styles.ventures}>
      {/* Background decorations */}
      <div className={styles.bgDecor} aria-hidden="true">
        <div className={styles.bgOrb1} />
        <div className={styles.bgOrb2} />
        <div className={styles.bgGrid} />
      </div>

      <div className={styles.container}>
        {/* Header */}
        <motion.div
          ref={headerRef}
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.sectionTag}>Eight Venture Studio</div>
          <h2 className={styles.heading}>Our Ventures</h2>
          <div className={styles.headingLine} />
          <p className={styles.intro}>
            A full-service entrepreneurship solution in a box, bridging company
            building with venture funding — 9 ventures and counting.
          </p>
        </motion.div>

        {/* Ventures Grid */}
        <div className={styles.grid}>
          {ventures.map((v, i) => (
            <VentureCard key={i} {...v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
