import { createUseStyles } from "react-jss";
import { usePageTransition } from "./TransitionContext.jsx";

const useStyles = createUseStyles({
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    pointerEvents: "none",
    display: "flex",
  },
  curtainLeft: {
    width: "50%",
    height: "100%",
    background: "linear-gradient(135deg, #5a1215 0%, #8b1a1a 40%, #6e1b18 70%, #4a0e10 100%)",
    transform: "translateX(-100%)",
    position: "relative",
    overflow: "hidden",
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      right: 0,
      width: "60px",
      height: "100%",
      background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.3))",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      background: "repeating-linear-gradient(90deg, transparent, transparent 28px, rgba(0,0,0,0.06) 28px, rgba(0,0,0,0.06) 30px)",
      opacity: 0.5,
    },
  },
  curtainRight: {
    width: "50%",
    height: "100%",
    background: "linear-gradient(225deg, #5a1215 0%, #8b1a1a 40%, #6e1b18 70%, #4a0e10 100%)",
    transform: "translateX(100%)",
    position: "relative",
    overflow: "hidden",
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "60px",
      height: "100%",
      background: "linear-gradient(270deg, transparent, rgba(0,0,0,0.3))",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      background: "repeating-linear-gradient(90deg, transparent, transparent 28px, rgba(0,0,0,0.06) 28px, rgba(0,0,0,0.06) 30px)",
      opacity: 0.5,
    },
  },
  closing: {
    "& $curtainLeft": {
      animation: "$closeLeft 0.5s cubic-bezier(0.7, 0, 0.3, 1) forwards",
    },
    "& $curtainRight": {
      animation: "$closeRight 0.5s cubic-bezier(0.7, 0, 0.3, 1) forwards",
    },
  },
  opening: {
    "& $curtainLeft": {
      animation: "$openLeft 0.55s cubic-bezier(0.7, 0, 0.3, 1) forwards",
    },
    "& $curtainRight": {
      animation: "$openRight 0.55s cubic-bezier(0.7, 0, 0.3, 1) forwards",
    },
  },
  goldEdge: {
    position: "absolute",
    top: 0,
    width: "2px",
    height: "100%",
    background: "linear-gradient(180deg, transparent 3%, #d8b47f 15%, #d8b47f 85%, transparent 97%)",
    zIndex: 1,
    opacity: 0.5,
  },
  goldLeft: { right: 0 },
  goldRight: { left: 0 },
  "@keyframes closeLeft": {
    "0%": { transform: "translateX(-100%)" },
    "100%": { transform: "translateX(0)" },
  },
  "@keyframes closeRight": {
    "0%": { transform: "translateX(100%)" },
    "100%": { transform: "translateX(0)" },
  },
  "@keyframes openLeft": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-100%)" },
  },
  "@keyframes openRight": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(100%)" },
  },
});

export default function Curtains() {
  const classes = useStyles();
  const { phase } = usePageTransition();

  if (phase === "idle") return null;

  const animClass = phase === "closing" ? classes.closing : classes.opening;

  return (
    <div className={`${classes.overlay} ${animClass}`}>
      <div className={classes.curtainLeft}>
        <div className={`${classes.goldEdge} ${classes.goldLeft}`} />
      </div>
      <div className={classes.curtainRight}>
        <div className={`${classes.goldEdge} ${classes.goldRight}`} />
      </div>
    </div>
  );
}
