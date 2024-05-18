"use client";

import getAllartile from "@/app/api/article/getAllarticle";
import { useEffect, useState } from "react";
import { ArticleType } from "@/lib/artiletype";
import cardui from "@/components/component/card-ui";
import ButtonLoading from "@/components/buttonLoding";

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
      {articles ? (
        <div className="block m-3 justify-between w-[100vw] ">
          {articles.map((item, index) => (
            <div key={index} className="mx-auto my-3">
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
      ) : (
        <ButtonLoading />
      )}
    </>
  );
}
