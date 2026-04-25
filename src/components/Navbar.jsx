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
    "@media (max-width: 600px)": {
      fontSize: "20px",
    },
  },
  hamburger: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "5px",
    width: "32px",
    height: "32px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
  },
  hamburgerLine: {
    width: "100%",
    height: "1px",
    backgroundColor: "#f6ead0",
    transition: "all 0.3s ease",
    transformOrigin: "center",
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
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(4px)",
    zIndex: 9998,
    opacity: 0,
    pointerEvents: "none",
    transition: "opacity 0.35s ease",
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
    width: "min(90vw, 420px)",
    background: "linear-gradient(180deg, #120e0c 0%, #1a1210 100%)",
    borderLeft: "1px solid rgba(216,180,127,0.25)",
    zIndex: 9999,
    transform: "translateX(100%)",
    transition: "transform 0.4s cubic-bezier(0.65, 0, 0.35, 1)",
    padding: "100px 3rem 3rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
    overflowY: "auto",
    boxShadow: "-20px 0 60px rgba(0,0,0,0.5)",
  },
  drawerOpen: {
    transform: "translateX(0)",
  },
  drawerEyebrow: {
    fontSize: "0.7rem",
    letterSpacing: "0.4em",
    color: "rgba(216,180,127,0.6)",
    textTransform: "uppercase",
    marginBottom: "1.5rem",
    paddingBottom: "1.5rem",
    borderBottom: "1px solid rgba(216,180,127,0.15)",
  },
  drawerLink: {
    color: "#f6ead0",
    padding: "1.1rem 0",
    background: "none",
    border: "none",
    borderBottom: "1px solid rgba(216,180,127,0.08)",
    fontFamily: "inherit",
    fontSize: "15px",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    textAlign: "left",
    cursor: "pointer",
    transition: "color 0.25s ease, padding-left 0.25s ease",
    "&:hover": {
      color: "#d8b47f",
      paddingLeft: "0.5rem",
    },
  },
  drawerLinkActive: {
    color: "#d8b47f !important",
  },
  drawerFooter: {
    marginTop: "auto",
    paddingTop: "2rem",
    fontSize: "0.75rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "rgba(216,180,127,0.5)",
  },
});

const navItems = [
  { to: "/", label: "Home" },
  { to: "/story", label: "Story" },
  { to: "/menu", label: "Menu" },
  { to: "/tea-bar", label: "Tea Bar" },
  { to: "/order", label: "Order Online" },
  { to: "/reservations", label: "Reservations" },
  { to: "/catering", label: "Catering" },
  { to: "/parking", label: "Parking" },
  { to: "/gift-card", label: "Gift Cards" },
  { to: "/careers", label: "Join the Team" },
  { to: "/about", label: "About Us" },
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

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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

        <button
          className={classes.hamburger}
          onClick={() => setDrawerOpen(!drawerOpen)}
          aria-label="Toggle menu"
          aria-expanded={drawerOpen}
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

      <aside className={`${classes.drawer} ${drawerOpen ? classes.drawerOpen : ""}`}>
        <div className={classes.drawerEyebrow}>Menu</div>
        {navItems.map((item) => (
          <button
            key={item.to}
            className={`${classes.drawerLink} ${location.pathname === item.to ? classes.drawerLinkActive : ""}`}
            onClick={(e) => handleClick(e, item.to)}
          >
            {item.label}
          </button>
        ))}
        <div className={classes.drawerFooter}>Holly Wu · Austin</div>
      </aside>
    </>
  );
}
