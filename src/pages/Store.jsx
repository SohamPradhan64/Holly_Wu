import React, { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  page: {
    backgroundColor: "#0f0a0a",
    color: "#f5f0e6",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "8rem 2rem 6rem",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  ornament: {
    position: "absolute",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "30rem",
    color: "rgba(201, 169, 97, 0.03)",
    fontWeight: 300,
    lineHeight: 1,
    pointerEvents: "none",
    userSelect: "none",
    letterSpacing: "-0.05em",
  },
  content: {
    position: "relative",
    zIndex: 1,
    maxWidth: "700px",
  },
  eyebrow: {
    fontSize: "0.85rem",
    letterSpacing: "0.5em",
    color: "#c9a961",
    textTransform: "uppercase",
    marginBottom: "2rem",
  },
  title: {
    fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
    fontSize: "5rem",
    fontWeight: 300,
    letterSpacing: "0.03em",
    margin: 0,
    color: "#f5f0e6",
    lineHeight: 1.1,
    "@media (max-width: 600px)": {
      fontSize: "3.5rem",
    },
  },
  divider: {
    width: "60px",
    height: "1px",
    backgroundColor: "#c9a961",
    margin: "3rem auto",
    opacity: 0.6,
  },
  body: {
    fontSize: "1.15rem",
    lineHeight: 1.8,
    color: "rgba(245, 240, 230, 0.75)",
    marginBottom: "1rem",
    fontStyle: "italic",
  },
  preview: {
    marginTop: "4rem",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1.5rem",
    maxWidth: "600px",
    margin: "4rem auto 0",
    "@media (max-width: 600px)": {
      gridTemplateColumns: "1fr",
    },
  },
  previewItem: {
    border: "1px solid rgba(201, 169, 97, 0.2)",
    padding: "2rem 1rem",
    aspectRatio: "1 / 1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6,
  },
  previewLabel: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.2rem",
    color: "#c9a961",
    marginBottom: "0.5rem",
  },
  previewMeta: {
    fontSize: "0.7rem",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "rgba(245, 240, 230, 0.4)",
  },
  notify: {
    marginTop: "5rem",
    maxWidth: "500px",
    margin: "5rem auto 0",
  },
  notifyTitle: {
    fontSize: "0.8rem",
    letterSpacing: "0.3em",
    textTransform: "uppercase",
    color: "rgba(245, 240, 230, 0.7)",
    marginBottom: "1.25rem",
  },
  notifyRow: {
    display: "flex",
    gap: "0.5rem",
    "@media (max-width: 500px)": {
      flexDirection: "column",
    },
  },
  input: {
    flex: 1,
    padding: "0.9rem 1rem",
    backgroundColor: "transparent",
    border: "1px solid rgba(201, 169, 97, 0.3)",
    color: "#f5f0e6",
    fontSize: "1rem",
    fontFamily: "inherit",
    transition: "border-color 0.2s ease",
    "&:focus": {
      outline: "none",
      borderColor: "#c9a961",
    },
    "&::placeholder": {
      color: "rgba(245, 240, 230, 0.4)",
    },
  },
  submit: {
    padding: "0.9rem 2rem",
    backgroundColor: "transparent",
    color: "#c9a961",
    border: "1px solid #c9a961",
    fontSize: "0.8rem",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "all 0.3s ease",
    whiteSpace: "nowrap",
    "&:hover": {
      backgroundColor: "#c9a961",
      color: "#0f0a0a",
    },
  },
  success: {
    color: "#c9a961",
    fontSize: "0.9rem",
    marginTop: "1rem",
    fontStyle: "italic",
  },
});

const Store = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) setSubmitted(true);
  };

  return (
    <div className={classes.page}>
      <div className={classes.ornament}>令</div>

      <div className={classes.content}>
        <div className={classes.eyebrow}>Coming Soon</div>
        <h1 className={classes.title}>The Holly Wu Store</h1>

        <div className={classes.divider} />

        <p className={classes.body}>
          A curated collection of house-made sauces, teas, and small-batch goods
          — bringing a piece of Holly Wu into your home.
        </p>

        <div className={classes.preview}>
          <div className={classes.previewItem}>
            <div className={classes.previewLabel}>Chili Oil</div>
            <div className={classes.previewMeta}>House Made</div>
          </div>
          <div className={classes.previewItem}>
            <div className={classes.previewLabel}>Loose Tea</div>
            <div className={classes.previewMeta}>Curated</div>
          </div>
          <div className={classes.previewItem}>
            <div className={classes.previewLabel}>Pantry</div>
            <div className={classes.previewMeta}>Small Batch</div>
          </div>
        </div>

        <div className={classes.notify}>
          <div className={classes.notifyTitle}>Be the first to know</div>
          <div className={classes.notifyRow}>
            <input
              className={classes.input}
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className={classes.submit} onClick={handleSubmit}>
              Notify Me
            </button>
          </div>
          {submitted && (
            <div className={classes.success}>
              Thank you — we'll let you know when we open.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Store;
