"use client";
import React from "react";
import getArticleById from "@/app/api/article/getArticleById";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import updateArticleById from "@/app/api/article/updateArticleById";
import { useState } from "react";

const MainContent = () => {
  const params = useParams<{ articleid: string; item: string }>();
  const [selectedValue, setSelectedValue] = useState<boolean>(false);
  const handleChangeradio = (e: any) => {
    setSelectedValue(e.target.value === "true");
  };
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
    <div className="flex-1 p-6 bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md max-w-lg mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          ストレス管理
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">AIによる提案</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ADC9D6]"
            placeholder={article?.content}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">タイトル</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ADC9D6]"
            placeholder={article?.title}
            disabled
          />
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

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-700">{}</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-500">
            <svg
              className="w-5 h-5 cursor-pointer hover:text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 9l-5 5-5-5"
              ></path>
            </svg>
            <svg
              className="w-5 h-5 cursor-pointer hover:text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.84 4.61a4.5 4.5 0 00-6.36 0L12 7.09l-2.48-2.48a4.5 4.5 0 00-6.36 6.36l6.36 6.36L12 20.84l8.36-8.36a4.5 4.5 0 000-6.36z"
              ></path>
            </svg>
            <span></span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">{article?.age_tag}</label>
        </div>

        <button
          type="submit"
          className="bg-[#ADC9D6] text-white px-4 py-2 rounded hover:bg-blue-600 transition mt-4"
          onClick={async () => {
            await updateArticleById(
              params.articleid,
              text,
              Boolean(selectedValue)
            );
          }}
        >
          更新
        </button>
      </div>
    </div>
  );
};

export default MainContent;
