import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    position: "relative",
    minHeight: "100vh",
  },
  content: {
    opacity: 1,
    transition: "opacity 0.3s ease",
  },
  contentHidden: {
    opacity: 0,
  },
  curtainOverlay: {
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
      background: "repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(0,0,0,0.05) 30px, rgba(0,0,0,0.05) 32px)",
      opacity: 0.6,
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
      background: "repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(0,0,0,0.05) 30px, rgba(0,0,0,0.05) 32px)",
      opacity: 0.6,
    },
  },
  curtainClosing: {
    "& $curtainLeft": {
      animation: "$slideInLeft 0.5s cubic-bezier(0.65, 0, 0.35, 1) forwards",
    },
    "& $curtainRight": {
      animation: "$slideInRight 0.5s cubic-bezier(0.65, 0, 0.35, 1) forwards",
    },
  },
  curtainOpening: {
    "& $curtainLeft": {
      animation: "$slideOutLeft 0.5s cubic-bezier(0.65, 0, 0.35, 1) forwards",
    },
    "& $curtainRight": {
      animation: "$slideOutRight 0.5s cubic-bezier(0.65, 0, 0.35, 1) forwards",
    },
  },
  goldLine: {
    position: "absolute",
    top: 0,
    width: "2px",
    height: "100%",
    background: "linear-gradient(180deg, transparent 5%, #d8b47f 20%, #d8b47f 80%, transparent 95%)",
    zIndex: 1,
    opacity: 0.6,
  },
  goldLineLeft: {
    right: 0,
  },
  goldLineRight: {
    left: 0,
  },
  "@keyframes slideInLeft": {
    "0%": { transform: "translateX(-100%)" },
    "100%": { transform: "translateX(0)" },
  },
  "@keyframes slideInRight": {
    "0%": { transform: "translateX(100%)" },
    "100%": { transform: "translateX(0)" },
  },
  "@keyframes slideOutLeft": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-100%)" },
  },
  "@keyframes slideOutRight": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(100%)" },
  },
});

export default function PageTransition({ children }) {
  const classes = useStyles();
  const location = useLocation();
  const [phase, setPhase] = useState("idle"); // idle | closing | closed | opening
  const [displayChildren, setDisplayChildren] = useState(children);
  const prevPathRef = useRef(location.pathname);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevPathRef.current = location.pathname;
      setDisplayChildren(children);
      return;
    }

    if (location.pathname !== prevPathRef.current) {
      prevPathRef.current = location.pathname;
      
      // Phase 1: Close curtains
      setPhase("closing");
      
      setTimeout(() => {
        // Phase 2: Curtains closed, swap content
        setPhase("closed");
        setDisplayChildren(children);
        
        setTimeout(() => {
          // Phase 3: Open curtains
          setPhase("opening");
          
          setTimeout(() => {
            // Phase 4: Done
            setPhase("idle");
          }, 550);
        }, 150);
      }, 520);
    } else {
      setDisplayChildren(children);
    }
  }, [location.pathname, children]);

  const curtainClass = phase === "closing" || phase === "closed"
    ? classes.curtainClosing
    : phase === "opening"
    ? classes.curtainOpening
    : "";

  return (
    <div className={classes.wrapper}>
      <div className={`${classes.content} ${phase === "closed" ? classes.contentHidden : ""}`}>
        {displayChildren}
      </div>
      
      {phase !== "idle" && (
        <div className={`${classes.curtainOverlay} ${curtainClass}`}>
          <div className={classes.curtainLeft}>
            <div className={`${classes.goldLine} ${classes.goldLineLeft}`} />
          </div>
          <div className={classes.curtainRight}>
            <div className={`${classes.goldLine} ${classes.goldLineRight}`} />
          </div>
        </div>
      )}
    </div>
  );
}
