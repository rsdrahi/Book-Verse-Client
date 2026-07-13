import { getFeaturedBooks } from '@/lib/api/books/server';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import BookCard from '../common/BookCard';
import Container from '../common/Container';

const FeaturedBooks = async () => {

  const books = await getFeaturedBooks();

  return (
    <section className="py-20 bg-default-50 px-6 md:px-12 lg:px-24">
      {/* header */}
      <div className="flex flex-col items-center gap-6 mb-12">
        <div className='text-center'>
          <h2 className="text-3xl font-bold">
            Featured Books
          </h2>
          <p className="text-default-500 mt-2">
            Discover our handpicked collection of popular books.
          </p>
        </div>
      </div>

      {/* grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        {
          books.map((book) => (
            <BookCard
              key={book._id}
              book={book}
            ></BookCard>
          ))
        }
      </div>

       <div className='mt-2 flex justify-end'>
         <Link href="/books">
          <Button variant="outline">
            View All Books
          </Button>
        </Link>
       </div>
      
    </section>
  );
};

export default FeaturedBooks;