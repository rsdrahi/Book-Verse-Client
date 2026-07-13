import { Book } from "@/app/types/books";
import { serverFetch } from "../server"

export const getAllBooks = async (): Promise<Book[]> => {
  const res = await serverFetch("/books");
  return res;
}

export const getFeaturedBooks = async (): Promise<Book[]> => {
  const books: Book[] = await serverFetch("/books");
  return books.slice(0, 4);
}

export const getSingleBook = async (id: string): Promise<Book[]> => {
  const res = await serverFetch(`/books/${id}`);
  return res;
}