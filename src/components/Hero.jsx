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
    padding: "32px 8vw 60px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  topBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "24px",
  },
  brand: {
    fontSize: "32px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
  },
  nav: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    fontSize: "13px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
  },
  navLink: {
    color: "inherit",
    textDecoration: "none",
  },
  heroBody: {
    marginTop: "16vh",
    maxWidth: "520px",
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
  },
  description: {
    fontSize: "18px",
    color: "#f3e0c0",
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
  },
  buttonAlt: {
    background: "#6e1b18",
    borderColor: "#6e1b18",
  },
});

const navItems = [
  "Story",
  "Menu",
  "Tea Bar",
  "Reservations",
  "Events",
];

export default function Hero({ image }) {
  const classes = useStyles({ image });

  return (
    <header className={classes.hero}>
      <div className={classes.overlay} />
      <div className={classes.content}>
        <div className={classes.topBar}>
          <div className={classes.brand}>Holly Wu</div>
          <nav className={classes.nav}>
            {navItems.map((item) => (
              <a className={classes.navLink} href="#" key={item}>
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className={classes.heroBody}>
          <div className={classes.subtitle}>Asian Bar + Dim Sum</div>
          <h1 className={classes.title}>
            A lantern-lit hall for old Shanghai flavors.
          </h1>
          <p className={classes.description}>
            Holly Wu welcomes you with hand-folded dumplings, tea-smoked
            specialties, and the warm hush of an old-world dining house.
          </p>
          <div className={classes.actions}>
            <a className={`${classes.button} ${classes.buttonAlt}`} href="#">
              Reserve a Table
            </a>
            <a className={classes.button} href="#">
              View Menu
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
