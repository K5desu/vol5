"use server";
import prisma from "@/lib/prisma";

const getAllarticle = async () => {
  try {
    const articles = await prisma.article.findMany();
    return articles;
  } catch (error) {
    console.error("Error retrieving articles:", error);
    throw error;
  }
};

export default getAllarticle;
