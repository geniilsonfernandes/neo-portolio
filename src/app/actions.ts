"use server";

import { IProject } from "@/components/ProjectCard";
import { notion } from "@/lib/notion";
import { normalizeData } from "@/utils";

export const getProjects = async (): Promise<IProject[]> => {
  try {
    // Consulta os projetos no banco de dados
    const response = await notion.databases.query({
      database_id: "1618d3b7-8a16-80d2-bc23-e8b6a53afc84",
    });

    // Valida e normaliza os dados retornados
    if (!response.results || !Array.isArray(response.results)) {
      throw new Error("Invalid response format from Notion API.");
    }

    // Mapeia os resultados para o formato esperado
    return response.results.map((project: any) => normalizeData(project));
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    throw error; // Repassa o erro para que possa ser tratado no chamador
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
