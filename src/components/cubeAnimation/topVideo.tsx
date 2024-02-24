import React from "react";

const TopVideo = () => {
    return <video aria-hidden="true" preload="preload" src={'/heroVideo.mp4'} autoPlay muted loop playsInline className="absolute w-full h-full object-cover z-[1]" />;
}
export default TopVideo;