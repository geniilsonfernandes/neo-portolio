import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  id: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  id,
  ...props
}) => {
  return (
    <section id={id} aria-labelledby={`${id}-title`} {...props}>
      <div className="w-full flex ">
        <h2
          id={`${id}-title`}
          className="font-normal my-6 text-2xl text-slate-700 dark:text-white "
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
};
