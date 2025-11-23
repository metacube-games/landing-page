import React from "react";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "terms" });
  const baseUrl = 'https://metacube.games';
  const canonicalUrl = `${baseUrl}/${locale}/terms`;

  // Generate alternate language links
  const languages: Record<string, string> = {
    en: `${baseUrl}/en/terms`,
    de: `${baseUrl}/de/terms`,
    fr: `${baseUrl}/fr/terms`,
    es: `${baseUrl}/es/terms`,
    'x-default': `${baseUrl}/en/terms`,
  };

  return {
    title: t("title"),
    description: t("sections.introduction.content"),
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: t("title"),
      description: t("sections.introduction.content"),
      url: canonicalUrl,
      type: 'website',
      locale: locale === 'en' ? 'en_US' :
              locale === 'de' ? 'de_DE' :
              locale === 'fr' ? 'fr_FR' : 'es_ES',
    },
  };
}

export default function TermsOfService({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("terms");

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="grow container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-8 text-green-400">
            {t("title")}
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                {t("sections.introduction.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t("sections.introduction.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                {t("sections.useOfServices.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t("sections.useOfServices.description")}
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                {t.raw("sections.useOfServices.items").map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                {t("sections.userAccounts.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t("sections.userAccounts.description")}
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                {t.raw("sections.userAccounts.items").map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-300 leading-relaxed mt-2">
                {t("sections.userAccounts.footer")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                {t("sections.intellectualProperty.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t("sections.intellectualProperty.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                {t("sections.blockchainNfts.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t("sections.blockchainNfts.description")}
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                {t.raw("sections.blockchainNfts.items").map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                {t("sections.limitationOfLiability.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t("sections.limitationOfLiability.description")}
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                {t.raw("sections.limitationOfLiability.items").map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                {t("sections.modifications.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t("sections.modifications.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                {t("sections.governingLaw.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t("sections.governingLaw.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                {t("sections.changes.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t("sections.changes.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                {t("sections.termination.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t("sections.termination.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                {t("sections.companyDetails.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t("sections.companyDetails.description")}
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                {t.raw("sections.companyDetails.items").map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                {t("sections.contact.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t("sections.contact.content")}{" "}
                <a
                  href="mailto:contact@metacube.games"
                  className="text-green-400 hover:underline"
                >
                  contact@metacube.games
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
