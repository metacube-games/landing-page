"use client";

import React, { useState, useEffect, useRef } from "react";
import { YouTubeEmbed } from "@next/third-parties/google";
import Link from "next/link";

// YouTube video data
const youtubeVideos = [
  {
    id: "UZ_4Wkr3M3Y",
    title: "Community Game Session",
    description:
      "Discover our incredible community content showcasing the best of Metacube. Watch how players around the world experience and create in our universe.",
  },
  {
    id: "gr1oi_UdIB0",
    title: "Community Game Session",
    description:
      "Discover our incredible community content showcasing the best of Metacube. Watch how players around the world experience and create in our universe.",
  },
  {
    id: "Q5Rc41krauc",
    title: "Community Game Session",
    description:
      "Discover our incredible community content showcasing the best of Metacube. Watch how players around the world experience and create in our universe.",
  },
  {
    id: "wMaT0wMe9Ug",
    title: "Community Game Session",
    description:
      "Discover our incredible community content showcasing the best of Metacube. Watch how players around the world experience and create in our universe.",
  },
  {
    id: "WlqXb7-GZzI",
    title: "Community Game Session",
    description:
      "Discover our incredible community content showcasing the best of Metacube. Watch how players around the world experience and create in our universe.",
  },
];

// Function to extract video ID from YouTube URL
const extractVideoId = (url: string) => {
  // Support different YouTube URL formats
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url?.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
};

const CommunityCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [form, setForm] = useState({ email: "", videoLink: "", comment: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-scroll carousel
  useEffect(() => {
    if (userInteracted) return; // Don't auto-scroll if user has interacted

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % youtubeVideos.length);
    }, 8000); // Change video every 8 seconds

    return () => clearInterval(interval);
  }, [userInteracted]); // Add userInteracted to dependencies

  // Handle video play event
  const handleVideoPlay = () => {
    setUserInteracted(true);
  };

  // Handle form changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError("");
  };

  // Submit video
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.videoLink) {
      setError("YouTube video link is required");
      return;
    }

    const videoId = extractVideoId(form.videoLink);
    if (!videoId) {
      setError("Please enter a valid YouTube video URL");
      return;
    }

    // Validate email format if provided
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address or leave it blank");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/submit-video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email || "", // Send empty string if not provided
          videoLink: form.videoLink,
          videoId,
          comment: form.comment || "",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit video");
      }

      setForm({ email: "", videoLink: "", comment: "" });
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setTimeout(() => setShowModal(false), 1000);
      }, 3000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to submit. Please try again."
      );
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  // Navigate carousel manually
  const goToSlide = (index: number) => {
    setUserInteracted(true);
    setCurrentIndex(index);
  };

  // Next and previous slide handlers
  const nextSlide = () => {
    setUserInteracted(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % youtubeVideos.length);
  };

  const prevSlide = () => {
    setUserInteracted(true);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + youtubeVideos.length) % youtubeVideos.length
    );
  };

  // Open and close modal
  const openModal = () => {
    setShowModal(true);
    setError("");
    setSubmitted(false);
  };

  const closeModal = () => {
    setShowModal(false);
    // Reset form state when closing modal
    setForm({ email: "", videoLink: "", comment: "" });
    setError("");
    setSubmitted(false);
  };

  return (
    <section className="flex flex-col items-center justify-center relative mb-24">
      <h1 className="text-4xl font-medium tracking-widest uppercase text-center mb-4">
        Community Showcase
      </h1>
      <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto px-4">
        Watch incredible content from our community members and be inspired.
        From epic gameplay moments to creative builds, our players are
        constantly exploring the Metacube universe.
      </p>

      {/* Video Carousel */}
      <div
        className="relative w-full max-w-4xl mx-auto overflow-hidden"
        ref={carouselRef}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {youtubeVideos.map((video, index) => (
            <div
              key={video.id}
              className="w-full flex-shrink-0 flex justify-center px-4"
            >
              <div className="w-full flex flex-col items-center pl-6 md:pl-10">
                <div
                  className="aspect-video w-full max-w-3xl mx-auto"
                  onClick={() => setUserInteracted(true)}
                >
                  <YouTubeEmbed
                    videoid={video.id}
                    params="rel=0"
                    playlabel={video.title}
                  />
                </div>
                <div className="mt-4 text-center max-w-3xl mx-auto">
                  <h2 className="text-xl font-semibold text-white">
                    {video.title}
                  </h2>
                  <p className="text-gray-300 mt-2">{video.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/3 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm z-10 border border-white/20 cursor-pointer"
          aria-label="Previous video"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/3 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm z-10 border border-white/20 cursor-pointer"
          aria-label="Next video"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6">
          {youtubeVideos.map((_, index) => (
            <button
              key={index}
              className={`w-10 h-10 mx-1 flex items-center justify-center ${
                index === currentIndex ? "bg-black/30" : "bg-transparent"
              } hover:bg-black/20 transition-colors duration-200 rounded-full`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-gray-600"
                } hover:bg-gray-400 transition-colors duration-200`}
              ></span>
            </button>
          ))}
        </div>
      </div>

      {/* Discover More Button (replacing Submit Video Button) */}
      <div className="flex justify-center mt-8">
        <Link
          href="/community-streams"
          className="py-3 px-8 bg-gradient-to-r from-green-700 to-emerald-600 text-white font-medium rounded-md hover:from-green-800 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 uppercase tracking-wider"
        >
          Discover More Streams
        </Link>
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[1000] p-4">
          <div className="bg-black/95 backdrop-blur-md p-8 rounded-lg border border-green-700/40 shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl uppercase tracking-wider font-semibold text-green-400">
                Submit Your Video
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-green-300 transition-colors duration-200"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {submitted ? (
              <div className="text-green-400 text-center p-4 bg-green-900/20 rounded mb-4 border border-green-500/30">
                Thank you! Your video has been submitted for review.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="text-red-400 text-center p-3 bg-red-900/20 rounded mb-4 border border-red-500/30">
                    {error}
                  </div>
                )}

                <div className="mb-4">
                  <label
                    htmlFor="videoLink"
                    className="block mb-2 text-green-300"
                  >
                    YouTube Video Link <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    id="videoLink"
                    name="videoLink"
                    value={form.videoLink}
                    onChange={handleChange}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full px-4 py-2 bg-gray-900/70 border border-gray-700/80 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-gray-200 placeholder-gray-500"
                    required
                  />
                  <p className="mt-1 text-sm text-gray-400">
                    Please provide a valid YouTube video link.
                  </p>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 text-green-300">
                    Email Address{" "}
                    <span className="text-gray-500">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-900/70 border border-gray-700/80 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-gray-200 placeholder-gray-500"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="comment"
                    className="block mb-2 text-green-300"
                  >
                    Video Description{" "}
                    <span className="text-gray-500">(Optional)</span>
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={form.comment}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 bg-gray-900/70 border border-gray-700/80 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-gray-200 placeholder-gray-500"
                    placeholder="Help us showcase your video! Tell us what makes your video special, what it's about, or any other details you'd like us to include in the description."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full py-3 px-4 bg-gradient-to-r from-green-700 to-emerald-600 text-white font-medium rounded-md hover:from-green-800 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 uppercase tracking-wider ${
                    submitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {submitting ? "Submitting..." : "Submit Video"}
                </button>

                <p className="mt-4 text-sm text-gray-400 text-center">
                  Videos will be sent to the team for review.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default CommunityCarousel;
