import React from "react";
import { Skeleton } from "./ui/skeleton";

function SkeletonComp() {
  return (
    <div className="py-5">
      <div>
        <div className=" flex flex-wrap justify-center gap-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-[20vh] w-[250px]" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkeletonComp;
