import React from "react";
import { FloatingNav } from "./floating-navbar";
import Image from "next/image";

export function Navbar() {
  const navItems = [
    {
      name: "About",
      link: "https://metacube-1.gitbook.io/metacube-games",
      icon: (
        <Image
          src="/about.webp" // Chemin vers votre image d'icône
          alt="About Metacube Games" // Texte alternatif important pour l'accessibilité
          width={16} // Définir la largeur de l'image
          height={16} // Définir la hauteur de l'image
          aria-label="About" // Label ARIA pour l'accessibilité
        />
      ),
    },
  ];

  return (
    <nav className="relative left-1/2">
      <FloatingNav navItems={navItems.map(item => ({
        ...item,
        element: (
          <a href={item.link} key={item.name} className="flex items-center space-x-2" target="_blank" rel="noopener noreferrer" aria-label={`Learn more about ${item.name} at Metacube Games`}>
            {item.icon}
            <span>{item.name}</span>
          </a>
        )
      }))} />
    </nav>
  );
}