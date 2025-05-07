"use client";

import React, { useState } from "react";
import { YouTubeEmbed } from '@next/third-parties/google';
import Image from 'next/image';

// Add the interface for the featured stream data
interface FeaturedStream {
  id: string;
  platform: string;
  streamId: string;
  title: string;
  streamer: string;
  viewers: number;
  live: boolean;
  imageUrl?: string; // Optional image URL
}

// Example featured streams data (in a real app, this would come from an API)
const featuredStreams: FeaturedStream[] = [
  {
    id: "1",
    platform: "youtube",
    streamId: "jfKfPfyJRdk", // Lofi girl
    title: "Metacube Tournament Finals",
    streamer: "MetacubeOfficial",
    viewers: 1240,
    live: true
  },
  {
    id: "2",
    platform: "twitch",
    streamId: "twitch_channel", // This would be the channel name
    title: "Pro Player Strategies",
    streamer: "ProGamer123",
    viewers: 840,
    live: true
  },
  {
    id: "3", 
    platform: "kick",
    streamId: "kick_channel",
    title: "Community Building Challenge",
    streamer: "MetacubeBuilder",
    viewers: 562,
    live: true
  }
];

export default function FeaturedLiveStreams() {
  const [selectedStream, setSelectedStream] = useState(featuredStreams[0]);

  // Mock an empty streams state for demonstration
  const isLiveStreamsAvailable = false; // Set to false to show the "no streams" message

  // If no live streams are available, show a message
  if (!isLiveStreamsAvailable) {
    return (
      <div className="bg-black/20 border border-gray-800 rounded-xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-gray-800 mx-auto flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-3">No Live Streams Right Now</h3>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          There are no active streams at the moment. Be the first to share your gameplay or content with the community!
          Use the submission form below to add your video or stream and get featured here.
        </p>
        <a href="#submit" className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 rounded-md transition-colors text-white font-medium">
          Submit Your Content
        </a>
      </div>
    );
  }

  // Temporary placeholder for non-YouTube embeds
  const renderStreamEmbed = () => {
    if (selectedStream.platform === 'youtube') {
      return (
        <div className="aspect-video w-full">
          <YouTubeEmbed 
            videoid={selectedStream.streamId}
            params="rel=0"
            playlabel={selectedStream.title}
          />
        </div>
      );
    } else {
      // Placeholder for Twitch and Kick embeds
      // In a real implementation, you would use their respective embed APIs
      return (
        <div className="aspect-video w-full relative bg-black/50 flex items-center justify-center">
          <div className="absolute inset-0">
            {selectedStream.imageUrl ? (
              <Image
                src={selectedStream.imageUrl}
                alt={selectedStream.title}
                fill
                className="object-cover opacity-50"
              />
            ) : (
              <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
                  selectedStream.platform === 'twitch' ? 'bg-purple-600' : 
                  selectedStream.platform === 'kick' ? 'bg-green-600' : 'bg-gray-700'
                }`}>
                  {selectedStream.platform === 'twitch' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="white">
                      <path d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z" fillRule="evenodd" clipRule="evenodd"/>
                    </svg>
                  )}
                  {selectedStream.platform === 'kick' && (
                    <svg className="h-12 w-12" viewBox="0 0 24 24" fill="white">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 14.652h-4.02L12 12.5l1.548-2.152h4.02L14.1 12.5l3.468 2.152zm-7.035 0H6.357L9.6 10.348H7.5L4.432 14.5V7.348h2.1v3.304L9.8 7.348h2.1l-3.367 4.304 2 3z"/>
                    </svg>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="text-center z-10">
            <div className="text-2xl font-bold mb-2">{selectedStream.title}</div>
            <div className="text-green-400 mb-4">on {selectedStream.platform}</div>
            <a
              href={`https://${selectedStream.platform}.com/${selectedStream.streamId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 rounded-md transition-colors text-white font-medium"
            >
              Watch on {selectedStream.platform}
            </a>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main stream display */}
      <div className="lg:col-span-2 bg-black/20 border border-gray-800 rounded-xl overflow-hidden">
        {renderStreamEmbed()}
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold">{selectedStream.title}</h3>
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
              <span className="text-red-400 text-sm font-medium">LIVE</span>
              <span className="ml-2 text-gray-400 text-sm">{selectedStream.viewers.toLocaleString()} viewers</span>
            </div>
          </div>
          <p className="text-gray-300">Streamed by {selectedStream.streamer}</p>
        </div>
      </div>

      {/* Stream selection sidebar */}
      <div className="lg:col-span-1 space-y-4 max-h-[600px] overflow-y-auto pr-2">
        <h3 className="text-xl font-semibold mb-2">Featured Streams</h3>
        
        {featuredStreams.map(stream => (
          <div 
            key={stream.id}
            className={`bg-black/30 border p-3 rounded-lg cursor-pointer transition-all ${
              selectedStream.id === stream.id 
                ? 'border-green-500 bg-green-900/10' 
                : 'border-gray-800 hover:border-gray-700'
            }`}
            onClick={() => setSelectedStream(stream)}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
                  stream.platform === 'youtube' ? 'bg-red-600' : 
                  stream.platform === 'twitch' ? 'bg-purple-600' : 
                  stream.platform === 'kick' ? 'bg-green-600' : 'bg-gray-600'
                }`}>
                  {stream.platform === 'youtube' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="white"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                  ) : stream.platform === 'twitch' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="white"><path d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z" fillRule="evenodd" clipRule="evenodd"/></svg>
                  ) : stream.platform === 'kick' ? (
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 14.652h-4.02L12 12.5l1.548-2.152h4.02L14.1 12.5l3.468 2.152zm-7.035 0H6.357L9.6 10.348H7.5L4.432 14.5V7.348h2.1v3.304L9.8 7.348h2.1l-3.367 4.304 2 3z"/></svg>
                  ) : null}
                </div>
                <span className="text-sm font-medium">{stream.streamer}</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-1 animate-pulse"></span>
                <span className="text-gray-400 text-xs">{stream.viewers.toLocaleString()}</span>
              </div>
            </div>
            <div className="text-sm text-white">{stream.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 