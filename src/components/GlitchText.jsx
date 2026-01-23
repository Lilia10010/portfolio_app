import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const GlitchText = ({ children, className = "", as = "span" }) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const Component = motion[as];

  useEffect(() => {
    // Random glitch effect
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Component
      className={`${isGlitching ? "glitch" : ""} ${className}`}
      data-text={children}
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      {children}
    </Component>
  );
};

export default GlitchText;
