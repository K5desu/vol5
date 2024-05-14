"use client";
import { useRef } from "react";
import Gemini from "@/app/api/gemini";

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = async () => {
    const inputValue = inputRef.current?.value;
    if (inputRef.current) {
      inputRef.current.value = "";
    }

    if (inputValue) {
      console.log(inputValue);
      const response = await Gemini(inputValue);
      if (inputValue) {
        console.log(inputValue);
        const response = await Gemini(inputValue);
        if (
          response &&
          response.candidates &&
          response.candidates[0] &&
          response.candidates[0].content &&
          response.candidates[0].content.parts &&
          response.candidates[0].content.parts[0]
        ) {
          console.log(response.candidates[0].content.parts[0].text);
        } else {
          console.log("Response is not in the expected format");
        }
      }
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text " className="border-2 border-black" />
      <button onClick={handleClick}>Send</button>
    </div>
  );
}
