import React from 'react';
import Image from 'next/image';
import type { BlogContent } from '@/utils/blog-data'; // Assuming BlogContent is exported

interface PostContentDisplayProps {
  content: BlogContent[];
  postId: string; // To help with specific conditional rendering if needed
}

export default function PostContentDisplay({ content, postId }: PostContentDisplayProps) {
  return (
    <div className="prose prose-lg prose-invert max-w-none">
      {content.map((section, index) => {
        if (section.type === "heading") {
          return <h2 key={index} className="text-3xl font-bold mt-12 mb-6">{section.content}</h2>;
        } else if (section.type === "paragraph") {
          // Specific list formatting for the NFT collectibles guide
          if (postId === 'nft-collectibles-guide') {
            if (section.content.startsWith("• Common: Weight 9+") || 
                section.content.startsWith("• Skins: Common skins like")) {
              const listItems = section.content.split('\n');
              return (
                <ul key={index} className="list-disc list-inside mb-6 text-gray-300 leading-relaxed">
                  {listItems.map((item, i) => (
                    <li key={i}>{item.replace(/^•\s*/, '')}</li>
                  ))}
                </ul>
              );
            }
          }
          // Default paragraph rendering
          return <p key={index} className="mb-6 text-gray-300 leading-relaxed">{section.content}</p>;
        } else if (section.type === "image" && section.content) {
          return (
            <div key={index} className="my-8 relative aspect-[16/9] w-full">
              <Image
                src={section.content}
                alt={section.alt || ""}
                fill
                className="object-contain"
                unoptimized // Remove this if you have image optimization set up
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
} 