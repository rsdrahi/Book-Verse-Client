import { Book } from "@/app/types/books";
import { serverFetch } from "../server";

export const getAllBooks = async (search?: string): Promise<Book[]> => {
  const path = search ? `/books?search=${search}` : "/books";
  return await serverFetch(path);
};

export const getFeaturedBooks = async (): Promise<Book[]> => {
  const books = await getAllBooks();
  return books.slice(0, 4);
};

export const getSingleBook = async (
  id: string
): Promise<Book> => {
  return await serverFetch(`/books/${id}`);
};