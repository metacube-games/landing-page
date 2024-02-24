import React from "react";
import { CommunityJoinSection } from "@/components/typed";
import dynamic from "next/dynamic";
const TopVideo = dynamic(() => import("./topVideo"))

export const CubeAnimation = () => {
    return (
        <div className="relative w-full h-screen flex">
            <TopVideo />
            <div className="absolute z-10 text-3xl tracking-widest uppercase top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <CommunityJoinSection />
            </div>
        </div>
    );
};
