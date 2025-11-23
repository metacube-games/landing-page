"use client";
import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import VideoSubmissionForm from "@/components/community-streams/VideoSubmissionForm";
import FeaturedLiveStreams from "@/components/community-streams/FeaturedLiveStreams";
import CommunityVideoGrid from "@/components/community-streams/CommunityVideoGrid";
import {useTranslations} from 'next-intl';

export default function CommunityStreamsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('communityStreams');

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">{t('title')}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('header.subtitle')}
          </p>
        </div>

        {/* Featured Live Streams Section */}
        <section className="mb-20 w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold">{t('featuredStreams.title')}</h2>
            <Link
              href="#submit"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              {t('featuredStreams.startStreaming')}
            </Link>
          </div>
          <FeaturedLiveStreams />
        </section>

        {/* Community Videos Grid */}
        <section className="mb-20 w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold">{t('videoGrid.title')}</h2>
          </div>
          <CommunityVideoGrid />
        </section>

        {/* Submit Video Section */}
        <section id="submit" className="bg-black/30 backdrop-blur-sm border border-green-900/20 rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6">{t('submitForm.title')}</h2>
          <p className="text-gray-300 text-center mb-8">
            {t('submitForm.description')}
          </p>
          <VideoSubmissionForm />
        </section>
      </div>

      {/* SEO Text Section */}
      <div className="w-full bg-black/40 border-t border-gray-800">
        <div className="py-8 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 text-sm text-gray-400">
          <p className="mb-3">
            {t('seoText.paragraph1')}
          </p>
          <p className="mb-3">
            {t('seoText.paragraph2')}
          </p>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 