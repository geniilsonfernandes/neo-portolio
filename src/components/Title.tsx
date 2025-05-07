import clsx from "clsx";
import React from "react";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  order?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Title: React.FC<TitleProps> = ({
  children,
  order = 1,
  className,
  ...props
}) => {
  const Heading: React.ElementType = `h${order}`;

  return (
    <Heading
      className={clsx(
        "text-2xl font-bold text-slate-700 dark:text-white",
        className
      )}
      {...props}
    >
      {children}
    </Heading>
  );
};


