"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card, CardTitle, CardDescription } from "./cards";

export function AnimationHover({ item, idx }: { item: any; idx: any }) {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="relative group block p-2 h-full w-full"
    >
      <AnimatePresence>
        {hoveredIndex === idx && (
          <motion.span
            // @ts-ignore
            className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <Card>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </Card>
    </div>
  );
}
