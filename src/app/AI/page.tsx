"use client";
import { useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import createArticleByEmail from "../api/article/createArticleByEmail";
import geminiapititle from "@/app/api/geminititle";
import cuid from "cuid";
import { typesnumber } from "@/data/typenuber";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import gemininot from "@/app/api/gemininot";
import { Testtypes } from "@/data/TestTypes";
import PersonalityCard from "@/components/component/TypeCard";
import ButtonLoading from "@/components/buttonLoding";
import { match } from "assert";

export default function Page() {
  const { data: session, status } = useSession();
  const { toast } = useToast();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [notpossibility, setNotpossibility] = useState("");
  const [geminiResponse, setGeminiResponse] = useState("");
  const [cards, setCards] = useState<{ title: string; description: string }[]>(
    () => [
      {
        title: "",
        description: "",
      },
    ]
  );
  const [personalityType, setPersonalityType] = useState<any>(null);

  let geminititle: string = "";
  let gender: string = "";
  let age: string = "";
  let duration: string = "";
  let possibility: string = "";
  let category: string = "";
  const [respone, setRespone] = useState(false);
  const handleClick = async () => {
    setRespone(true);
    const inputValue = inputRef.current?.value;
    if (inputRef.current) {
      inputRef.current.value = "";
    }

    if (inputValue) {
      const response = await gemininot(
        age,
        gender,
        duration,
        category,
        inputValue
      );

      if (response.candidates && response.candidates[0].content.parts[0]) {
        setGeminiResponse(response.candidates[0].content.parts[0].text || "");
        const title = await geminiapititle(inputValue);

        let geminiResponse = response.candidates[0].content.parts[0].text || "";

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

        if (possibility == "いいえ") {
          setNotpossibility(
            "あなたに最も必要なコーピングは、身近な人々や信頼できる他者への相談、近い状況にある人の経験談などを取り入れる情動焦点型コーピングです。以下の記事に近いカテゴリの方々の記事を載せていますのでぜひご覧ください。"
          );
        }
        if (
          title.candidates &&
          title.candidates[0] &&
          title?.candidates[0]?.content.parts[0]
        ) {
          geminititle = title.candidates[0].content.parts[0].text || "";
        }
        if (session?.user?.email) {
          const id = cuid();
          const matchedType = typesnumber.find(
            (type) =>
              type.combination.possibility === possibility &&
              type.combination.category === category
          );
          if (matchedType)
            await createArticleByEmail(
              id,
              session?.user?.email,
              geminititle,
              geminiResponse,
              gender,
              matchedType?.number,
              duration,
              category,
              possibility
            );
          toast({
            title: "記事作成完了",
            description: "マイページに記事が保存されました。",
          });
          setRespone(false);
        }

        // Find the matching personality type
        const matchedType = Testtypes.find(
          (type) =>
            type.combination.possibility === possibility &&
            type.combination.category === category
        );
        setPersonalityType(matchedType);
      } else {
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
      {geminiResponse || respone ? (
        <div>
          {respone ? (
            <div className="flex justify-center items-center h-[100vh]">
              <ButtonLoading />
            </div>
          ) : (
            <div>
              {personalityType && (
                <PersonalityCard
                  title={personalityType.title}
                  description={personalityType.description}
                  color={personalityType.color}
                  tag={`${possibility} ${category}`}
                  animationData={personalityType.animationData}
                  length={true}
                />
              )}

              {cards.map((card, index) => (
                <div key={index}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{card.title}</CardTitle>
                      <CardDescription>
                        <ReactMarkdown>{card.description}</ReactMarkdown>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <main className="w-full  p-8 bg-white mt-10">
            <h1 className="text-3xl font-bold text-center mb-12 text-black-700">
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
