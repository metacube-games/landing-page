"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";

export const ProfileList = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
    link: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    //TODO: adapt this dynamically for phones
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    if (!isMobile) {
      const halfWidth = event.target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // For example, consider <768px as mobile
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {items.map((item, idx) => (
        <div
          className="m-4 relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 0, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 0, scale: 0.6 }}
                style={{
                  //!!! this could cause problems if we have more than 5 items
                  translateX: isMobile ? -25 * item.id : translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                // @ts-ignore
                className={`absolute top-20 sm:left-0 md:-left-1/2 md:translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2 ${
                  hoveredIndex === item.id
                    ? "left-1/2 transform -translate-x-1/2"
                    : ""
                }`}
              >
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Learn more about ${item.name}, ${item.designation}`}
                >
                  <motion.div
                    // @ts-ignore
                    className="text-white font-bold text-base"
                  >
                    {item.name}
                  </motion.div>
                  <motion.div
                    // @ts-ignore
                    className="text-white text-md"
                  >
                    {item.designation}
                  </motion.div>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="object-cover m-0! p-0! object-top rounded-full md:h-20 md:w-20 sm:h-10 sm:w-10 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
          />
        </div>
      ))}
    </>
  );
};
