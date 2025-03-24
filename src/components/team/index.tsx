import React from "react";
import { ProfileList } from "./profileList";
const people = [
  {
    id: 1,
    name: "Kamyar Taher",
    designation: "Web Game Engineer",
    image: "/ppKam.webp",
    link: "https://ch.linkedin.com/in/kamyar-taher-4380b614a",
  },
  {
    id: 2,
    name: "Bastien Faivre",
    designation: "Game Systems Engineer",
    image: "/ppBast.webp",
    link: "https://ch.linkedin.com/in/bastienfaivre",
  },
  {
    id: 3,
    name: "Nils Delage",
    designation: "Full-Stack Developer",
    image: "/ppNils.webp",
    link: "https://ch.linkedin.com/in/nils-delage-934a67239",
  },
  {
    id: 4,
    name: "Hartom",
    designation: "Community Manager",
    image: "/ppHartom.webp",
    link: "https://x.com/TheRealHartom",
  },
];

export default function Team() {
  return (
    <section aria-labelledby="team-heading">
      <div className="flex flex-row items-center justify-center w-full">
        <h1
          id="team-heading"
          className="text-4xl font-medium tracking-widest uppercase text-center text-white"
        >
          Our Team
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <ProfileList items={people} />
      </div>
    </section>
  );
}
