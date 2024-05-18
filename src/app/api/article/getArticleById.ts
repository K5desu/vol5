"use server";
import prisma from "@/lib/prisma";
import { error } from "console";

export default async function getArticleById(articleId: string) {
  try {
    const article = await prisma.article.findUnique({
      where: {
        id: articleId,
      },
    });

    if (!article) {
      throw error("Article not found");
    }

    return article;
  } catch (error) {
    console.error("Error getting article by ID:", error);
    throw error;
  }
}
