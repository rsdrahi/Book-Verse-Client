import { getAllBooks} from '@/lib/api/books/server';
import BookCard from '../components/common/BookCard';
import { Search } from 'lucide-react';
import { Button } from '@heroui/react';

type Props = {
  searchParams: Promise<{ search?: string }>
};

const BooksPage = async ({ searchParams }: Props) => {
  
  const { search } = await searchParams;
  const books = await getAllBooks(search)

  return (
    <section className="py-10 bg-default-50 px-6 md:px-12 lg:px-24">

      <h1 className="text-4xl font-bold text-center mb-8">
        All Books
      </h1>

      <form
        action="/books"
        className="mb-10 flex flex-col sm:flex-row gap-4 w-full"
        >
      <div className="relative flex-1">
       <Search
       size={20}
       className="absolute left-4 top-1/2 -translate-y-1/2 text-default-400"
       />

     <input
      type="text"
      name="search"
      defaultValue={search}
      placeholder="Search by book title..."
      className="w-full h-12 rounded-xl border border-default-300 pl-12 pr-4 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
    />
    </div>

      <Button
       type="submit"
       className="h-12 px-8 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition"
      >
       Search
      </Button>
    </form>

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

    </section>
  );
};

export default BooksPage;