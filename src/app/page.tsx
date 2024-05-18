'use client'
//このアプリがどのようにストレッサーを解決するかを解説するページ

import Header from '@/components/Home_Header/header';
import React, { useEffect } from 'react';
import Image from 'next/image';
import '@lottiefiles/lottie-player';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/shadcn/ui/Carousel"
import { CardFooter, CardHeader } from '@/components/shadcn/ui/card_f_intro';
import ICard from '@/components/component/intro-card-ui';
import Navbar from '@/components/component/Navigater';
import PersonalityCard from '@/components/component/TypeCard';


const types = [
  {
    title: 'サラリーマン型',
    description: 'いつも自分に矢印を向ける頑張り屋さん。問題が起きた時に自分で頑張りすぎちゃう時があるので、自分だけに責任があるわけではないこともあると心がけよう',
    color: '#F4A261',
    tag: '問題解決可能性あり and 自己要因',
    animationData: '/Lottie/stressed-man.json',
  },
  {
    title: 'パーフェクトヒューマン型',
    description: '能力が高くて、その分周りへの期待も高い。本質的なストレス解決は一旦問題を忘れることかも？',
    color: '#E9C46A',
    tag: '問題解決可能性あり and 仕事関係',
    animationData: '/Lottie/perfect-man.json',
  },
  {
    title: '希望の雛型',
    description: '現状の自分に問題を感じつつ、その問題解決の具体的行動がしにくいと感じている。情動型アプローチが鍵になるかも？',
    color: '#F4A261',
    tag: '問題解決可能性あり and 環境要因',
    animationData: '/Lottie/chick.json',
  },
  {
    title: '孤高のアヒル型',
    description: '周囲とうまくやりたいけど、原因は自分にあるしなあ。環境を思い切って変えたりするのがいいかも',
    color: '#2A9D8F',
    tag: '問題解決可能性あり and 人間関係',
    animationData: '/Lottie/duck.json',
  },
  {
    title: '夢半ば型',
    description: '自分の中の理想や夢が大きくて、不本意に人と対立したり、コミュニケーションが取れないと感じている。純粋な人',
    color: '#264653',
    tag: '問題解決可能性なし and 環境要因',
    animationData: '/Lottie/dream.json',
  },
  {
    title: '孤高のオオカミ型',
    description: '孤高な自分を貫きながらも、より人と関わりたいツンデレ型。自身にストレスがある事実を考えてみたら答えが出るかも',
    color: '#E76F51',
    tag: '問題解決可能性なし and 対人関係',
    animationData: '/Lottie/wolf.json',
  },
  {
    title: 'ゴースト型',
    description: '自分に矢印を向け続けるあまり、その解決ができない自分に絶望してませんか？結果には多くの要素が絡むことを忘れないで。',
    color: '#E9C46A',
    tag: '問題解決可能性なし and 自己要因',
    animationData: '/Lottie/ghost.json',
  },
  {
    title: '夢見る令嬢型',
    description: '現状を維持したまま、周囲の変化を待つスタイル。現状にストレスを感じているとしたら、別スタイルへの転向を望んでいるのかも？',
    color: '#F4A261',
    tag: '問題解決可能性なし and 仕事要因',
    animationData: '/Lottie/princess.json',
  },
];





// カルーセルのアイテムごとの説明
const carouselItems = [
  {
    title: "Step1",
    description: "1次評価と2次評価の把握",
    content: "あなたが現在抱えているストレッサーについてタグを選択することで把握します。",
    imageSrc: "/images/step1.jpg", // ここに実際の画像のパスを指定
  },
  {
    title: "Step2",
    description: "AIによるコーピングの提案",
    content: "コーピングはストレスを緩和するための対処法",
    imageSrc: "/images/step2.jpg", // ここに実際の画像のパスを指定
  },
  {
    title: "Step3",
    description: "自身と同じストレスタイプの記事が表示されます。",
    content: "記事はStep1で選んだタグを元に表示されます。",
    imageSrc: "/images/step3.jpg", // ここに実際の画像のパスを指定
  },
  {
    title: "Step4",
    description: "AIで提案された対処法は記事としてマイページに保存されます。",
    content: "実際にコーピングを試したのち、それが上手くいったかどうかを記事として残すことで、自分に有効なコーピング法を蓄積できる",
    imageSrc: "/images/step4.jpg", // ここに実際の画像のパスを指定
  },
  {
    title: "Step5",
    description: "いいね機能",
    content: "自身の投稿への共感を見ることで情動型アプローチの代替的作用",
    imageSrc: "/images/step5.jpg", // ここに実際の画像のパスを指定
  },
]

const Introduction = () => {
  useEffect(() => {
    // LottiePlayerを使うための初期化
  }, []);
  
  return (
    <div className="bg-gray-200">
      <Header title="Stress Nav" />
      <div className="p-4 flex flex-col items-center justify-center">
        <div className="w-2/3">
          <h1 className="text-2xl">StressNavigaterが取り組む課題</h1>
          <p className="mt-2">
            このアプリは、ユーザーが直面する様々なストレッサーを軽減するために設計されています。
          </p>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center h-128">
        <h1 className="p-4">アプリ使用の流れ</h1>
        <Carousel className="w-full max-w-xl h-full">
          <CarouselContent className="flex h-full">
            {carouselItems.map((item, index) => (
              <CarouselItem key={index} className="flex-none w-full h-full">
                <div className="p-1 h-full">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col h-full items-center justify-center p-6">
                      <Image 
                        src={item.imageSrc} 
                        alt={`${item.title} image`} 
                        width={300} 
                        height={200} 
                        className="rounded-lg shadow-md mb-4"
                      />
                      <span className="text-lg">{item.content}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className='flex justify-center items-center mt-8'>
      <div className="w-3/5">
      <lottie-player
        src="/Lottie/stressed-woman.json"
        background="transparent"
        speed={1}
        style={{ width: '100%', height: '100%' }}
        loop
        autoplay
      ></lottie-player>
      </div>
      <div className='w-2/5 flex flex-col'>
        <h1 className='text-4xl font-bold h-full'>ストレスそのものでなく、</h1>
        <h1 className='text-4xl font-bold h-full'>ストレス対処ができていないことが問題</h1>
        <p className='h-full'>厚生労働省が5年に1回行っている「労働者健康状況調査」によれば、</p>
        <p className='h-full'>「仕事や職業生活でストレスを感じている」労働者の割合は、</p>
        <p className='h-full'>50.6％（1982年）、55.0％（1987年）、57.3％（1992年）、62.8％（1997年）、61.5％（2002年）、58.0％（2007年）、60.9％（2012年）と推移しており、</p>
        <p className='h-full'>今や働く人の約6割はストレスを感じながら仕事をしていると言えます。</p>
        <p className='h-full'>ですが、問題なのは</p>
      </div>
     </div>
      <div className='flex justify-center items-center mt-8'>
            <h1 className='text-4xl font-bold'>アプリの流れとストレス適応のメカニズム</h1>
      </div>
      {/* ここの間を少し開けたい */}
      <div className='flex justify-between m-8'>
            <div className='flex flex-col items-center'>
              <div className='bg-pink-200  rounded-full p-5 text-5xl'>1次評価</div>
              <div>・</div>
              <div>・</div>
              <div>・</div>
              <ICard title={'詳細'} description={'ストレッサーにさらされた時、それが自分にとってどのぐらい脅威となるか判定する'} content={'写真'} footer={'未定'}/>
            </div>
            <div className='flex flex-col items-center'>
              <div className='bg-pink-200 rounded-full p-5 text-5xl'>2次評価</div>
              <div>・</div>
              <div>・</div>
              <div>・</div>
              <ICard title={'詳細'} description={'これを反映しているアプリの箇所'} content={'写真'} footer={'未定'}/>
            </div>
            <div className='flex flex-col items-center'>
              <div className='bg-pink-200 rounded-full p-5 text-5xl'>コーピング</div>
              <div>・</div>
              <div>・</div>
              <div>・</div>
              <ICard title={'詳細'} description={'これを反映しているアプリの箇所'} content={'写真'} footer={'未定'}/>
            </div>
      </div>

      <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        {types.map((type, index) => (
          <PersonalityCard
            key={index}
            title={type.title}
            description={type.description}
            color={type.color}
            tag ={type.tag}
            animationData = {type.animationData}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Introduction;
