import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  footer: {
    padding: "40px 8vw 50px",
    borderTop: "1px solid rgba(216,180,127,0.4)",
    background: "rgba(18,14,12,0.9)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "24px",
  },
  title: {
    fontSize: "20px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    marginBottom: "10px",
  },
  text: {
    color: "#d8c7ab",
    lineHeight: 1.7,
  },
  bottom: {
    marginTop: "32px",
    fontSize: "12px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#c9b190",
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.grid}>
        <div>
          <div className={classes.title}>Holly Wu</div>
          <p className={classes.text}>
            Asian Bar + Dim Sum
            <br />
            Lantern-lit dining in the heart of Austin.
          </p>
        </div>
        <div>
          <div className={classes.title}>Private Dining</div>
          <p className={classes.text}>
            Tea room feasts, milestone dinners, and celebrations.
            <br />
            events@hollywu.com
          </p>
        </div>
        <div>
          <div className={classes.title}>Social</div>
          <p className={classes.text}>
            Instagram: @hollywu
            <br />
            TikTok: @hollywu
          </p>
        </div>
      </div>
      <div className={classes.bottom}>© 2026 Holly Wu. All rights reserved.</div>
    </footer>
  );
}
