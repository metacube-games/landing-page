"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { Button } from "../ui/moving-border";

export function ThreeDCard() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-medium tracking-widest uppercase text-black">Earn Rewards</h1>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="0"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Collect your assets
          </CardItem>
          <CardItem
            as="p"
            translateZ="0"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            The first Game is a race to collect unique cards hidden in the Metacube. Those will yield special powers and abilities to the players that own them.
          </CardItem>
          <CardItem translateZ="40" className="w-full mt-4">
            <Image
              src="/card.png"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border-solid"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            as="p"
            translateZ="0"
            className="text-neutral-500 text-sm max-w-sm my-4 dark:text-neutral-300"
          >
            To collect and interact with your assets, you will need a Starknet wallet. We recommend Argent X or Braavos.
          </CardItem>
          <div className="flex justify-between items-center">
            <CardItem
              translateZ={30}
              as="div"
              className="px-4 py-2 text-xs dark:text-white justify-center hover:brightness-90"
            >
              <Link href="https://www.argent.xyz/argent-x/" className="items-center flex flex-col" target="_blank" rel="noopener noreferrer">
                <Image alt="argent X" src="/argentX.png" width={50} height={50} />
                <p className="text-center w-full mt-2">Download Argent X</p>
              </Link>
            </CardItem>
            <CardItem
              translateZ={30}
              as="div"
              className="px-4 py-2 dark:text-white text-xs justify-center hover:brightness-90"
            >
              <Link href="https://braavos.app/" className="items-center flex flex-col" target="_blank" rel="noopener noreferrer">
                <Image alt="Braavos" src="/Braavos.png" width={50} height={50} />
                <p className="text-center w-full mt-2">Download Braavos</p>
              </Link>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
