"use client";

import React, { useEffect, useState } from "react";
import getArticleById from "@/app/api/article/getArticleById";
import { useParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactMarkdown from "react-markdown";
import { typesnumber } from "@/data/typenuber";
import {
  faThumbsUp,
  faComment,
  faChartBar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import incrementLikeCount from "@/app/api/article/incrementLikeCount";
import ShowPersonalityCard from "@/components/component/showPersonalityCard"; // Adjust the path as necessary

const ArticleView = () => {
  const [Likes, setLikes] = useState(0);
  const params = useParams<{ articleid: string; item: string }>();

  type ArticleType = {
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
  };

  // "title"で囲まれた部分を抽出
  const formatTitle = (title: string) => {
    // "title"を削除
    const newTitle = title.replace(/title/g, "");

    return newTitle;
  };

  const [article, setArticle] = useState<ArticleType | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const articles = await getArticleById(params.articleid);
      setArticle(articles);
      setLikes(articles.like_count);
    };

    fetchArticle();
  }, [params.articleid, article?.like_count]);
  let formattedDate = "";
  if (article?.updated_at) {
    const date = new Date(article.updated_at);
    formattedDate = date.toLocaleDateString("ja-JP");
  }
  const matchedType = typesnumber.find(
    (type) => type.number === article?.age_tag
  );

  return (
    <div className="flex-1 p-6 bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          <ReactMarkdown>{article?.title}</ReactMarkdown>
        </h1>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            AIによる解決案
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <h2 className="text-xl">
              {article && formatTitle(article?.content)}
            </h2>
          </p>
        </div>
        {article?.aftercare && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              実践した後の感想
            </h3>
            <p className="text-lg text-gray-500 italic leading-relaxed">
              {article.aftercare}
            </p>
          </div>
        )}
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">性別</h4>
          <p className="text-lg text-gray-700">{article?.gender_tag}</p>
        </div>
        <div className="flex items-center justify-between mt-6 border-t pt-4">
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-semibold text-lg"></span>
          </div>

          <div className="flex items-center space-x-4 text-gray-500">
            <span>{formattedDate}</span>
          </div>
        </div>
        <div className="flex items-center justify-end mt-4">
          <button
            className="bg-gray-300 hover:bg-blue-800 text-white font-bold py-2 px-3 mr-4 rounded-lg shadow inline-flex items-center transition duration-300 w-10"
            onClick={async () => {
              setLikes(Likes + 1);
              if (article) await incrementLikeCount(article?.id);
            }}
          >
            <FontAwesomeIcon icon={faThumbsUp} />
          </button>
          <span className="text-gray-700 text-lg font-semibold">
            <FontAwesomeIcon icon={faHeart} />
            {Likes}
          </span>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-8">
        {matchedType && <ShowPersonalityCard typeName={matchedType?.title} />}
      </div>
    </div>
  );
};

export default ArticleView;
