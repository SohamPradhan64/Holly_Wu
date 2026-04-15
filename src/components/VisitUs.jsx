import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  section: {
    padding: "90px 8vw 110px",
    display: "grid",
    gap: "32px",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "320px",
    objectFit: "cover",
    borderRadius: "6px",
    border: "1px solid rgba(216,180,127,0.5)",
  },
  title: {
    fontSize: "32px",
    marginBottom: "12px",
  },
  block: {
    marginBottom: "16px",
  },
  label: {
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    fontSize: "12px",
    color: "#d8b47f",
  },
  text: {
    color: "#ead8bb",
    lineHeight: 1.6,
  },
});

export default function VisitUs({ image }) {
  const classes = useStyles();

  return (
    <section className={`${classes.section} section-divider`}>
      <div>
        <div className="eyebrow">Visit Us</div>
        <h2 className={classes.title}>Hours, location, and tea bar.</h2>
        <div className={classes.block}>
          <div className={classes.label}>Hours</div>
          <div className={classes.text}>
            Sun-Thurs: 11am - 10pm
            <br />
            Fri-Sat: 11am - 11:30pm
          </div>
        </div>
        <div className={classes.block}>
          <div className={classes.label}>Location</div>
          <div className={classes.text}>
            1203 West 6th Street, Austin, TX
            <br />
            Tea Bar seating nightly | Private dining available
          </div>
        </div>
        <div className={classes.block}>
          <div className={classes.label}>Contact</div>
          <div className={classes.text}>
            (512) 474-5107
            <br />
            hello@hollywu.com
          </div>
        </div>
      </div>
      <img className={classes.image} src={image} alt="Restaurant interior" />
    </section>
  );
}
