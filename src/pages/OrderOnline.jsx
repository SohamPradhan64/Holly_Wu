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
  options: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    marginTop: "3rem",
  },
  card: {
    backgroundColor: "rgba(201, 169, 97, 0.05)",
    border: "1px solid rgba(201, 169, 97, 0.3)",
    padding: "3rem 2rem",
    textAlign: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(201, 169, 97, 0.1)",
      borderColor: "#c9a961",
      transform: "translateY(-4px)",
    },
  },
  cardTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.8rem",
    color: "#c9a961",
    marginBottom: "1rem",
    letterSpacing: "0.1em",
  },
  cardBody: {
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "rgba(245, 240, 230, 0.75)",
    marginBottom: "2rem",
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
  note: {
    marginTop: "4rem",
    textAlign: "center",
    fontSize: "0.95rem",
    color: "rgba(245, 240, 230, 0.6)",
    fontStyle: "italic",
  },
});

const OrderOnline = () => {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <section className={classes.hero}>
        <div className={classes.eyebrow}>Takeout & Delivery</div>
        <h1 className={classes.title}>Order Online</h1>
        <p className={classes.subtitle}>
          Bring Holly Wu home. Fresh dim sum, handcrafted to order.
        </p>
      </section>

      <section className={classes.section}>
        <div className={classes.options}>
          <div className={classes.card}>
            <h3 className={classes.cardTitle}>Pickup</h3>
            <p className={classes.cardBody}>
              Order ahead and collect from our Austin location. Ready in 20–30
              minutes.
            </p>
            <a href="#" className={classes.button}>
              Order Pickup
            </a>
          </div>

          <div className={classes.card}>
            <h3 className={classes.cardTitle}>Delivery</h3>
            <p className={classes.cardBody}>
              Delivered to your door through our partner services across
              Austin.
            </p>
            <a href="#" className={classes.button}>
              Order Delivery
            </a>
          </div>
        </div>

        <p className={classes.note}>
          Online ordering links coming soon — check back shortly.
        </p>
      </section>
    </div>
  );
};

export default OrderOnline;
