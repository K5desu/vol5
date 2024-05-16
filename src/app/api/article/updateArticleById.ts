"use server";
import prisma from "@/lib/prisma";

export default async function updateArticleById(
  articleId: string,
  newContent: string
) {
  try {
    const updatedArticle = await prisma.article.update({
      where: {
        id: articleId,
      },
      data: {
        content: newContent,
      },
    });

    return updatedArticle;
  } catch (error) {
    console.error("Error updating article content:", error);
    throw error;
  }
}
