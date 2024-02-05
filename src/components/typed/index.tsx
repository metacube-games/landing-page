"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/x'
import 'react-social-icons/discord'

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Metacube",
      className: "text-white-500 dark:text-white-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      {/* <TypewriterEffectSmooth words={words} /> */}
      <h1 className="md:text-6xl font-medium tracking-widest uppercase text-white m-4">Metacube</h1>
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        Join the Community
      </p>
      <div className="flex flex-row space-y-0 space-x-0 space-x-24 p-0">
        <SocialIcon url="https://x.com/metacubeGames" bgColor="transparent"  style={{ height: 96, width: 96 }} className="transition-transform duration-300 opacity-90 hover:opacity-100 hover:scale-105" target="_blank" rel="noopener noreferrer"/>
        <SocialIcon url="https://discord.gg/3mgyq8FN" bgColor="transparent"  style={{ height: 96, width: 96 }} className="transition-transform duration-300 opacity-90 hover:opacity-100 hover:scale-105" target="_blank" rel="noopener noreferrer"/>
      </div>
    </div>
  );
}

// style={{ height: window.innerWidth <= 600 ? 50 : 100, width: window.innerWidth <= 600 ? 50 : 100 }}