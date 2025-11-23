"use client";

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useTransition, useEffect, useRef } from 'react';
import { locales } from '@/i18n';
import { motion, AnimatePresence } from 'framer-motion';

const localeNames: Record<string, string> = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
};

const localeFlags: Record<string, string> = {
  en: '🇬🇧',
  de: '🇩🇪',
  fr: '🇫🇷',
  es: '🇪🇸',
};

export default function LocaleSwitcher() {
  const t = useTranslations('localeSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLocaleChange = (newLocale: string) => {
    setIsOpen(false);
    if (newLocale === locale) return;

    startTransition(() => {
      // Replace the locale in the current pathname
      const segments = pathname.split('/');
      segments[1] = newLocale;
      const newPathname = segments.join('/');
      router.push(newPathname);
    });
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        aria-label={t('ariaLabel')}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-white transition-colors duration-150 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 disabled:opacity-50 disabled:cursor-not-allowed min-w-[44px] min-h-[44px] border border-neutral-700"
      >
        <span className="text-base" role="img" aria-hidden="true">
          {localeFlags[locale]}
        </span>
        <span>{localeNames[locale]}</span>
        <svg
          className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 bottom-full mb-2 w-48 bg-neutral-900 rounded-lg shadow-xl border border-neutral-700 overflow-hidden z-50"
          >
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left text-white transition-colors duration-150 hover:bg-neutral-800 min-h-[44px] ${
                  loc === locale ? 'bg-neutral-800' : ''
                }`}
              >
                <span className="text-base" role="img" aria-hidden="true">
                  {localeFlags[loc]}
                </span>
                <span className="text-sm font-medium">{localeNames[loc]}</span>
                {loc === locale && (
                  <svg
                    className="w-4 h-4 ml-auto text-neutral-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
