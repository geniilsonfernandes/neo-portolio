import {
  IconBrandFirebase,
  IconBrandGraphql,
  IconBrandMongodb,
  IconBrandNodejs,
  IconBrandPrisma,
  IconBrandSupabase,
  IconDatabase,
} from "@tabler/icons-react";
import { Badge } from "./Badge";

export const BackEndSection: React.FC = () => {
  const technologies = [
    {
      label: "Node.js",
      icon: <IconBrandNodejs size={18} stroke={1} />,
    },
    {
      label: "Nest.js",
      icon: <IconBrandNodejs size={18} stroke={1} />,
    },
    {
      label: "GraphQL",
      icon: <IconBrandGraphql size={18} stroke={1} />,
    },
    {
      label: "Prisma",
      icon: <IconBrandPrisma size={18} stroke={1} />,
    },
    {
      label: "Firebase",
      icon: <IconBrandFirebase size={18} stroke={1} />,
    },
    {
      label: "Supabase",
      icon: <IconBrandSupabase size={18} stroke={1} />,
    },
    {
      label: "MongoDB",
      icon: <IconBrandMongodb size={18} stroke={1} />,
    },
    {
      label: "PostgreSQL",
      icon: <IconDatabase size={18} stroke={1} />,
    },
  ];

  return (
    <section
      id="languages"
      className="space-y-4 my-8"
      aria-labelledby="languages"
    >
      <h2 className="font-bold my-4 text-slate-500">Back-end</h2>
      <ul className="flex gap-2 flex-wrap list-none">
        {technologies.map((tech, i) => (
          <li key={i}>
            <Badge key={i} label={tech.label} icon={tech.icon} />
          </li>
        ))}
      </ul>
    </section>
  );
};
