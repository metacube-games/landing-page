import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import VideoSubmissionForm from "@/components/community-streams/VideoSubmissionForm";
import FeaturedLiveStreams from "@/components/community-streams/FeaturedLiveStreams";
import CommunityVideoGrid from "@/components/community-streams/CommunityVideoGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metacube Community Streams | Live Gameplay and Videos",
  description: "Watch live streams, gameplay videos, and creative content from the Metacube community. Share your Metacube experiences and connect with fellow players.",
  alternates: {
    canonical: "https://metacube.games/community-streams",
  },
  openGraph: {
    title: "Metacube Community Streams | Live Gameplay and Videos",
    description: "Watch live streams, gameplay videos, and creative content from the Metacube community. Share your Metacube experiences and connect with fellow players.",
    url: "https://metacube.games/community-streams",
    siteName: "Metacube Games",
    images: [
      {
        url: "https://metacube.games/metadata-image.webp", // Replace with a more specific image if available
        width: 1200,
        height: 630,
        alt: "Metacube Community Streams",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CommunityStreamsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">Community Streams</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover live streams, gameplay videos, and creative content from the Metacube community. 
            Share your own experiences and join our growing network of creators.
          </p>
        </div>
        
        {/* Featured Live Streams Section */}
        <section className="mb-20 w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold">🔴 Live Now</h2>
            <Link 
              href="#submit" 
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              Start Streaming
            </Link>
          </div>
          <FeaturedLiveStreams />
        </section>
        
        {/* Community Videos Grid */}
        <section className="mb-20 w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold">Community Videos</h2>
          </div>
          <CommunityVideoGrid />
        </section>
        
        {/* Submit Video Section */}
        <section id="submit" className="bg-black/30 backdrop-blur-sm border border-green-900/20 rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6">Submit Your Video or Stream</h2>
          <p className="text-gray-300 text-center mb-8">
            Share your Metacube gameplay, tips, tricks, streams, or creative content with the community.
            We welcome content from YouTube, Twitch, Kick, and other platforms in any language.
          </p>
          <VideoSubmissionForm />
        </section>
      </div>
      
      {/* SEO Text Section */}
      <div className="w-full bg-black/40 border-t border-gray-800">
        <div className="py-8 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 text-sm text-gray-400">
          <p className="mb-3">
            Metacube Community Streams is the official hub for player-created content, featuring gameplay videos,
            tutorials, and live streams from across the Metacube universe. Our platform connects creators with
            players, fostering a vibrant community of shared experiences.
          </p>
          <p className="mb-3">
            Whether you&apos;re looking for gameplay strategies, exciting Metacube moments, or want to share your own
            content, our Community Streams platform provides an easy way to discover and contribute to the expanding
            Metacube community.
          </p>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 