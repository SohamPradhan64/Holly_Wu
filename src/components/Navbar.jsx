import { Link, useLocation } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "18px 8vw",
    transition: "background 0.3s ease, box-shadow 0.3s ease",
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
    "&:hover": {
      color: "#d8b47f",
      borderBottom: "1px solid #d8b47f",
    },
  },
  active: {
    color: "#d8b47f",
    borderBottom: "1px solid #d8b47f",
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

  return (
    <nav className={classes.nav}>
      <Link to="/" className={classes.brand}>Holly Wu</Link>
      <div className={classes.links}>
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`${classes.link} ${location.pathname === item.to ? classes.active : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
