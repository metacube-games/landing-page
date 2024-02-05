"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Kamyar Taher",
    designation: "Web Game Engineer",
    image:
      "/ppKam.webp",
    link: "https://ch.linkedin.com/in/kamyar-taher-4380b614a"
  },
  {
    id: 2,
    name: "Bastien Faivre",
    designation: "Game Systems Engineer",
    image:
      "/ppBast.webp",
    link:"https://ch.linkedin.com/in/bastienfaivre"
  },
  {
    id: 3,
    name: "Nils Delage",
    designation: "Full-Stack Developer",
    image:
      "/ppNils.webp",
    link: "https://ch.linkedin.com/in/nils-delage-934a67239"
  },
  {
    id: 4,
    name: "Damien Elledge",
    designation: "Marketing Strategist",
    image:
      "/ppDam.webp",
    link: "https://fr.linkedin.com/in/damien-elledge-30740058"
  },
  {
    id: 5,
    name: "Hartom",
    designation: "Community Manager",
    image:
      "/ppHartom.webp",
    link: "https://twitter.com/hartomicfundz"
  },
  
];

export default function Team() {
  return (
    <div>
    <div className="flex flex-row items-center justify-center w-full">
      <h1 className="text-3xl font-medium tracking-widest uppercase text-black">Our Team</h1>
    </div>
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
    </div>
  );
}
