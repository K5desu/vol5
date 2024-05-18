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
                item.user_id,
                item.title,
                item.content,
                item.aftercare,
                item.like_count,
                item.gender_tag,
                item.age_tag,
                item.duration_tag,
                item.possibility_tag,
                item.category_tag,

                item.created_at,
                item.updated_at,
                item.user.username,
                item.user.blob_id
              )}
          </div>
        ))}
      </div>
    </>
  );
}
