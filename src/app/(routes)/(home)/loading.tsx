import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="px-2">
      <Skeleton className="w-full h-[40px]" />
      <Skeleton className="w-full h-[45px]" />
      <div className="flex flex-col lg:flex-row">
        <Skeleton className="w-full max-w-[470px]" />
        <div className="grid grid-cols-2 gap-2 my-3 min-[470px]:grid-cols-3 sm:grid-cols-4 lg:grid-cols-1 w-full">
          <Skeleton className="w-full h-[225px]" />
          <Skeleton className="w-full h-[225px]" />
          <Skeleton className="w-full h-[225px]" />
          <Skeleton className="w-full h-[225px]" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
