// src/components/component/card-ui.tsx
"use client";
import Link from "next/link";
import { navigate } from "@/lib/redirect";
import deleteArticleById from "@/app/api/article/deleteArticleById";
export default function CardUI(
  id: string,
  title: string,
  age_tag: number,
  gender: string,
  username: string | null,
  like_count: number,
  blob_id: string | null,
  session: boolean
) {
  return (
    <div className="w-[500px] mx-auto bg-white shadow-md rounded-lg p-4 my-5">
      <div className="text-gray-900 font-bold mb-2">{title}</div>
      <div className="flex justify-end">
        <Link href={`/AI/articles/${id}`}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 5H6V8H16V5H18V10H20V5C20 3.9 19.1 3 18 3H13.82C13.4 1.84 12.3 1 11 1C9.7 1 8.6 1.84 8.18 3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H9V19H4V5ZM11 3C11.55 3 12 3.45 12 4C12 4.55 11.55 5 11 5C10.45 5 10 4.55 10 4C10 3.45 10.45 3 11 3Z"
              fill="black"
            />
            <path
              d="M19.3 18.9C19.7 18.2 20 17.4 20 16.5C20 14 18 12 15.5 12C13 12 11 14 11 16.5C11 19 13 21 15.5 21C16.4 21 17.2 20.7 17.9 20.3L20.6 23L22 21.6L19.3 18.9ZM15.5 19C14.1 19 13 17.9 13 16.5C13 15.1 14.1 14 15.5 14C16.9 14 18 15.1 18 16.5C18 17.9 16.9 19 15.5 19Z"
              fill="black"
            />
          </svg>
        </Link>
      </div>
      <div className="flex space-between mb-2">
        <span className=" text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
          {blob_id && (
            <img
              src={blob_id}
              alt="userimg"
              className="w-[48px] h-[48px] rounded-full"
            />
          )}
          {username}
        </span>

        <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
          {age_tag}
        </span>
      </div>

      {/* User Info and Icons */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <span className="text-gray-900">{gender}</span>
        </div>
        <div className="flex items-center space-x-4 text-gray-500">
          {session && (
            <button
              className="z-30"
              onClick={(e) => {
                e.stopPropagation();
                navigate(id, "edit", undefined);
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.99875 17.25V21H6.74875L17.8087 9.94L14.0587 6.19L2.99875 17.25ZM5.91875 19H4.99875V18.08L14.0587 9.02L14.9787 9.94L5.91875 19ZM20.7087 5.63L18.3687 3.29C18.1687 3.09 17.9187 3 17.6587 3C17.3987 3 17.1487 3.1 16.9587 3.29L15.1287 5.12L18.8787 8.87L20.7087 7.04C21.0987 6.65 21.0987 6.02 20.7087 5.63Z"
                  fill="black"
                />
              </svg>
            </button>
          )}
          {session && (
            <button
              className="z-30"
              onClick={async (e) => {
                e.stopPropagation();
                window.location.reload();
                await deleteArticleById(id);
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 16H19V18H15V16ZM15 8H22V10H15V8ZM15 12H21V14H15V12ZM3 18C3 19.1 3.9 20 5 20H11C12.1 20 13 19.1 13 18V8H3V18ZM5 10H11V18H5V10ZM10 4H6L5 5H2V7H14V5H11L10 4Z"
                  fill="black"
                />
              </svg>
            </button>
          )}

          <span className="text-gray-500 text-sm">{like_count}</span>
        </div>
      </div>
    </div>
  );
}
