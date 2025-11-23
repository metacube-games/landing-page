import type { Metadata } from "next";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: "https://metacube.games/blog",
      siteName: "Metacube Games",
      images: [
        {
          url: "https://metacube.games/metadata-image.webp",
          width: 1200,
          height: 630,
          alt: t('imageAlt'),
        },
      ],
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: "https://metacube.games/blog",
    },
  };
}

export default function BlogLayout({
  children
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