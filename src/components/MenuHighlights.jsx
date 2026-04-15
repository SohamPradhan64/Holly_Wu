import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  section: {
    padding: "90px 8vw",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    maxWidth: "540px",
  },
  eyebrow: {
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    fontSize: "13px",
    color: "#d8b47f",
  },
  title: {
    fontSize: "36px",
    margin: 0,
  },
  grid: {
    marginTop: "40px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "22px",
  },
  card: {
    padding: "24px",
    border: "1px solid rgba(216,180,127,0.5)",
    background: "rgba(22,17,14,0.86)",
    boxShadow: "0 0 24px rgba(0,0,0,0.3)",
  },
  cardTitle: {
    fontSize: "18px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "12px",
  },
  cardBody: {
    color: "#e5d2b4",
    lineHeight: 1.6,
  },
});

export default function MenuHighlights({ items }) {
  const classes = useStyles();

  return (
    <section className={`${classes.section} section-divider`}>
      <div className={classes.header}>
        <div className={classes.eyebrow}>Menu Highlights</div>
        <h2 className={classes.title}>Old-world plates and modern craft.</h2>
        <p className="muted">
          Our dim sum carts arrive with bamboo steamers, delicate pastries, and
          wok-kissed treasures that balance smoke, spice, and sweetness.
        </p>
      </div>
      <div className={classes.grid}>
        {items.map((item) => (
          <div className={classes.card} key={item.title}>
            <div className={classes.cardTitle}>{item.title}</div>
            <p className={classes.cardBody}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
