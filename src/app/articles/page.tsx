"use client";
import CardUI from "@/components/component/card-ui";
import getAllartile from "@/app/api/article/getAllarticle";
import { useEffect, useState } from "react";
import { ArticleType } from "@/lib/artiletype";
import { Button } from "@/components/ui/button";
import cuid from "cuid";

import { navigate } from "@/lib/redirect";

export default function Page() {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const createArticle = () => {
    console.log("click");
    const uniqueId = cuid();
    navigate(uniqueId);
  };
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
            className="animate-slide-up w-[30vw] h-[100vh] flex justify-center items-center mx-auto"
            style={{ overflowAnchor: "none" }}
          >
            <CardUI
              Id={item.id}
              title={item.title}
              description={item.content}
              like_count={item.like_count}
            />
          </div>
        ))}
        <Button onClick={createArticle}>投稿</Button>
      </div>
    </>
  );
}
