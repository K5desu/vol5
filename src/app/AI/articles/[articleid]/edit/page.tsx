"use client";
import updateArticleById from "@/app/api/article/updateArticleById";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";
export default function Home() {
  const { data: session } = useSession();
  const params = useParams<{ articleid: string; item: string }>();

  const [content, setContent] = useState("");
  async function createArticle() {
    if (session && session.user && session.user.email) {
      console.log(params.articleid);
      const chech = await updateArticleById(params.articleid, content);
      console.log(chech);
    } else {
      console.log("error cant get session");
    }
  }

  return (
    <div>
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
