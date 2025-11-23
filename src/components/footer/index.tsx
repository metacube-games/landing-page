'use client';

"use client";
import React from "react";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/x";
import "react-social-icons/telegram";
import "react-social-icons/discord";
import "react-social-icons/github";
import "react-social-icons/linkedin";
import "react-social-icons/instagram";
import "react-social-icons/tiktok";
import "react-social-icons/facebook";
import Link from "next/link";
import {useTranslations} from 'next-intl';
import LocaleSwitcher from "@/components/LocaleSwitcher";

const Footer: React.FC = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-black text-white p-4 md:p-8 w-full" role="contentinfo">
      <div className="container mx-auto flex md:flex-row flex-col-reverse justify-between items-start gap-8">
        <div className="text-sm md:text-md mt-8 md:mt-0 w-full md:w-auto text-center md:text-left space-y-4">
          <div>
            {t('copyright')}
          </div>
          <div className="flex justify-center md:justify-start">
            <LocaleSwitcher />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full md:w-auto">
          <nav aria-label="Social media links">
            <p className="font-bold text-lg mb-4">{t('contactUs')}</p>
            <div className="grid grid-cols-4 gap-3 max-w-[200px]">
              <SocialIcon
                url="https://x.com/metacubeGames"
                bgColor="transparent"
                fgColor="#ffffff"
                style={{ height: 40, width: 40 }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t('social.twitter')} (opens in new window)`}
                className="hover:opacity-75 transition-opacity duration-200"
              />
              <SocialIcon
                url="https://www.tiktok.com/@metacube_games"
                bgColor="transparent"
                fgColor="#ffffff"
                style={{ height: 40, width: 40 }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t('social.tiktok')} (opens in new window)`}
                className="hover:opacity-75 transition-opacity duration-200"
              />
              <SocialIcon
                url="https://discord.gg/FGV6HkMbNj"
                bgColor="transparent"
                fgColor="#ffffff"
                style={{ height: 40, width: 40 }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t('social.discord')} (opens in new window)`}
                className="hover:opacity-75 transition-opacity duration-200"
              />
              <SocialIcon
                url="https://www.instagram.com/metacubegames"
                bgColor="transparent"
                fgColor="#ffffff"
                style={{ height: 40, width: 40 }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t('social.instagram')} (opens in new window)`}
                className="hover:opacity-75 transition-opacity duration-200"
              />
              <SocialIcon
                url="https://github.com/metacube-games"
                bgColor="transparent"
                fgColor="#ffffff"
                style={{ height: 40, width: 40 }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t('social.github')} (opens in new window)`}
                className="hover:opacity-75 transition-opacity duration-200"
              />
              <SocialIcon
                url="https://www.linkedin.com/company/metacubegames"
                bgColor="transparent"
                fgColor="#ffffff"
                style={{ height: 40, width: 40 }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t('social.linkedin')} (opens in new window)`}
                className="hover:opacity-75 transition-opacity duration-200"
              />
              <SocialIcon
                url="https://www.facebook.com/profile.php?id=61556888130635"
                bgColor="transparent"
                fgColor="#ffffff"
                style={{ height: 40, width: 40 }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t('social.facebook')} (opens in new window)`}
                className="hover:opacity-75 transition-opacity duration-200"
              />
            </div>
          </nav>
          <nav aria-label="Site links">
            <p className="font-bold text-lg mb-3">{t('info')}</p>
            <ul className="space-y-1">
              <li>
                <Link href="/blog" className="hover:text-gray-300 inline-block py-2 min-h-[44px]">
                  {t('links.blog')}
                </Link>
              </li>
              <li>
                <Link
                  href="https://play.metacube.games/linkWallet"
                  className="hover:text-gray-300 inline-block py-2 min-h-[44px]"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t('links.linkWallet')} (opens in new window)`}
                >
                  {t('links.linkWallet')}
                </Link>
              </li>
              <li>
                <Link
                  href="https://metacube-1.gitbook.io/metacube-games"
                  className="hover:text-gray-300 inline-block py-2 min-h-[44px]"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t('links.documentation')} (opens in new window)`}
                >
                  {t('links.documentation')}
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-gray-300 inline-block py-2 min-h-[44px]"
                >
                  {t('links.careers')}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-gray-300 inline-block py-2 min-h-[44px]"
                >
                  {t('links.terms')}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-gray-300 inline-block py-2 min-h-[44px]"
                >
                  {t('links.privacy')}
                </Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Partner links">
            <p className="font-bold text-lg mb-3">{t('partners')}</p>
            <ul className="space-y-1">
              <li>
                <Link
                  href="https://bonega.ai"
                  className="hover:text-gray-300 inline-block py-2 min-h-[44px]"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="bonega.ai (opens in new window)"
                >
                  bonega.ai
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.starkarcade.com/"
                  className="hover:text-gray-300 inline-block py-2 min-h-[44px]"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Stark Arcade (opens in new window)"
                >
                  Stark Arcade
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.starknet.io/"
                  className="hover:text-gray-300 inline-block py-2 min-h-[44px]"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Starknet (opens in new window)"
                >
                  Starknet
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
