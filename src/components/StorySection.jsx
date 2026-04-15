import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  section: {
    padding: "96px 8vw",
    display: "grid",
    gap: "36px",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    alignItems: "center",
  },
  imageWrap: {
    position: "relative",
    padding: "18px",
    border: "1px solid rgba(216,180,127,0.6)",
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
  eyebrow: {
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    fontSize: "13px",
    color: "#d8b47f",
  },
  title: {
    fontSize: "38px",
    margin: "12px 0 18px",
  },
  body: {
    color: "#e7d7bc",
    fontSize: "17px",
    lineHeight: 1.7,
  },
});

export default function StorySection({ image }) {
  const classes = useStyles();

  return (
    <section className={`${classes.section} paper-panel`}>
      <div className={classes.text}>
        <div className={classes.eyebrow}>Who We Are</div>
        <h2 className={classes.title}>An Austin hideaway with timeless craft.</h2>
        <p className={classes.body}>
          Holly Wu is a gathering place inspired by the dim sum halls of Hong
          Kong and the tea houses of old Shanghai. Every bamboo basket, lacquered
          tray, and wok-fired dish is prepared to evoke the glow of a classic
          evening out.
        </p>
        <p className={classes.body}>
          Our chefs fold dumplings by hand, slow-braise aromatic broths, and pair
          each course with jasmine tea, plum wine, and a touch of ceremony.
        </p>
      </div>
      <div className={classes.imageWrap}>
        <img className={classes.image} src={image} alt="Chef portrait" />
      </div>
    </section>
  );
}
