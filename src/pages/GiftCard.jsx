import React, { useState } from "react";
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
  layout: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "5rem 2rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "5rem",
    alignItems: "start",
    "@media (max-width: 900px)": {
      gridTemplateColumns: "1fr",
      gap: "3rem",
    },
  },
  cardArt: {
    aspectRatio: "1.6 / 1",
    background:
      "linear-gradient(135deg, #1a1010 0%, #3d1f1f 50%, #1a0f08 100%)",
    border: "1px solid rgba(201, 169, 97, 0.4)",
    padding: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "sticky",
    top: "6rem",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
    "@media (max-width: 900px)": {
      position: "static",
    },
  },
  cardBrand: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "2.5rem",
    color: "#c9a961",
    fontWeight: 300,
    letterSpacing: "0.15em",
  },
  cardTagline: {
    fontSize: "0.75rem",
    letterSpacing: "0.3em",
    color: "rgba(245, 240, 230, 0.5)",
    textTransform: "uppercase",
    marginTop: "0.5rem",
  },
  cardAmount: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "3.5rem",
    color: "#f5f0e6",
    fontWeight: 300,
  },
  cardFooter: {
    fontSize: "0.7rem",
    letterSpacing: "0.25em",
    color: "rgba(201, 169, 97, 0.6)",
    textTransform: "uppercase",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "2.5rem",
  },
  fieldGroup: {},
  required: {
    color: "#c9a961",
    marginRight: "0.3rem",
  },
  fieldLabel: {
    fontSize: "0.8rem",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "#f5f0e6",
    marginBottom: "1rem",
    fontWeight: 500,
  },
  amounts: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "0.75rem",
    marginBottom: "1rem",
  },
  amountBtn: {
    padding: "1rem 0.5rem",
    backgroundColor: "transparent",
    border: "1px solid rgba(201, 169, 97, 0.3)",
    color: "#f5f0e6",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.2rem",
    cursor: "pointer",
    transition: "all 0.2s ease",
    "&:hover": {
      borderColor: "#c9a961",
    },
  },
  amountBtnActive: {
    borderColor: "#c9a961",
    backgroundColor: "rgba(201, 169, 97, 0.1)",
    color: "#c9a961",
  },
  customWrap: {
    position: "relative",
  },
  dollarSign: {
    position: "absolute",
    left: "1rem",
    top: "50%",
    transform: "translateY(-50%)",
    color: "rgba(245, 240, 230, 0.5)",
    fontSize: "1rem",
  },
  input: {
    width: "100%",
    padding: "0.9rem 1rem 0.9rem 2.2rem",
    backgroundColor: "transparent",
    border: "1px solid rgba(201, 169, 97, 0.3)",
    color: "#f5f0e6",
    fontSize: "1rem",
    fontFamily: "inherit",
    boxSizing: "border-box",
    transition: "border-color 0.2s ease",
    "&:focus": {
      outline: "none",
      borderColor: "#c9a961",
    },
    "&::placeholder": {
      color: "rgba(245, 240, 230, 0.4)",
    },
  },
  inputPlain: {
    width: "100%",
    padding: "0.9rem 1rem",
    backgroundColor: "transparent",
    border: "1px solid rgba(201, 169, 97, 0.3)",
    color: "#f5f0e6",
    fontSize: "1rem",
    fontFamily: "inherit",
    boxSizing: "border-box",
    transition: "border-color 0.2s ease",
    "&:focus": {
      outline: "none",
      borderColor: "#c9a961",
    },
    "&::placeholder": {
      color: "rgba(245, 240, 230, 0.4)",
    },
  },
  radioGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  radioOption: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "0.9rem 1rem",
    border: "1px solid rgba(201, 169, 97, 0.2)",
    cursor: "pointer",
    transition: "all 0.2s ease",
    fontSize: "0.95rem",
    color: "rgba(245, 240, 230, 0.85)",
    "&:hover": {
      borderColor: "rgba(201, 169, 97, 0.5)",
    },
  },
  radioActive: {
    borderColor: "#c9a961",
    backgroundColor: "rgba(201, 169, 97, 0.05)",
    color: "#f5f0e6",
  },
  radioDot: {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    border: "1px solid rgba(201, 169, 97, 0.5)",
    position: "relative",
    flexShrink: 0,
  },
  radioDotActive: {
    borderColor: "#c9a961",
    "&::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: "#c9a961",
    },
  },
  twoCol: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.75rem",
    marginTop: "1rem",
    "@media (max-width: 500px)": {
      gridTemplateColumns: "1fr",
    },
  },
  dateButtons: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.75rem",
    maxWidth: "300px",
  },
  dateBtn: {
    padding: "0.9rem 1rem",
    backgroundColor: "transparent",
    border: "1px solid rgba(201, 169, 97, 0.3)",
    color: "#f5f0e6",
    fontSize: "0.95rem",
    fontFamily: "inherit",
    cursor: "pointer",
    transition: "all 0.2s ease",
    "&:hover": {
      borderColor: "#c9a961",
    },
  },
  dateBtnActive: {
    borderColor: "#c9a961",
    backgroundColor: "rgba(201, 169, 97, 0.1)",
    color: "#c9a961",
  },
  helperText: {
    fontSize: "0.85rem",
    color: "rgba(245, 240, 230, 0.55)",
    marginTop: "0.75rem",
    fontStyle: "italic",
  },
  textarea: {
    width: "100%",
    padding: "0.9rem 1rem",
    backgroundColor: "transparent",
    border: "1px solid rgba(201, 169, 97, 0.3)",
    color: "#f5f0e6",
    fontSize: "1rem",
    fontFamily: "inherit",
    boxSizing: "border-box",
    minHeight: "100px",
    resize: "vertical",
    marginTop: "1rem",
    transition: "border-color 0.2s ease",
    "&:focus": {
      outline: "none",
      borderColor: "#c9a961",
    },
    "&::placeholder": {
      color: "rgba(245, 240, 230, 0.4)",
    },
  },
  submitBtn: {
    width: "100%",
    padding: "1.1rem 2rem",
    backgroundColor: "transparent",
    color: "#c9a961",
    border: "1px solid #c9a961",
    fontSize: "0.85rem",
    letterSpacing: "0.3em",
    textTransform: "uppercase",
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "all 0.3s ease",
    marginTop: "1rem",
    "&:hover": {
      backgroundColor: "#c9a961",
      color: "#0f0a0a",
    },
  },
});

const PRESET_AMOUNTS = [25, 50, 100, 200];

const GiftCard = () => {
  const classes = useStyles();
  const [amount, setAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const [delivery, setDelivery] = useState("email");
  const [dateOption, setDateOption] = useState("today");

  const displayAmount = customAmount || amount;

  const handlePreset = (a) => {
    setAmount(a);
    setCustomAmount("");
  };

  return (
    <div className={classes.page}>
      <section className={classes.hero}>
        <div className={classes.eyebrow}>The Perfect Gesture</div>
        <h1 className={classes.title}>Gift Card</h1>
        <p className={classes.subtitle}>
          Share the Holly Wu experience with someone you love.
        </p>
      </section>

      <section className={classes.layout}>
        <div className={classes.cardArt}>
          <div>
            <div className={classes.cardBrand}>Holly Wu</div>
            <div className={classes.cardTagline}>Dim Sum · Asian Bar</div>
          </div>
          <div className={classes.cardAmount}>${displayAmount}</div>
          <div className={classes.cardFooter}>Digital Gift Card</div>
        </div>

        <div className={classes.form}>
          {/* Gift Amount */}
          <div className={classes.fieldGroup}>
            <div className={classes.fieldLabel}>
              <span className={classes.required}>*</span>Gift Amount
            </div>
            <div className={classes.amounts}>
              {PRESET_AMOUNTS.map((a) => (
                <button
                  key={a}
                  className={`${classes.amountBtn} ${
                    amount === a && !customAmount ? classes.amountBtnActive : ""
                  }`}
                  onClick={() => handlePreset(a)}
                >
                  ${a}.00
                </button>
              ))}
            </div>
            <div className={classes.customWrap}>
              <span className={classes.dollarSign}>$</span>
              <input
                className={classes.input}
                type="number"
                placeholder="Customize amount ($10.00 - $500.00)"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
              />
            </div>
          </div>

          {/* Delivery Options */}
          <div className={classes.fieldGroup}>
            <div className={classes.fieldLabel}>
              <span className={classes.required}>*</span>Delivery Options
            </div>
            <div className={classes.radioGroup}>
              <div
                className={`${classes.radioOption} ${
                  delivery === "email" ? classes.radioActive : ""
                }`}
                onClick={() => setDelivery("email")}
              >
                <span
                  className={`${classes.radioDot} ${
                    delivery === "email" ? classes.radioDotActive : ""
                  }`}
                />
                Send this card via Email
              </div>
              <div
                className={`${classes.radioOption} ${
                  delivery === "text" ? classes.radioActive : ""
                }`}
                onClick={() => setDelivery("text")}
              >
                <span
                  className={`${classes.radioDot} ${
                    delivery === "text" ? classes.radioDotActive : ""
                  }`}
                />
                Send this card via Text
              </div>
              <div
                className={`${classes.radioOption} ${
                  delivery === "me" ? classes.radioActive : ""
                }`}
                onClick={() => setDelivery("me")}
              >
                <span
                  className={`${classes.radioDot} ${
                    delivery === "me" ? classes.radioDotActive : ""
                  }`}
                />
                Send this card To Me first
              </div>
            </div>
            <div className={classes.twoCol}>
              <input
                className={classes.inputPlain}
                type="email"
                placeholder="Recipient email"
              />
              <input
                className={classes.inputPlain}
                type="email"
                placeholder="Confirm email"
              />
            </div>
          </div>

          {/* Delivery Date and Time */}
          <div className={classes.fieldGroup}>
            <div className={classes.fieldLabel}>
              <span className={classes.required}>*</span>Delivery Date and Time
            </div>
            <div className={classes.dateButtons}>
              <button
                className={`${classes.dateBtn} ${
                  dateOption === "today" ? classes.dateBtnActive : ""
                }`}
                onClick={() => setDateOption("today")}
              >
                Today
              </button>
              <button
                className={`${classes.dateBtn} ${
                  dateOption === "later" ? classes.dateBtnActive : ""
                }`}
                onClick={() => setDateOption("later")}
              >
                Later
              </button>
            </div>
            <p className={classes.helperText}>
              We'll send the digital card immediately after you complete the
              order.
            </p>
          </div>

          {/* Personalize */}
          <div className={classes.fieldGroup}>
            <div className={classes.fieldLabel}>Personalize Your Card</div>
            <div className={classes.twoCol} style={{ marginTop: 0 }}>
              <input
                className={classes.inputPlain}
                type="text"
                placeholder="Recipient's Name"
              />
              <input
                className={classes.inputPlain}
                type="text"
                placeholder="Sender's Name"
              />
            </div>
            <textarea
              className={classes.textarea}
              placeholder="Add a custom message up to 255 characters."
              maxLength={255}
            />
          </div>

          <button className={classes.submitBtn}>Add to Cart</button>
        </div>
      </section>
    </div>
  );
};

export default GiftCard;
