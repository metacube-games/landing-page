import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/utils/blog-data'; // Assuming BlogPost type is exported

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link key={post.id} href={`/blog/${post.id}`} className="group">
      <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-all transform hover:scale-105 h-full flex flex-col">
        <div className="relative aspect-[16/9] w-full">
          <Image 
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            unoptimized // Remove this if you have image optimization set up
          />
        </div>
        <div className="p-6 flex flex-col h-40">
          <div className="text-sm text-gray-400 mb-2">{post.date} • {post.category}</div>
          <h2 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors line-clamp-2">{post.title}</h2>
          <p className="text-gray-300 text-sm line-clamp-3">{post.excerpt}</p>
        </div>
      </div>
    </Link>
  );
} 