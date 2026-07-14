import { Book } from "@/app/types/books";
import { serverFetch } from "../server";


type BooksResponse = {
  books: Book[];
  total: number;
}

export const getAllBooks = async (search?: string, page: number=1): Promise<BooksResponse> => {
  let path = `/books?page=${page}`;
  if (search) {
    path += `&search=${search}`;
  }
  return await serverFetch(path);
};

export const getFeaturedBooks = async (): Promise<Book[]> => {
  const data: BooksResponse  = await serverFetch("/books");
  return data.books.slice(0, 4);
};

export const getSingleBook = async (
  id: string
): Promise<Book> => {
  return await serverFetch(`/books/${id}`);
};