"use server";
import prisma from "@/lib/prisma";

export default async function incrementLikeCount(articleId: string) {
  try {
    await prisma.article.update({
      where: {
        id: articleId,
      },
      data: {
        like_count: {
          increment: 1,
        },
      },
    });
  } catch (error) {
    console.error("Error incrementing like count:", error);
  }
}
