"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { YouTubeEmbed } from "@next/third-parties/google";

// Add interface for the video data
interface CommunityVideo {
  id: string;
  title: string;
  creator: string;
  platform: string;
  videoId: string;
  thumbnail?: string; // Optional thumbnail
  language?: string; // Optional language
  featured?: boolean; // Optional featured flag
}

// Example community videos data (this would come from an API in a real app)
const communityVideos: CommunityVideo[] = [
  {
    id: "0",
    title: "",
    creator: "ANTHYLU",
    platform: "youtube",
    videoId: "NVqM2ZyS0yg",
  },
  {
    id: "1",
    title: "",
    creator: "Light12A",
    platform: "youtube",
    videoId: "O-nuRD0XJP4",
    language: "English",
  },
  {
    id: "2",
    title: "",
    creator: "Gedis",
    platform: "youtube",
    videoId: "UZ_4Wkr3M3Y",
  },
  {
    id: "3",
    title: "",
    creator: "Franlis",
    platform: "youtube",
    videoId: "gr1oi_UdIB0",
    language: "Spanish",
  },
  {
    id: "4",
    title: "",
    creator: "elnato07",
    platform: "youtube",
    videoId: "Q5Rc41krauc",
    language: "Spanish",
  },
  {
    id: "5",
    title: "",
    creator: "Light12A",
    platform: "youtube",
    videoId: "wMaT0wMe9Ug",
    language: "English",
  },
  {
    id: "6", // New video
    title: "", // Assuming title will be fetched by YouTubeEmbed or can be added later
    creator: "Thecno | T5",
    platform: "youtube",
    videoId: "WlqXb7-GZzI",
    language: "Spanish",
  },
  // {
  //   id: "5",
  //   title: "",
  //   creator: "CraftMaster",
  //   platform: "youtube",
  //   videoId: "jfKfPfyJRdk" // Lofi girl placeholder
  // },
  // {
  //   id: "6",
  //   title: "",
  //   creator: "TeamPlayGaming",
  //   platform: "twitch",
  //   videoId: "twitch_channel"
  // }
];

export default function CommunityVideoGrid() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [filter, setFilter] = useState("all");

  // Close video modal
  const closeModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = "auto";
  };

  // Open video modal
  const openVideoModal = (videoId: string) => {
    setSelectedVideo(videoId);
    document.body.style.overflow = "hidden";
  };

  // Get platform icon component
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "youtube":
        return (
          <div className="bg-red-600 rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </div>
        );
      case "twitch":
        return (
          <div className="bg-purple-600 rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path
                d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </div>
        );
      case "kick":
        return (
          <div className="bg-green-600 rounded-full p-1">
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="white">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 14.652h-4.02L12 12.5l1.548-2.152h4.02L14.1 12.5l3.468 2.152zm-7.035 0H6.357L9.6 10.348H7.5L4.432 14.5V7.348h2.1v3.304L9.8 7.348h2.1l-3.367 4.304 2 3z" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  // Format view count
  const formatViewCount = (count: number) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "M";
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + "K";
    }
    return count;
  };

  // Format date
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communityVideos.map((video) => (
          <div
            key={video.id}
            className="group bg-black/30 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all hover:translate-y-[-2px]"
          >
            {/* Video player */}
            <div className="aspect-video w-full relative">
              {video.platform === "youtube" ? (
                <>
                  <YouTubeEmbed
                    videoid={video.videoId}
                    params="rel=0"
                    playlabel={video.title}
                  />

                  {/* Overlay for title and details */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-3 transform transition-transform duration-300 ease-in-out group-hover:translate-y-full">
                    <h3 className="text-lg font-semibold mb-1 line-clamp-2 text-white">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-300 text-base font-medium truncate">
                        {video.creator}
                      </p>
                      {video.language && (
                        <span className="text-xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded">
                          {video.language}
                        </span>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center ${
                      video.platform === "twitch"
                        ? "bg-purple-600"
                        : video.platform === "kick"
                          ? "bg-green-600"
                          : "bg-gray-700"
                    }`}
                  >
                    {video.platform === "twitch" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path
                          d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {video.platform === "kick" && (
                      <svg
                        className="h-12 w-12"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 14.652h-4.02L12 12.5l1.548-2.152h4.02L14.1 12.5l3.468 2.152zm-7.035 0H6.357L9.6 10.348H7.5L4.432 14.5V7.348h2.1v3.304L9.8 7.348h2.1l-3.367 4.304 2 3z" />
                      </svg>
                    )}
                  </div>
                  <a
                    href={`https://${video.platform}.com/${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span className="sr-only">Watch on {video.platform}</span>
                    <div className="px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors">
                      Watch on {video.platform}
                    </div>
                  </a>

                  {/* Overlay for title and details */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-3 transform transition-transform duration-300 ease-in-out group-hover:translate-y-full">
                    <h3 className="text-lg font-semibold mb-1 line-clamp-2 text-white">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-300 text-base font-medium truncate">
                        {video.creator}
                      </p>
                      {video.language && (
                        <span className="text-xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded">
                          {video.language}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Featured badge */}
              {video.featured && (
                <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-md z-10">
                  Featured
                </div>
              )}

              {/* Platform badge for YouTube videos */}
              {video.platform === "youtube" && (
                <div className="absolute top-2 right-2 z-10">
                  {getPlatformIcon(video.platform)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
