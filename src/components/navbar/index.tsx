import React from "react";
import { FloatingNav } from "./floating-navbar";
import { IconFileText } from "@tabler/icons-react";

export function Navbar() {
  const navItems = [
    {
      name: "About",
      link: "https://metacube-1.gitbook.io/metacube-games",
      icon: (
        <IconFileText className="h-4 w-4 text-neutral-500" aria-hidden="true" />
      ),
    },
  ];
  return (
    <nav className="relative left-1/2">
      <FloatingNav navItems={navItems.map(item => ({
        ...item,
        element: (
          // Use <a> for external links, not <Link>
          <a href={item.link} key={item.name} className="flex items-center space-x-2" target="_blank" rel="noopener noreferrer">
            {item.icon}
            <span>{item.name}</span>
          </a>
        )
      }))} />
    </nav>
  );
}
