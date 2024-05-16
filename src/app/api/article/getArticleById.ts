"use server";
import prisma from "@/lib/prisma";

export default async function getArticleById(articleId: string) {
  try {
    const article = await prisma.article.findUnique({
      where: {
        id: articleId,
      },
    });

    if (!article) {
      throw new Error(`Article with ID ${articleId} not found`);
    }

    return article;
  } catch (error) {
    console.error("Error getting article by ID:", error);
    throw error;
  }
}
