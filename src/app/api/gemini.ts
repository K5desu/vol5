import { GoogleGenerativeAI } from "@google/generative-ai";

const Gemini = async (
  age: string,
  gender: string,
  duration: string,
  stresser: string,
  inputText: string
) => {
  // URLパラメータ取得

  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY ?? "";

  // インスタンス生成
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(
    `${age}、${gender}、${duration}、${stresser}、${inputText}に基づいて
    
問題解決型コーピング、
気晴らし型コーピング、
認知的再評価型コーピング、
認知行動療法、それぞれの観点でアドバイスしてください
しかし認知的再評価型コーピング、気晴らし型コーピング、問題解決型コーピング、認知行動療法の見出しはtitle titleで挟んでください
それ以外は一切記号などは使わないでください
具体的な出力例としては
title認知的再評価型コーピングtitle  
テストは自分の能力を試す手段だと考えましょう
間違いから学び、成長の機会として捉えましょう
ポジティブな結果に焦点を当てましょう
title気晴らし型コーピングtitle
適度に休憩を取り、好きなことをしましょう
友達と遊んだり、趣味を楽しんだりしましょう
気晴らしに没頭しすぎないようにしましょう
title問題解決型コーピングtitle
 勉強時間を計画し、達成可能な目標を設定しましょう
難しい課題を小さな部分に分割しましょう
理解できない部分があれば、助けを求めましょう

title認知行動療法title
否定的思考パターンを特定し、置き換えましょう
現実的な目標を設定し、達成に向けて行動しましょう
進捗状況を追跡し、自分を褒めましょう
 「${inputText}」`
  );

  const response = await result.response;
  return response;
  // ここでresponseを使用する
};

export default Gemini;
