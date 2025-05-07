"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

interface SectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  title: string;
  id: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  id,
  ...props
}) => {
  return (
    <motion.section id={id} aria-labelledby={`${id}-title`} {...props}>
      <div>
        <h2
          id={`${id}-title`}
          className="font-normal my-6 text-2xl text-slate-700 dark:text-white "
        >
          {title}
        </h2>
      </div>
      {children}
    </motion.section>
  );
};
