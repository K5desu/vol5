"use client";
import Logout from "@/components/Oauth/Logout";
import getArticleByEmail from "@/app/api/article/getArticlesByEmail";
import { useSession } from "next-auth/react";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import ButtonLoading from "@/components/buttonLoding";
import createUser from "@/app/api/user/createUser";
import { ArticleType } from "@/lib/artiletype";
import { Button } from "@/components/ui/button";
import deleteArticleById from "@/app/api/article/deleteArticleById";
import { navigate } from "@/lib/redirect";
import updateUsernameByEmail from "@/app/api/user/changeUsernameByEmail";
import getUserByEmail from "@/app/api/user/getUserByEmail";
export default function Page() {
  type ArticleType1 = {
    id: string;
    user_id: number;
    title: string;
    content: string;
    aftercare: string | null;
    like_count: number;
    gender_tag: string;
    age_tag: number;
    duration_tag: string;
    possibility_tag: string;
    category_tag: string;
    open: boolean;
    created_at: Date;
    updated_at: Date;
    // userフィールドを追加
  };
  const [articles, setArticles] = useState<ArticleType1[] | null>(null);
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();
  const [update, setUpdate] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const userRef = useRef<{
    id: number;
    username: string;
    email: string;
    blob_id: string | null;
  } | null>(null);
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
          userRef.current = await getUserByEmail(email);
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
      {update ? (
        <div>
          <input type="text" ref={inputRef} />
          <Button
            onClick={() => {
              if (inputRef.current && userRef.current)
                userRef.current.username = inputRef.current.value;
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
          <h2>ユーザー名は{userRef.current?.username}</h2>
          <Button onClick={() => setUpdate(true)}>編集する</Button>
        </div>
      )}
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
