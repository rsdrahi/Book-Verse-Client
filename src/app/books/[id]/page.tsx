import BorrowModal from "@/app/components/common/BorrowModal";
import { getSingleBook } from "@/lib/api/books/server";
import { Button, Chip } from "@heroui/react";
import { BookOpen, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


type Props = {
  params: Promise<{id: string}>
}

const BooksDetailsPage = async ({ params }: Props) => {
  
  const { id } = await params;
  const book = await getSingleBook(id);
  const {title, author, category, totalCopies, availableCopies, description, coverImage} = book
  return (
    <section className="max-w-6xl mx-auto py-12 px-6">
      {/* Back Button */}
      <div className="mb-8">
        <Link href="/books">
          <Button  size="sm"  
            className="text-default-500 font-medium">
            Back to Books
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* Left Side: Image Display */}
        <div className="md:col-span-5 bg-default-100/60 p-8 rounded-2xl flex items-center justify-center border border-default-200 shadow-sm">
          <div>
            <Image
              src={coverImage}
              alt={book.title}
              width={500}
              height={700}
              className="rounded-xl w-full"
            />
          </div>
        </div>

        {/* Right Side: Details Info */}
        <div className="md:col-span-7 flex flex-col gap-6">
          <div className="space-y-3">
            <Chip size="sm" className="font-semibold uppercase tracking-wider text-[10px] p-1 bg-yellow-400">
              {category}
            </Chip>
            
            <h1 className="text-3xl md:text-4xl font-extrabold text-default-900 tracking-tight leading-tight">
              {title}
            </h1>
            
            <p className="text-lg text-default-500 flex items-center gap-2 font-medium">
              <User size={18} className="text-default-400" />
              {author}
            </p>
          </div>

          {/* Availability Badges */}
          <div className="flex flex-wrap gap-4 bg-default-50 border border-default-200 p-4 rounded-xl">
            <div className="flex-1 min-w-[120px]">
              <p className="text-xs text-default-400 font-medium uppercase tracking-wider">Total Copies</p>
              <p className="text-xl font-bold text-default-800 mt-0.5">{totalCopies}</p>
            </div>
            <div className="h-10 w-[1px] bg-default-200 hidden sm:block" />
            <div className="flex-1 min-w-[120px]">
              <p className="text-xs text-default-400 font-medium uppercase tracking-wider">Available Copies</p>
              <p className="text-xl font-bold text-success flex items-center gap-1.5 mt-0.5">
                <BookOpen size={18} />
                {availableCopies}
              </p>
            </div>
          </div>

          {/* Description Section */}
          <div className="space-y-3 pt-2">
            <h2 className="font-bold text-xl text-default-800">
              Description
            </h2>
            <p className="text-default-600 leading-relaxed text-sm md:text-base">
              {description}
            </p>
          </div>
          <div>
            <BorrowModal
            book={book}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksDetailsPage;