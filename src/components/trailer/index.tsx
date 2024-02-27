import React from "react";
import { YouTubeEmbed } from '@next/third-parties/google'

const Trailer = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center relative mb-24">
        <h1 className="text-3xl font-medium tracking-widest uppercase text-center mb-4">
          Watch the Trailer
        </h1>
        <div className="spinner-container absolute flex justify-center items-center w-full h-full">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
        <div className="flex justify-center items-center w-full" >
          {/* Ensure the tweet embed is accessible and responsive */}
          {/* <blockquote className="twitter-tweet" data-media-max-width="560" >
            <a href="https://twitter.com/MetacubeGames/status/1714343398247682273?ref_src=twsrc%5Etfw" ></a>
          </blockquote> */}
          <YouTubeEmbed videoid="WT58alm2_a0" width={560} params="controls=0" />
        </div>
      </div>
    </>
  );
};

export default Trailer;



