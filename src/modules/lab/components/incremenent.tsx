"use client";

import { IconMinus, IconPlus } from "@tabler/icons-react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useMemo, useState } from "react";

const numberVariants: Variants = {
  initial: (direction: number) => ({
    y: direction > 0 ? 20 : -20,
    opacity: 0,
    filter: "blur(4px)",
  }),
  animate: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.2 },
  },
  exit: (direction: number) => ({
    y: direction > 0 ? -20 : 20,
    opacity: 0,
    filter: "blur(4px)",
    transition: { duration: 0.2 },
  }),
};

export const Increment = () => {
  const [value, setValue] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleChange = (delta: number) => {
    setDirection(delta);
    setValue((prev) => prev + delta);
  };

  const formatted = useMemo(() => {
    return (value / 10).toFixed(1);
  }, [value]);

  return (
    <div className="flex items-center gap-4 text-white relative h-10">
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="p-2 bg-slate-400 dark:bg-midnight-700 rounded-full"
        onClick={() => handleChange(-1)}
        aria-label="Decrement"
      >
        <IconMinus size={20} />
      </motion.button>

      <div className="min-w-[80px] h-10 flex items-center justify-center relative tracking-widest">
        <AnimatePresence custom={direction} mode="popLayout">
          {formatted.split("").map((char, index) => (
            <motion.span
              key={char + index}
              custom={direction}
              variants={numberVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-2xl text-slate-800 dark:text-white font-mono"
            >
              {char}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      <motion.button
        whileTap={{ scale: 0.9 }}
        className="p-2 bg-slate-400 dark:bg-midnight-700 rounded-full"
        onClick={() => handleChange(1)}
        aria-label="Increment"
      >
        <IconPlus size={20} />
      </motion.button>
    </div>
  );
};
