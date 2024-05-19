"use client";
import React from "react";
import getArticleById from "@/app/api/article/getArticleById";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

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
    <div className="flex-1 p-6 ">
      <div className="bg-white p-6 rounded shadow-md w-[1000px] mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            <h1 className="text-2xl font-bold">ストレスの原因</h1>
          </label>
          <ReactMarkdown>{article?.title}</ReactMarkdown>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            <h1 className="text-2xl font-bold">AIによる提案</h1>
          </label>
          <ReactMarkdown>{article?.content}</ReactMarkdown>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            <h1 className="text-2xl font-bold">実践してみての効果</h1>
          </label>
          {article?.aftercare}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">{article?.age_tag}</label>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <button className="btn btn-light">
              <FontAwesomeIcon icon={faThumbsUp} /> {article?.like_count}
            </button>
            <p className="card-text">
              <small className="text-muted"></small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
