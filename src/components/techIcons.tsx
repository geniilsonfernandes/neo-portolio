import {
  IconBrandGolang,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandStorybook,
  IconBrandSupabase,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";

export const techsIcons = {
  React: <IconBrandReact size={18} stroke={1} />,
  Tailwind: <IconBrandTailwind size={18} stroke={1} />,
  TypeScript: <IconBrandTypescript size={18} stroke={1} />,
  Nextjs: <IconBrandNextjs size={18} stroke={1} />,
  Golang: <IconBrandGolang size={18} stroke={1} />,
  Nodejs: <IconBrandNodejs size={18} stroke={1} />,
  Storybook: <IconBrandStorybook size={18} stroke={1} />,
  Supabase: <IconBrandSupabase size={18} stroke={1} />,
};

export type IconType = keyof typeof techsIcons;
