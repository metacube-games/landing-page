import React from "react";
import { CommunityJoinSection } from "@/components/typed";

export const CubeAnimation = () => {
  return (
    <div className="relative w-full h-screen flex">
      <video
        aria-hidden="true"
        preload="auto"
        src={"/heroVideo.mp4"}
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover z-1"
      />
      <div className="absolute z-10 text-4xl tracking-widest uppercase top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <CommunityJoinSection />
      </div>
    </div>
  );
};
