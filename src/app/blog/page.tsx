import React from "react";
import Link from "next/link";
 import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { getAllBlogPosts, categories } from "@/utils/blog-data";
import BlogPostCard from "@/components/blog/BlogPostCard";

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
 
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16">
        <div className="flex justify-between items-center mb-12">
          <div className="w-28"></div> {/* Spacer div for centering */}
          <h1 className="text-4xl font-bold text-center">Metacube Blog</h1>
          <div className="w-28"></div> {/* Spacer div for centering */}
        </div>
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 py-4 z-10 bg-black/90 backdrop-blur-sm border-b border-green-700/30">
          {categories.map((category) => (
            <Link
            
              key={category.slug}
              href={category.slug ? `/blog/category/${category.slug}` : "/blog"}
              className="px-4 py-2 rounded-md bg-transparent border border-green-600/70 text-green-300 hover:bg-green-700/30 hover:text-green-100 hover:border-green-500 font-medium transition-all duration-200 ease-in-out"
            >
              {category.name}
            </Link>
          ))}
        </div>
        
        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
          {allPosts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
      
      {/* SEO Text Section */}
      <div className="w-full bg-black/40 border-t border-gray-800">
        <div className="py-8 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 text-sm text-gray-400">
          <p className="mb-3">
            The Metacube Blog provides the latest news, updates, and insights about the Metacube universe.
            Here you&apos;ll find official announcements, detailed guides, development updates, and community highlights
            to keep you informed about everything happening in the game.
          </p>
          <p className="mb-3">
            Our blog is the central information hub for players looking to enhance their Metacube experience,
            understand game mechanics, and stay updated on upcoming features and events. Bookmark this page to
            never miss an important update from the Metacube team.
          </p>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 