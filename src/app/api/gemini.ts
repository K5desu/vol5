import { GoogleGenerativeAI } from "@google/generative-ai";

const Gemini = async (inputText: string) => {
  // URLパラメータ取得

  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY ?? "";

  // インスタンス生成
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(
    `次のストレス内容をコーピングと認知行動療法セッションの観点からアドバイスしてください「${inputText}」`
  );
  const response = await result.response;
  return response;

  // ここでresponseを使用する
};

export default Gemini;
