"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current: number) => {
    const direction = current - (scrollYProgress.getPrevious() ?? 0);
    setVisible(direction < 0);
  });
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        // @ts-ignore
        className={cn(
          "flex max-w-fit fixed top-2 inset-x-0 mx-auto border border-transparent rounded-full bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-4 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative items-center flex space-x-1 text-neutral-600 hover:text-neutral-500"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <>
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-md">{navItem.name}</span>
            </>
          </Link>
        ))}
        <Link
          href={"https://play.metacube.games"}
          className={cn(
            "relative  items-center flex space-x-1 text-neutral-400 hover:text-neutral-500"
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border text-md font-medium relative border-neutral-200  text-white px-4 py-2 rounded-full bg-black hover:bg-neutral-900">
            <span>Play</span>
          </button>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNav;
