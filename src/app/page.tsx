import React from "react";
import dynamic from "next/dynamic";
import Features from "@/components/features";
import { Navbar } from "@/components/navbar";
import { CubeAnimation } from "@/components/cubeAnimation";
import Footer from "@/components/footer";
import Trailer from "@/components/trailer";
import Team from "@/components/team";
import MotionCard from "@/components/motion-card";
const TracingBeam = dynamic(() => import("@/components/ui/tracing-beam"))


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Navbar />
      <CubeAnimation />
      <div className="container mx-auto py-24">
        <div
          aria-hidden="true"
          className={"relative w-full max-w-5xl mx-auto h-full"}
        >
          <div className="absolute -left-20 top-3">
            <TracingBeam />
          </div>
          <div id="heightNeed" >
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
