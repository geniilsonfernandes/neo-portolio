import clsx from "clsx";
import React from "react";

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        "animate-pulse rounded bg-gray-200 dark:bg-midnight-700",
        className
      )}
    />
  );
};
