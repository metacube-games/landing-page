"use client";
import React, { startTransition, useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";

const TracingBeam = ({}: {}) => {
  const { scrollYProgress } = useScroll({});

  // track velocity of scroll to increase or decrease distance between svg gradient y coordinates.
  // const scrollYProgressVelocity = useVelocity(scrollYProgress);
  const [veloy, setVelocityy] = React.useState<boolean>(false);
  // const velo = useRef(0);
  // const contentRef = useRef<HTMLDivElement>(null);

  const [svgHeight, setSvgHeight] = useState(0);
  useEffect(() => {
    const updateSize = () => {
      const doc = document.getElementById("heightNeed");
      if (doc) {
        setSvgHeight(doc.offsetHeight);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    scrollYProgress.on("change", (latestVelocity: number) => {
      startTransition(() => {
        setVelocityy(latestVelocity > 0.089);
      });
    });
    return () => {
      scrollYProgress.destroy();
    };
  }, [scrollYProgress]);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0.08, 0.8], [20, svgHeight - 1]),
    {
      stiffness: 500,
      damping: 90,
      mass: 0.4,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0.11, 1], [50, svgHeight - 4]),
    {
      stiffness: 500,
      damping: 90,
      mass: 0.4,
    }
  );

  const supState = veloy;

  return (
    <>
      <motion.div
        transition={{ duration: 0.1, delay: 0.1 }}
        animate={{
          boxShadow: supState
            ? "rgba(0, 0, 0, 0) 0px"
            : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
        // @ts-ignore
        className="ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center"
      >
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            backgroundColor: supState ? "#ffffff" : "#00FF94",
            borderColor: supState ? "#ffffff" : "#00FF94",
          }}
          // @ts-ignore
          className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
        />
      </motion.div>
      <svg
        viewBox={`0 0 20 ${svgHeight}`}
        width="20"
        height={svgHeight} // Set the SVG height
        className=" ml-4 hidden lg:block"
        aria-hidden="true"
      >
        <motion.path
          d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
          fill="none"
          stroke="#9091A0"
          strokeOpacity="0.16"
          transition={{ duration: 10 }}
        ></motion.path>
        <motion.path
          d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="1.25"
          className="motion-reduce:hidden"
          transition={{ duration: 10 }}
        ></motion.path>
        <defs>
          <motion.linearGradient
            id="gradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            x2="0"
            y1={y1} // set y1 for gradient
            y2={y2} // set y2 for gradient
          >
            <stop stopColor="#18CCFC" stopOpacity="0"></stop>
            <stop stopColor="#18CCFC"></stop>
            <stop offset="0.325" stopColor="#00FF94"></stop>
            <stop offset="1" stopColor="#00FFE0" stopOpacity="0"></stop>
          </motion.linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default TracingBeam;
