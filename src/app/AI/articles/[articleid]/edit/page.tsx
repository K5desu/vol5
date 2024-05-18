import React from "react";

const MainContent = () => {
  return (
    <div className="flex-1 p-6 bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md max-w-lg mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          ストレス管理
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">ストレスの詳細</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ADC9D6]"
            placeholder="内容"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">AIによる提案</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ADC9D6]"
            placeholder="内容"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">タイトル</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ADC9D6]"
            placeholder="タイトル名"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            実際にしたaa対処法とその後
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ADC9D6]"
            placeholder="内容"
          ></textarea>
        </div>

        <div className="flex items-center mb-4">
          <label className="mr-4 text-gray-700">公開する</label>
          <div className="flex items-center">
            <input type="radio" name="public" value="yes" className="mr-2" />
            <label className="mr-4">はい</label>
            <input type="radio" name="public" value="no" className="mr-2" />
            <label>いいえ</label>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/24"
              alt="user icon"
              className="w-6 h-6 rounded-full"
            />
            <span className="text-gray-700">@username</span>
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
            <span>2023年01月28日</span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">タグ</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ADC9D6]"
            placeholder="タグを入力"
          />
        </div>

        <button
          type="submit"
          className="bg-[#ADC9D6] text-white px-4 py-2 rounded hover:bg-blue-600 transition mt-4"
        >
          保存
        </button>
      </div>
    </div>
  );
};

export default MainContent;
