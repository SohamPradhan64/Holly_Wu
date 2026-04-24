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
    maxWidth: "900px",
    margin: "0 auto",
    padding: "5rem 2rem",
  },
  sectionTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "2.5rem",
    fontWeight: 300,
    color: "#c9a961",
    marginBottom: "2rem",
    textAlign: "center",
  },
  body: {
    fontSize: "1.1rem",
    lineHeight: 1.8,
    color: "rgba(245, 240, 230, 0.85)",
    "& p": {
      marginBottom: "1.5rem",
    },
  },
  values: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "3rem",
    marginTop: "4rem",
  },
  value: {
    textAlign: "center",
  },
  valueTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.5rem",
    color: "#c9a961",
    marginBottom: "1rem",
    letterSpacing: "0.1em",
  },
  valueBody: {
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "rgba(245, 240, 230, 0.7)",
  },
  divider: {
    width: "60px",
    height: "1px",
    backgroundColor: "#c9a961",
    margin: "3rem auto",
    opacity: 0.5,
  },
});

const AboutUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <section className={classes.hero}>
        <div className={classes.eyebrow}>Our Story</div>
        <h1 className={classes.title}>About Holly Wu</h1>
        <p className={classes.subtitle}>
          A modern take on Shanghai tradition, rooted in Austin.
        </p>
      </section>

      <section className={classes.section}>
        <div className={classes.body}>
          <p>
            Holly Wu was born from a simple idea: that dim sum and the art of
            the Asian bar deserve a home in Austin where craft and atmosphere
            carry equal weight. Every dish that leaves our kitchen is built on
            generations of technique, then reimagined for the way people gather
            today.
          </p>
          <p>
            Our kitchen pulls from Shanghai's layered culinary heritage —
            xiaolongbao folded by hand, char siu glazed and lacquered with
            patience, teas brewed to order. Behind the bar, our mixologists
            weave Eastern ingredients into cocktails you won't find anywhere
            else in the city.
          </p>
        </div>

        <div className={classes.divider} />

        <h2 className={classes.sectionTitle}>What We Believe</h2>

        <div className={classes.values}>
          <div className={classes.value}>
            <h3 className={classes.valueTitle}>Craft</h3>
            <p className={classes.valueBody}>
              Every dumpling is folded by hand. Every sauce is made in-house.
              Shortcuts have no place here.
            </p>
          </div>
          <div className={classes.value}>
            <h3 className={classes.valueTitle}>Hospitality</h3>
            <p className={classes.valueBody}>
              A night at Holly Wu is an invitation. We want you to linger, to
              share plates, to feel unrushed.
            </p>
          </div>
          <div className={classes.value}>
            <h3 className={classes.valueTitle}>Heritage</h3>
            <p className={classes.valueBody}>
              We honor the traditions behind every dish while making space for
              the flavors of today.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
