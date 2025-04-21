import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";
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
    short_description: properties.short_description.rich_text[0].text.content,
    youtube: properties.youtube.url,
    type: properties.type.select.name,
    status: properties.Status.select.name,
    icon: properties.icon.url,
    technologies: properties.technologies.multi_select.map(
      (tech: any) => tech.name
    ),
    likes: properties.likes.number,
  };
}

export type contentType = {
  type: "heading_1" | "paragraph" | "divider" | "image";
  text?: string;
  id?: string;
  url?: string;
};

export function normalizePageContent(
  data: ListBlockChildrenResponse
): contentType[] {
  const { results } = data;

  return results.map((item) => {
    if (item.object === "block" && "type" in item) {
      if (item.type === "heading_1") {
        if (item.heading_1.rich_text) {
          if (item.heading_1.rich_text.length > 0) {
            if (item.heading_1.rich_text[0].type === "text") {
              return {
                id: item.id,
                type: "heading_1",
                text: item.heading_1.rich_text[0].text.content,
              };
            }
          }
        }
      }

      if (item.type === "paragraph") {
        if (item.paragraph.rich_text) {
          if (item.paragraph.rich_text.length > 0) {
            if (item.paragraph.rich_text[0].type === "text") {
              return {
                id: item.id,
                type: "paragraph",
                text: item.paragraph.rich_text[0].text.content,
              };
            }
          }
        }
      }
      if (item.type === "divider") {
        return {
          id: item.id,
          type: "divider",
        };
      }
      if (item.type === "image") {
        if (item.image.type === "external") {
          return {
            id: item.id,
            type: "image",
            url: item.image.external.url,
          };
        }
      }
    }
    return {
      type: "heading_1",
      text: "",
    };
  });
}
