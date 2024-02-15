import React from "react";
import { FloatingNav } from "./floating-navbar";
import { IconFileText } from "@tabler/icons-react";

export function Navbar() {
  const navItems = [
    {
      name: "About",
      link: "https://metacube-1.gitbook.io/metacube-games",
      icon: (
        <IconFileText className="h-4 w-4 text-neutral-500" />
      ),
    },
  ];
  return (
    <div className="relative left-1/2">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
