import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Link from "next/link";

function MotionCard() {
  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-medium tracking-widest uppercase text-center text-white">
        Earn Rewards
      </h1>
      <CardContainer className="inter-var">
        <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="0"
            className="text-xl font-bold text-white"
          >
            Collect your assets
          </CardItem>
          <CardItem
            as="p"
            translateZ="0"
            className=" text-sm max-w-sm mt-2 text-neutral-300"
          >
            The first Game is a race to collect unique cards hidden in the
            Metacube. Those will yield special powers and abilities to the
            players that own them.
          </CardItem>
          <CardItem translateZ="40" className="w-full mt-4">
            <Image
              src="/card.webp"
              priority
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border-solid"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            as="p"
            translateZ="0"
            className="text-sm max-w-sm my-4 text-neutral-300"
          >
            To collect and interact with your assets, you will need a Starknet
            wallet. We recommend Argent X or Braavos.
          </CardItem>
          <div className="flex justify-between items-center">
            <CardItem
              translateZ={30}
              as="div"
              className="px-4 py-2 text-xs text-white justify-center hover:brightness-110"
            >
              <Link
                href="https://www.argent.xyz/argent-x/"
                className="items-center flex flex-col"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  style={{ width: "auto" }}
                  alt="argent X"
                  src="/argentX.webp"
                  width={50}
                  height={50}
                />
                <p className="text-center w-full mt-2">Download Argent X</p>
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
                aria-label="Download Argent X Wallet"
              >
                <Image
                  alt="Braavos"
                  src="/Braavos.webp"
                  width={50}
                  height={50}
                />
                <p className="text-center w-full mt-2">Download Braavos</p>
              </Link>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </section >
  );
}

export default MotionCard;