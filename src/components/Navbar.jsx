import { Link, useLocation } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { usePageTransition } from "./TransitionContext.jsx";

const useStyles = createUseStyles({
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10000,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "18px 8vw",
    background: "rgba(18,14,12,0.85)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(216,180,127,0.15)",
  },
  brand: {
    fontSize: "26px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#f6ead0",
    textDecoration: "none",
    cursor: "pointer",
    background: "none",
    border: "none",
    fontFamily: "inherit",
    padding: 0,
  },
  links: {
    display: "flex",
    gap: "24px",
    fontSize: "13px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
  },
  link: {
    color: "#f6ead0",
    textDecoration: "none",
    padding: "6px 0",
    borderBottom: "1px solid transparent",
    transition: "color 0.2s ease, border-color 0.2s ease",
    cursor: "pointer",
    background: "none",
    border: "none",
    borderBottom: "1px solid transparent",
    fontFamily: "inherit",
    fontSize: "13px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    "&:hover": {
      color: "#d8b47f",
      borderBottom: "1px solid #d8b47f",
    },
  },
  active: {
    color: "#d8b47f !important",
    borderBottom: "1px solid #d8b47f !important",
  },
  "@media (max-width: 768px)": {
    links: {
      gap: "14px",
      fontSize: "11px",
    },
    brand: {
      fontSize: "20px",
    },
  },
});

const navItems = [
  { to: "/story", label: "Story" },
  { to: "/menu", label: "Menu" },
  { to: "/tea-bar", label: "Tea Bar" },
  { to: "/reservations", label: "Reservations" },
  { to: "/events", label: "Events" },
];

export default function Navbar() {
  const classes = useStyles();
  const location = useLocation();
  const { navigateWithTransition } = usePageTransition();

  const handleClick = (e, to) => {
    e.preventDefault();
    if (location.pathname === to) return;
    navigateWithTransition(to);
  };

  return (
    <nav className={classes.nav}>
      <button
        className={classes.brand}
        onClick={(e) => handleClick(e, "/")}
      >
        Holly Wu
      </button>
      <div className={classes.links}>
        {navItems.map((item) => (
          <button
            key={item.to}
            className={`${classes.link} ${location.pathname === item.to ? classes.active : ""}`}
            onClick={(e) => handleClick(e, item.to)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
