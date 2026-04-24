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
  },
  sectionTitle: {
    fontSize: "28px",
    color: "#f6ead0",
    marginBottom: "32px",
    textAlign: "center",
  },
  eventsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  card: {
    border: "1px solid rgba(216,180,127,0.4)",
    background: "rgba(22,17,14,0.8)",
    overflow: "hidden",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
    },
  },
  cardHeader: {
    padding: "24px 28px 20px",
    borderBottom: "1px solid rgba(216,180,127,0.15)",
  },
  cardDate: {
    fontSize: "12px",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#d8b47f",
    marginBottom: "8px",
  },
  cardTitle: {
    fontSize: "22px",
    color: "#f6ead0",
    margin: 0,
  },
  cardBody: {
    padding: "20px 28px 28px",
  },
  cardDesc: {
    color: "#e5d2b4",
    lineHeight: 1.7,
    fontSize: "15px",
    marginBottom: "20px",
  },
  cardDetails: {
    fontSize: "13px",
    color: "#c9b190",
    lineHeight: 1.6,
  },
  cardTag: {
    display: "inline-block",
    padding: "4px 12px",
    border: "1px solid rgba(216,180,127,0.4)",
    fontSize: "11px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#d8b47f",
    marginTop: "12px",
  },
  privateSection: {
    padding: "60px 8vw 80px",
    borderTop: "1px solid rgba(216,180,127,0.2)",
    textAlign: "center",
    maxWidth: "700px",
    margin: "0 auto",
  },
  privateTitle: {
    fontSize: "32px",
    color: "#f6ead0",
    marginBottom: "16px",
  },
  privateDesc: {
    color: "rgba(246,234,208,0.6)",
    fontSize: "17px",
    lineHeight: 1.7,
    marginBottom: "28px",
  },
  button: {
    display: "inline-block",
    padding: "14px 36px",
    background: "#6e1b18",
    border: "1px solid #6e1b18",
    color: "#f9ecd3",
    fontSize: "13px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    textDecoration: "none",
    cursor: "pointer",
    transition: "background 0.2s ease, transform 0.2s ease",
    "&:hover": {
      background: "#8a2220",
      transform: "translateY(-1px)",
    },
  },
});

const upcomingEvents = [
  {
    date: "Every Saturday",
    title: "Dim Sum Brunch",
    desc: "A leisurely weekend tradition. Bamboo steamers, tea pairings, and bottomless jasmine. No reservation needed for parties under 4.",
    details: "11am - 2pm | Full cart service",
    tag: "Weekly",
  },
  {
    date: "First Friday of Each Month",
    title: "Tea Tasting Evening",
    desc: "Explore rare and seasonal teas from Yunnan, Fujian, and Taiwan. Guided by our tea master with paired small bites.",
    details: "7pm - 9pm | Limited to 20 guests",
    tag: "Monthly",
  },
  {
    date: "Coming Soon",
    title: "Lunar New Year Banquet",
    desc: "A multi-course celebration featuring lion dance performances, specialty dishes, and festive cocktails. Our biggest night of the year.",
    details: "Details announced soon",
    tag: "Annual",
  },
];

export default function Events() {
  const classes = useStyles();
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.heroContent}>
          <div className={classes.eyebrow}>Events</div>
          <h1 className={classes.heroTitle}>Celebrate with us.</h1>
          <p className={classes.heroSub}>
            From weekly dim sum brunches to private tea room dinners, there's always a reason to gather at Holly Wu.
          </p>
        </div>
      </section>

      <section className={classes.section}>
        <h2 className={classes.sectionTitle}>Upcoming Events</h2>
        <div className={classes.eventsGrid}>
          {upcomingEvents.map((event) => (
            <div className={classes.card} key={event.title}>
              <div className={classes.cardHeader}>
                <div className={classes.cardDate}>{event.date}</div>
                <h3 className={classes.cardTitle}>{event.title}</h3>
              </div>
              <div className={classes.cardBody}>
                <p className={classes.cardDesc}>{event.desc}</p>
                <div className={classes.cardDetails}>{event.details}</div>
                <div className={classes.cardTag}>{event.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={classes.privateSection}>
        <h2 className={classes.privateTitle}>Private Dining</h2>
        <p className={classes.privateDesc}>
          Our tea room seats up to 20 guests for milestone dinners, corporate gatherings, and celebrations. 
          Custom menus and tea pairings available.
        </p>
        <a className={classes.button} href="mailto:events@hollywu.com">
          Inquire About Private Events
        </a>
      </section>
    </>
  );
}
