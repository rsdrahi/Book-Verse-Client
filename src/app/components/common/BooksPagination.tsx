'use client'

import { Pagination } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

  type Props = {
  currentPage: number;
  totalPages: number;
  search?: string;
  };

const BooksPagination = ({ currentPage, totalPages, search }: Props) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
      {/* Previous */}
      <Link
        href={`/books?page=${currentPage - 1}${
          search ? `&search=${search}` : ""
        }`}
        className={`px-4 py-2 rounded-lg border transition ${
          currentPage === 1
            ? "pointer-events-none opacity-50"
            : "hover:bg-gray-100"
        }`}
      >
        Previous
      </Link>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <Link
            key={page}
            href={`/books?page=${page}${search ? `&search=${search}` : ""}`}
            className={`w-10 h-10 rounded-lg border flex items-center justify-center transition ${
              currentPage === page
                ? "bg-blue-600 text-white border-blue-600"
                : "hover:bg-gray-100"
            }`}
          >
            {page}
          </Link>
        );
      })}

      {/* Next */}
      <Link
        href={`/books?page=${currentPage + 1}${
          search ? `&search=${search}` : ""
        }`}
        className={`px-4 py-2 rounded-lg border transition ${
          currentPage === totalPages
            ? "pointer-events-none opacity-50"
            : "hover:bg-gray-100"
        }`}
      >
        Next
      </Link>
    </div>
  );
};

export default BooksPagination;