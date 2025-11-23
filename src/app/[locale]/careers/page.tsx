"use client";
import React from 'react';
import Footer from '@/components/footer';
import {useTranslations} from 'next-intl';

export default function CareersPage({ params: { locale } }: { params: { locale: string } }) {
    const t = useTranslations('careers');

    return (
        <div className="flex flex-col items-center justify-between h-screen">
            <h1 className='font-bold'>{t('title')}</h1>
            <Footer />
        </div>
    );
}
