"use client";
import Logout from "@/components/Oauth/Logout";
import getArticleByEmail from "@/app/api/article/getArticlesByEmail";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import ButtonLoading from "@/components/buttonLoding";
import createUser from "@/app/api/user/createUser";
import { ArticleType } from "@/lib/artiletype";
import { Button } from "@/components/ui/button";
import deleteArticleById from "@/app/api/article/deleteArticleById";
import { navigate } from "@/lib/redirect";
import cuid from "cuid";
export default function Page() {
  const [articles, setArticles] = useState<ArticleType[] | null>(null);
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();

  const editArticle = (url: string) => {
    console.log("click");

    navigate(url, "edit");
  };
  useEffect(() => {
    if (status === "authenticated" && session?.user?.email) {
      (async () => {
        const email = session?.user?.email;
        const name = session?.user?.name;
        const image = session?.user?.image;
        if (email && name && image) {
          await createUser(email, name, image);
          console.log("createUser");
          const articles = await getArticleByEmail(email);

          setLoading(true);
          if (articles?.length && articles.length > 0) {
            setArticles(articles || null);
          }
        }
      })();
    }
  }, [status, session]);

  return (
    <div className="block">
      <h1>こんにちは、{session?.user?.name}さん</h1>
      <h2>メールは{session?.user?.email}</h2>
      <h2>
        Userの画像は
        {session?.user?.image ? (
          <Image
            src={session?.user?.image}
            alt="user`s image"
            width={100}
            height={100}
          ></Image>
        ) : (
          "ありません"
        )}
      </h2>
      <h2>
        {articles ? (
          <ul>
            {articles.map((article, index) => (
              <li key={index}>
                <h3>{article.title}</h3>
                <p>{article.content}</p>
                <Button onClick={() => editArticle(article.id)}>編集</Button>
                <Button
                  onClick={async () => await deleteArticleById(article.id)}
                >
                  削除
                </Button>
              </li>
            ))}
          </ul>
        ) : loading ? (
          <div>記事はありません</div>
        ) : (
          <ButtonLoading />
        )}
      </h2>

      <Logout></Logout>
    </div>
  );
}
