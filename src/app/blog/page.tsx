import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { getAllBlogPosts, categories } from "@/utils/blog-data";

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();
  
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex justify-between items-center mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[800px]">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-all transform hover:scale-105">
                <div className="relative h-48 w-full">
                  <Image 
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    unoptimized // Remove this once you have real images
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-400 mb-2">{post.date} • {post.category}</div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors">{post.title}</h2>
                  <p className="text-gray-300">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 