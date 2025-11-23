'use client';

"use client";
import React from "react";
import { ProfileList } from "./profileList";
import {useTranslations} from 'next-intl';

export default function Team() {
  const t = useTranslations('home.team');

  const people = [
    {
      id: 1,
      name: "Kamyar Taher",
      designation: t('roles.webGameEngineer'),
      image: "/ppKam.webp",
      link: "https://ch.linkedin.com/in/kamyar-taher-4380b614a",
    },
    {
      id: 2,
      name: "Bastien Faivre",
      designation: t('roles.gameSystemsEngineer'),
      image: "/ppBast.webp",
      link: "https://ch.linkedin.com/in/bastienfaivre",
    },
    {
      id: 3,
      name: "Nils Delage",
      designation: t('roles.fullStackDeveloper'),
      image: "/ppNils.webp",
      link: "https://ch.linkedin.com/in/nils-delage-934a67239",
    },
    {
      id: 4,
      name: "Hartom",
      designation: t('roles.communityManager'),
      image: "/ppHartom.webp",
      link: "https://x.com/TheRealHartom",
    },
  ];

  return (
    <section aria-labelledby="team-heading">
      <div className="flex flex-row items-center justify-center w-full">
        <h1
          id="team-heading"
          className="text-4xl font-medium tracking-widest uppercase text-center text-white"
        >
          {t('title')}
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <ProfileList items={people} />
      </div>
    </section>
  );
}
