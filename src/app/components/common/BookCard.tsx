import { Book } from "@/app/types/books";
import { Button, Card, CardFooter, CardContent } from "@heroui/react";
import { ArrowUpRight, BookOpen, Star, Tag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type BookCardProps = {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  
  const { _id, title, author, category, coverImage, availableCopies,
    totalCopies, } = book;
  return (
      <Card className="h-full overflow-hidden rounded-2xl border border-default-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <CardContent className="flex flex-col gap-3">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <Image
            alt={title}
              src={coverImage}
              fill
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-grow">
          {/* Category & Rating */}
          <div className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-1 text-xs font-medium text-default-500 bg-default-100 px-2.5 py-1 rounded-full">
              <Tag size={12} />
              {category}
            </span>
          </div>

          {/* Title & Author */}
          <div>
            <h3 className="text-lg font-bold" title={title}>
              {title}
            </h3>
            <p className="text-sm text-default-500 flex items-center gap-1.5">
              <User size={14} />
              <span className="line-clamp-1">{author}</span>
            </p>
            <p className="flex items-center gap-2 text-sm font-medium text-success">
            <BookOpen size={16} />
            {availableCopies} / {totalCopies} Available
          </p>
          </div>
        </div>
      </CardContent>

      {/* Footer Section: Price & Action */}
      <CardFooter>
          <Link href={`/books/${_id}`}>
          <Button
          className="font-medium shadow-md shadow-primary/20"
        >
          View Details
        </Button>
          </Link>
      </CardFooter>

    </Card>
  );
};

export default BookCard;