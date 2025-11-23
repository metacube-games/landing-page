'use client';

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

export default function NFTStatsSectionWrapper() {
  const t = useTranslations('nftStats');

  const NFTStatsSection = dynamic(() => import('./NFTStatsSection'), {
    ssr: false,
    loading: () => <div className="text-center py-16">{t('loading')}</div>
  });

  return <NFTStatsSection />;
} 