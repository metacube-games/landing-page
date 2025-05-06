"use client";
import React from 'react';
import { getRarityClass } from '@/utils/blog-data';

type StatItem = {
  name: string;
  value: number;
  percentage: string;
};

type RarityPieChartProps = {
  title: string;
  data: {
    common?: StatItem[];
    rare?: StatItem[];
    epic?: StatItem[];
    mythic?: StatItem[];
    legendary?: StatItem[];
  };
};

export default function RarityPieChart({ title, data }: RarityPieChartProps) {
  // Function to create the pie chart segments
  const createPieChartSegments = () => {
    let totalSegments = Object.values(data).flat().length;
    let cumulativePercentage = 0;
    let segments: React.ReactElement[] = [];
    
    // Calculate total value to use for percentage calculation
    const totalValue = Object.values(data).flat().reduce((sum, item) => sum + item.value, 0);
    
    // Process each rarity group
    Object.entries(data).forEach(([rarity, items]) => {
      items.forEach((item, idx) => {
        // Calculate percentage and rotation
        const percentage = (item.value / totalValue) * 100;
        const rotation = cumulativePercentage * 3.6; // 3.6 = 360 / 100
        const skew = percentage > 50 ? 1 : 0; // Adjust for large segments
        
        segments.push(
          <div 
            key={`${rarity}-${item.name}-${idx}`}
            className={`absolute w-full h-full ${getRarityClass(rarity)}`}
            style={{
              transformOrigin: '50% 100%',
              transform: `rotate(${rotation}deg) skew(${skew}deg)`,
              clip: percentage > 50 
                ? 'unset'
                : 'rect(0, 150px, 150px, 75px)',
              zIndex: totalSegments - idx, // Stack them properly
              opacity: 0.9,
            }}
            title={`${item.name}: ${item.percentage}`}
          />
        );
        
        cumulativePercentage += percentage;
      });
    });
    
    return segments;
  };

  return (
    <div className="w-full mb-12 p-6 rounded-xl bg-gradient-to-br from-zinc-900/80 to-black border border-zinc-800">
      <h3 className="text-2xl font-bold mb-6">{title} Distribution</h3>
      
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Pie chart visualization */}
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 rounded-full overflow-hidden" style={{ clipPath: 'circle(50%)' }}>
            {createPieChartSegments()}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-4 bg-black/70 rounded-full w-3/5 h-3/5 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">10,000</span>
              <span className="text-xs">Total NFTs</span>
            </div>
          </div>
        </div>
        
        {/* Legend */}
        <div className="grid grid-cols-2 gap-3 w-full">
          {Object.entries(data).map(([rarity, items]) => (
            items.map((item, idx) => (
              <div key={`legend-${rarity}-${idx}`} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-sm ${getRarityClass(rarity)}`}></div>
                <div className="text-sm">
                  <div className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="font-semibold">{item.percentage}</span>
                  </div>
                  <div className="text-xs text-gray-400 capitalize">{rarity}</div>
                </div>
              </div>
            ))
          ))}
        </div>
      </div>
    </div>
  );
} 