import React from 'react';

const loading = () => {
  return (
    <div className="space-y-8">

      <div className="grid md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="h-40 rounded-2xl bg-gray-200 animate-pulse"
          />
        ))}
      </div>

      <div className="h-72 rounded-2xl bg-gray-200 animate-pulse" />

    </div>
  );
};

export default loading;