import React, { lazy } from "react";
import Team from "@/components/team";
import Features from "@/components/features";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Navbar } from "@/components/navbar";
import { MotionCard } from "@/components/motion-card";
import Footer from "@/components/footer";
import { CubeAnimation } from "@/components/cubeAnimation";
const Trailer = lazy(() => import("@/components/trailer"));

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Navbar />
      <CubeAnimation />
      <div className="container mx-auto py-24">
        <TracingBeam>
          <Trailer />
          <Features />
          <MotionCard />
          <Team />
        </TracingBeam>
      </div>

      <Footer />

    </main>
  );
}
