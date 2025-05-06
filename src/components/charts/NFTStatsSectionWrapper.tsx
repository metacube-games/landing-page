'use client';

import dynamic from 'next/dynamic';

const NFTStatsSection = dynamic(() => import('./NFTStatsSection'), {
  ssr: false,
  loading: () => <div className="text-center py-16">Loading NFT statistics...</div>
});

export default function NFTStatsSectionWrapper() {
  return <NFTStatsSection />;
} 