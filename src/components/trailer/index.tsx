import React from 'react';

export const Trailer = () => {
  return (
    <div className="flex flex-col justify-center items-center relative mb-24 text-black">
      <h1 className="text-3xl font-medium tracking-widest uppercase text-center text-black dark:text-white mb-4">
        Watch the Trailer
      </h1>
      <div style={{ zIndex: -1 }} className="absolute flex justify-center items-center w-full h-full">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
      <div style={{ height: "325px", width: "560px" }}>
        <blockquote className="twitter-tweet" data-media-max-width="560" >
          <a href="https://twitter.com/MetacubeGames/status/1714343398247682273?ref_src=twsrc%5Etfw"></a>
        </blockquote>
        <script async src="https://platform.twitter.com/widgets.js" />
      </div>
    </div>
  );
};

