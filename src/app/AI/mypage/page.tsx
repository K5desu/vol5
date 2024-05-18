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
import updateUsernameByEmail from "@/app/api/user/changeUsernameByEmail";
import { useRef } from "react";
import getUserByEmail from "@/app/api/user/getUserByEmail";
export default function Page() {
  const [articles, setArticles] = useState<ArticleType[] | null>(null);
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();
  const [update, setUpdate] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  let user = {
    id: 0,
    email: "",
    username: "",
    blob_id: "",
  };
  const editArticle = (url: string) => {
    console.log("click");

    navigate(url, "edit", undefined);
  };
  useEffect(() => {
    if (status === "authenticated" && session?.user?.email) {
      (async () => {
        const email = session?.user?.email;
        const name = session?.user?.name;
        const image = session?.user?.image;
        if (email && name && image) {
          await createUser(email, name, image);
          user = await getUserByEmail(email);
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
      {update ? (
        <div>
          <input type="text" ref={inputRef} />
          <Button
            onClick={() => {
              if (inputRef.current && session?.user?.email) {
                updateUsernameByEmail(
                  session?.user?.email,
                  inputRef.current.value
                );
                setUpdate(false);
              }
            }}
          >
            更新
          </Button>
        </div>
      ) : (
        <div>
          <h2>ユーザー名は{session?.user?.name}</h2>
          <Button onClick={() => setUpdate(true)}>編集する</Button>
        </div>
      )}

      <input type="text" />
      <Button onClick={() => {}}>更新</Button>

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