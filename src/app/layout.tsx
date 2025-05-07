import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/prism-theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://metacube.games"),
  title: "Metacube | Free2Play Multiplayer Event on Starknet",
  description:
    "Join thousands in Metacube, a massive multiplayer free-to-play event game by Clashware Sàrl on Starknet. Collect unique NFTs, compete to conquer the Metacube, and own your in-game assets in this one-time blockchain gaming experience.",
  keywords: [
    "Metacube",
    "Clashware Sàrl",
    "Metacube Games",
    "Free2Play",
    "Starknet",
    "Blockchain Game",
    "NFT Game",
    "Crypto Game",
    "Multiplayer",
    "MMO",
    "Web3 Gaming",
    "Decentralized Gaming",
    "Play-to-Earn",
    "GameFi",
    "Blockchain MMO",
    "NFT Collection",
    "Web3 Events",
    "Starknet Gaming",
    "Crypto Gaming Events",
    "Blockchain Assets",
  ],
  authors: [{ name: "Clashware Sàrl", url: "https://metacube.games" }],
  creator: "Clashware Sàrl",
  publisher: "Metacube Games",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://metacube.games",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://metacube.games",
    siteName: "Metacube Games",
    title: "Metacube | Free2Play Multiplayer Event on Starknet",
    description:
      "Metacube, developed by Clashware Sàrl, is a free-to-play, massively multiplayer event on Starknet. Compete with thousands, collect NFTs, and conquer the Metacube in this unique blockchain gaming adventure.",
    images: [
      {
        url: "https://metacube.games/metadata-image.webp",
        width: 1200,
        height: 630,
        alt: "Metacube - Free2Play Blockchain Event by Clashware Sàrl on Starknet",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@MetacubeGames",
    creator: "@MetacubeGames",
    title: "Metacube | Free2Play Multiplayer Event on Starknet",
    description:
      "Join the Metacube event by Clashware Sàrl on Starknet! A free-to-play MMO where thousands compete to destroy the cube, earn NFTs, and own their assets.",
    images: [
      {
        url: "https://metacube.games/metadata-image.png",
        alt: "Metacube - Free2Play Blockchain Event by Clashware Sàrl on Starknet",
      },
    ],
  },
  other: {
    "application/ld+json": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "VideoGame",
        name: "Metacube",
        description:
          "Metacube, created by Clashware Sàrl, is a free-to-play, massively multiplayer event game on Starknet where players compete to dismantle the Metacube, collecting NFTs and owning in-game assets.",
        url: "https://metacube.games",
        publisher: {
          "@type": "Organization",
          name: "Metacube Games",
          url: "https://metacube.games",
          sameAs: [
            "https://twitter.com/MetacubeGames",
            "https://discord.gg/FGV6HkMbNj",
            "https://www.instagram.com/metacubegames",
            "https://github.com/metacube-games",
            "https://www.linkedin.com/company/metacubegames",
          ],
        },
        developer: {
          "@type": "Organization",
          name: "Clashware Sàrl",
        },
        genre: ["MMO", "Blockchain", "Action"],
        platform: ["Web", "Starknet"],
        playMode: "MultiPlayer",
        inLanguage: "en",
        datePublished: "2025-03-07",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "http://schema.org/InStock",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Metacube Games",
        url: "https://metacube.games",
        logo: "https://metacube.games/metadata-image.webp",
        sameAs: [
          "https://twitter.com/MetacubeGames",
          "https://discord.gg/FGV6HkMbNj",
          "https://www.instagram.com/metacubegames",
          "https://github.com/metacube-games",
          "https://www.linkedin.com/company/metacubegames",
        ],
      },
    ]),
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="c094d69005c828f0" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://metacube.games" />
        <link rel="dns-prefetch" href="https://metacube.games" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
