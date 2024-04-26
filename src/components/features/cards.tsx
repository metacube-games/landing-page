import React from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { AnimationHover } from "./AnimationHover";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link?: string;
  }[];
  className?: string;
}) => {
  return (
    <section
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-10  ",
        className
      )}
    >
      {items.map((item, idx) =>
        item.link ? (
          (<Link
            href={item.link}
            key={idx}
            target="_blank"
            aria-label={`Learn more about ${item.title}`}
            className="focus:outline-none"
          >
            <AnimationHover item={item} idx={idx} />
          </Link>)
        ) : (
          <React.Fragment key={idx}
          >
            <AnimationHover item={item} idx={idx} />
          </React.Fragment>
        )
      )}
    </section>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-white/[0.2] group-hover:border-slate-700 relative z-50",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-md",
        className
      )}
    >
      {children}
    </p>
  );
};


