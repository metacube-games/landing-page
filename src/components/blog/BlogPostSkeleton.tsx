export default function BlogPostSkeleton() {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 h-full flex flex-col animate-pulse">
      {/* Image Skeleton */}
      <div className="relative w-full aspect-[16/9] bg-neutral-800" />

      {/* Content Skeleton */}
      <div className="p-6 flex flex-col flex-grow space-y-3">
        {/* Date and Category */}
        <div className="flex gap-2">
          <div className="h-4 w-24 bg-neutral-800 rounded" />
          <div className="h-4 w-4 bg-neutral-800 rounded" />
          <div className="h-4 w-20 bg-neutral-800 rounded" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <div className="h-6 w-full bg-neutral-800 rounded" />
          <div className="h-6 w-4/5 bg-neutral-800 rounded" />
        </div>

        {/* Excerpt */}
        <div className="space-y-2 pt-1">
          <div className="h-4 w-full bg-neutral-800 rounded" />
          <div className="h-4 w-full bg-neutral-800 rounded" />
          <div className="h-4 w-3/4 bg-neutral-800 rounded" />
        </div>
      </div>
    </div>
  );
}
