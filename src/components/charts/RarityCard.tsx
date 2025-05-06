"use client";
import React from 'react';
import { getRarityClass, getRarityGlow, getCardBorder } from '@/utils/blog-data';

type StatItem = {
  name: string;
  value: number;
  percentage: string;
};

type RarityCardProps = {
  title: string;
  rarity: string;
  items: StatItem[];
};

export default function RarityCard({ title, rarity, items }: RarityCardProps) {
  // Sort from highest to lowest value
  const sortedItems = [...items].sort((a, b) => b.value - a.value);
  
  return (
    <div className={`p-4 rounded-lg ${getCardBorder(rarity)} ${getRarityGlow(rarity)} bg-gradient-to-br from-zinc-900/90 to-black backdrop-blur-sm`}>
      <div className={`inline-block px-3 py-1 rounded-full mb-3 text-xs font-bold uppercase ${getRarityClass(rarity)}`}>
        {rarity}
      </div>
      <h4 className="text-lg font-bold mb-3">{title}</h4>
      
      <div className="space-y-2">
        {sortedItems.map((item, index) => (
          <div key={`${item.name}-${index}`} className="flex justify-between text-sm">
            <span>{item.name}</span>
            <span className="font-semibold">{item.percentage}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 