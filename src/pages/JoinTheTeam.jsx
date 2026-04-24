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
  intro: {
    maxWidth: "750px",
    margin: "0 auto",
    padding: "5rem 2rem 3rem",
    textAlign: "center",
    fontSize: "1.1rem",
    lineHeight: 1.8,
    color: "rgba(245, 240, 230, 0.85)",
  },
  section: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "2rem 2rem",
  },
  sectionTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "2.2rem",
    fontWeight: 300,
    color: "#c9a961",
    marginBottom: "2.5rem",
    textAlign: "center",
    letterSpacing: "0.05em",
  },
  openings: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.5rem",
    marginBottom: "5rem",
  },
  role: {
    border: "1px solid rgba(201, 169, 97, 0.25)",
    padding: "2rem 1.75rem",
    transition: "all 0.3s ease",
    "&:hover": {
      borderColor: "#c9a961",
      backgroundColor: "rgba(201, 169, 97, 0.04)",
    },
  },
  roleType: {
    fontSize: "0.75rem",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "rgba(201, 169, 97, 0.7)",
    marginBottom: "0.75rem",
  },
  roleName: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.5rem",
    color: "#f5f0e6",
    marginBottom: "1rem",
    fontWeight: 400,
  },
  roleDesc: {
    fontSize: "0.95rem",
    lineHeight: 1.7,
    color: "rgba(245, 240, 230, 0.7)",
  },
  formWrap: {
    maxWidth: "700px",
    margin: "0 auto",
    border: "1px solid rgba(201, 169, 97, 0.3)",
    padding: "3rem 2.5rem",
    backgroundColor: "rgba(201, 169, 97, 0.02)",
  },
  formTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "2rem",
    color: "#f5f0e6",
    marginBottom: "0.5rem",
    fontWeight: 300,
    textAlign: "center",
  },
  formSubtitle: {
    fontSize: "0.95rem",
    color: "rgba(245, 240, 230, 0.65)",
    marginBottom: "2.5rem",
    textAlign: "center",
    fontStyle: "italic",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    marginBottom: "1rem",
    "@media (max-width: 500px)": {
      gridTemplateColumns: "1fr",
    },
  },
  label: {
    display: "block",
    fontSize: "0.75rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "rgba(245, 240, 230, 0.65)",
    marginBottom: "0.5rem",
    marginTop: "1rem",
  },
  input: {
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
  select: {
    width: "100%",
    padding: "0.9rem 1rem",
    backgroundColor: "transparent",
    border: "1px solid rgba(201, 169, 97, 0.3)",
    color: "#f5f0e6",
    fontSize: "1rem",
    fontFamily: "inherit",
    boxSizing: "border-box",
    cursor: "pointer",
    "&:focus": {
      outline: "none",
      borderColor: "#c9a961",
    },
    "& option": {
      backgroundColor: "#1a1010",
      color: "#f5f0e6",
    },
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
    minHeight: "120px",
    resize: "vertical",
    transition: "border-color 0.2s ease",
    "&:focus": {
      outline: "none",
      borderColor: "#c9a961",
    },
    "&::placeholder": {
      color: "rgba(245, 240, 230, 0.4)",
    },
  },
  fileWrap: {
    border: "1px dashed rgba(201, 169, 97, 0.4)",
    padding: "1.5rem",
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.2s ease",
    "&:hover": {
      borderColor: "#c9a961",
      backgroundColor: "rgba(201, 169, 97, 0.04)",
    },
  },
  fileLabel: {
    fontSize: "0.9rem",
    color: "rgba(245, 240, 230, 0.7)",
  },
  fileName: {
    fontSize: "0.85rem",
    color: "#c9a961",
    marginTop: "0.5rem",
    fontStyle: "italic",
  },
  fileInput: {
    display: "none",
  },
  submit: {
    width: "100%",
    marginTop: "2rem",
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
    "&:hover": {
      backgroundColor: "#c9a961",
      color: "#0f0a0a",
    },
  },
});

const ROLES = [
  {
    type: "Front of House",
    name: "Server",
    desc: "Guide guests through our menu and deliver the Holly Wu experience with warmth and precision.",
  },
  {
    type: "Front of House",
    name: "Host",
    desc: "Set the tone the moment guests walk in. Manage reservations and orchestrate the dining room.",
  },
  {
    type: "Bar",
    name: "Bartender",
    desc: "Craft cocktails that bridge Eastern ingredients and modern mixology. Experience with Asian spirits a plus.",
  },
  {
    type: "Kitchen",
    name: "Dim Sum Chef",
    desc: "Fold, steam, and plate our signature dumplings. Hand-technique experience required.",
  },
  {
    type: "Kitchen",
    name: "Line Cook",
    desc: "Execute the wok station with consistency and speed. High-volume experience preferred.",
  },
  {
    type: "Kitchen",
    name: "Dishwasher",
    desc: "Keep our kitchen running. Reliability and attention to detail valued above all.",
  },
];

const JoinTheTeam = () => {
  const classes = useStyles();
  const [fileName, setFileName] = useState("");

  const handleFile = (e) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className={classes.page}>
      <section className={classes.hero}>
        <div className={classes.eyebrow}>Careers</div>
        <h1 className={classes.title}>Join the Team</h1>
        <p className={classes.subtitle}>
          Build something remarkable with us.
        </p>
      </section>

      <p className={classes.intro}>
        Holly Wu is built by people who care deeply about craft and
        hospitality. We're looking for teammates who bring their best — whether
        that's folding the perfect xiaolongbao, shaking a flawless cocktail, or
        making every guest feel at home.
      </p>

      <section className={classes.section}>
        <h2 className={classes.sectionTitle}>Current Openings</h2>

        <div className={classes.openings}>
          {ROLES.map((role) => (
            <div key={role.name} className={classes.role}>
              <div className={classes.roleType}>{role.type}</div>
              <h3 className={classes.roleName}>{role.name}</h3>
              <p className={classes.roleDesc}>{role.desc}</p>
            </div>
          ))}
        </div>

        <div className={classes.formWrap}>
          <h2 className={classes.formTitle}>Apply Now</h2>
          <p className={classes.formSubtitle}>
            Tell us about yourself. We review every application.
          </p>

          <div className={classes.row}>
            <div>
              <label className={classes.label}>First Name</label>
              <input className={classes.input} type="text" />
            </div>
            <div>
              <label className={classes.label}>Last Name</label>
              <input className={classes.input} type="text" />
            </div>
          </div>

          <div className={classes.row}>
            <div>
              <label className={classes.label}>Email</label>
              <input className={classes.input} type="email" />
            </div>
            <div>
              <label className={classes.label}>Phone</label>
              <input className={classes.input} type="tel" />
            </div>
          </div>

          <label className={classes.label}>Position of Interest</label>
          <select className={classes.select} defaultValue="">
            <option value="" disabled>
              Select a role
            </option>
            {ROLES.map((role) => (
              <option key={role.name} value={role.name}>
                {role.name} — {role.type}
              </option>
            ))}
            <option value="other">Other / General Inquiry</option>
          </select>

          <label className={classes.label}>Relevant Experience</label>
          <textarea
            className={classes.textarea}
            placeholder="Tell us about your background and why you'd be a great fit..."
          />

          <label className={classes.label}>Resume (Optional)</label>
          <label className={classes.fileWrap}>
            <input
              className={classes.fileInput}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFile}
            />
            <div className={classes.fileLabel}>
              Click to upload — PDF, DOC, or DOCX
            </div>
            {fileName && <div className={classes.fileName}>{fileName}</div>}
          </label>

          <button className={classes.submit}>Submit Application</button>
        </div>
      </section>
    </div>
  );
};

export default JoinTheTeam;
