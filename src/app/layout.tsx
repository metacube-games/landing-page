import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://metacube.games"),
  title: "Metacube | Free2Play on Starknet",
  description:
    "Metacube is a Massive Multiplayer Free2Play Event game on Starknet. Compete with thousands of players, own the assets you collect, and conquer the Metacube.",
  openGraph: {
    type: "website",
    url: "https://metacube.games",
    siteName: "Metacube Games",
    images: [
      {
        url: "https://metacube.games/metadata-image.webp",
        width: 800,
        height: 600,
        alt: "Metacube Free2Play Event on Starknet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MetacubeGames",
    images: [
      {
        url: "https://metacube.games/metadata-image.webp",
        alt: "Metacube Free2Play Event on Starknet",
      },
    ],
  },

};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://metacube.games" />
        <meta name="keywords" content="Metacube, Metacube Games, Game, Metacube Game, NFT, NFT Game, Crypto Game, Free2Play, Starknet, Multiplayer, Blockchain Game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="import" href="/googlec094d69005c828f0.html" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      {/* <Script src="https://platform.twitter.com/widgets.js" /> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
