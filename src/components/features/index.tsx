'use client';

"use client";
import { HoverEffect } from "./cards";
import {useTranslations} from 'next-intl';

export default function Features() {
  const t = useTranslations('home.features');

  const projects = [
    {
      title: t('items.poweredByStarknet.title'),
      description: t('items.poweredByStarknet.description'),
      link: "https://www.starknet.io/",
    },
    {
      title: t('items.freeToPlay.title'),
      description: t('items.freeToPlay.description'),
    },
    {
      title: t('items.massiveEvent.title'),
      description: t('items.massiveEvent.description'),
    },
    {
      title: t('items.starknetId.title'),
      description: t('items.starknetId.description'),
      link: "https://app.starknet.id/?sponsor=0x2ba4ea61d80d1a60adf03150b7634af5fee6f4b3167d915ab8cce2be3ac2023"
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center relative mb-24 text-black" aria-labelledby="features-heading">
      <h1 id="features-heading" className="text-4xl font-medium tracking-widest uppercase text-center text-white">{t('title')}</h1>
      <HoverEffect items={projects} />
    </section>
  );
}

