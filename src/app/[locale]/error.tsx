"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const tCommon = useTranslations("common");
  const tError = useTranslations("error");

  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Error Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl" />
            <div className="relative bg-red-500/10 p-6 rounded-full border border-red-500/20">
              <svg
                className="w-16 h-16 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {tError('title')}
          </h1>
          <p className="text-lg text-neutral-400">
            {tError('description')}
          </p>
        </div>

        {/* Error Details (in development) */}
        {process.env.NODE_ENV === "development" && (
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 text-left">
            <h3 className="text-sm font-semibold text-red-400 mb-2">Error Details (Development Only)</h3>
            <p className="text-xs text-neutral-400 font-mono break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-neutral-500 mt-2">
                Digest: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={reset}
            className="group relative inline-flex items-center justify-center px-8 py-3 bg-white text-black font-medium rounded-lg transition-all duration-200 hover:bg-neutral-100 hover:scale-105 min-w-[160px] min-h-[44px]"
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
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            {tCommon('buttons.tryAgain')}
          </button>

          <Link
            href="/"
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            {tCommon('buttons.goHome')}
          </Link>
        </div>

        {/* Support Info */}
        <div className="pt-8 border-t border-neutral-800">
          <p className="text-sm text-neutral-500">
            {tError('supportText')}{" "}
            <a
              href="mailto:contact@metacube.com"
              className="text-neutral-300 hover:text-white underline transition-colors"
            >
              {tError('contactSupport')}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
