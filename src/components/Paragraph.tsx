import clsx from "clsx";

export const Paragraph = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={clsx(
        "font-light text-slate-700 dark:text-white/80",
        className
      )}
    >
      {children}
    </p>
  );
};