"use server";
import prisma from "@/lib/prisma";

const getAllarticle = async () => {
  try {
    const articles = await prisma.article.findMany({
      where: {
        open: true,
      },
      include: {
        user: {
          select: {
            username: true, // usernameフィールドを含める
            blob_id: true, // imgフィールドを含める
          },
        },
      },
    });
    return articles;
  } catch (error) {
    console.error("Error retrieving articles:", error);
    throw error;
  }
};

export default getAllarticle;
