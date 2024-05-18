"use server";
import prisma from "@/lib/prisma";

export default async function updateArticleById(
  articleId: string,
  aftercare: string,
  open: boolean
) {
  try {
    const updatedArticle = await prisma.article.update({
      where: {
        id: articleId,
      },
      data: {
        aftercare: aftercare,
        open: open,
      },
    });

    return updatedArticle;
  } catch (error) {
    console.error("Error updating article content:", error);
    throw error;
  }
}
