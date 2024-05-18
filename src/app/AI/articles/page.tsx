"use client";

import getAllartile from "@/app/api/article/getAllarticle";
import { useEffect, useState } from "react";
import { ArticleType } from "@/lib/artiletype";
import { Button } from "@/components/ui/button";
import cuid from "cuid";
import { navigate } from "@/lib/redirect";

export default function Page() {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  useEffect(() => {
    (async () => {
      const articles = await getAllartile();
      setArticles(articles);
    })();
  }, []);
  return (
    <>
      <div className="flex  justify-between w-[100vw] ">
        {articles.map((item, index) => (
          <div
            key={index}
            className="w-[30vw] h-[100vh] flex justify-center items-center mx-auto"
          >
            {item.id}
            {item.title}
            {item.user_id}
            {item.like_count}
          </div>
        ))}
      </div>
    </>
  );
}
