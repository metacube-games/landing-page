import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/utils/blog-data'; // Assuming BlogPost type is exported

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogPostCard({ post, index }: BlogPostCardProps) {
    return (
    <Link key={post.id} href={`/blog/${post.id}`} className="group h-full block">
      <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-all transform hover:scale-105 h-full flex flex-col">
        <div className="relative w-full aspect-[16/9]">
          <Image 
            priority={index < 3}
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="text-sm text-gray-400 mb-2">{post.date} • {post.category}</div>
          <h2 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors line-clamp-2 overflow-hidden">{post.title}</h2>
          <p className="text-gray-300 text-sm line-clamp-3 overflow-hidden">{post.excerpt}</p>
          <div className="flex-grow min-h-[12px]"></div>
          <div className="mt-4 text-green-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Read more →
          </div>
        </div>
      </div>
    </Link>
  );
} 