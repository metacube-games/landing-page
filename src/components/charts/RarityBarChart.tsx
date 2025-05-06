"use client";
import React from 'react';
import { getRarityClass, getRarityGlow } from '@/utils/blog-data';

type StatItem = {
  name: string;
  value: number;
  percentage: string;
};

type RarityBarChartProps = {
  title: string;
  data: {
    common?: StatItem[];
    rare?: StatItem[];
    epic?: StatItem[];
    mythic?: StatItem[];
    legendary?: StatItem[];
  };
};

export default function RarityBarChart({ title, data }: RarityBarChartProps) {
  // Combine all data for sorting
  const allItems = Object.entries(data).flatMap(([rarity, items]) => 
    items.map(item => ({ ...item, rarity }))
  );
  
  // Sort from highest to lowest value
  const sortedItems = allItems.sort((a, b) => b.value - a.value);

  return (
    <div className="w-full mb-12 p-6 rounded-xl bg-gradient-to-br from-zinc-900/80 to-black border border-zinc-800">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      
      <div className="space-y-3">
        {sortedItems.map((item, index) => (
          <div key={`${item.name}-${index}`} className="relative">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center">
                <span className={`inline-block w-3 h-3 rounded-full mr-2 ${getRarityClass(item.rarity)}`}></span>
                <span className="text-sm font-medium">{item.name}</span>
              </div>
              <span className="text-sm font-semibold">{item.percentage}</span>
            </div>
            
            <div className="h-6 bg-zinc-800/50 rounded-full overflow-hidden">
              <div 
                className={`h-full ${getRarityClass(item.rarity)} ${getRarityGlow(item.rarity)} transition-all duration-500 ease-out rounded-full`}
                style={{ width: item.percentage }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex flex-wrap gap-3">
        {Object.keys(data).map((rarity) => (
          <div key={rarity} className="flex items-center">
            <span className={`inline-block w-3 h-3 rounded-full mr-1 ${getRarityClass(rarity)}`}></span>
            <span className="text-xs capitalize">{rarity}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 