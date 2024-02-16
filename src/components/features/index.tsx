import { HoverEffect } from "./cards";

export default function Features() {
  return (
    <section className="flex flex-col justify-center items-center relative mb-24 text-black" aria-labelledby="features-heading">
      <h1 id="features-heading" className="text-3xl font-medium tracking-widest uppercase text-center text-white">Play with Us</h1>
      <HoverEffect items={projects} />
    </section>
  );
}

export const projects = [
  {
    title: "Powered by Starknet",
    description: "Starknet enables players to own, collect, and trade their assets as they wish",
    link: "https://www.starknet.io/",
  },
  {
    title: "Free to Play",
    description: "Metacube is completely free to play, playing does not require any initial investment",
  },
  {
    title: "Massive event",
    description: "Join thousands of players competing for rewards in an ephemeral event that ends once the Cube is fully destroyed.",
  },
];
