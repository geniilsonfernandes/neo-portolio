import {
  IconBrandCypress,
  IconBrandStorybook,
  IconBrandVite,
  IconJoker,
} from "@tabler/icons-react";
import { Badge } from "./Badge";

export const TestingSection: React.FC = () => {
  const technologies = [
    {
      label: "Jest",
      icon: <IconJoker size={18} stroke={1} />,
    },
    {
      label: "storybook",
      icon: <IconBrandStorybook size={18} stroke={1} />,
    },
    {
      label: "Cypress",
      icon: <IconBrandCypress size={18} stroke={1} />,
    },
    {
      label: "Vitest",
      icon: <IconBrandVite size={18} stroke={1} />,
    },
  ];

  return (
    <section
      id="testing"
      className="space-y-4 my-8"
      aria-labelledby="testing-technologies"
    >
      <h2 className="font-bold my-4">Testing</h2>
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
