"use server ";
import prisma from "@/lib/prisma";

export default async function decrementLikeCount(articleId: string) {
  try {
    await prisma.article.update({
      where: {
        id: articleId,
      },
      data: {
        like_count: {
          decrement: 1,
        },
      },
    });
  } catch (error) {
    console.error("Error decrementing like count:", error);
  }
}
