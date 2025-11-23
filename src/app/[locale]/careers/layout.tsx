import type { Metadata } from "next";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'careers' });

  // Map locales to OpenGraph locale format
  const localeMap: Record<string, string> = {
    en: 'en_US',
    de: 'de_DE',
    fr: 'fr_FR',
    es: 'es_ES',
  };

  const baseUrl = 'https://metacube.games';
  const canonicalUrl = `${baseUrl}/${locale}/careers`;
  const ogLocale = localeMap[locale] || 'en_US';

  // Generate alternate language links
  const languages: Record<string, string> = {
    en: `${baseUrl}/en/careers`,
    de: `${baseUrl}/de/careers`,
    fr: `${baseUrl}/fr/careers`,
    es: `${baseUrl}/es/careers`,
    'x-default': `${baseUrl}/en/careers`,
  };

  const metaTitle = `${t('title')} | Metacube Games`;
  const metaDescription = "Join the Metacube Games team. Explore career opportunities at the forefront of blockchain gaming on Starknet.";

  return {
    title: metaTitle,
    description: metaDescription,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: "Metacube Games",
      images: [
        {
          url: "https://metacube.games/metadata-image.webp",
          width: 1200,
          height: 630,
          alt: "Metacube Games - Careers",
        },
      ],
      locale: ogLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@MetacubeGames",
      creator: "@MetacubeGames",
      title: metaTitle,
      description: metaDescription,
      images: [
        {
          url: "https://metacube.games/metadata-image.webp",
          alt: "Metacube Games - Careers",
        },
      ],
    },
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
  };
}

export default function CareersLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-gradient-to-b from-black via-emerald-950/20 to-black text-white">
      {children}
    </section>
  );
}
