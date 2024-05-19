'use client';

// このアプリがどのようにストレッサーを解決するかを解説するページ
import Header from '@/components/Home_Header/header';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import '@lottiefiles/lottie-player';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/shadcn/ui/Carousel';
import { CardFooter, CardHeader } from '@/components/shadcn/ui/card_f_intro';
import ICard from '@/components/component/intro-card-ui';
import Navbar from '@/components/component/Navigater';
import PersonalityCard from '@/components/component/TypeCard';
import { types } from '@/data/types'; // 正しいパスでインポートする
import { Player } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';



// // カルーセルのアイテムごとの説明
// const carouselItems = [
//   {
//     title: 'Step1',
//     description: '1次評価と2次評価の把握',
//     content: 'あなたが現在抱えているストレッサーについてタグを選択することで把握します。',
//     imageSrc: '/images/step1.jpg', // ここに実際の画像のパスを指定
//   },
//   {
//     title: 'Step2',
//     description: 'AIによるコーピングの提案',
//     content: 'コーピングはストレスを緩和するための対処法',
//     imageSrc: '/images/step2.jpg', // ここに実際の画像のパスを指定
//   },
//   {
//     title: 'Step3',
//     description: '自身と同じストレスタイプの記事が表示されます。',
//     content: '記事はStep1で選んだタグを元に表示されます。',
//     imageSrc: '/images/step3.jpg', // ここに実際の画像のパスを指定
//   },
//   {
//     title: 'Step4',
//     description: 'AIで提案された対処法は記事としてマイページに保存されます。',
//     content: '実際にコーピングを試したのち、それが上手くいったかどうかを記事として残すことで、自分に有効なコーピング法を蓄積できる',
//     imageSrc: '/images/step4.jpg', // ここに実際の画像のパスを指定
//   },
//   {
//     title: 'Step5',
//     description: 'いいね機能',
//     content: '自身の投稿への共感を見ることで情動型アプローチの代替的作用。ストレスタイプも判断できます',
//     imageSrc: '/images/step5.jpg', // ここに実際の画像のパスを指定
//   },
// ];

const Introduction = () => {
  const personalityCardsRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToPersonalityCards = () => {
    if (personalityCardsRef.current) {
      personalityCardsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // LottiePlayerを使うための初期化
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen">
      <Header title="AI Love Stress" />
      <Navbar onScrollToPersonalityCards={handleScrollToPersonalityCards} />
      {/* <div className="p-4 flex flex-col items-center justify-center">
        <div className="w-2/3 text-center">
          <h1 className="text-2xl font-bold mb-4">StressNavigaterが取り組む課題</h1>
          <p className="mt-2 text-lg">
            このアプリは、ユーザーが直面する様々なストレッサーを軽減するために設計されています。
          </p>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center my-8">
        <h1 className="text-2xl font-bold mb-4">アプリ使用の流れ</h1>
        <Carousel className="w-full max-w-xl">
          <CarouselContent className="flex">
            {carouselItems.map((item, index) => (
              <CarouselItem key={index} className="flex-none w-full">
                <div className="p-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
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
      </div> */}

      <div className="flex justify-center items-center mt-8">
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
        <div className="w-2/5 flex flex-col ml-8">
          <h1 className="text-4xl font-bold mb-4">ストレスタイプ診断アプリ</h1>
          <div className="mt-6 space-y-4 text-lg text-gray-700">
    <p className="font-semibold">AI Love Stress はストレス需要の仕組みを反映したGeminiAPIを用いて</p>
    <p className="font-semibold">皆さんのストレスタイプを診断します。</p>
    <p className="font-semibold">自身のストレスタイプを正しく理解して</p>
    <p className="font-semibold">上手にストレスと付き合っていきましょう！</p>
  </div>
          
        </div>
      </div>

      {/* <div className="flex justify-center items-center mt-8">
        <h1 className="text-4xl font-bold">アプリの流れとストレス適応のメカニズム</h1>
      </div>

      <div className="flex justify-between m-8">
        <div className="flex flex-col items-center">
          <div className="bg-pink-200 rounded-full p-5 text-5xl">1次評価</div>
          <div>・</div>
          <div>・</div>
          <div>・</div>
          <ICard title="詳細" description="アプリでの導入：タグの選択,詳細の記入で反映" content="ストレッサーにさらされた時、それが自分にとってどのぐらい脅威となるか判定する" footer="" />
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-pink-200 rounded-full p-5 text-5xl">2次評価</div>
          <div>・</div>
          <div>・</div>
          <div>・</div>
          <ICard title="詳細" description="アプリでの導入：、選択肢でストレッサーの解決可能性が問われます" content="ストレッサーを自力で解決できそうか否かを判定する" footer="" />
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-pink-200 rounded-full p-5 text-5xl">コーピング</div>
          <div>・</div>
          <div>・</div>
          <div>・</div>
          <ICard title="詳細" description="アプリでの導入：GeminiAIによる。解決策の提案、自信とストレスタイプが同じ人の記事を参照" content="ストレスに対する対処法　大きく5パターンある。" footer="" />
        </div>
      </div> */}
      <div className="container mx-auto px-4 py-8">
  <div 
    className="bg-blue-500 text-white text-center py-4 px-6 rounded-lg shadow-md cursor-pointer hover:bg-blue-600 transition duration-300" 
    onClick={handleScrollToTop}
  >
    ストレスタイプ診断
  </div>
  
</div>

      <div ref={personalityCardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
  {types.map((type, index) => (
    <div key={index} className="bg-white p-6 rounded shadow-md">
      <Player
        autoplay
        loop
        src={type.animationData}
        style={{ height: '200px', width: '100%', marginBottom: '20px' }}
      />
      <h2 style={{ color: type.color, marginBottom: '10px' }}>{type.title}</h2>
      <p style={{ fontSize: '16px', marginBottom: '10px', color: '#555' }}>{type.description}</p>
      <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#777' }}>{type.tag}</p>
    </div>
  ))}
<img src="/ThemeIcon.png" alt="ストレス解消アプリ" className="max-w-md w-full h-auto object-cover transform scale-60 rounded-lg shadow-md" />

</div>

    </div>
  );
};

export default Introduction;
