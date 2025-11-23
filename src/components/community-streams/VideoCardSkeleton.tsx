export default function VideoCardSkeleton() {
  return (
    <div className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 animate-pulse">
      {/* Video Thumbnail Skeleton */}
      <div className="relative w-full aspect-video bg-neutral-800" />

      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <div className="space-y-2">
          <div className="h-5 w-full bg-neutral-800 rounded" />
          <div className="h-5 w-3/4 bg-neutral-800 rounded" />
        </div>

        {/* Meta Information */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-16 bg-neutral-800 rounded" />
          <div className="h-4 w-4 bg-neutral-800 rounded-full" />
          <div className="h-4 w-24 bg-neutral-800 rounded" />
        </div>

        {/* Platform Badge */}
        <div className="h-6 w-20 bg-neutral-800 rounded-full" />
      </div>
    </div>
  );
}
