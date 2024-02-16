"use client"
import React, { useEffect } from "react";

const Trailer = () => {
  useEffect(() => {
    // Dynamically load the Twitter script for embedding tweets
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center relative mb-24">
      <h1 className="text-3xl font-medium tracking-widest uppercase text-center mb-4">
        Watch the Trailer
      </h1>
      <div className="spinner-container absolute flex justify-center items-center w-full h-full">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
      <div className="flex justify-center items-center w-full" style={{ height: "325px" }}>
        {/* Ensure the tweet embed is accessible and responsive */}
        <blockquote className="twitter-tweet" data-media-max-width="560" >
          <a href="https://twitter.com/MetacubeGames/status/1714343398247682273?ref_src=twsrc%5Etfw"></a>
        </blockquote>
      </div>
    </div>
  );
};

export default Trailer;

{/* <div className="flex flex-col justify-center items-center relative mb-24 text-black">
<h1 className="text-3xl font-medium tracking-widest uppercase text-center text-black dark:text-white mb-4">
  Watch the Trailer
</h1>
<div style={{ zIndex: -1 }} className="absolute flex justify-center items-center w-full h-full">
  <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
</div>
<div style={{ height: "325px", width: "100%", display: "flex", justifyContent: "center" }}>
  <blockquote className="twitter-tweet" data-media-max-width="560"  >
    <a href="https://twitter.com/MetacubeGames/status/1714343398247682273?ref_src=twsrc%5Etfw"></a>
  </blockquote>
  <script async src="https://platform.twitter.com/widgets.js" />
</div>
</div> */}