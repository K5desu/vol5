"use client";
import getArticleById from "@/app/api/article/getArticleById";
import { useEffect } from "react";
import { useParams } from "next/navigation";
export default function Home() {
  const params = useParams<{ articleid: string; item: string }>();
  useEffect(() => {
    (async () => {
      const article = await getArticleById(params.articleid);
      console.log(article);
    })();
  }, []);
  return (
    <div>
      <h1>Article</h1>
      <p>Article content</p>
    </div>
  );
}
