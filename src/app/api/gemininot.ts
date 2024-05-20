import { GoogleGenerativeAI } from "@google/generative-ai";

const GeminiNot = async (
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
    具体的なアドバイス


 「${inputText}」`
  );

  const response = await result.response;
  return response;
  // ここでresponseを使用する
};

export default GeminiNot;
