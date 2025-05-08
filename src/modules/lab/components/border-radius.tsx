"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { forwardRef } from "react";

const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      type="number"
      defaultValue={16}
      ref={ref}
      className="w-14 h-8 rounded-lg
      bg-slate-300
      dark:bg-midnight-600
      dark:text-white
      px-2
      
      outline-none

      "
      {...props}
    />
  );
});

Input.displayName = "Input";

export const BorderRadius = () => {
  const corners = {
    topLeft: useSpring(useMotionValue(16), { stiffness: 200, damping: 20 }),
    topRight: useSpring(useMotionValue(16), { stiffness: 200, damping: 20 }),
    bottomLeft: useSpring(useMotionValue(16), { stiffness: 200, damping: 20 }),
    bottomRight: useSpring(useMotionValue(16), { stiffness: 200, damping: 20 }),
  };

  const handleChange =
    (corner: keyof typeof corners) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      corners[corner].set(Number(e.target.value));
    };

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        style={{
          borderTopLeftRadius: corners.topLeft,
          borderTopRightRadius: corners.topRight,
          borderBottomLeftRadius: corners.bottomLeft,
          borderBottomRightRadius: corners.bottomRight,
        }}
        className="w-40 h-40
          bg-slate-200
          border border-slate-300
        dark:bg-midnight-800  dark:border-midnight-600 flex items-center justify-center"
      >
        <div className="grid grid-cols-2 gap-3">
          <Input onChange={handleChange("topLeft")} />
          <Input onChange={handleChange("topRight")} />
          <Input onChange={handleChange("bottomLeft")} />
          <Input onChange={handleChange("bottomRight")} />
        </div>
      </motion.div>
    </div>
  );
};
