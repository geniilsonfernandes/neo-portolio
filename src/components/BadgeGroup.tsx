import React from "react";
import { Badge } from "./Badge";

export interface BadgeItem {
  label: string;
  icon?: React.ReactNode;
}

interface BadgeGroupProps {
  title: string;
  items: BadgeItem[];
  id?: string;
  "aria-labelledby"?: string;
}

export const BadgeGroup: React.FC<BadgeGroupProps> = ({
  title,
  items,
  id,
  "aria-labelledby": ariaLabelledBy,
}) => {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy || id}
      className="space-y-4 my-8"
    >
      <h2
        id={ariaLabelledBy || id}
        className="font-light my-4 text-slate-500 dark:text-white/50"
      >
        {title}
      </h2>
      <ul className="flex gap-2 flex-wrap list-none">
        {items.map((item, i) => (
          <li key={i}>
            <Badge label={item.label} icon={item.icon} />
          </li>
        ))}
      </ul>
    </section>
  );
};
