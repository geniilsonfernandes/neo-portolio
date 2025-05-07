import { Skeleton } from "@/components/Skeleton";

function loading() {
  return (
    <div className="container mx-auto mt-24">
      {/* Header Skeleton */}
      <div className="mb-8">
        <div className="h-4 w-24 mb-4">
          <Skeleton className="h-4 w-24" />
        </div>
        <div className="space-y-4 mb-6">
          <Skeleton className="h-8 w-2/3" />
          <Skeleton className="h-5 w-1/2" />
          <div className="flex gap-2 flex-wrap">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-6 w-20 rounded-full" />
            ))}
          </div>
          <div className="flex gap-2">
            {Array.from({ length: 2 }).map((_, i) => (
              <Skeleton key={i} className="h-6 w-24 rounded-md" />
            ))}
          </div>
        </div>
      </div>

      {/* Video Skeleton */}
      <div className="w-full h-[315px] rounded-md overflow-hidden">
        <Skeleton className="w-full h-full" />
      </div>

      {/* Content Skeleton */}
      <div className="my-8 space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-full" />
        ))}
        <Skeleton className="h-64 w-full rounded-md" />
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i + 5} className="h-4 w-[90%]" />
        ))}
      </div>
    </div>
  );
}

export default loading;
