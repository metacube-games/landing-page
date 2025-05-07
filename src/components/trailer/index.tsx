import React from "react";
import { YouTubeEmbed } from '@next/third-parties/google'
import Link from "next/link";

const Trailer = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center relative mb-24">
        <h1 className="text-4xl font-medium tracking-widest uppercase text-center mb-4">
          Watch the Trailer
        </h1>
        <div className="flex justify-center items-center w-full" >
          <YouTubeEmbed videoid="NrqrzNGqnwM" width={640} params="controls=0" playlabel="Metacube Trailer" />
        </div>
        
        {/* Play Now Button */}
        <div className="mt-8">
          <Link 
            href="https://play.metacube.games" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block py-4 px-12 text-lg uppercase font-bold tracking-wider text-white bg-gradient-to-r from-green-700 to-emerald-600 rounded-md transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/50 animate-pulse-slow relative overflow-hidden"
          >
            <span className="relative z-10">Play Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Trailer;



