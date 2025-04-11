import React from "react";

const ShimmerFullPage = () => {
  return (
    <div className="animate-pulse px-6 py-8 max-w-4xl mx-auto h-[80vh] flex flex-col justify-start space-y-6 bg-white rounded-xl shadow-lg border border-gray-200">
      {/* Title */}
      <div className="h-8 bg-gray-300 rounded w-2/3"></div>

      {/* Paragraph block 1 */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-11/12"></div>
        <div className="h-4 bg-gray-300 rounded w-10/12"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>

      {/* Paragraph block 2 */}
      <div className="space-y-2 mt-4">
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded w-4/5"></div>
      </div>

      {/* Paragraph block 3 */}
      <div className="space-y-2 mt-6">
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-2/4"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );
};

export default ShimmerFullPage;
