import React from "react";
import dynamic from "next/dynamic";
import Features from "@/components/features";
import { Navbar } from "@/components/navbar";
import { CubeAnimation } from "@/components/cubeAnimation";
import Footer from "@/components/footer";
import Trailer from "@/components/trailer";
import Team from "@/components/team";
import MotionCard from "@/components/motion-card";
import GlowingAuras from "@/components/GlowingAuras";
import CommunityCarousel from "@/components/community-carousel";
import Link from "next/link";
import Image from "next/image";

const TracingBeam = dynamic(() => import("@/components/ui/tracing-beam"));

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <div className="relative w-full">
        <GlowingAuras />
        <Navbar />
        <CubeAnimation />
        <div className="container mx-auto relative">
          <div
            aria-hidden="true"
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
            Metacube is a free-to-play multiplayer event game on Starknet that revolutionizes blockchain gaming through player ownership. 
            Developed by Clashware Sàrl, it combines massive multiplayer gameplay with blockchain technology benefits.
          </p>
          <p className="mb-3">
            Players join thousands in dismantling the mysterious Metacube, collecting unique NFTs along the way. 
            The game features exclusive Metacube: Genesis and Passcards collections that offer special powers and advantages.
          </p>
          <p className="mb-3">
            Built with web3 technology on Starknet, Metacube ensures players truly own all achievements, items, and victories. 
            Join our community on Discord and Twitter to stay updated on events and developments.
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
}: {
  title: string;
  href: string;
  image: string;
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
            <span className="text-green-400 text-sm font-medium px-4 py-2 bg-black/70 rounded-md">View on Marketplace</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const TradeNFTs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center p-4 sm:p-14 max-w-6xl mx-auto">
        <h1 className="text-4xl font-medium tracking-widest uppercase text-center mb-4">
          Trade Your NFTs
        </h1>
        <p className="text-gray-300 mb-8 p-4 max-w-3xl mx-auto">
          Trade your Metacube NFTs on our premier Starknet trading platform! Discover unique in-game items from the <strong>Metacube: Genesis</strong>, <strong>Metacube: Passcards</strong>, and <strong>Metacube Allstars</strong> collections. Our marketplace is the central hub for buying, selling, and trading these digital assets, offering a seamless experience on Starknet.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 sm:gap-12">
          <NFTLinkWImage
            title="Genesis"
            href="https://market.metacube.games/market"
            image="/g.gif"
          />
          <NFTLinkWImage
            title="Passcard"
            href="https://market.metacube.games/market"
            image="/passcard.gif"
          />
          <NFTLinkWImage
            title="Allstars"
            href="https://market.metacube.games/market"
            image="https://felts.xyz/v1/i/9900"
          />
        </div>
      </div>
    </div>
  );
};
