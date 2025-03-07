import React from "react";
import dynamic from "next/dynamic";
import Features from "@/components/features";
import { Navbar } from "@/components/navbar";
import { CubeAnimation } from "@/components/cubeAnimation";
import Footer from "@/components/footer";
import Trailer from "@/components/trailer";
import Team from "@/components/team";
import MotionCard from "@/components/motion-card";
import Link from "next/link";
import Image from "next/image";

const TracingBeam = dynamic(() => import("@/components/ui/tracing-beam"));

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Navbar />
      <CubeAnimation />
      <div className="container mx-auto">
        <div
          aria-hidden="true"
          className={"relative w-full max-w-5xl mx-auto h-full"}
        >
          <div className="absolute -left-20 top-3">
            <TracingBeam />
          </div>
          <div id="heightNeed">
            <TradeNFTs />
            <Trailer />
            <Features />
            <MotionCard />
            <Team />
          </div>
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
      className="group w-max relative inline-block rounded-lg text-black  transition transform hover:scale-105 hover:shadow-green-glow"
    >
      <Image
        src={image}
        alt={title}
        width={175}
        height={175}
        unoptimized
        className="rounded-md mb-2  border-gray-200 border-opacity-20 border-1 "
      />
      <div className="relative p-1 rounded-md rounded-tl-none rounded-tr-none">
        <span className=" text-zinc-100 text-xl sm:text-xl ">{title}</span>
      </div>
    </Link>
  );
};

const TradeNFTs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white ">
      <div className="text-center p-14 ">
        <h1 className="text-4xl tracking-widest uppercase text-center mb-4">
          Trade Your NFTs
        </h1>
        <p className="text-gray-300 mb-8 p-4 max-w-3xl">
          Start trading the exclusive <strong>Metacube: Genesis</strong> and{" "}
          <strong>Metacube: Passcards</strong> collections!
          <br />
          Each NFT unlocks unique advantages, with benefits revealed as events
          come.
        </p>
        <div className="flex flex-col sm:flex-row justify-center align-middle gap-10 gap-x-28 p-6 items-center ">
          <NFTLinkWImage
            title="Genesis"
            href="https://element.market/collections/metacube-genesis"
            image="/g.gif"
          />
          <NFTLinkWImage
            title="Passcard"
            // add unoptimized proprety
            href="https://element.market/collections/metacube-passcards"
            image="/passcard.gif"
          />
        </div>
      </div>
    </div>
  );
};
