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
  options: {
    display: "grid",
    gap: "2rem",
    marginBottom: "4rem",
  },
  option: {
    border: "1px solid rgba(201, 169, 97, 0.3)",
    padding: "2.5rem",
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gap: "2rem",
    alignItems: "start",
    transition: "all 0.3s ease",
    "&:hover": {
      borderColor: "#c9a961",
      backgroundColor: "rgba(201, 169, 97, 0.03)",
    },
    "@media (max-width: 600px)": {
      gridTemplateColumns: "1fr",
      gap: "1rem",
    },
  },
  iconBox: {
    width: "60px",
    height: "60px",
    border: "1px solid #c9a961",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.5rem",
    color: "#c9a961",
    fontStyle: "italic",
  },
  optionContent: {},
  optionTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.6rem",
    color: "#c9a961",
    marginBottom: "0.75rem",
    letterSpacing: "0.05em",
  },
  optionBody: {
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "rgba(245, 240, 230, 0.8)",
    marginBottom: "0.5rem",
  },
  optionMeta: {
    fontSize: "0.85rem",
    color: "rgba(245, 240, 230, 0.55)",
    letterSpacing: "0.05em",
  },
  note: {
    textAlign: "center",
    fontSize: "0.95rem",
    color: "rgba(245, 240, 230, 0.6)",
    fontStyle: "italic",
    borderTop: "1px solid rgba(201, 169, 97, 0.2)",
    paddingTop: "3rem",
    lineHeight: 1.8,
  },
});

const ParkingInformation = () => {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <section className={classes.hero}>
        <div className={classes.eyebrow}>Getting Here</div>
        <h1 className={classes.title}>Parking Information</h1>
        <p className={classes.subtitle}>
          Everything you need to know before your visit.
        </p>
      </section>

      <section className={classes.section}>
        <div className={classes.options}>
          <div className={classes.option}>
            <div className={classes.iconBox}>V</div>
            <div className={classes.optionContent}>
              <h3 className={classes.optionTitle}>Valet Parking</h3>
              <p className={classes.optionBody}>
                Complimentary valet service is available at the front entrance
                during dinner hours. Our valet team will greet you upon arrival.
              </p>
              <p className={classes.optionMeta}>
                Available Tuesday – Sunday, 5:00 PM onward
              </p>
            </div>
          </div>

          <div className={classes.option}>
            <div className={classes.iconBox}>G</div>
            <div className={classes.optionContent}>
              <h3 className={classes.optionTitle}>Parking Garage</h3>
              <p className={classes.optionBody}>
                A public garage is located directly adjacent to the restaurant.
                Validation is available for up to three hours with dine-in
                service.
              </p>
              <p className={classes.optionMeta}>Ask your server for validation</p>
            </div>
          </div>

          <div className={classes.option}>
            <div className={classes.iconBox}>S</div>
            <div className={classes.optionContent}>
              <h3 className={classes.optionTitle}>Street Parking</h3>
              <p className={classes.optionBody}>
                Metered street parking is available throughout the surrounding
                blocks. Please check signage for time restrictions.
              </p>
              <p className={classes.optionMeta}>
                Free after 6:00 PM and on Sundays
              </p>
            </div>
          </div>
        </div>

        <p className={classes.note}>
          For accessibility accommodations or questions about parking, please
          call ahead and our team will be happy to assist.
        </p>
      </section>
    </div>
  );
};

export default ParkingInformation;
