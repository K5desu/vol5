"use client";

import React, { useEffect, useState } from "react";
import getArticleById from "@/app/api/article/getArticleById";
import { useParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment, faChartBar, faHeart } from "@fortawesome/free-solid-svg-icons";
import ShowPersonalityCard from "@/components/component/ShowPersonalityCard"; // Adjust the path as necessary

const ArticleView = () => {
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

  const [article, setArticle] = useState<ArticleType | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const articles = await getArticleById(params.articleid);
      setArticle(articles);
    };

    fetchArticle();
  }, [params.articleid]);

  return (
    <div className="flex-1 p-6 bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{article?.title}</h1>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">AIによる解決案</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{article?.content}</p>
        </div>
        {article?.aftercare && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">実践した後の感想</h3>
            <p className="text-lg text-gray-500 italic leading-relaxed">{article.aftercare}</p>
          </div>
        )}
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">性別</h4>
          <p className="text-lg text-gray-700">{article?.gender_tag}</p>
        </div>
        <div className="flex items-center justify-between mt-6 border-t pt-4">
          <div className="flex items-center space-x-4">
            <img src="/path/to/profile-pic.jpg" alt="Profile" className="w-12 h-12 rounded-full border border-gray-300" />
            <span className="text-gray-700 font-semibold text-lg">username</span>
          </div>
          <div className="flex space-x-2">
            <span className="text-gray-700 border border-gray-300 rounded-full px-3 py-1">Python</span>
            <span className="text-gray-700 border border-gray-300 rounded-full px-3 py-1">Python</span>
            <span className="text-gray-700 border border-gray-300 rounded-full px-3 py-1">Python</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-500">
            <FontAwesomeIcon icon={faComment} />
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faChartBar} />
            <span>2023年01月28日</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow inline-flex items-center transition duration-300">
            <FontAwesomeIcon icon={faThumbsUp} className="mr-2" />
            <span>Like</span>
          </button>
          <span className="text-gray-700 text-lg font-semibold">{article?.like_count}</span>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-8">
        <ShowPersonalityCard typeName="孤高のアヒル型" />
      </div>
    </div>
  );
};

export default ArticleView;
