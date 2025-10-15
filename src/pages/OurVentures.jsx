import VentureCard from "../components/VentureCard";
import styles from "../styles/OurVentures.module.css";

export default function OurVentures() {
  const ventures = [
    {
      name: "FruitRush",
      description:
        "Enhancing wellness by promoting healthy eatables with easy access to fresh seasonal fruits & dry fruits at affordable prices.",
      logo: "/assets/fruitrush.png",
    },
    {
      name: "Tajarba",
      description:
        "Transforming lives and empowering the youth by helping them turn their dreams into reality.",
      logo: "/assets/tajarba.png",
    },
    {
      name: "KnittPurl",
      description:
        "Preferred choice for those seeking unique, handcrafted knitted products.",
      logo: "/assets/knittpurl.png",
    },
    {
      name: "Benny’s Pet Lounge",
      description:
        "Pakistan’s first luxury pet spa and hotel, known for our commitment to excellence in pet care.",
      logo: "/assets/bennys.png",
    },
    {
      name: "Candle Corner",
      description:
        "Preferred brand for customers with refined tastes in search of premium scented candles.",
      logo: "/assets/candlecorner.png",
    },
    {
      name: "K-Retreats & Tours",
      description:
        "Offering safe, sustainable and soul-stirring travel experiences.",
      logo: "/assets/kretreats.png",
    },
    {
      name: "Content Cube Creations",
      description:
        "To be a creative force in visual and performing arts, crafting impactful short films and theatrical productions.",
      logo: "/assets/contentcube.png",
    },
    {
      name: "SheXcelerate",
      description:
        "Empowering the next generation of female entrepreneurs and women-led ventures in Pakistan through celebration, opportunity and funding.",
      logo: "/assets/shexcelerate.png",
    },
    {
      name: "ImpactX",
      description:
        "Purpose-built incubation centers throughout Pakistan, helping creative entrepreneurs bring their ideas to life and scale their impact.",
      logo: "/assets/impactx.png",
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
