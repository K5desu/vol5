"use server";
import prisma from "@/lib/prisma";

export default async function updateArticleById(
  articleId: string,
  aftercare: string
) {
  try {
    const updatedArticle = await prisma.article.update({
      where: {
        id: articleId,
      },
      data: {
        aftercare: aftercare,
      },
    });

    return updatedArticle;
  } catch (error) {
    console.error("Error updating article content:", error);
    throw error;
  }
}
