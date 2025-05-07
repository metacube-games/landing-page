"use client";

import React, { useState } from "react";

interface FormData {
  email: string;
  videoLink: string;
  comment: string;
  language: string;
}

// Function to extract video ID from URL
const extractVideoId = (url: string) => {
  // Try YouTube format first
  const ytRegExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const ytMatch = url?.match(ytRegExp);
  if (ytMatch && ytMatch[7].length === 11) {
    return { id: ytMatch[7], platform: 'youtube' };
  }
  
  // Try Twitch format
  const twitchRegExp = /(?:www\.)?twitch\.tv\/(?:videos\/(\d+)|(\w+))/;
  const twitchMatch = url?.match(twitchRegExp);
  if (twitchMatch) {
    return { id: (twitchMatch[1] || twitchMatch[2]), platform: 'twitch' };
  }
  
  // Try Kick format
  const kickRegExp = /(?:www\.)?kick\.com\/(\w+)/;
  const kickMatch = url?.match(kickRegExp);
  if (kickMatch) {
    return { id: kickMatch[1], platform: 'kick' };
  }
  
  // If no specific platform detected, return the whole URL and 'other' platform
  return { id: url, platform: 'other' };
};

export default function VideoSubmissionForm() {
  const [form, setForm] = useState<FormData>({ email: "", videoLink: "", comment: "", language: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Handle form changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError("");
  };

  // Submit video
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.videoLink) {
      setError("Video or stream link is required");
      return;
    }
    
    const { id: videoId, platform } = extractVideoId(form.videoLink);
    if (!videoId) {
      setError("Please enter a valid video or stream URL");
      return;
    }

    // Validate email format if provided
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address or leave it blank");
      return;
    }
    
    setSubmitting(true);
    
    try {
      const response = await fetch('/api/submit-video', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: form.email || '', // Send empty string if not provided
          videoLink: form.videoLink,
          videoId,
          platform,
          language: form.language || '',
          comment: form.comment || ''
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit');
      }
      
      setForm({ email: "", videoLink: "", comment: "", language: "" });
      setSubmitted(true);
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit. Please try again.");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {submitted ? (
        <div className="text-green-400 text-center p-6 bg-green-900/20 rounded mb-4 border border-green-500/30">
          <div className="text-2xl mb-2">🎉 Thank you!</div>
          <p>Your content has been submitted for review. We&apos;ll let you know when it&apos;s featured!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="text-red-400 text-center p-3 bg-red-900/20 rounded mb-4 border border-red-500/30">
              {error}
            </div>
          )}
          
          <div>
            <label htmlFor="videoLink" className="block mb-2 text-green-300">
              Video or Stream Link <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              id="videoLink"
              name="videoLink"
              value={form.videoLink}
              onChange={handleChange}
              placeholder="https://www.youtube.com/watch?v=... or https://www.twitch.tv/..."
              className="w-full px-4 py-2 bg-gray-900/70 border border-gray-700/80 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-gray-200 placeholder-gray-500"
              required
            />
            <p className="mt-1 text-sm text-gray-400">
              We support YouTube, Twitch, Kick, and other platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-green-300">
                Email Address <span className="text-gray-500">(Optional)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-900/70 border border-gray-700/80 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-gray-200 placeholder-gray-500"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="language" className="block mb-2 text-green-300">
                Language <span className="text-gray-500">(Optional)</span>
              </label>
              <input
                type="text"
                id="language"
                name="language"
                value={form.language}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-900/70 border border-gray-700/80 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-gray-200 placeholder-gray-500"
                placeholder="English, Spanish, etc."
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="comment" className="block mb-2 text-green-300">
              Description <span className="text-gray-500">(Optional)</span>
            </label>
            <textarea
              id="comment"
              name="comment"
              value={form.comment}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 bg-gray-900/70 border border-gray-700/80 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-gray-200 placeholder-gray-500"
              placeholder="Tell us what makes your content special, what it&apos;s about, or any other details you&apos;d like us to include in the description."
            />
          </div>
          
          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-3 px-4 bg-gradient-to-r from-green-700 to-emerald-600 text-white font-medium rounded-md hover:from-green-800 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 uppercase tracking-wider ${
              submitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {submitting ? "Submitting..." : "Submit Your Content"}
          </button>
          
          <p className="mt-4 text-sm text-gray-400 text-center">
            Videos and streams will be reviewed before being featured on the community page.
          </p>
        </form>
      )}
    </div>
  );
} 