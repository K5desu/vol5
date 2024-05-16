"use client";
import updateArticle from "@/app/api/article/createArticleByEmail";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";
import createArticleByEmail from "@/app/api/article/createArticleByEmail";
export default function Home() {
  const { data: session, status } = useSession();
  const params = useParams<{ articleid: string; item: string }>();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  async function createArticle() {
    if (session && session.user && session.user.email) {
      console.log(params.articleid);
      const chech = await createArticleByEmail(
        params.articleid,
        session.user.email,
        title,
        content
      );
      console.log(chech);
    } else {
      console.log("error cant get session");
    }
  }

  return (
    <div>
      <input
        type="text"
        name="title"
        placeholder="Enter your title"
        className="border border-black"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // 入力内容が変更されたときに、setTitleを使用してtitleの状態を更新します。
      />
      <input
        type="text"
        name="content"
        placeholder="Enter your content"
        className="border border-black"
        value={content}
        onChange={(e) => setContent(e.target.value)} // 入力内容が変更されたときに、setContentを使用してcontentの状態を更新します。
      />
      <button type="submit" onClick={createArticle}>
        Submit
      </button>
    </div>
  );
}
