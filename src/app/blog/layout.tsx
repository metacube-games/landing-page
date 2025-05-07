import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metacube Blog | Latest News and Updates",
  description: "Stay updated with the latest news, gameplay guides, and development updates for Metacube - the revolutionary free-to-play NFT game on Starknet.",
  openGraph: {
    title: "Metacube Blog | Latest News and Updates",
    description: "Stay updated with the latest news, gameplay guides, and development updates for Metacube - the revolutionary free-to-play NFT game on Starknet.",
    url: "https://metacube.games/blog",
    siteName: "Metacube Games",
    images: [
      {
        url: "https://metacube.games/metadata-image.webp",
        width: 1200,
        height: 630,
        alt: "Metacube Blog - Latest News and Updates",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://metacube.games/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-gradient-to-b from-black via-emerald-950/20 to-black text-white">
      {/* Consider adding a subtle green glow or border effect here if desired, 
          similar to the modal, but be mindful of overall page performance and visual clutter. 
          Example: border-t border-green-700/10 
      */}
      {children}
    </section>
  );
} 