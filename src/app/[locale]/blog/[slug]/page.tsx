import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { getBlogPost, getCategoryKeyByName } from "@/utils/blog-data";
import NFTStatsSectionWrapper from '@/components/charts/NFTStatsSectionWrapper';
import PostContentDisplay from '@/components/blog/PostContentDisplay';

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.locale, resolvedParams.slug);
  const baseUrl = 'https://metacube.games';

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  const canonicalUrl = `${baseUrl}/${resolvedParams.locale}/blog/${resolvedParams.slug}`;
  const imageUrl = post.imageUrl.startsWith('http') ? post.imageUrl : `${baseUrl}${post.imageUrl}`;

  // Generate alternate language links
  const languages: Record<string, string> = {
    en: `${baseUrl}/en/blog/${resolvedParams.slug}`,
    de: `${baseUrl}/de/blog/${resolvedParams.slug}`,
    fr: `${baseUrl}/fr/blog/${resolvedParams.slug}`,
    es: `${baseUrl}/es/blog/${resolvedParams.slug}`,
    'x-default': `${baseUrl}/en/blog/${resolvedParams.slug}`,
  };

  // Generate JSON-LD structured data for Article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Metacube Games",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/metadata-image.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    articleSection: post.category,
    inLanguage: resolvedParams.locale,
    url: canonicalUrl,
  };

  return {
    title: `${post.title} | Metacube Blog`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      type: 'article',
      url: canonicalUrl,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: resolvedParams.locale === 'en' ? 'en_US' :
              resolvedParams.locale === 'de' ? 'de_DE' :
              resolvedParams.locale === 'fr' ? 'fr_FR' : 'es_ES',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
      site: '@MetacubeGames',
      creator: '@MetacubeGames',
    },
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    other: {
      "application/ld+json": JSON.stringify(jsonLd),
    },
  };
}

// This is now a Server Component (no "use client")
export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.locale, resolvedParams.slug);
  const t = await getTranslations({ locale: resolvedParams.locale, namespace: 'blog.postPage' });
  const tBlog = await getTranslations({ locale: resolvedParams.locale, namespace: 'blog' });

  if (!post) {
    return (
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <div className="container mx-auto px-4 pt-24 pb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">{t('postNotFound')}</h1>
          <p className="mb-6">{t('postNotFoundDescription')}</p>
          <Link href="/blog" className="inline-block px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
            {t('backToBlog')}
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  // Determine if this is the NFT stats post (now the merged NFT guide post)
  const isNFTStatsPost = post.id === 'nft-collectibles-guide';

  // Get the translated category name
  const categoryKey = getCategoryKeyByName(post.category);
  const translatedCategory = tBlog(categoryKey);

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <article className="container mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16 max-w-4xl">
        {/* Navigation links - Only Back to Blog remains */}
        <div className="flex justify-end items-center mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('backToBlog')}
          </Link>
        </div>

        {/* Featured image */}
        <div className="relative w-full h-80 mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            unoptimized
            priority
          />
        </div>

        {/* Post header */}
        <div className="mb-12">
          <div className="text-sm text-gray-400 mb-2">
            {post.date} • {translatedCategory} • By {post.author}
          </div>
          <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
        </div>

        {/* Use the new PostContentDisplay component */}
        <PostContentDisplay content={post.content} postId={post.id} />

        {/* Render the NFT Stats visualizations for the specific post */}
        {isNFTStatsPost && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold mt-12 mb-6">{t('nftRarityTitle')}</h2>
            <p className="mb-6 text-gray-300 leading-relaxed">
              {t('nftRarityDescription')}
              {t('nftRarityDetails')}
            </p>
            <NFTStatsSectionWrapper />
          </div>
        )}

        {/* Related posts */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">{t('relatedPosts')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {await Promise.all(post.relatedPosts.map(async (slug) => {
                const relatedPost = await getBlogPost(resolvedParams.locale, slug);
                if (!relatedPost) return null;

                return (
                  <Link key={slug} href={`/blog/${slug}`} className="group">
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-all transform hover:scale-105">
                      <div className="relative h-40 w-full">
                        <Image
                          src={relatedPost.imageUrl}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="p-4">
                        <div className="text-sm text-gray-400 mb-2">{relatedPost.date} • {relatedPost.category}</div>
                        <h2 className="text-xl font-semibold group-hover:text-green-400 transition-colors">{relatedPost.title}</h2>
                      </div>
                    </div>
                  </Link>
                );
              }))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </main>
  );
} 