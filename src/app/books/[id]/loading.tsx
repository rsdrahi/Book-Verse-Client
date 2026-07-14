import React from 'react';

const loading = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">

      <div className="grid md:grid-cols-2 gap-10">

        <div className="h-[500px] rounded-2xl bg-gray-200 animate-pulse" />

        <div className="space-y-5">

          <div className="h-10 w-2/3 rounded bg-gray-200 animate-pulse" />

          <div className="h-6 w-1/3 rounded bg-gray-200 animate-pulse" />

          <div className="h-5 w-full rounded bg-gray-200 animate-pulse" />

          <div className="h-5 w-full rounded bg-gray-200 animate-pulse" />

          <div className="h-5 w-5/6 rounded bg-gray-200 animate-pulse" />

          <div className="h-12 w-48 rounded-xl bg-gray-200 animate-pulse" />

        </div>

      </div>

    </section>
  );
};

export default loading;