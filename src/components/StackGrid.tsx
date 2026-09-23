import { BackEndTechnologies, FrontEndTechnologies } from "@/cms/data";
import { Badge } from "./Badge";

const columns = [
  { id: "front-end", title: "Front-end & Mobile", items: FrontEndTechnologies },
  { id: "back-end", title: "Back-end & Infra", items: BackEndTechnologies },
];

export const StackGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      {columns.map((column) => (
        <div
          key={column.id}
          aria-labelledby={`${column.id}-stack-title`}
          className="p-4 bg-white dark:bg-midnight-900 border border-slate-200 dark:border-midnight-800"
        >
          <h3
            id={`${column.id}-stack-title`}
            className="text-sm font-light text-slate-500 dark:text-white/50"
          >
            {column.title}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2 list-none">
            {column.items.map((item) => (
              <li key={item.label}>
                <Badge
                  label={item.label}
                  icon={item.icon}
                  className="px-2 py-0.5 text-xs"
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
