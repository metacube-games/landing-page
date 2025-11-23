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
  const t = await getTranslations({ locale, namespace: "privacy" });
  const baseUrl = 'https://metacube.games';
  const canonicalUrl = `${baseUrl}/${locale}/privacy`;

  // Generate alternate language links
  const languages: Record<string, string> = {
    en: `${baseUrl}/en/privacy`,
    de: `${baseUrl}/de/privacy`,
    fr: `${baseUrl}/fr/privacy`,
    es: `${baseUrl}/es/privacy`,
    'x-default': `${baseUrl}/en/privacy`,
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

export default function PrivacyPolicy({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("privacy");

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
              <p className="text-gray-300 leading-relaxed">
                {t("sections.introduction.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                {t("sections.informationCollection.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t("sections.informationCollection.description")}
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                {t.raw("sections.informationCollection.items").map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                {t("sections.informationUse.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t("sections.informationUse.description")}
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                {t.raw("sections.informationUse.items").map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                {t("sections.dataStorage.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t("sections.dataStorage.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                {t("sections.blockchainTransactions.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t("sections.blockchainTransactions.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                {t("sections.googleLogin.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t("sections.googleLogin.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                {t("sections.dataRetention.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t("sections.dataRetention.content")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                {t("sections.userRights.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t("sections.userRights.description")}
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                {t.raw("sections.userRights.items").map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-300 leading-relaxed mt-2">
                {t("sections.userRights.footer")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                {t("sections.childrens.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t("sections.childrens.content")}
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
