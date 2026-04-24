import { createUseStyles } from "react-jss";
import { usePageTransition } from "./TransitionContext.jsx";

const useStyles = createUseStyles({
  content: {
    opacity: 1,
    transform: "translateY(0)",
    transition: "opacity 0.5s ease, transform 0.5s ease",
  },
  hidden: {
    opacity: 0,
    transform: "translateY(12px)",
  },
  visible: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export default function PageContent({ children }) {
  const classes = useStyles();
  const { contentReady } = usePageTransition();

  return (
    <div className={`${classes.content} ${contentReady ? classes.visible : classes.hidden}`}>
      {children}
    </div>
  );
}
