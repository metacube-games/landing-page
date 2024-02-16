import React from "react";
import { TypewriterEffectSmoothDemo } from "@/components/typed";

const CubeAnimation = () => {
    return (
        <div className="relative w-full h-screen flex">
            <video src={'/heroVideo.mp4'} autoPlay muted loop playsInline className="absolute w-full h-full object-cover z-[1]" />
            <div className="absolute z-10 text-3xl tracking-widest uppercase top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <TypewriterEffectSmoothDemo />
            </div>
        </div>
    );
};
export default CubeAnimation;