import { HoverEffect } from "../ui/card-hover-effect";

export default function Features() {
  return (
    <div className="flex flex-col justify-center items-center relative mb-24 text-black">
      <h1 className="text-3xl font-medium tracking-widest uppercase text-black">Play with Us</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Powered by Starknet",
    description:
      "Starknet enables players to own, collect and trade their assets as they wish",
    link: "https://www.starknet.io/",
  },
  {
    title: "Free to Play",
    description:
      "Metacube is completely free to play, playing does not require any initial investment",
  },
  {
    title: "Massive event",
    description:
      "Join thousands of players competing for rewards in an ephemeral event that ends once the Cube is fully destroyed.",
  },
  
];
