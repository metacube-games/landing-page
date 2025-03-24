import React from "react";

const GlowingAura = ({ className }: { className: string }) => {
  return (
    <div
      className={`absolute rounded-full animate-pulse ${className}`}
      style={{
        background:
          "radial-gradient(circle, rgba(20, 200, 120, 0.2) 0%, rgba(56, 200, 100, 0.15) 30%, rgba(70, 120, 70, 0.2) 60%, transparent 80%)",
        filter: "blur(20px)",
        zIndex: 40,
      }}
    />
  );
};

export const GlowingAuras = () => {
  return (
    <>
      {/* Large top aura */}
      {/* Medium center-left aura */}
      {/* Trailer video aura */}
      <GlowingAura className="w-[1000px] h-[500px] top-[30%] left-1/2 -translate-x-1/2 opacity-40" />
      {/* Extra large bottom aura */}
      <GlowingAura className="w-[600px] h-[600px] bottom-0 -left-40 -z-10 opacity-20" />
      {/* Medium floating aura near team section */}
      <GlowingAura className="w-[350px] h-[350px] bottom-1/4 right-20 " />
    </>
  );
};

export default GlowingAuras;
