"use client";
import React from "react";
import getArticleById from "@/app/api/article/getArticleById";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import updateArticleById from "@/app/api/article/updateArticleById";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
const MainContent = () => {
  const params = useParams<{ articleid: string; item: string }>();
  const [selectedValue, setSelectedValue] = useState<boolean>(false);
  const handleChangeradio = (e: any) => {
    setSelectedValue(e.target.value === "true");
  };
  const { toast } = useToast();
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
    updated_at: Date; // userフィールドを追加
  };
  const [article, setArticle] = useState<ArticleType1 | null>(null);
  const [text, setText] = useState("");
  useEffect(() => {
    const fetchArticle = async () => {
      const articles = await getArticleById(params.articleid);
      setArticle(articles);
    };

    fetchArticle();
  }, [params.articleid]);
  return (
    <div className="flex-1 p-6 ">
      <div className="bg-white p-6 rounded shadow-md w-[1000px] mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">ストレスの原因</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ADC9D6]"
            placeholder={article?.title}
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">AIによる提案</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ADC9D6]"
            placeholder={article?.content}
            disabled
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1"></label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ADC9D6]"
            placeholder="実践してみての感想"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">{article?.age_tag}</label>
        </div>

        <div className="flex items-center mb-4">
          <label className="mr-4 text-gray-700">公開する</label>
          <div className="flex items-center">
            <input
              type="radio"
              name="public"
              value="true"
              className="mr-2"
              onChange={handleChangeradio}
            />
            <label className="mr-4">はい</label>
            <input
              type="radio"
              name="public"
              value="false"
              className="mr-2"
              onChange={handleChangeradio}
            />
            <label>いいえ</label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600  text-white px-4 py-2 rounded active:bg-blue-200"
          onClick={async () => {
            await updateArticleById(
              params.articleid,
              text,
              Boolean(selectedValue)
            );
            toast({
              title: "記事更新完了",
              description: "記事が更新されました。",
            });
          }}
        >
          更新
        </button>
      </div>
    </div>
  );
};

export default MainContent;
