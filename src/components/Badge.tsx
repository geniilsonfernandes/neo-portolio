import clsx from "clsx";
import React from "react";

interface IBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  icon?: React.ReactNode;
  variant?: "default" | "primary" | "secondary";
  clickable?: boolean;
}

export const Badge: React.FC<IBadgeProps> = ({
  label,
  icon,
  variant = "default",
  clickable = false,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center gap-1 px-3 py-1 text-sm rounded-full transition-colors";
  const variants = {
    default:
      "bg-gray-100 text-gray-700 dark:bg-midnight-800 dark:text-white/60 border border-gray-200 dark:border-midnight-700",
    primary: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200",
    secondary:
      "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200",
  };

  return (
    <div
      role={clickable ? "button" : "status"}
      tabIndex={clickable ? 0 : undefined}
      className={clsx(
        baseStyles,
        variants[variant],
        clickable && "cursor-pointer hover:brightness-110",
        className
      )}
      {...props}
    >
      {icon}
      {label && <span>{label}</span>}
    </div>
  );
};
