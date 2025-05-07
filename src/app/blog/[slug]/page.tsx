import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { blogPosts } from "@/utils/blog-data";
import NFTStatsSectionWrapper from '@/components/charts/NFTStatsSectionWrapper';
import PostContentDisplay from '@/components/blog/PostContentDisplay';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// This is now a Server Component (no "use client")
export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = blogPosts[resolvedParams.slug];

  if (!post) {
    return (
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <div className="container mx-auto px-4 pt-24 pb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">Post Not Found</h1>
          <p className="mb-6">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog" className="inline-block px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  // Determine if this is the NFT stats post (now the merged NFT guide post)
  const isNFTStatsPost = post.id === 'nft-collectibles-guide';

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
            Back to Blog
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
            {post.date} • {post.category} • By {post.author}
          </div>
          <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
        </div>

        {/* Use the new PostContentDisplay component */}
        <PostContentDisplay content={post.content} postId={post.id} />

        {/* Render the NFT Stats visualizations for the specific post */}
        {isNFTStatsPost && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold mt-12 mb-6">NFT Rarity Distribution</h2>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Below you&apos;ll find detailed visualizations of the rarity distribution across all NFT traits.
              These charts show the exact breakdown of each trait by rarity level.
            </p>
            <NFTStatsSectionWrapper />
          </div>
        )}

        {/* Related posts */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {post.relatedPosts.map((slug) => {
                const relatedPost = blogPosts[slug];
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
              })}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </main>
  );
} 