"use server";
import prisma from "@/lib/prisma";

export default async function getArticlesByEmail(userEmail: string) {
  try {
    const userWithArticles = await prisma.user.findUnique({
      where: { email: userEmail },
      include: { posts: true },
    });

    return userWithArticles?.posts;
  } catch (error) {
    console.error("Error occurred while fetching articles: ", error);
    throw error;
  }
}
