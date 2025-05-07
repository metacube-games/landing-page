import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { getBlogPostsByCategory, categories } from "@/utils/blog-data";
import BlogPostCard from "@/components/blog/BlogPostCard";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const categorySlug = resolvedParams.category;
  const blogPosts = getBlogPostsByCategory(categorySlug);
  const categoryName = categories.find(c => c.slug === categorySlug)?.name || '';
  
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16">
        <div className="flex justify-between items-center mb-12">
          <div className="w-28"></div> {/* Spacer div for centering */}
          <h1 className="text-4xl font-bold text-center">{categoryName} Posts</h1>
          <div className="w-28"></div> {/* Spacer div for centering */}
        </div>
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 py-4 z-10 bg-black/90 backdrop-blur-sm border-b border-green-700/30">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.slug ? `/blog/category/${cat.slug}` : "/blog"}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ease-in-out ${
                cat.slug === categorySlug
                  ? "bg-green-600 text-white border border-green-500 shadow-lg shadow-green-600/30"
                  : "bg-transparent border border-green-600/70 text-green-300 hover:bg-green-700/30 hover:text-green-100 hover:border-green-500"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
        
        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
          {blogPosts.length > 0 ? (
            blogPosts.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))
          ) : (
            <div className="col-span-3 text-center py-20">
              <p className="text-xl text-gray-400">No posts found in this category.</p>
              <Link href="/blog" className="mt-4 inline-block text-green-400 hover:text-green-300">
                View all posts
              </Link>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 