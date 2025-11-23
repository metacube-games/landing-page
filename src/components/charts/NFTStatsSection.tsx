"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import { nftStatistics } from '@/utils/blog-data';
import RarityBarChart from './RarityBarChart';
import RarityCard from './RarityCard';

export default function NFTStatsSection() {
  const t = useTranslations('nftStats');
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800">
        <h3 className="text-2xl font-bold mb-4">{t('title')}</h3>
        <p className="text-gray-300 mb-4">
          {t('description')}
        </p>
        <div className="flex flex-wrap gap-3">
          <div className="px-3 py-1 bg-slate-800 rounded-full text-xs">{t('totalNfts')}</div>
          <div className="px-3 py-1 bg-slate-800 rounded-full text-xs">{t('traitCategories')}</div>
          <div className="px-3 py-1 bg-slate-800 rounded-full text-xs">{t('uniqueTraits')}</div>
          <div className="px-3 py-1 bg-slate-800 rounded-full text-xs">{t('rarityTiers')}</div>
        </div>
      </div>

      {/* Skin section */}
      <div>
        <h2 className="text-3xl font-bold mb-6">{t('skinTraits')}</h2>
        <RarityBarChart title={t('skinDistribution')} data={nftStatistics.Skin} />
      </div>

      {/* Cube section */}
      <div>
        <h2 className="text-3xl font-bold mb-6">{t('cubeTraits')}</h2>
        <RarityBarChart title={t('cubeDistribution')} data={nftStatistics.Cube} />
      </div>

      {/* Remaining categories */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Coin section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">{t('coinTraits')}</h2>
          <RarityBarChart title={t('coinDistribution')} data={nftStatistics.Coin} />
        </div>

        {/* Background section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">{t('backgroundTraits')}</h2>
          <RarityBarChart title={t('backgroundDistribution')} data={nftStatistics.Background} />
        </div>

        {/* Weapon section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">{t('weaponTraits')}</h2>
          <RarityBarChart title={t('weaponDistribution')} data={nftStatistics.Weapon} />
        </div>
      </div>

      {/* Rarity Guide */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800">
        <h3 className="text-2xl font-bold mb-4">{t('rarityGuide')}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {["common", "rare", "epic", "mythic", "legendary"].map((rarity) => (
            <div key={rarity} className="text-center">
              <div className={`w-12 h-12 mx-auto rounded-full mb-2 ${getRarityClassShort(rarity)}`}></div>
              <p className="text-sm font-medium capitalize">{t(`rarity.${rarity}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Helper function for simplified rarity classes
function getRarityClassShort(rarity: string): string {
  switch (rarity.toLowerCase()) {
    case "common":
      return "bg-gradient-to-br from-slate-300 to-slate-500";
    case "rare":
      return "bg-gradient-to-br from-teal-400 to-teal-600";
    case "epic":
      return "bg-gradient-to-br from-purple-400 to-purple-700";
    case "mythic":
      return "bg-gradient-to-br from-red-500 to-red-700";
    case "legendary":
      return "bg-gradient-to-br from-amber-300 to-amber-600";
    default:
      return "bg-gradient-to-br from-slate-300 to-slate-500";
  }
} 