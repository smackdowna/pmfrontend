import React from "react";

const MyCoursesCardLoader: React.FC = () => {
  return (
    <div className="bg-white border border-neutral-55 rounded-[24px] font-Inter w-[270px] h-[360px] relative animate-pulse">
      <div className="rounded-t-[24px] w-full h-[130px] bg-gray-300"></div>
      <div className="p-3 bg-neutral-50">
        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="flex justify-between items-center">
          <div className="w-[70%] h-2 bg-gray-300 rounded-full overflow-hidden"></div>
          <div className="h-4 bg-gray-300 rounded w-10"></div>
        </div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="flex gap-2">
          <div className="bg-gray-300 h-10 w-1/2 rounded-lg"></div>
          <div className="bg-gray-300 h-10 w-1/2 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default MyCoursesCardLoader;
