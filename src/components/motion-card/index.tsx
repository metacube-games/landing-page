"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Link from "next/link";
import {useTranslations} from 'next-intl';

function MotionCard() {
  const t = useTranslations('home.earnRewards');

  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-medium tracking-widest uppercase text-center text-white">
        {t('title')}
      </h1>
      <CardContainer className="inter-var">
        <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem translateZ="0" className="text-2xl font-bold text-white">
            {t('card.title')}
          </CardItem>
          <CardItem
            as="p"
            translateZ="0"
            className=" text-md max-w-sm mt-2 text-neutral-300"
          >
            {t('card.description')}
          </CardItem>
          <CardItem translateZ="40" className="w-full mt-4">
            <Image
              src="/card.webp"
              loading="lazy"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border-solid"
              alt="Metacube reward card showcasing in-game collectibles"
            />
          </CardItem>
          <CardItem
            as="p"
            translateZ="0"
            className="text-md max-w-sm my-4 text-neutral-300"
          >
            {t('card.walletDescription')}
          </CardItem>
          <div className="flex justify-between items-center">
            <CardItem
              translateZ={30}
              as="div"
              className="px-4 py-2 text-xs text-white justify-center hover:brightness-110"
            >
              <Link
                href="https://www.ready.co/ready-wallet"
                className="items-center flex flex-col"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  style={{ width: "auto" }}
                  alt="Ready Wallet Logo"
                  src="/ready-wallet.webp"
                  width={50}
                  height={50}
                  loading="lazy"
                />
                <p className="text-center w-full mt-2">{t('card.downloadReady')}</p>
              </Link>
            </CardItem>
            <CardItem
              translateZ={30}
              as="div"
              className="px-4 py-2 text-white text-xs justify-center hover:brightness-110"
            >
              <Link
                href="https://braavos.app/"
                className="items-center flex flex-col"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Braavos Wallet"
              >
                <Image
                  alt="Braavos Wallet Logo"
                  src="/Braavos.webp"
                  width={50}
                  height={50}
                  loading="lazy"
                />
                <p className="text-center w-full mt-2">{t('card.downloadBraavos')}</p>
              </Link>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </section>
  );
}

export default MotionCard;
