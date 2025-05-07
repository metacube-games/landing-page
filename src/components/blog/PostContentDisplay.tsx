"use client"; // Mark as a Client Component
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Prism from 'prismjs';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-typescript';
import type { BlogContent } from '@/utils/blog-data'; // Assuming BlogContent is exported

interface PostContentDisplayProps {
  content: BlogContent[];
  postId: string; // To help with specific conditional rendering if needed
}

// Simple markdown to HTML converter for paragraphs
const renderMarkdown = (text: string) => {
  let html = text;
  // Bold: **text** -> <strong>text</strong>
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Italic: *text* -> <em>text</em>
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  // Links: [text](url) -> <a href="url">text</a>
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-green-400 hover:text-green-300 underline">$1</a>');
  // Newlines to <br /> for manually formatted lists in paragraphs
  html = html.replace(/\n/g, '<br />');
  return { __html: html };
};

export default function PostContentDisplay({ content, postId }: PostContentDisplayProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    Prism.highlightAll();
  }, []);

  useEffect(() => {
    if (isMounted) {
      Prism.highlightAll();
    }
  }, [content, isMounted]);

  return (
    <div className="prose prose-lg prose-invert max-w-none">
      {content.map((section, index) => {
        if (section.type === "heading") {
          return <h2 key={index} className="text-3xl font-bold mt-10 mb-4">{section.content}</h2>;
        } else if (section.type === "paragraph") {
          // Specific list formatting for the NFT collectibles guide needs to be handled carefully
          // if markdown conversion for general paragraphs is added.
          // For now, we assume that NFT guide specific paragraphs with lists are NOT using markdown for those lists.
          if (postId === 'nft-collectibles-guide') {
            if (section.content.startsWith("• Common: Weight 9+") || 
                section.content.startsWith("• Skins: Common skins like") ||
                section.content.startsWith("• Skins: Common skins like 'Azure Blue'") || // Adjusted for more specific match if needed
                section.content.startsWith("• Common: Weight 9+\\n• Uncommon: Weight 7-8") // Handling multiline as a single content block
              ) {
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
          // Default paragraph rendering with simple markdown
          return <p key={index} className="mb-6 text-gray-300 leading-relaxed" dangerouslySetInnerHTML={renderMarkdown(section.content)} />;
        } else if (section.type === "image" && section.content) {
          return (
            <div key={index} className="my-8 relative aspect-auto w-full flex justify-center">
              <Image
                src={section.content} // Expects a path like /blog/image-name.webp
                alt={section.alt || "Blog image"}
                width={700} // Default width, adjust as needed or make dynamic
                height={400} // Default height, adjust as needed or make dynamic
                className="object-contain rounded-lg shadow-lg"
                unoptimized
              />
            </div>
          );
        } else if (section.type === "code" && section.content) {
          return (
            <div key={index} className="my-6 bg-gray-900/70 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-gray-700">
              {section.language && (
                <div className="text-xs text-gray-400 py-2 px-4 bg-gray-800/50 border-b border-gray-700">
                  {section.language}
                </div>
              )}
              <pre className={`language-${section.language || 'none'}`} suppressHydrationWarning>
                <code className={`language-${section.language || 'none'}`}>
                  {section.content}
                </code>
              </pre>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
} 