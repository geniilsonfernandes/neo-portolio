import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}




export function normalizeData(data: any) {
  const { properties, id } = data;

  return {
    id: id,
    title: properties.Name.title[0].text.content,
    description: properties.description.rich_text[0].text.content,
    github: properties.github.url,
    demo: properties.demo.url,
    storybook: properties.storybook.url,
    youtube: properties.youtube.url,
    type: properties.type.select.name,
    status: properties.Status.select.name,
    technologies: properties.technologies.multi_select.map(
      (tech: any) => tech.name
    ),
    likes: properties.likes.number,
  };
}
