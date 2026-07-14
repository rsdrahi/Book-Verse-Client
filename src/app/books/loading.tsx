import { Skeleton } from '@heroui/react';
import React from 'react';

const loading = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      {/* Search Section */}
      <div className="mb-10 flex flex-col md:flex-row justify-between gap-10">
        <Skeleton className="h-12 w-full md:w-96 rounded-xl" />
        <Skeleton className="h-12 w-36 rounded-xl" />
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="border rounded-2xl p-4 shadow-sm bg-white"
          >
            {/* Book Image */}
            <Skeleton className="h-64 w-full rounded-xl" />

            {/* Title */}
            <Skeleton className="h-6 w-3/4 rounded-lg mt-5" />

            {/* Author */}
            <Skeleton className="h-4 w-1/2 rounded-lg mt-3" />

            {/* Category */}
            <Skeleton className="h-4 w-1/3 rounded-lg mt-2" />

            {/* Copies */}
            <Skeleton className="h-4 w-2/5 rounded-lg mt-2" />

            {/* Button */}
            <Skeleton className="h-11 w-full rounded-xl mt-6" />
          </div>
        ))}

      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-3 mt-12">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <Skeleton className="h-10 w-10 rounded-lg" />
        <Skeleton className="h-10 w-10 rounded-lg" />
        <Skeleton className="h-10 w-10 rounded-lg" />
      </div>

    </section>
  );
};

export default loading;