import type { Metadata } from "next";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'communityStreams.metadata' });

  // Map locales to OpenGraph locale format
  const localeMap: Record<string, string> = {
    en: 'en_US',
    de: 'de_DE',
    fr: 'fr_FR',
    es: 'es_ES',
  };

  const baseUrl = 'https://metacube.games';
  const canonicalUrl = `${baseUrl}/${locale}/community-streams`;
  const ogLocale = localeMap[locale] || 'en_US';

  // Generate alternate language links
  const languages: Record<string, string> = {
    en: `${baseUrl}/en/community-streams`,
    de: `${baseUrl}/de/community-streams`,
    fr: `${baseUrl}/fr/community-streams`,
    es: `${baseUrl}/es/community-streams`,
    'x-default': `${baseUrl}/en/community-streams`,
  };

  return {
    title: t('title'),
    description: t('description'),
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: canonicalUrl,
      siteName: "Metacube Games",
      images: [
        {
          url: "https://metacube.games/metadata-image.webp",
          width: 1200,
          height: 630,
          alt: t('imageAlt'),
        },
      ],
      locale: ogLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@MetacubeGames",
      creator: "@MetacubeGames",
      title: t('title'),
      description: t('description'),
      images: [
        {
          url: "https://metacube.games/metadata-image.webp",
          alt: t('imageAlt'),
        },
      ],
    },
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
  };
}

export default function CommunityStreamsLayout({
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
