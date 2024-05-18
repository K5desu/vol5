"use server";
import { prisma } from "@prisma/client";

async function getUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return user;
}
