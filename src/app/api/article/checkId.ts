import prisma from "@/lib/prisma";

async function checkArticleId(articleId: string): Promise<boolean> {
  try {
    const article = await prisma.article.findUnique({
      where: {
        id: articleId,
      },
    });

    return !!article;
  } catch (error) {
    console.error("Error checking article ID:", error);
    return false;
  }
}
export default checkArticleId;
