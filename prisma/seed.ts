import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      username: "dekinousyonn",
      email: "dekinousyonn@gmail.com",
      blob_id:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Ftemplates%2Fs%2Farticle%2F&psig=AOvVaw2de-bmmkOiqnrnZQJEh1Ks&ust=1715835806142000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLign9DwjoYDFQAAAAAdAAAAABAE",
    },
  });

  await prisma.article.create({
    data: {
      user_id: user.id,
      title: "テスト記事",
      content: "これはテスト記事の内容です。",
      like_count: 0,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
