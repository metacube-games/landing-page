'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { locales, type Locale } from '@/i18n';

const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español'
};

const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  de: '🇩🇪',
  fr: '🇫🇷',
  es: '🇪🇸'
};

export default function LocaleSwitcher() {
  const t = useTranslations('localeSwitcher');
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale === locale) return;

    // Remove the current locale from the pathname and add the new one
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPathname = segments.join('/');

    router.push(newPathname);
  };

  return (
    <div className="relative inline-block">
      <select
        value={locale}
        onChange={(e) => handleLocaleChange(e.target.value as Locale)}
        className="appearance-none bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        aria-label={t('ariaLabel')}
      >
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {localeFlags[loc]} {localeNames[loc]}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}
