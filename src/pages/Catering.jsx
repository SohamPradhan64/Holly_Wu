import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  page: {
    backgroundColor: "#0f0a0a",
    color: "#f5f0e6",
    minHeight: "100vh",
    paddingBottom: "6rem",
  },
  hero: {
    padding: "8rem 2rem 4rem",
    textAlign: "center",
    borderBottom: "1px solid rgba(201, 169, 97, 0.2)",
  },
  eyebrow: {
    fontSize: "0.85rem",
    letterSpacing: "0.4em",
    color: "#c9a961",
    textTransform: "uppercase",
    marginBottom: "1.5rem",
  },
  title: {
    fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
    fontSize: "4rem",
    fontWeight: 300,
    letterSpacing: "0.05em",
    margin: 0,
    color: "#f5f0e6",
  },
  subtitle: {
    marginTop: "1.5rem",
    fontSize: "1.1rem",
    color: "rgba(245, 240, 230, 0.7)",
    fontStyle: "italic",
    maxWidth: "600px",
    margin: "1.5rem auto 0",
  },
  section: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "5rem 2rem",
  },
  intro: {
    fontSize: "1.15rem",
    lineHeight: 1.8,
    color: "rgba(245, 240, 230, 0.85)",
    textAlign: "center",
    maxWidth: "750px",
    margin: "0 auto 4rem",
  },
  packages: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    marginBottom: "5rem",
  },
  package: {
    border: "1px solid rgba(201, 169, 97, 0.3)",
    padding: "2.5rem 2rem",
    textAlign: "center",
    transition: "all 0.3s ease",
    "&:hover": {
      borderColor: "#c9a961",
      backgroundColor: "rgba(201, 169, 97, 0.05)",
    },
  },
  packageName: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.8rem",
    color: "#c9a961",
    marginBottom: "0.5rem",
    letterSpacing: "0.1em",
  },
  packageSize: {
    fontSize: "0.85rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "rgba(245, 240, 230, 0.6)",
    marginBottom: "1.5rem",
  },
  packageDesc: {
    fontSize: "0.95rem",
    lineHeight: 1.7,
    color: "rgba(245, 240, 230, 0.75)",
  },
  ctaBox: {
    border: "1px solid rgba(201, 169, 97, 0.3)",
    padding: "4rem 2rem",
    textAlign: "center",
    backgroundColor: "rgba(201, 169, 97, 0.03)",
  },
  ctaTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "2rem",
    color: "#f5f0e6",
    marginBottom: "1rem",
    fontWeight: 300,
  },
  ctaText: {
    fontSize: "1rem",
    color: "rgba(245, 240, 230, 0.75)",
    marginBottom: "2rem",
    maxWidth: "500px",
    margin: "0 auto 2rem",
    lineHeight: 1.7,
  },
  button: {
    display: "inline-block",
    padding: "0.9rem 2.5rem",
    backgroundColor: "transparent",
    color: "#c9a961",
    border: "1px solid #c9a961",
    fontSize: "0.85rem",
    letterSpacing: "0.3em",
    textTransform: "uppercase",
    textDecoration: "none",
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#c9a961",
      color: "#0f0a0a",
    },
  },
});

const Catering = () => {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <section className={classes.hero}>
        <div className={classes.eyebrow}>For Every Occasion</div>
        <h1 className={classes.title}>Catering</h1>
        <p className={classes.subtitle}>
          Bring the flavors of Holly Wu to your next gathering.
        </p>
      </section>

      <section className={classes.section}>
        <p className={classes.intro}>
          Whether it's an intimate dinner, a corporate event, or a celebration
          worth remembering, our catering team crafts menus that feel both
          familiar and unforgettable. Every platter is prepared with the same
          care as our dining room service.
        </p>

        <div className={classes.packages}>
          <div className={classes.package}>
            <h3 className={classes.packageName}>The Gathering</h3>
            <div className={classes.packageSize}>Serves 10–20</div>
            <p className={classes.packageDesc}>
              An assortment of our signature dim sum, bao, and shareable plates.
              Perfect for office lunches and small celebrations.
            </p>
          </div>

          <div className={classes.package}>
            <h3 className={classes.packageName}>The Banquet</h3>
            <div className={classes.packageSize}>Serves 20–50</div>
            <p className={classes.packageDesc}>
              Expanded selection with premium offerings, house-made sauces, and
              our full tea service. Ideal for weddings and large events.
            </p>
          </div>

          <div className={classes.package}>
            <h3 className={classes.packageName}>The Curated</h3>
            <div className={classes.packageSize}>Fully Bespoke</div>
            <p className={classes.packageDesc}>
              Work directly with our chef to design a menu tailored to your
              event. Dietary needs accommodated with care.
            </p>
          </div>
        </div>

        <div className={classes.ctaBox}>
          <h2 className={classes.ctaTitle}>Let's Plan Your Event</h2>
          <p className={classes.ctaText}>
            Reach out to our catering team and we'll craft something memorable
            for your guests.
          </p>
          <a href="mailto:catering@hollywu.com" className={classes.button}>
            Inquire Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Catering;
