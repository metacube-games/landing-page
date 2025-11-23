'use client';

import React from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { CubeAnimation } from "@/components/cubeAnimation";
import GlowingAuras from "@/components/GlowingAuras";
import Link from "next/link";
import Image from "next/image";
import {useTranslations} from 'next-intl';

// Dynamic imports for heavy components with lazy loading
const TracingBeam = dynamic(() => import("@/components/ui/tracing-beam"));
const Features = dynamic(() => import("@/components/features"));
const Footer = dynamic(() => import("@/components/footer"));
const Trailer = dynamic(() => import("@/components/trailer"));
const Team = dynamic(() => import("@/components/team"));
const MotionCard = dynamic(() => import("@/components/motion-card"));
const CommunityCarousel = dynamic(() => import("@/components/community-carousel"));

export default function Home() {
  const t = useTranslations('home');
  return (
    <main id="main-content" className="flex flex-col items-center justify-between overflow-hidden">
      <div className="relative w-full">
        <GlowingAuras />
        <Navbar />
        <CubeAnimation />
        <div className="container mx-auto relative">
          <div
            className={"relative w-full max-w-5xl mx-auto h-full"}
          >
            <div className="absolute -left-20 top-3">
              <TracingBeam />
            </div>
            <div id="heightNeed">
              <Trailer />
              <TradeNFTs />
              <CommunityCarousel />
              <Features />
              <MotionCard />
              <Team />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black/40 border-t border-gray-800">
        <div className="pt-10 mx-10 px-4 text-sm text-gray-400">
          <p className="mb-3">
            {t('seoText.paragraph1')}
          </p>
          <p className="mb-3">
            {t('seoText.paragraph2')}
          </p>
          <p className="mb-3">
            {t('seoText.paragraph3')}
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

const NFTLinkWImage = ({
  title,
  href,
  image,
  viewOnMarketplaceText,
}: {
  title: string;
  href: string;
  image: string;
  viewOnMarketplaceText: string;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="group h-full z-100 relative inline-block transition duration-300 hover:scale-105"
    >
      <div className="w-[200px] bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden group-hover:border-green-600/50 group-hover:shadow-lg group-hover:shadow-green-500/20 transition-all duration-300">
        <div className="relative" style={{ paddingBottom: "150%" /* 2:3 aspect ratio */ }}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="220px"
            loading="lazy"
            unoptimized
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-3 transition-opacity duration-300">
            <span className="text-zinc-100 text-xl font-medium block text-center">{title}</span>
          </div>

          {/* Hover effect gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Hover text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-green-400 text-sm font-medium px-4 py-2 bg-black/70 rounded-md">{viewOnMarketplaceText}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const TradeNFTs = () => {
  const t = useTranslations('home.tradeNfts');

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center p-4 sm:p-14 max-w-6xl mx-auto">
        <h1 className="text-4xl font-medium tracking-widest uppercase text-center mb-4">
          {t('title')}
        </h1>
        <p className="text-gray-300 mb-8 p-4 max-w-3xl mx-auto">
          {t('description')}
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 sm:gap-12">
          <NFTLinkWImage
            title={t('collections.genesis')}
            href="https://market.metacube.games/market"
            image="/g.gif"
            viewOnMarketplaceText={t('viewOnMarketplace')}
          />
          <NFTLinkWImage
            title={t('collections.passcard')}
            href="https://market.metacube.games/market"
            image="/passcard.gif"
            viewOnMarketplaceText={t('viewOnMarketplace')}
          />
          <NFTLinkWImage
            title={t('collections.allstars')}
            href="https://market.metacube.games/market"
            image="https://felts.xyz/v1/i/9900"
            viewOnMarketplaceText={t('viewOnMarketplace')}
          />
        </div>
      </div>
    </div>
  );
};
