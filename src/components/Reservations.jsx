import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  section: ({ image }) => ({
    margin: "0 8vw",
    borderRadius: "6px",
    overflow: "hidden",
    border: "1px solid rgba(216,180,127,0.5)",
    backgroundImage: `linear-gradient(90deg, rgba(23,17,14,0.92) 20%, rgba(23,17,14,0.55) 70%), url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }),
  content: {
    padding: "70px 8vw",
    maxWidth: "520px",
  },
  eyebrow: {
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    fontSize: "13px",
    color: "#d8b47f",
  },
  title: {
    fontSize: "34px",
    margin: "12px 0 16px",
  },
  body: {
    color: "#ead9bd",
    lineHeight: 1.6,
  },
  button: {
    marginTop: "22px",
    display: "inline-block",
    padding: "12px 26px",
    border: "1px solid #d8b47f",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    fontSize: "12px",
    textDecoration: "none",
    color: "#f9ecd3",
    background: "#6e1b18",
  },
});

export default function Reservations({ image }) {
  const classes = useStyles({ image });

  return (
    <section className={classes.section}>
      <div className={classes.content}>
        <div className={classes.eyebrow}>Reservations</div>
        <h2 className={classes.title}>Gather beneath the red lanterns.</h2>
        <p className={classes.body}>
          Reserve the tea room for intimate evenings or celebrate with family
          over a dim sum banquet. We welcome walk-ins nightly and host private
          celebrations on request.
        </p>
        <a className={classes.button} href="#">
          Book Your Table
        </a>
      </div>
    </section>
  );
}
