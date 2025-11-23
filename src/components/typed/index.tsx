'use client';
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/x";
import "react-social-icons/discord";
import {useTranslations} from 'next-intl';

export function CommunityJoinSection() {
  const t = useTranslations('home.communityJoin');

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <h1 className="text-5xl md:text-7xl font-medium tracking-widest uppercase text-white m-4">
        {t('title')}
      </h1>
      <p className="text-neutral-200 text-base md:text-xl animate-pulse">
        {t('subtitle')}
      </p>
      <div className="flex flex-row space-y-0  space-x-24 p-0">
        <SocialIcon
          url="https://x.com/metacubeGames"
          bgColor="transparent"
          style={{ height: 96, width: 96 }}
          className="transition-transform duration-300 opacity-90 hover:opacity-100 hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        />
        <SocialIcon
          url="https://discord.gg/FGV6HkMbNj"
          bgColor="transparent"
          style={{ height: 96, width: 96 }}
          className="transition-transform duration-300 opacity-90 hover:opacity-100 hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </div>
  );
}
