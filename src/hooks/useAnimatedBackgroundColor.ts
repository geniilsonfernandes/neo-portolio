import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export function useAnimatedBackgroundColor(toColor: string, duration = 0.5) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundColor: toColor,
      transition: { duration, ease: "easeInOut" },
    });
  }, [toColor, duration, controls]);

  return controls;
}
