"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const tCommon = useTranslations("common");
  const tNotFound = useTranslations("notFound");

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* 404 Animation */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
          </div>
          <div className="relative space-y-4">
            <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              404
            </h1>
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-12 bg-gradient-to-r from-purple-400 to-transparent rounded-full" />
              <svg
                className="w-8 h-8 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="h-1 w-12 bg-gradient-to-l from-blue-400 to-transparent rounded-full" />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {tNotFound('title')}
          </h2>
          <p className="text-lg text-neutral-400 max-w-md mx-auto">
            {tNotFound('description')}
          </p>
        </div>

        {/* Navigation Options */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="group relative inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 min-w-[160px] min-h-[44px]"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              {tCommon('buttons.goHome')}
            </Link>

            <button
              onClick={() => window.history.back()}
              className="group relative inline-flex items-center justify-center px-8 py-3 bg-neutral-800 text-white font-medium rounded-lg transition-all duration-200 hover:bg-neutral-700 hover:scale-105 border border-neutral-700 min-w-[160px] min-h-[44px]"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              {tCommon('buttons.goBack')}
            </button>
          </div>

          {/* Quick Links */}
          <div className="pt-8 border-t border-neutral-800">
            <p className="text-sm text-neutral-500 mb-4">{tNotFound('quickLinks')}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/blog"
                className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-lg hover:bg-neutral-800 hover:text-white transition-colors border border-neutral-800"
              >
                Blog
              </Link>
              <Link
                href="/community-streams"
                className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-lg hover:bg-neutral-800 hover:text-white transition-colors border border-neutral-800"
              >
                Community Streams
              </Link>
              <Link
                href="/careers"
                className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-lg hover:bg-neutral-800 hover:text-white transition-colors border border-neutral-800"
              >
                Careers
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Cubes Animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-12 h-12 border border-purple-500/20 rounded-lg"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
              opacity: 0.3;
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
              opacity: 0.6;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
