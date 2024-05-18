"use client";
import { useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import Gemini from "@/app/api/gemini";
import { useState } from "react";
import geminiapititle from "@/app/api/geminititle";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Reactmarkdown from "react-markdown";
import gemininot from "@/app/api/gemininot";
export default function Page() {
  const { toast } = useToast();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [notpossibility, setNotpossibility] = useState("");
  const [geminiResponse, setGeminiResponse] = useState("");
  const [title, setTitle] = useState("");
  let gender: string = "";
  let age: string = "";
  let duration: string = "";
  let possibility: string = "";
  let category: string = "";
  const [cards, setCards] = useState<{ title: string; description: string }[]>([
    {
      title: "",
      description: "",
    },
  ]);
  const handleClick = async () => {
    const inputValue = inputRef.current?.value;
    if (inputRef.current) {
      inputRef.current.value = "";
    }

    if (inputValue) {
      if (possibility == "はい") {
        const title = await geminiapititle(inputValue);
        const response = await Gemini(
          age,
          gender,
          duration,
          category,
          inputValue
        );
        if (response.candidates && response.candidates[0].content.parts[0]) {
          setGeminiResponse(response.candidates[0].content.parts[0].text || "");

          let geminiResponse =
            response.candidates[0].content.parts[0].text || "";

          const sections = geminiResponse
            .split(/title(.*?)title/)
            .filter((_, i) => i % 2 !== 0);
          const descriptions = geminiResponse
            .split(/title(.*?)title/)
            .filter((_, i) => i % 2 === 0)
            .slice(1);
          setCards(
            sections.map((section, i) => ({
              title: section.trim(),
              description: descriptions[i].trim(),
            }))
          );
          if (title.candidates && title?.candidates[0]?.content.parts[0]) {
            setTitle(title.candidates[0].content.parts[0].text || "");
          }
          toast({
            title: "記事作成完了",
            description: "マイページに記事が保存されました",
          });
        } else {
          console.log("Response is not in the expected format");
        }
      } else {
        const response = await gemininot(
          age,
          gender,
          duration,
          category,
          inputValue
        );
        if (response.candidates && response.candidates[0].content.parts[0]) {
          setGeminiResponse(response.candidates[0].content.parts[0].text || "");
          let geminiResponse =
            response.candidates[0].content.parts[0].text || "";

          const sections = geminiResponse
            .split(/title(.*?)title/)
            .filter((_, i) => i % 2 !== 0);
          const descriptions = geminiResponse
            .split(/title(.*?)title/)
            .filter((_, i) => i % 2 === 0)
            .slice(1);
          setCards(
            sections.map((section, i) => ({
              title: section.trim(),
              description: descriptions[i].trim(),
            }))
          );
          setNotpossibility(
            "あなたに最も必要なコーピングは、身近な人々や信頼できる他者への相談、近い状況にある人の経験談などを取り入れる情動焦点型コーピングです。以下の記事に近いカテゴリの方々の記事を載せていますのでぜひご覧ください。"
          );
          toast({
            title: "記事作成完了",
            description: "マイページに記事が保存されました。",
          });
        } else {
          console.log("Response is not in the expected format");
        }
      }
    }
  };

  type QuestionBlockProps = {
    question: string;
    options: { value: string; label: string }[];
    name: string;
  };

  function QuestionBlock({ question, options, name }: QuestionBlockProps) {
    return (
      <div className="mb-8">
        <p className="mb-4 font-semibold">{question}</p>
        <div className="flex flex-wrap">
          {options.map((option) => (
            <label key={option.value} className="mr-4 mb-4">
              <input
                type="radio"
                name={name}
                value={option.value}
                className="hidden peer"
                onChange={(e) => {
                  if (name == "gender") {
                    gender = e.target.value;
                  }
                  if (name == "age") {
                    age = e.target.value;
                  }
                  if (name == "duration") {
                    duration = e.target.value;
                  }
                  if (name == "possibility") {
                    possibility = e.target.value;
                  }
                  if (name == "category") {
                    category = e.target.value;
                  }
                }}
              />
              <div className="px-6 py-2 bg-gray-100 rounded-full text-center text-black font-bold cursor-pointer peer-checked:bg-gray-300">
                {option.label}
              </div>
            </label>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      {title}
      {geminiResponse ? (
        cards.map((card, index) => {
          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>
                  <Reactmarkdown>{card.description}</Reactmarkdown>
                </CardDescription>
              </CardHeader>
            </Card>
          );
        })
      ) : (
        <div className="flex justify-center items-center  bg-gray-200">
          <main className="w-full  p-8 bg-white shadow-lg rounded-xl">
            <h1 className="text-3xl font-bold text-center mb-12 text-blue-700">
              ストレス対処アンケート
            </h1>

            <QuestionBlock
              question="質問1：性別"
              options={[
                { label: "男性", value: "男性" },
                { label: "女性", value: "女性" },
              ]}
              name="gender"
            />
            <QuestionBlock
              question="質問2：年齢"
              options={[
                { label: "10代", value: "10代" },
                { label: "20代", value: "20代" },
                { label: "30代", value: "30代" },
                { label: "40代", value: "40代" },
                { label: "50代", value: "50代" },
              ]}
              name="age"
            />
            <QuestionBlock
              question="質問3：ストレスにさらされる期間"
              options={[
                { label: "〜24時間", value: "~24時間" },
                { label: "〜1週間", value: "~1週間" },
                { label: "〜1ヶ月", value: "~1ヵ月" },
                { label: "〜3ヶ月", value: "~3ヵ月" },
                { label: "3ヶ月以上", value: "3ヶ月以上" },
              ]}
              name="duration"
            />
            <QuestionBlock
              question="質問4：ストレッサーは自身で解決できる可能性がわずかでもあると思いますか？"
              options={[
                { label: "はい", value: "はい" },
                { label: "いいえ", value: "いいえ" },
              ]}
              name="possibility"
            />
            <QuestionBlock
              question="質問5：ストレッサーの原因のカテゴリは次のうちどれですか"
              options={[
                { label: "対人関係", value: "対人関係" },
                { label: "自己要因", value: "自己要因" },
                { label: "環境要因", value: "環境要因" },
                { label: "仕事関係", value: "仕事関係" },
              ]}
              name="category"
            />
            <div className="mb-12">
              <p className="mb-4 font-semibold">詳細</p>
              <textarea
                className="w-full h-36 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                placeholder="ストレスの詳細を記述"
                ref={inputRef}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-500 focus:outline-none"
                onClick={async () => handleClick()}
              >
                送信
              </button>
            </div>
          </main>
        </div>
      )}
      {notpossibility}
    </div>
  );
}
