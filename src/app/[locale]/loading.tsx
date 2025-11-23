'use client';

export default function Loading() {
  return (
    <div className="min-h-screen w-full bg-black">
      {/* Hero Section Skeleton */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-black to-black" />

        <div className="relative z-10 text-center space-y-8 px-4">
          {/* Title Skeleton */}
          <div className="flex flex-col items-center gap-4">
            <div className="h-16 w-64 md:w-96 bg-neutral-800 rounded-lg animate-pulse" />
            <div className="h-8 w-48 md:w-72 bg-neutral-800 rounded-lg animate-pulse" />
          </div>

          {/* Description Skeleton */}
          <div className="flex flex-col items-center gap-3 max-w-2xl mx-auto">
            <div className="h-4 w-full bg-neutral-800 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-neutral-800 rounded animate-pulse" />
            <div className="h-4 w-4/6 bg-neutral-800 rounded animate-pulse" />
          </div>

          {/* Button Skeleton */}
          <div className="flex gap-4 justify-center">
            <div className="h-12 w-32 bg-neutral-800 rounded-lg animate-pulse" />
            <div className="h-12 w-32 bg-neutral-800 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>

      {/* Content Sections Skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-20 space-y-32">
        {/* Section 1 */}
        <div className="space-y-8">
          <div className="h-10 w-64 bg-neutral-800 rounded-lg animate-pulse mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="p-6 bg-neutral-900 rounded-xl space-y-4">
                <div className="h-12 w-12 bg-neutral-800 rounded-lg animate-pulse" />
                <div className="h-6 w-3/4 bg-neutral-800 rounded animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-neutral-800 rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-neutral-800 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2 */}
        <div className="space-y-8">
          <div className="h-10 w-64 bg-neutral-800 rounded-lg animate-pulse mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square bg-neutral-900 rounded-xl animate-pulse" />
            ))}
          </div>
        </div>

        {/* Section 3 */}
        <div className="space-y-8">
          <div className="h-10 w-48 bg-neutral-800 rounded-lg animate-pulse mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="h-6 w-3/4 bg-neutral-800 rounded animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-neutral-800 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-neutral-800 rounded animate-pulse" />
                <div className="h-4 w-4/6 bg-neutral-800 rounded animate-pulse" />
              </div>
            </div>
            <div className="aspect-video bg-neutral-900 rounded-xl animate-pulse" />
          </div>
        </div>
      </div>

      {/* Pulsing Animation Effect */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}
