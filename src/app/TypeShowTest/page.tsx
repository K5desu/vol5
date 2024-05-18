'use client';
import React, { useState } from 'react';
import { Testtypes } from '@/data/TestTypes';
import PersonalityCard from '@/components/component/TypeCard';

const QuestionnairePage = () => {
  const [firstChoice, setFirstChoice] = useState<string | null>(null);
  const [secondChoice, setSecondChoice] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<any>(null);

  const handleFirstChoiceChange = (choice: string) => {
    setFirstChoice(choice);
    setSelectedType(null);  // Reset the selected type when the choice changes
  };

  const handleSecondChoiceChange = (choice: string) => {
    setSecondChoice(choice);
    setSelectedType(null);  // Reset the selected type when the choice changes
  };

  const handleSelect = () => {
    if (firstChoice && secondChoice) {
      const type = Testtypes.find(
        (type) =>
          type.combination.possibility === firstChoice &&
          type.combination.category === secondChoice
      );
      console.log('Selected type:', type);  // Debug log
      setSelectedType(type);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">ストレス対処アンケート</h1>
      
      {/* 第一の質問 */}
      <div className="mb-6">
        <p className="mb-4 font-semibold">質問1：ストレッサーは自身で解決できる可能性がわずかでもあると思いますか？</p>
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded-full ${firstChoice === 'はい' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handleFirstChoiceChange('はい')}
          >
            はい
          </button>
          <button
            className={`px-4 py-2 rounded-full ${firstChoice === 'いいえ' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handleFirstChoiceChange('いいえ')}
          >
            いいえ
          </button>
        </div>
      </div>

      {/* 第二の質問 */}
      <div className="mb-6">
        <p className="mb-4 font-semibold">質問2：ストレッサーの原因のカテゴリは次のうちどれですか</p>
        <div className="flex space-x-4">
          {['対人関係', '自己要因', '環境要因', '仕事関係'].map((choice) => (
            <button
              key={choice}
              className={`px-4 py-2 rounded-full ${secondChoice === choice ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => handleSecondChoiceChange(choice)}
            >
              {choice}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button
          className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={handleSelect}
        >
          診断
        </button>
      </div>
      
      {selectedType && (
        <div className="mt-8">
          <PersonalityCard
            title={selectedType.title}
            description={selectedType.description}
            color={selectedType.color}
            tag={selectedType.tag}
            animationData={selectedType.animationData}
          />
        </div>
      )}
    </div>
  );
};

export default QuestionnairePage;
