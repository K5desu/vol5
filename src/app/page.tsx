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
    content: "コンテンツ2の詳細情報。",
    imageSrc: "/images/step2.jpg", // ここに実際の画像のパスを指定
  },
  {
    title: "タイトル3",
    description: "これは説明文3です。",
    content: "コンテンツ3の詳細情報。",
    imageSrc: "/images/step3.jpg", // ここに実際の画像のパスを指定
  },
  {
    title: "タイトル4",
    description: "これは説明文4です。",
    content: "コンテンツ4の詳細情報。",
    imageSrc: "/images/step4.jpg", // ここに実際の画像のパスを指定
  },
  {
    title: "タイトル5",
    description: "これは説明文5です。",
    content: "コンテンツ5の詳細情報。",
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
                    <CardFooter>
                      <span>フッターの内容</span>
                    </CardFooter>
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
      <div className="">
        <lottie-player
          src="/Lottie/stressed-woman.json"
          background="transparent"
          speed={1}
          style={{ width: '100%', height: '100%' }}
          loop
          autoplay
        ></lottie-player>
      </div>
      <div className=''>
            <p>厚生労働省が5年に1回行っている「労働者健康状況調査」によれば、「仕事や職業生活でストレスを感じている」労働者の割合は、50.6％（1982年）、55.0％（1987年）、57.3％（1992年）、62.8％（1997年）、61.5％（2002年）、58.0％（2007年）、60.9％（2012年）と推移しており、今や働く人の約6割はストレスを感じながら仕事をしていると言えます。</p>
      </div>
      </div>
    </div>
  );
};

export default Introduction;
