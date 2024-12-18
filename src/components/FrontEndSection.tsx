import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandRedux,
  IconBrandStorybook,
  IconBrandTailwind,
  IconBrandVite,
} from "@tabler/icons-react";
import { Badge } from "./Badge";

export const FrontEndSection: React.FC = () => {
  const technologies = [
    {
      label: "React",
      icon: <IconBrandReact size={18} stroke={1} />,
    },
    {
      label: "React Native",
      icon: <IconBrandReactNative size={18} stroke={1} />,
    },
    {
      label: "Next.js",
      icon: <IconBrandNextjs size={18} stroke={1} />,
    },
    // {
    //   label: "Vue.js",
    //   icon: <IconBrandVue size={18} stroke={1} />,
    // },
    // {
    //   label: "Angular",
    //   icon: <IconBrandAngular size={18} stroke={1} />,
    // },
    {
      label: "TailwindCSS",
      icon: <IconBrandTailwind size={18} stroke={1} />,
    },
    {
      label: "CSS3",
      icon: <IconBrandCss3 size={18} stroke={1} />,
    },
    {
      label: "HTML5",
      icon: <IconBrandHtml5 size={18} stroke={1} />,
    },
    {
      label: "Redux",
      icon: <IconBrandRedux size={18} stroke={1} />,
    },
    {
      label: "Stotybook",
      icon: <IconBrandStorybook size={18} stroke={1} />,
    },
    {
      label: "Vite",
      icon: <IconBrandVite size={18} stroke={1} />,
    },
  ];

  return (
    <section
      id="front-end-technologies"
      className="space-y-4 my-8"
      aria-labelledby="front-end-technologies"
    >
      <h2 className="font-bold my-4">Front-end Technologies</h2>
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
