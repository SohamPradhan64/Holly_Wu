import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  hero: ({ image }) => ({
    minHeight: "85vh",
    position: "relative",
    color: "#f6ead0",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }),
  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(120deg, rgba(17,12,10,0.92) 10%, rgba(35,18,12,0.55) 55%, rgba(17,12,10,0.9) 90%)",
  },
  content: {
    position: "relative",
    zIndex: 1,
    padding: "120px 8vw 60px",
  },
  subtitle: {
    fontSize: "16px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#d8b47f",
    marginBottom: "16px",
  },
  title: {
    fontSize: "58px",
    lineHeight: 1.05,
    margin: "0 0 16px",
    maxWidth: "520px",
  },
  description: {
    fontSize: "18px",
    color: "#f3e0c0",
    maxWidth: "520px",
  },
  actions: {
    marginTop: "28px",
    display: "flex",
    gap: "18px",
    flexWrap: "wrap",
  },
  button: {
    padding: "12px 26px",
    border: "1px solid #d8b47f",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    fontSize: "12px",
    textDecoration: "none",
    color: "#f9ecd3",
    background: "rgba(15,10,7,0.65)",
    transition: "background 0.2s ease, transform 0.2s ease",
    "&:hover": {
      background: "rgba(15,10,7,0.85)",
      transform: "translateY(-1px)",
    },
  },
  buttonAlt: {
    background: "#6e1b18",
    borderColor: "#6e1b18",
    "&:hover": {
      background: "#8a2220",
    },
  },
  "@media (max-width: 768px)": {
    title: {
      fontSize: "36px",
    },
  },
});

export default function Hero({ image }) {
  const classes = useStyles({ image });
  return (
    <header className={classes.hero}>
      <div className={classes.overlay} />
      <div className={classes.content}>
        <div className={classes.subtitle}>Asian Bar + Dim Sum</div>
        <h1 className={classes.title}>
          A lantern-lit hall for old Shanghai flavors.
        </h1>
        <p className={classes.description}>
          Holly Wu welcomes you with hand-folded dumplings, tea-smoked
          specialties, and the warm hush of an old-world dining house.
        </p>
        <div className={classes.actions}>
          <Link className={`${classes.button} ${classes.buttonAlt}`} to="/reservations">
            Reserve a Table
          </Link>
          <Link className={classes.button} to="/menu">
            View Menu
          </Link>
        </div>
      </div>
    </header>
  );
}
