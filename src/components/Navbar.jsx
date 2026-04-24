import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
    padding: "18px 6vw",
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
    flexShrink: 0,
  },
  links: {
    display: "flex",
    gap: "20px",
    fontSize: "12px",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    "@media (max-width: 1100px)": {
      display: "none",
    },
  },
  link: {
    color: "#f6ead0",
    padding: "6px 0",
    borderBottom: "1px solid transparent",
    transition: "color 0.2s ease, border-color 0.2s ease",
    cursor: "pointer",
    background: "none",
    border: "none",
    borderBottom: "1px solid transparent",
    fontFamily: "inherit",
    fontSize: "12px",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    "&:hover": {
      color: "#d8b47f",
      borderBottom: "1px solid #d8b47f",
    },
  },
  active: {
    color: "#d8b47f !important",
    borderBottom: "1px solid #d8b47f !important",
  },
  hamburger: {
    display: "none",
    flexDirection: "column",
    justifyContent: "center",
    gap: "5px",
    width: "32px",
    height: "32px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    "@media (max-width: 1100px)": {
      display: "flex",
    },
  },
  hamburgerLine: {
    width: "100%",
    height: "1px",
    backgroundColor: "#f6ead0",
    transition: "all 0.3s ease",
  },
  hamburgerLineOpen1: {
    transform: "translateY(6px) rotate(45deg)",
    backgroundColor: "#d8b47f",
  },
  hamburgerLineOpen2: {
    opacity: 0,
  },
  hamburgerLineOpen3: {
    transform: "translateY(-6px) rotate(-45deg)",
    backgroundColor: "#d8b47f",
  },
  drawerOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.7)",
    zIndex: 9998,
    opacity: 0,
    pointerEvents: "none",
    transition: "opacity 0.3s ease",
  },
  drawerOverlayOpen: {
    opacity: 1,
    pointerEvents: "auto",
  },
  drawer: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    width: "min(85vw, 380px)",
    background: "#120e0c",
    borderLeft: "1px solid rgba(216,180,127,0.2)",
    zIndex: 9999,
    transform: "translateX(100%)",
    transition: "transform 0.35s ease",
    padding: "90px 2rem 2rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    overflowY: "auto",
  },
  drawerOpen: {
    transform: "translateX(0)",
  },
  drawerLink: {
    color: "#f6ead0",
    padding: "1rem 0",
    borderBottom: "1px solid rgba(216,180,127,0.1)",
    background: "none",
    border: "none",
    borderBottom: "1px solid rgba(216,180,127,0.1)",
    fontFamily: "inherit",
    fontSize: "14px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    textAlign: "left",
    cursor: "pointer",
    transition: "color 0.2s ease",
    "&:hover": {
      color: "#d8b47f",
    },
  },
  drawerLinkActive: {
    color: "#d8b47f !important",
  },
});

const navItems = [
  { to: "/story", label: "Story" },
  { to: "/menu", label: "Menu" },
  { to: "/tea-bar", label: "Tea Bar" },
  { to: "/order", label: "Order" },
  { to: "/reservations", label: "Reservations" },
  { to: "/catering", label: "Catering" },
  { to: "/parking", label: "Parking" },
  { to: "/gift-card", label: "Gift Cards" },
  { to: "/careers", label: "Careers" },
  { to: "/about", label: "About" },
  { to: "/store", label: "Store" },
];

export default function Navbar() {
  const classes = useStyles();
  const location = useLocation();
  const { navigateWithTransition } = usePageTransition();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const handleClick = (e, to) => {
    e.preventDefault();
    setDrawerOpen(false);
    if (location.pathname === to) return;
    navigateWithTransition(to);
  };

  return (
    <>
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

        <button
          className={classes.hamburger}
          onClick={() => setDrawerOpen(!drawerOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${classes.hamburgerLine} ${drawerOpen ? classes.hamburgerLineOpen1 : ""}`} />
          <span className={`${classes.hamburgerLine} ${drawerOpen ? classes.hamburgerLineOpen2 : ""}`} />
          <span className={`${classes.hamburgerLine} ${drawerOpen ? classes.hamburgerLineOpen3 : ""}`} />
        </button>
      </nav>

      <div
        className={`${classes.drawerOverlay} ${drawerOpen ? classes.drawerOverlayOpen : ""}`}
        onClick={() => setDrawerOpen(false)}
      />

      <div className={`${classes.drawer} ${drawerOpen ? classes.drawerOpen : ""}`}>
        {navItems.map((item) => (
          <button
            key={item.to}
            className={`${classes.drawerLink} ${location.pathname === item.to ? classes.drawerLinkActive : ""}`}
            onClick={(e) => handleClick(e, item.to)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
}
