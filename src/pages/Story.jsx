import { createUseStyles } from "react-jss";
import storyImg from "../assets/story.png";

const useStyles = createUseStyles({
  hero: {
    minHeight: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "140px 8vw 80px",
    background: "linear-gradient(135deg, rgba(18,14,12,1) 0%, rgba(40,25,18,1) 50%, rgba(18,14,12,1) 100%)",
    borderBottom: "1px solid rgba(216,180,127,0.2)",
  },
  heroContent: {
    maxWidth: "600px",
  },
  eyebrow: {
    fontSize: "13px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#d8b47f",
    marginBottom: "16px",
  },
  heroTitle: {
    fontSize: "48px",
    lineHeight: 1.1,
    margin: "0 0 16px",
    color: "#f6ead0",
  },
  heroSub: {
    fontSize: "17px",
    color: "rgba(246,234,208,0.6)",
    lineHeight: 1.7,
  },
  section: {
    padding: "80px 8vw",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    alignItems: "center",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "40px",
    },
  },
  imageWrap: {
    padding: "18px",
    border: "1px solid rgba(216,180,127,0.5)",
    background: "rgba(25,19,16,0.8)",
  },
  image: {
    width: "100%",
    display: "block",
    borderRadius: "4px",
  },
  text: {
    maxWidth: "520px",
  },
  title: {
    fontSize: "32px",
    margin: "0 0 20px",
    color: "#f6ead0",
  },
  body: {
    color: "#e7d7bc",
    fontSize: "17px",
    lineHeight: 1.8,
    marginBottom: "16px",
  },
  values: {
    padding: "80px 8vw",
    borderTop: "1px solid rgba(216,180,127,0.2)",
  },
  valuesTitle: {
    fontSize: "28px",
    color: "#f6ead0",
    marginBottom: "40px",
    textAlign: "center",
  },
  valuesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
  },
  valueCard: {
    padding: "32px",
    border: "1px solid rgba(216,180,127,0.4)",
    background: "rgba(22,17,14,0.8)",
    textAlign: "center",
  },
  valueTitle: {
    fontSize: "16px",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#d8b47f",
    marginBottom: "12px",
  },
  valueBody: {
    color: "#e5d2b4",
    lineHeight: 1.6,
    fontSize: "15px",
  },
});

export default function Story() {
  const classes = useStyles();
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.heroContent}>
          <div className={classes.eyebrow}>Our Story</div>
          <h1 className={classes.heroTitle}>A taste of old Shanghai in the heart of Austin.</h1>
          <p className={classes.heroSub}>
            Every dish, every detail, every evening at Holly Wu is a nod to the dim sum halls and tea houses we grew up loving.
          </p>
        </div>
      </section>

      <section className={classes.section}>
        <div className={classes.text}>
          <h2 className={classes.title}>Where it all began</h2>
          <p className={classes.body}>
            Holly Wu started with a simple idea: bring the warmth and craft of traditional dim sum to Austin. Inspired by the bustling tea houses of Hong Kong and the quiet elegance of old Shanghai dining rooms, we set out to create a space that feels both timeless and alive.
          </p>
          <p className={classes.body}>
            Our chefs fold dumplings by hand every morning, slow-braise aromatic broths for hours, and pair each course with carefully selected teas. Every detail, from the lacquered trays to the lantern-lit corners, is intentional.
          </p>
        </div>
        <div className={classes.imageWrap}>
          <img className={classes.image} src={storyImg} alt="Holly Wu story" />
        </div>
      </section>

      <section className={classes.values}>
        <h2 className={classes.valuesTitle}>What drives us</h2>
        <div className={classes.valuesGrid}>
          <div className={classes.valueCard}>
            <div className={classes.valueTitle}>Craft</div>
            <p className={classes.valueBody}>Hand-folded dumplings, wok-fired dishes, and tea pairings made with care and precision.</p>
          </div>
          <div className={classes.valueCard}>
            <div className={classes.valueTitle}>Tradition</div>
            <p className={classes.valueBody}>Recipes passed down through generations, honoring the flavors and techniques of old Shanghai.</p>
          </div>
          <div className={classes.valueCard}>
            <div className={classes.valueTitle}>Atmosphere</div>
            <p className={classes.valueBody}>Lantern-lit spaces, warm hospitality, and the kind of evening you remember long after.</p>
          </div>
        </div>
      </section>
    </>
  );
}
