import { createContext, useContext, useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";

const TransitionContext = createContext();

export function usePageTransition() {
  return useContext(TransitionContext);
}

export function TransitionProvider({ children }) {
  const navigate = useNavigate();
  const [phase, setPhase] = useState("idle"); // idle | closing | opening
  const [contentReady, setContentReady] = useState(true);
  const isAnimating = useRef(false);

  const navigateWithTransition = useCallback((to) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    // Step 1: Close curtains over current page
    setPhase("closing");
    setContentReady(true); // keep old content visible

    // Step 2: After curtains fully closed, swap page
    setTimeout(() => {
      setContentReady(false); // hide content for swap
      navigate(to);

      // Step 3: Small delay then open curtains
      setTimeout(() => {
        setPhase("opening");
        setContentReady(true); // fade in new content

        // Step 4: Animation done
        setTimeout(() => {
          setPhase("idle");
          isAnimating.current = false;
        }, 600);
      }, 250);
    }, 500);
  }, [navigate]);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition, phase, contentReady }}>
      {children}
    </TransitionContext.Provider>
  );
}
