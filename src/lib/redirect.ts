"use server";

import { redirect } from "next/navigation";

export async function navigate(url: string, where: string) {
  redirect(`./articles/${url}/${where}`);
}
