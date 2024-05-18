// src/components/component/card-ui.tsx
import Image from "next/image";
import Link from "next/link";
export default function CardUI(
  id: string,
  user_id: number,
  title: string,
  content: string,
  aftercare: string,
  like_count: number,
  gender_tag: string,
  age_tag: number,
  duration_tag: string,
  possibility_tag: string,
  category_tag: string,
  created_at: Date,
  updated_at: Date,
  username: string,
  blob_id: string | null
) {
  return (
    <Link href={`AI/article/${id}`}>
      <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-4">
        {/* Title */}
        <div className="text-gray-900 font-bold mb-2">{title}</div>

        {/* Tags */}
        <div className="flex space-x-1 mb-2">
          <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {age_tag}
          </span>
          <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            Python
          </span>
          <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            Python
          </span>
        </div>

        {/* User Info and Icons */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Image
              src="/avatar.png" // Replace with your avatar image
              alt="User avatar"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full mr-2"
            />
            <span className="text-gray-900">{username}</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-500">
            <button className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </button>
            <button className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h10m-6 4h6"
                ></path>
              </svg>
            </button>
            <button className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v8m4-4H8"
                ></path>
              </svg>
            </button>
            <span className="text-gray-500 text-sm">111</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
