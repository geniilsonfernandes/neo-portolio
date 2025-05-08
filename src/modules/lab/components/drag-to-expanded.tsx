"use client";

import {
  animate,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const DragIndicator = () => {
  return (
    <motion.div
      className="top-2 w-6 h-2 rounded-md bg-white -translate-x-1/2 left-1/2 cursor-grab absolute z-10 pointer-events-none"
      layoutId="drag-indicator"
    />
  );
};

export const DragToExpanded = () => {
  const minHeight = 50;
  const maxHeight = 150;
  const midpoint = (minHeight + maxHeight) / 2;

  const heightRaw = useMotionValue(minHeight);
  const height = useSpring(heightRaw, { stiffness: 200, damping: 20 });
  const width = useTransform(height, [minHeight, maxHeight], [100, 200]);

  const previousHeight = useRef(minHeight);

  return (
    <motion.div
      style={{ height, width }}
      drag="y"
      onDrag={(_, info) => {
        const newHeight = previousHeight.current - info.offset.y;
        const clampedHeight = Math.max(
          minHeight,
          Math.min(maxHeight, newHeight)
        );
        heightRaw.set(clampedHeight);
      }}
      onDragEnd={() => {
        const finalHeight = heightRaw.get();
        const shouldExpand = finalHeight > midpoint;
        const target = shouldExpand ? maxHeight : minHeight;

        animate(heightRaw, target, {
          type: "spring",
          stiffness: 300,
          damping: 25,
        });

        previousHeight.current = target;
      }}
      dragConstraints={{ top: 0, bottom: 0, left: 4, right: 0 }}
      className="flex justify-center rounded-2xl overflow-hidden bg-midnight-700 relative"
    >
      <DragIndicator />
      <Image
        src="https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Code review illustration"
        width={300}
        height={300}
        className="w-full h-full object-cover pointer-events-none"
      />
    </motion.div>
  );
};
