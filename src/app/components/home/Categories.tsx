import { categories } from '@/constants/categories';
import { Card } from '@heroui/react';
import Link from 'next/link';

const Categories = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Browse Categories
          </h2>
          <p className="text-slate-500 text-lg">
            Find books by your favorite genre
          </p>
        </div>

        {/* Categories Grid UI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              href={`/books?category=${category.title}`}>
            <Card
             className="group flex flex-col items-center justify-center p-6 border transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl"
            >
              {/* Icon Holder */}
              <div className="text-4xl mb-4 p-4 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-200">
                {category.title}
              </h3>

              {/* Total Books Count */}
              <p className="text-sm text-slate-500 mt-1 font-medium">
                {category.totalBooks} Books
              </p>
            </Card>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;