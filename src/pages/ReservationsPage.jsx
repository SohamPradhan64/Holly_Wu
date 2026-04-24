import { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  hero: {
    minHeight: "40vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "140px 8vw 60px",
    background: "linear-gradient(135deg, rgba(18,14,12,1) 0%, rgba(40,25,18,1) 50%, rgba(18,14,12,1) 100%)",
    borderBottom: "1px solid rgba(216,180,127,0.2)",
  },
  heroContent: {
    maxWidth: "600px",
  },
  eyebrow: {
    fontSize: "13px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#d8b47f",
    marginBottom: "16px",
  },
  heroTitle: {
    fontSize: "48px",
    lineHeight: 1.1,
    margin: "0 0 16px",
    color: "#f6ead0",
  },
  heroSub: {
    fontSize: "17px",
    color: "rgba(246,234,208,0.6)",
    lineHeight: 1.7,
  },
  section: {
    padding: "60px 8vw 80px",
    maxWidth: "700px",
    margin: "0 auto",
  },
  formGroup: {
    marginBottom: "24px",
  },
  label: {
    display: "block",
    fontSize: "12px",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#d8b47f",
    marginBottom: "8px",
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    background: "rgba(22,17,14,0.8)",
    border: "1px solid rgba(216,180,127,0.4)",
    color: "#f6ead0",
    fontSize: "16px",
    borderRadius: "4px",
    outline: "none",
    transition: "border-color 0.2s ease",
    "&:focus": {
      borderColor: "#d8b47f",
    },
    "&::placeholder": {
      color: "rgba(246,234,208,0.3)",
    },
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    "@media (max-width: 600px)": {
      gridTemplateColumns: "1fr",
    },
  },
  textarea: {
    width: "100%",
    padding: "12px 16px",
    background: "rgba(22,17,14,0.8)",
    border: "1px solid rgba(216,180,127,0.4)",
    color: "#f6ead0",
    fontSize: "16px",
    borderRadius: "4px",
    outline: "none",
    minHeight: "100px",
    resize: "vertical",
    fontFamily: "inherit",
    transition: "border-color 0.2s ease",
    "&:focus": {
      borderColor: "#d8b47f",
    },
    "&::placeholder": {
      color: "rgba(246,234,208,0.3)",
    },
  },
  button: {
    padding: "14px 36px",
    background: "#6e1b18",
    border: "1px solid #6e1b18",
    color: "#f9ecd3",
    fontSize: "13px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "background 0.2s ease, transform 0.2s ease",
    "&:hover": {
      background: "#8a2220",
      transform: "translateY(-1px)",
    },
  },
  info: {
    padding: "40px 8vw 80px",
    maxWidth: "700px",
    margin: "0 auto",
    borderTop: "1px solid rgba(216,180,127,0.2)",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "32px",
    "@media (max-width: 600px)": {
      gridTemplateColumns: "1fr",
    },
  },
  infoTitle: {
    fontSize: "14px",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#d8b47f",
    marginBottom: "8px",
  },
  infoText: {
    color: "#e5d2b4",
    lineHeight: 1.7,
    fontSize: "15px",
  },
  success: {
    textAlign: "center",
    padding: "60px 20px",
    color: "#d8b47f",
    fontSize: "20px",
  },
});

export default function ReservationsPage() {
  const classes = useStyles();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", guests: "", notes: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className={classes.hero}>
        <div className={classes.heroContent}>
          <div className={classes.eyebrow}>Reservations</div>
          <h1 className={classes.heroTitle}>Gather beneath the red lanterns.</h1>
          <p className={classes.heroSub}>
            Reserve your table for an evening of dim sum, tea, and warmth. Walk-ins welcome nightly.
          </p>
        </div>
      </section>

      <section className={classes.section}>
        {submitted ? (
          <div className={classes.success}>
            Thank you! We'll confirm your reservation shortly.
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <div className={classes.row}>
              <div className={classes.formGroup}>
                <label className={classes.label}>Name</label>
                <input className={classes.input} type="text" placeholder="Your name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required />
              </div>
              <div className={classes.formGroup}>
                <label className={classes.label}>Email</label>
                <input className={classes.input} type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required />
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.formGroup}>
                <label className={classes.label}>Phone</label>
                <input className={classes.input} type="tel" placeholder="(512) 000-0000" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} />
              </div>
              <div className={classes.formGroup}>
                <label className={classes.label}>Number of Guests</label>
                <input className={classes.input} type="number" min="1" max="20" placeholder="2" value={form.guests} onChange={(e) => setForm({...form, guests: e.target.value})} required />
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.formGroup}>
                <label className={classes.label}>Date</label>
                <input className={classes.input} type="date" value={form.date} onChange={(e) => setForm({...form, date: e.target.value})} required />
              </div>
              <div className={classes.formGroup}>
                <label className={classes.label}>Time</label>
                <input className={classes.input} type="time" value={form.time} onChange={(e) => setForm({...form, time: e.target.value})} required />
              </div>
            </div>
            <div className={classes.formGroup}>
              <label className={classes.label}>Special Requests</label>
              <textarea className={classes.textarea} placeholder="Dietary restrictions, celebrations, seating preferences..." value={form.notes} onChange={(e) => setForm({...form, notes: e.target.value})} />
            </div>
            <button className={classes.button} type="submit">Reserve My Table</button>
          </form>
        )}
      </section>

      <section className={classes.info}>
        <div className={classes.infoGrid}>
          <div>
            <div className={classes.infoTitle}>Hours</div>
            <div className={classes.infoText}>
              Sun-Thurs: 11am - 10pm<br />
              Fri-Sat: 11am - 11:30pm
            </div>
          </div>
          <div>
            <div className={classes.infoTitle}>Private Dining</div>
            <div className={classes.infoText}>
              Our tea room seats up to 20 guests for private events.<br />
              Contact events@hollywu.com
            </div>
          </div>
          <div>
            <div className={classes.infoTitle}>Location</div>
            <div className={classes.infoText}>
              1203 West 6th Street<br />
              Austin, TX
            </div>
          </div>
          <div>
            <div className={classes.infoTitle}>Contact</div>
            <div className={classes.infoText}>
              (512) 474-5107<br />
              hello@hollywu.com
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
