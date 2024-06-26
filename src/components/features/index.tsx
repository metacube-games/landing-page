import { HoverEffect } from "./cards";

export default function Features() {
  return (
    <section className="flex flex-col justify-center items-center relative mb-24 text-black" aria-labelledby="features-heading">
      <h1 id="features-heading" className="text-4xl font-medium tracking-widest uppercase text-center text-white">Play with Us</h1>
      <HoverEffect items={projects} />
    </section>
  );
}

export const projects = [
  {
    title: "Powered by Starknet",
    description: "Starknet gives players the ability to own, collect, and trade their assets freely within the game",
    link: "https://www.starknet.io/",
  },
  {
    title: "Free to Play",
    description: "Metacube is completely free to play, with no initial investment required for gameplay",
  },
  {
    title: "Massive event",
    description: "Join thousands of players competing for rewards in a unique event that concludes when the Cube is completely destroyed",
  },
  {
    title: "Starknet ID Integration",
    description: "Players can use and be identified by their Starknet ID in the game",
    link: "https://app.starknet.id/?sponsor=0x2ba4ea61d80d1a60adf03150b7634af5fee6f4b3167d915ab8cce2be3ac2023"
  },
];

