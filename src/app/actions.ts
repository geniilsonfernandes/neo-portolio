"use server";

import { IProject } from "@/components/ProjectCard";
import { notion } from "@/lib/notion";
import { normalizeData, normalizePageContent } from "@/utils";

export const getProjects = async (): Promise<IProject[]> => {
  try {
    // Consulta os projetos no banco de dados
    const response = await notion.databases.query({
      database_id: "1618d3b7-8a16-80d2-bc23-e8b6a53afc84",
    });

    if (!response.results || !Array.isArray(response.results)) {
      throw new Error("Invalid response format from Notion API.");
    }

    return response.results.map((project: any) => normalizeData(project));
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    throw error;
  }
};

export const getProject = async (id: string): Promise<IProject> => {
  try {
    const response = await notion.pages.retrieve({ page_id: id });
    return normalizeData(response);
  } catch (error) {
    console.error("Failed to fetch project:", error);
    throw error;
  }
};

export const getPageContent = async (pageId: string) => {
  try {
    const response = await notion.blocks.children.list({
      block_id: pageId,
    });

    return normalizePageContent(response);
  } catch (error) {
    console.error("Failed to fetch page content:", error);
    throw error;
  }
};

export const likeProject = async (id: string, likes: number) => {
  try {
    const project = await notion.pages.retrieve({ page_id: id });

    // @ts-ignore
    const currentLikes = project.properties.likes?.number;
    if (typeof currentLikes !== "number") {
      throw new Error(`Invalid likes value for project ${id}`);
    }

    await notion.pages.update({
      page_id: id,
      properties: {
        likes: { number: likes },
      },
    });

    return likes;
  } catch (error) {
    console.error(`Failed to update likes for project ${id}:`, error);
    throw error;
  }
};

export const createContact = async (
  name: string,
  email: string,
  message: string
) => {
  try {
    await notion.pages.create({
      parent: {
        database_id: "1618d3b78a16806db0bbcbcf8d46b889",
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },

        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
        Email: {
          rich_text: [
            {
              text: {
                content: email,
              },
            },
          ],
        },
      },
    });
  } catch (error) {
    console.error("Failed to create contact:", error);
    throw error;
  }
};
