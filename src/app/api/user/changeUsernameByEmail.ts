"use server";
import prisma from "@/lib/prisma";

export default async function updateUsernameByEmail(
  email: string,
  newUsername: string
) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error(`User with email ${email} not found`);
    }

    const updatedUser = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        username: newUsername,
      },
    });

    return updatedUser;
  } catch (error) {
    console.error("Error updating username:", error);
    throw error;
  }
}
