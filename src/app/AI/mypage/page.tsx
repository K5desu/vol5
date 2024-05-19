"use client";
import getArticleByEmail from "@/app/api/article/getArticlesByEmail";
import { useSession } from "next-auth/react";
import { useEffect, useState, useRef, use } from "react";

import ButtonLoading from "@/components/buttonLoding";
import createUser from "@/app/api/user/createUser";

import getUserByEmail from "@/app/api/user/getUserByEmail";
import CardUi from "@/components/component/card-ui";
import { ProfilePage } from "@/components/component/profile";
import Logout from "@/components/Oauth/Logout";
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

  const userRef = useRef<{
    id: number;
    username: string;
    email: string;
    blob_id: string | null;
  } | null>(null);

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
      {session?.user &&
        session.user.image &&
        userRef.current &&
        userRef.current.username && (
          <ProfilePage
            img={session.user.image}
            username={userRef.current.username}
          />
        )}

      <h2>
        {articles ? (
          <ul>
            {articles.map((article, index) => (
              <li
                key={index}
                className="grid grid-cols-3 gap-1 max-w-5xl mx-auto p-4"
              >
                {CardUi(
                  article.id,
                  article.title,
                  article.age_tag,
                  article.gender_tag,
                  "自分",
                  article.like_count,
                  null,
                  true
                )}
              </li>
            ))}
          </ul>
        ) : loading ? (
          <div>記事はありません</div>
        ) : (
          <div className="flex items-center justify-center h-screen">
            <ButtonLoading />
          </div>
        )}
      </h2>
    </div>
  );
}
