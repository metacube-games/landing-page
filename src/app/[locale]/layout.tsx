import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import "../globals.css";
import "../../styles/prism-theme.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
});

// Helper function to get nested translation value
function getNestedValue(obj: any, path: string): string {
  return path.split('.').reduce((current, key) => current?.[key], obj) || '';
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Manually import messages
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const metadata = messages.metadata || {};

  // Helper function to get translation
  const t = (key: string) => getNestedValue(metadata, key);

  // Map locales to OpenGraph locale format
  const localeMap: Record<string, string> = {
    en: 'en_US',
    de: 'de_DE',
    fr: 'fr_FR',
    es: 'es_ES',
  };

  const ogLocale = localeMap[locale] || 'en_US';
  const baseUrl = 'https://metacube.games';
  const canonicalUrl = `${baseUrl}/${locale}`;

  // Generate alternate language links for hreflang
  const languages: Record<string, string> = {
    en: `${baseUrl}/en`,
    de: `${baseUrl}/de`,
    fr: `${baseUrl}/fr`,
    es: `${baseUrl}/es`,
    'x-default': `${baseUrl}/en`,
  };

  return {
    metadataBase: new URL(baseUrl),
    title: t('title'),
    description: t('description'),
  keywords: [
    "Metacube",
    "Metacubo",
    "Metacubes",
    "Meta",
    "Metacube Games",
    "Play Meta",
    "Meta Game",
    "Onchain",
    "Clashware Sàrl",
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
    "Blockchain",
    "NFT Collection",
    "Web3 Events",
    "Starknet Gaming",
    "Crypto Gaming",
    "Assets",
  ],
  authors: [{ name: t('creator'), url: baseUrl }],
  creator: t('creator'),
  publisher: t('publisher'),
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
    canonical: canonicalUrl,
    languages,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: canonicalUrl,
    siteName: t('siteName'),
    title: t('openGraph.title'),
    description: t('openGraph.description'),
    images: [
      {
        url: `${baseUrl}/metadata-image.webp`,
        width: 1200,
        height: 630,
        alt: t('openGraph.imageAlt'),
      },
    ],
    locale: ogLocale,
    alternateLocale: Object.values(localeMap).filter(l => l !== ogLocale),
  },
  twitter: {
    card: "summary_large_image",
    site: "@MetacubeGames",
    creator: "@MetacubeGames",
    title: t('twitter.title'),
    description: t('twitter.description'),
    images: [
      {
        url: `${baseUrl}/metadata-image.png`,
        alt: t('twitter.imageAlt'),
      },
    ],
  },
  other: {
    "application/ld+json": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "VideoGame",
        name: t('schema.videoGame.name'),
        description: t('schema.videoGame.description'),
        url: baseUrl,
        publisher: {
          "@type": "Organization",
          name: t('schema.organization.name'),
          url: baseUrl,
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
          name: t('creator'),
        },
        genre: ["MMO", "Blockchain", "Action"],
        platform: ["Web", "Starknet"],
        playMode: "MultiPlayer",
        inLanguage: locale,
        datePublished: "2025-03-07",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: t('schema.organization.name'),
        url: baseUrl,
        logo: `${baseUrl}/metadata-image.webp`,
        sameAs: [
          "https://twitter.com/MetacubeGames",
          "https://discord.gg/FGV6HkMbNj",
          "https://www.instagram.com/metacubegames",
          "https://github.com/metacube-games",
          "https://www.linkedin.com/company/metacubegames",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: t('siteName'),
        url: baseUrl,
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${baseUrl}/${locale}/blog?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        },
        inLanguage: locale,
      },
    ]),
  }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Dynamically import messages based on locale
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} data-scroll-behavior="smooth">
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Skip to main content
          </a>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
