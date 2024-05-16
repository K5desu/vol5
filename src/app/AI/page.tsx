"use client";
import { useRef } from "react";
import Gemini from "@/app/api/gemini";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [geminiResponse, setGeminiResponse] = useState<string | null>("");
  const handleClick = async () => {
    const inputValue = inputRef.current?.value;
    if (inputRef.current) {
      inputRef.current.value = "";
    }

    if (inputValue) {
      const response = await Gemini(inputValue);

      if (
        response &&
        response.candidates &&
        response.candidates[0] &&
        response.candidates[0].content &&
        response.candidates[0].content.parts &&
        response.candidates[0].content.parts[0]
      ) {
        setGeminiResponse(response.candidates[0].content.parts[0].text || "");
      } else {
        console.log("Response is not in the expected format");
      }
    }
  };

  return (
    <div>
      <ReactMarkdown
        components={{
          p: ({ children }) => <p className="mt-1 mb-1">{children}</p>,
          ul: ({ children }) => (
            <ul className="mt-1 mb-1 pl-4 list-none">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mt-1 mb-1 pl-4 list-none">{children}</ol>
          ),
          strong: ({ children }) => (
            <strong style={{ fontWeight: "bold" }}>{children}</strong>
          ),
        }}
      >
        {geminiResponse}
      </ReactMarkdown>

      <input ref={inputRef} type="text " className="border-2 border-black" />
      <button onClick={handleClick}>Send</button>
    </div>
  );
}
