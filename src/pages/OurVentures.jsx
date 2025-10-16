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
  const ventures = [
    {
      name: "FruitRush",
      description:
        "Enhancing wellness by promoting healthy eatables with easy access to fresh seasonal fruits & dry fruits at affordable prices.",
      logo: fruitrush,
    },
    {
      name: "Tajarba",
      description:
        "Transforming lives and empowering the youth by helping them turn their dreams into reality.",
      logo: tajarba,
    },
    {
      name: "KnittPurl",
      description:
        "Preferred choice for those seeking unique, handcrafted knitted products.",
      logo: knittpurl,
    },
    {
      name: "Benny’s Pet Lounge",
      description:
        "Pakistan’s first luxury pet spa and hotel, known for our commitment to excellence in pet care.",
      logo: benny,
    },
    {
      name: "Candle Corner",
      description:
        "Preferred brand for customers with refined tastes in search of premium scented candles.",
      logo: candlecorner,
    },
    {
      name: "K-Retreats & Tours",
      description:
        "Offering safe, sustainable and soul-stirring travel experiences.",
      logo: kretreats,
    },
    {
      name: "Content Cube Creations",
      description:
        "To be a creative force in visual and performing arts, crafting impactful short films and theatrical productions.",
      logo: contentcube,
    },
    {
      name: "SheXcelerate",
      description:
        "Empowering the next generation of female entrepreneurs and women-led ventures in Pakistan through celebration, opportunity and funding.",
      logo: shexcelerate,
    },
    {
      name: "ImpactX",
      description:
        "Purpose-built incubation centers throughout Pakistan, helping creative entrepreneurs bring their ideas to life and scale their impact.",
      logo: impactx,
    },
  ];

  return (
    <section className={styles.ventures}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Ventures</h2>
        <p className={styles.intro}>
          Eight Venture Studio is a full-service entrepreneurship solution in a box,
          bridging company building with venture funding.
        </p>

        <div className={styles.grid}>
          {ventures.map((v, i) => (
            <VentureCard key={i} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}
