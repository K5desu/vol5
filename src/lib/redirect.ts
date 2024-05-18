"use server";

import { redirect } from "next/navigation";

export async function navigate(
  url: string,
  where: string,
  content: string | undefined
) {
  redirect(`/AI/articles/${url}/${where}?${content}`);
}
