import {
  IconBrandGolang,
  IconBrandJavascript,
  IconBrandKotlin,
  IconBrandRust,
  IconBrandTypescript,
} from "@tabler/icons-react";
import { Badge } from "./Badge";

export const LanguagesSection: React.FC = () => {
  const technologies = [
    {
      label: "JavaScript",
      icon: <IconBrandJavascript size={16} stroke={1} />,
    },
    {
      label: "TypeScript",
      icon: <IconBrandTypescript size={16} stroke={1} />,
    },
    {
      label: "Kotlin",
      icon: <IconBrandKotlin size={16} stroke={1} />,
    },
    {
      label: "Rust",
      icon: <IconBrandRust size={16} stroke={1} />,
    },
    // {
    //   label: "C#",
    //   icon: <IconBrandCSharp size={16} stroke={1} />,
    // },
    {
      label: "Go",
      icon: <IconBrandGolang size={16} stroke={1} />,
    },
  ];

  return (
    <section
      id="technologies"
      aria-labelledby="technologies"
      className="space-y-4 my-8"
    >
      <h2 className="font-bold my-4 text-slate-500">Technologies Used</h2>
      <ul className="flex gap-2 flex-wrap list-none">
        {technologies.map((tech, i) => (
          <li key={i}>
            <Badge label={tech.label} icon={tech.icon} />
          </li>
        ))}
      </ul>
    </section>
  );
};
