import Head from 'next/head';

export default function QuestionPage() {
  return (
    <>
      <Head>
        <title>ストレス対処アプリ</title>
      </Head>
      <div className="flex justify-center items-center min-h-screen bg-gray-200">
        <main className="w-full  p-8 bg-white shadow-lg rounded-xl">
          <h1 className="text-3xl font-bold text-center mb-12 text-blue-700">ストレス対処アンケート</h1>
          <form>
            <QuestionBlock
              question="質問1：性別"
              options={[
                { label: "男性", value: "male" },
                { label: "女性", value: "female" }
              ]}
              name="gender"
            />
            <QuestionBlock
              question="質問2：年齢"
              options={[
                { label: "10代", value: "10" },
                { label: "20代", value: "20" },
                { label: "30代", value: "30" },
                { label: "40代", value: "40" },
                { label: "50代", value: "50" }
              ]}
              name="age"
            />
            <QuestionBlock
              question="質問3：ストレスにさらされる期間"
              options={[
                { label: "〜24時間", value: "24h" },
                { label: "〜1週間", value: "1w" },
                { label: "〜1ヶ月", value: "1m" },
                { label: "〜3ヶ月", value: "3m" },
                { label: "3ヶ月〜半年", value: "6m" }
              ]}
              name="duration"
            />
            <QuestionBlock
              question="質問4：ストレッサーは自身で解決できる可能性がわずかでもあると思いますか？"
              options={[
                { label: "はい", value: "yes" },
                { label: "いいえ", value: "no" }
              ]}
              name="possibility"
            />
            <QuestionBlock
              question="質問5：ストレッサーの原因のカテゴリは次のうちどれですか"
              options={[
                { label: "対人関係", value: "relationship" },
                { label: "自己要因", value: "self" },
                { label: "環境要因", value: "environment" },
                { label: "仕事関係", value: "work" }
              ]}
              name="category"
            />
            <div className="mb-12">
              <p className="mb-4 font-semibold">詳細</p>
              <textarea className="w-full h-36 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500" placeholder="ストレスの詳細を記述"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-500 focus:outline-none">送信</button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

function QuestionBlock({ question, options, name }) {
  return (
    <div className="mb-8">
      <p className="mb-4 font-semibold">{question}</p>
      <div className="flex flex-wrap">
        {options.map((option) => (
          <label key={option.value} className="mr-4 mb-4">
            <input type="radio" name={name} value={option.value} className="hidden peer" />
            <div className="px-6 py-2 bg-gray-100 rounded-full text-center text-black font-bold cursor-pointer peer-checked:bg-gray-300">
              {option.label}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
