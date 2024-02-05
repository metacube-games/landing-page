"use client";
import React from "react";
import Team from "@/components/team";
import Features from "@/components/features";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { TypewriterEffectSmoothDemo } from "@/components/typed";
import { Navbar } from "@/components/navbar";
import { ThreeDCard } from "@/components/3d-card";
import Footer from "@/components/footer";
import { Trailer } from "@/components/trailer";
import { Button } from "@/components/ui/moving-border";
import { MovingBorderDemo } from "@/components/moving-border-demo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      
      {/* Navbar */}
      <Navbar />

      {/* Full-screen Container for Video and Title */}
      <div className="relative w-full h-screen flex">
        
        {/* Video */}
        <video src={require('../../public/hero-video.mp4')} autoPlay muted loop playsInline className="absolute w-full h-full object-cover z-[1]" />

        {/* Title - Positioned Significantly Above Center */}
        <div className="absolute z-10 text-3xl tracking-widest uppercase top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <TypewriterEffectSmoothDemo />
        </div>
        
      </div>

      {/* Other Content */}
      <div className="container mx-auto py-24">
        <TracingBeam>
          <Trailer />
          <Features />
          <ThreeDCard />
          <Team />
        </TracingBeam>

      </div>
      <Footer />

    </main>
  );
}
