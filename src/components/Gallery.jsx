import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  section: {
    padding: "80px 8vw",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexWrap: "wrap",
    gap: "16px",
  },
  title: {
    fontSize: "34px",
    margin: 0,
  },
  grid: {
    marginTop: "32px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "18px",
  },
  image: {
    width: "100%",
    height: "240px",
    objectFit: "cover",
    borderRadius: "4px",
    border: "1px solid rgba(216,180,127,0.4)",
  },
});

export default function Gallery({ images }) {
  const classes = useStyles();

  return (
    <section className={`${classes.section} paper-panel`}>
      <div className={classes.header}>
        <div>
          <div className="eyebrow">Gallery</div>
          <h2 className={classes.title}>Lantern glow and bamboo steam.</h2>
        </div>
        <p className="muted">
          Classic interiors, warm service, and dim sum artistry.
        </p>
      </div>
      <div className={classes.grid}>
        {images.map((image, index) => (
          <img
            className={classes.image}
            src={image}
            alt={`Holly Wu gallery ${index + 1}`}
            key={image}
          />
        ))}
      </div>
    </section>
  );
}
