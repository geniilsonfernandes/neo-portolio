import {
  IconBrandAndroid,
  IconBrandCss3,
  IconBrandCypress,
  IconBrandFirebase,
  IconBrandFlutter,
  IconBrandGraphql,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandKotlin,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPrisma,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandRedux,
  IconBrandRust,
  IconBrandStorybook,
  IconBrandSupabase,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVite,
  IconDatabase,
  IconJoker,
} from "@tabler/icons-react";


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
];
const FrontEndTechnologies = [
  {
    label: "React",
    icon: <IconBrandReact size={18} stroke={1} />,
  },
  {
    label: "React Native",
    icon: <IconBrandReactNative size={18} stroke={1} />,
  },
  {
    label: "Android",
    icon: <IconBrandAndroid size={18} stroke={1} />,
  },
  {
    label: "Flutter",
    icon: <IconBrandFlutter size={18} stroke={1} />,
  },
  {
    label: "Next.js",
    icon: <IconBrandNextjs size={18} stroke={1} />,
  },

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
    label: "Vite",
    icon: <IconBrandVite size={18} stroke={1} />,
  },
];
const BackEndTechnologies = [
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

const TestingTechnologies = [
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


export {
  BackEndTechnologies, FrontEndTechnologies, technologies, TestingTechnologies
};
