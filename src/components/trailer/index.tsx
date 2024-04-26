import React from "react";
import { YouTubeEmbed } from '@next/third-parties/google'

const Trailer = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center relative mb-24">
        <h1 className="text-4xl font-medium tracking-widest uppercase text-center mb-4">
          Watch the Trailer
        </h1>
        <div className="flex justify-center items-center w-full" >
          <YouTubeEmbed videoid="WT58alm2_a0" width={570} params="controls=0" playlabel="Metacube Trailer" />
        </div>
      </div>
    </>
  );
};

export default Trailer;



