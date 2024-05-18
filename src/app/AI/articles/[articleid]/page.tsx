"use client";
import getArticleById from "@/api/article/getArticleById";
import { useEffect } from "react";
import { useParams } from "next/navigation";
export default function Home() {
  const params = useParams<{ articleid: string; item: string }>();
  useEffect(async () => {
    const articles = await getArticleById(params.articleid);
  }, []);
  return (
    <div>
      <h1>Article</h1>
      <p>Article content</p>
    </div>
  );
}
