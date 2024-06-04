// このアプリがどのようにストレッサーを解決するかを解説するページ
"use client";
import Header from "@/components/Home_Header/header";

import { types } from "@/data/types"; // 正しいパスでインポートする
import { Player } from "@lottiefiles/react-lottie-player";

const Introduction = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header title="AI Love Stress" />

      <div className="flex justify-center items-center mt-8">
        <div className="w-2/5 flex flex-col ml-8">
          <h1 className="text-4xl font-bold mb-4">ストレスタイプ診断アプリ</h1>
          <div className="mt-6 space-y-4 text-lg text-gray-700">
            <p className="font-semibold">
              AI Love Stress はストレス需要の仕組みを反映したGeminiAPIを用いて
            </p>
            <p className="font-semibold">
              皆さんのストレスタイプを診断します。
            </p>
            <p className="font-semibold">
              自身のストレスタイプを正しく理解して
            </p>
            <p className="font-semibold">
              上手にストレスと付き合っていきましょう！
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="mt-5 bg-blue-500 text-white text-4xl font-bold text-center w-full">
          ストレスタイプ一覧
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        {types.map((type, index) => (
          <div key={index} className="bg-white p-6 rounded shadow-md">
            <Player
              autoplay
              loop
              src={type.animationData}
              style={{ height: "200px", width: "100%", marginBottom: "20px" }}
            />
            <h2 style={{ color: type.color, marginBottom: "10px" }}>
              {type.title}
            </h2>
            <p
              style={{ fontSize: "16px", marginBottom: "10px", color: "#555" }}
            >
              {type.description}
            </p>
            <p style={{ fontSize: "14px", fontStyle: "italic", color: "#777" }}>
              {type.tag}
            </p>
          </div>
        ))}
        <img
          src="/ThemeIcon.png"
          alt="ストレス解消アプリ"
          className="max-w-md w-full h-auto object-cover transform scale-60 rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Introduction;
