"use client";

import getAllartile from "@/app/api/article/getAllarticle";
import { useEffect, useState } from "react";
import { ArticleType } from "@/lib/artiletype";
import { Button } from "@/components/ui/button";
import cuid from "cuid";
import { navigate } from "@/lib/redirect";
import cardui from "@/components/component/card-ui";

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
          <div key={index} className="mx-auto">
            {item.aftercare &&
              cardui(
                item.id,
                item.title,
                item.age_tag,
                item.gender_tag,
                item.user.username,
                item.like_count,
                item.user.blob_id,
                false
              )}
          </div>
        ))}
      </div>
    </>
  );
}
